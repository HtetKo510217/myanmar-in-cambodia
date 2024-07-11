import React, { useLayoutEffect, useState, useEffect, useContext, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert, TouchableOpacity, SafeAreaView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { PostContext } from '../store/post-context';
import AddressText from '../components/content/AddressText';
import ActionButton from '../components/content/ActionButton';
import { deleteData, postComment, getComments, deleteComment, updateComment } from '../util/http';
import Toast from 'react-native-root-toast';
import { useFocusEffect } from '@react-navigation/native';
import { AuthContext } from '../store/auth-context';
import Comment from '../models/comment';
import uuid from 'react-native-uuid';
import { getUserProfile } from "../util/user"
function ContentDetailScreen({ route, navigation }) {
    const contentId = route.params.contentId;
    const updated = route.params.updated;
    const { posts, deletePost } = useContext(PostContext);
    const [content, setContent] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const { userId, token } = useContext(AuthContext);
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [replyToCommentId, setReplyToCommentId] = useState(null);
    const scrollViewRef = useRef();
    const [expandedComments, setExpandedComments] = useState(new Set());
    const [userProfiles, setUserProfiles] = useState({});

    const fetchContent = () => {
        if (posts.length > 0) {
            const foundContent = posts.find((content) => content.id === contentId);
            setContent(foundContent);
        }
    };
    const fetchUserProfile = async (userId) => {
        try {
            const profile = await getUserProfile(userId, token);
            setUserProfiles(prevProfiles => ({
                ...prevProfiles,
                [userId]: profile
            }));
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };


    const fetchComments = async () => {
        setIsLoading(true);
        try {
            const fetchedComments = await getComments(contentId, token);
            const organizedComments = organizeComments(fetchedComments);
            setComments(organizedComments);

            // Fetch user profiles for all commenters
            const uniqueUserIds = new Set(fetchedComments.map(comment => comment.userId));
            uniqueUserIds.forEach(userId => fetchUserProfile(userId));
        } catch (error) {
            console.error('Error fetching comments:', error);
            Alert.alert('Error', 'Failed to load comments. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };


    const organizeComments = (comments) => {
        const commentMap = {};
        const rootComments = [];

        comments.forEach(comment => {
            commentMap[comment.id] = { ...comment, replies: [] };
        });

        comments.forEach(comment => {
            if (comment.replyToCommentId) {
                const parentComment = commentMap[comment.replyToCommentId];
                if (parentComment) {
                    parentComment.replies.push(commentMap[comment.id]);
                } else {
                    rootComments.push(commentMap[comment.id]);
                }
            } else {
                rootComments.push(commentMap[comment.id]);
            }
        });

        return rootComments;
    };

    useEffect(() => {
        fetchContent();
        fetchComments();
    }, [contentId]);

    useFocusEffect(() => {
        if (updated) {
            fetchContent();
        }
    });

    useLayoutEffect(() => {
        if (content) {
            navigation.setOptions({
                title: content.title,
                headerTitleStyle: { color: '#fff' },
            });
        }
    }, [navigation, content]);

    async function deleteContent() {
        if (content) {
            Alert.alert(
                'Confirm Deletion',
                'Are you sure you want to delete this content?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Delete',
                        onPress: async () => {
                            try {
                                await deleteData(content.id, token);
                                deletePost(content.id);
                                Toast.show('Post deleted successfully', {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.CENTER,
                                    backgroundColor: 'green',
                                });
                                navigation.goBack();
                            } catch (error) {
                                Toast.show('Failed to delete post', {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.CENTER,
                                    backgroundColor: 'red',
                                });
                            }
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    }

    function handleCommentChange(text) {
        if (text.trim() === '') {
            setReplyToCommentId(null);
            setEditingCommentId(null);
        }
        setCommentText(text);
    }
    async function handleCommentSubmit() {
        if (commentText.trim() === '') return;

        const newComment = new Comment(
            uuid.v4(),
            commentText,
            userId,
            contentId,
            replyToCommentId
        );

        try {
            setIsLoading(true);
            await postComment(newComment, token);
            await fetchComments();
            setCommentText('');
            setReplyToCommentId(null);
            scrollViewRef.current.scrollToEnd({ animated: true });
        } catch (error) {
            Alert.alert('Error', 'Failed to post comment. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    async function handleDeleteComment(commentId) {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this comment?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    onPress: async () => {
                        try {
                            await deleteComment(commentId, token);
                            setComments(prevComments => removeComment(prevComments, commentId));
                        } catch (error) {
                            console.error('Error deleting comment:', error);
                            Alert.alert('Error', 'Failed to delete comment. Please try again.');
                        }
                    }
                }
            ]
        );
    }

    function removeComment(comments, commentId) {
        return comments.map(comment => {
            if (comment.id === commentId) {
                // If this is the comment to be deleted, replace it with its replies
                return comment.replies;
            }
            if (comment.replies) {
                comment.replies = removeComment(comment.replies, commentId).flat();
            }
            return comment;
        }).flat();
    }

    

    async function handleUpdateComment() {
        if (commentText.trim() === '') return;

        const updatedComment = {
            id: editingCommentId,
            content: commentText,
            userId,
            postId: contentId
        };

        try {
            await updateComment(updatedComment, token);
            await fetchComments();
            setCommentText('');
            setEditingCommentId(null);
        } catch (error) {
            Alert.alert('Error', 'Failed to update comment. Please try again.');
        }
    }

    function renderCommentItem(comment, depth = 0) {
        const maxDepth = 3;
        const isReply = depth > 0;
        const showRepliesButton = comment.replies && comment.replies.length > 0 && depth >= maxDepth;
        const isExpanded = expandedComments.has(comment.id);
        const userProfile = userProfiles[comment.userId];
        const displayName = userProfile?.name || `User ${comment.userId.slice(0, 5)}`;

        return (
            <View key={comment.id} style={[
                styles.commentItem,
                isReply && styles.replyItem,
                depth === 1 && { marginLeft: 20 }
            ]}>
                <View style={styles.commentContent}>
                    <Text style={styles.commentUser}>{displayName}</Text>
                    <Text>{comment.content}</Text>
                    <View style={styles.commentActions}>
                        {userId === comment.userId && (
                            <>
                                <TouchableOpacity onPress={() => {
                                    setEditingCommentId(comment.id);
                                    setCommentText(comment.content);
                                    setReplyToCommentId(null);
                                }}>
                                    <Text style={styles.actionText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleDeleteComment(comment.id)}>
                                    <Text style={styles.actionText}>Delete</Text>
                                </TouchableOpacity>
                            </>
                        )}
                        <TouchableOpacity onPress={() => {
                            setReplyToCommentId(comment.id);
                            setCommentText(`@${displayName} `);
                            setEditingCommentId(null);
                        }}>
                            <Text style={styles.actionText}>Reply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {(!showRepliesButton || isExpanded) && comment.replies && comment.replies.map(reply => 
                    renderCommentItem(reply, depth + 1)
                )}
                {showRepliesButton && !isExpanded && (
                    <TouchableOpacity 
                        style={styles.showRepliesButton}
                        onPress={() => {
                            setExpandedComments(prev => new Set(prev).add(comment.id));
                        }}
                    >
                        <Text style={styles.showRepliesText}>
                            Show {comment.replies.length} more replies
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }

    if (!content) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={100}
        >
            <ScrollView ref={scrollViewRef}>
                <Image source={{ uri: content.imageUrl }} style={styles.image} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{content.title}</Text>
                    <Text style={styles.description}>{content.description}</Text>
                    {content.address && (
                        <AddressText address={content.address} style={styles.address} />
                    )}
                </View>
                <View style={styles.commentSection}>
                    <Text style={styles.commentHeader}>Comments</Text>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#0000ff" />
                    ) : comments.length > 0 ? (
                        comments.map(comment => renderCommentItem(comment))
                    ) : (
                        <Text style={styles.noComments}>No comments yet</Text>
                    )}
                </View>
            </ScrollView>
            <View style={styles.commentInputContainer}>
                <TextInput
                    style={styles.commentInput}
                    value={commentText}
                    onChangeText={handleCommentChange}
                    placeholder={replyToCommentId ? "Write a reply..." : "Add a comment..."}
                    multiline
                    onFocus={() => {
                        setTimeout(() => scrollViewRef.current.scrollToEnd({ animated: true }), 100);
                    }}
                />
                <TouchableOpacity 
                    style={[styles.commentButton, { opacity: isLoading ? 0.5 : 1 }]} 
                    onPress={editingCommentId ? handleUpdateComment : handleCommentSubmit}
                    disabled={isLoading}
                >
                    <Text style={styles.commentButtonText}>
                        {editingCommentId ? 'Update' : replyToCommentId ? 'Reply' : 'Post'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.actionContainer}>
                <ActionButton
                    onPress={() => navigation.navigate('EditContent', { contentId })}
                    userId={content.userId}
                    type="edit"
                />
                <ActionButton
                    onPress={deleteContent}
                    userId={content.userId}
                    type="delete"
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    address: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    commentSection: {
        padding: 20,
    },
    commentHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    commentItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    replyItem: {
        borderLeftWidth: 2,
        borderLeftColor: '#007AFF',
        paddingLeft: 10,
    },
    commentContent: {
        flex: 1,
    },
    commentUser: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    commentActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
    },
    actionText: {
        color: '#007AFF',
        marginLeft: 10,
    },
    noComments: {
        fontStyle: 'italic',
        color: '#666',
    },
    commentInputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    commentInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        maxHeight: 100,
    },
    commentButton: {
        backgroundColor: '#007AFF',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
    },
    commentButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    showRepliesButton: {
        marginTop: 5,
        padding: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    showRepliesText: {
        color: '#007AFF',
        textAlign: 'center',
    },

});

export default ContentDetailScreen;
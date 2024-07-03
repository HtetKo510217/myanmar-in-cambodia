import React, { useLayoutEffect, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { PostContext } from '../store/post-context';
import AddressText from '../components/content/AddressText';
import ActionButton from '../components/content/ActionButton';
import { deleteData } from '../util/http';
import Toast from 'react-native-root-toast';
import { useFocusEffect } from '@react-navigation/native';

function ContentDetailScreen({ route, navigation }) {
    const contentId = route.params.contentId;
    const updated = route.params.updated;
    const { posts, deletePost } = useContext(PostContext);
    const [content, setContent] = useState(null);

    const fetchContent = () => {
        if (posts.length > 0) {
            const foundContent = posts.find((content) => content.id === contentId);
            setContent(foundContent);
        }
    };

    useEffect(() => {
        fetchContent();
    }, []);

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
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Delete',
                        onPress: async () => {
                            deletePost(content.id);
                            await deleteData(content.id);
                            Toast.show('ပို့စ်ကို အောင်မြင်စွာ ဖျက်ပစ်လိုက်ပါပြီ။', {
                                duration: Toast.durations.SHORT,
                                position: Toast.positions.CENTER,
                                shadow: true,
                                animation: true,
                                hideOnPress: true,
                                backgroundColor: 'red',
                            });
                            navigation.goBack();
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    }
    if (!content) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={{ uri: content.imageUrl }} style={styles.image} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{content.title}</Text>
                    <Text style={styles.description}>{content.description}</Text>
                    {content.address && (
                        <AddressText address={content.address} style={styles.address} />
                    )}
                </View>
            </ScrollView>
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
        </SafeAreaView>
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
        lineHeight: 24,
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
});

export default ContentDetailScreen;
import { useLayoutEffect, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { PostContext } from '../store/post-context';
import AddressText from '../components/content/AddressText';
import ActionButton from '../components/content/ActionButton';
import { deleteData } from '../util/http';

function ContentDetailScreen({ route, navigation }) {
    const contentId = route.params.contentId;
    const { posts, deletePost } = useContext(PostContext);
    const [content, setContent] = useState(null);
    useEffect(() => {
        if (posts.length > 0) {
            const foundContent = posts.find((content) => content.id === contentId);
            setContent(foundContent);
        }
    }, []);

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
                            navigation.navigate('Home');
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    }

    if (!content) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: content.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{content.title}</Text>
                <Text style={styles.description}>{content.description}</Text>
                {content.address && <View style={styles.container}>
                    <Text style={styles.address}>Address: </Text>
                    <AddressText address={content.address} />
                </View>}

                <View >
                    <ActionButton onPress={() => navigation.navigate('EditContent', { contentId })} userId={content.userId} type="edit" />
                    <ActionButton onPress={deleteContent} userId={content.userId} type="delete" />
                </View>
            </View>
        </ScrollView>
    );
}

export default ContentDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        color: '#FA6326',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        margin: 10,
        color: '#000',
        textAlign: 'center',
    },
    address: {
        fontSize: 16,
        margin: 10,
        color: '#000',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
});

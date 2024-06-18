import { useLayoutEffect, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { PostContext } from '../store/post-context';
import AddressText from '../components/content/AddressText';
import EditButton from '../components/content/EditButton';
function ContentDetailScreen({ route, navigation }) {
    const contentId = route.params.contentId;
    const { posts } = useContext(PostContext);
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
                headerTitleStyle: { color: '#FA6326' },
            });
        }
    }, [navigation, content]);


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
                <View style={styles.container}>
                    <Text style={styles.address}>Address: </Text>
                    <AddressText address={content.address} />
                </View>

                <EditButton onPress={() => navigation.navigate('EditContent', { contentId })} id={content.userId} />
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
        color: 'white',
        textAlign: 'center',
    },
    address: {
        fontSize: 16,
        margin: 10,
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
});

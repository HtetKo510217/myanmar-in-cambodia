import { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function ContentDetailScreen({ route, navigation }) {
    const contentId = route.params.contentId;
    const [contentData, setContentData] = useState([]);
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetchContent();
    }, []);

    useEffect(() => {
        if (contentData.length > 0) {
            const foundContent = contentData.find((content) => content._id === contentId);
            setContent(foundContent);
        }
    }, [contentData]);

    useLayoutEffect(() => {
        if (content) {
            navigation.setOptions({
                title: content.title,
                headerTitleStyle: { color: '#FA6326' },
            });
        }
    }, [navigation, content]);

    const fetchContent = async () => {
        try {
            const response = await fetch('http://192.168.0.109:5000/api/content');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setContentData(data);
        } catch (error) {
            console.error('Error fetching content:', error);
        }
    };

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
                <Image source={{uri: `http://192.168.0.109:5000/api/${content.imageUrl}`}} style={styles.image} />
                <Text style={styles.title}>{content.title}</Text>
                <Text style={styles.description}>{content.description}</Text>
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
});

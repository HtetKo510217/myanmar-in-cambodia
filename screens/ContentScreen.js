import React, { useEffect, useState , useLayoutEffect} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ContentItem from '../components/content/ContentItem';
import { CATEGORIES } from '../data/category';

function ContentScreen({ route, navigation }) {
    const [contentData, setContentData] = useState([]);
    const catId = route.params.categoryId;
    const displayContent = contentData.filter((content) => content.categoryIds.indexOf(catId) >= 0);

    useEffect(() => {
        fetchContent();
    }, []);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({ title: categoryTitle, headerTitleStyle: { color: '#FA6326' } });
    }, [catId, navigation]);

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

    const renderContentItem = ({ item }) => {
        return (
            <ContentItem
                id={item._id}
                title={item.title}
                imageUrl={item.imageUrl}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayContent}
                keyExtractor={(item) => item._id}
                renderItem={renderContentItem}
            />
        </View>
    );
}

export default ContentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ContentItem from '../components/content/ContentItem';
import { CATEGORIES } from '../data/category';
import { getData } from '../util/http';
function ContentScreen({ route, navigation }) {
    const [contentData, setContentData] = useState([]);
    const catId = route.params.categoryId;
    const displayContent = contentData.filter((content) => content.categoryIds.indexOf(catId) >= 0);

    useEffect(() => {
        async function fetchContent() {
            const contents = await getData();
            console.log("contents", contents);
            setContentData(contents);
        }

        fetchContent();
    }, []);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({ title: categoryTitle, headerTitleStyle: { color: '#FA6326' } });
    }, [catId, navigation]);


    const renderContentItem = ({ item }) => {
        return (
            <ContentItem
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayContent}
                keyExtractor={(item) => item.id}
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

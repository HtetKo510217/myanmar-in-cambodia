import React, { useEffect, useLayoutEffect, useContext, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ContentItem from '../components/content/ContentItem';
import { CATEGORIES } from '../data/category';
import { PostContext } from '../store/post-context';
import { getData } from '../util/http';
import { useFocusEffect } from '@react-navigation/native';

function ContentScreen({ route, navigation }) {
    const { posts, setPosts } = useContext(PostContext);
    const catId = route.params.categoryId;
    const displayContent = posts.filter((content) => content.categoryIds === catId);

    const fetchContent = useCallback(async () => {
        const contents = await getData();
        setPosts(contents);
    }, [setPosts]);

    useEffect(() => {
        fetchContent();
    }, [fetchContent]);

    useFocusEffect(
        useCallback(() => {
            fetchContent();
        }, [fetchContent])
    );

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({ title: categoryTitle, headerTitleStyle: { color: '#fff' } });
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
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

export default ContentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
    },
    listContainer: {
        paddingBottom: 10,
    },
});

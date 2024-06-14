import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect } from 'react';
import { CONTENTS, CATEGORIES } from '../data/dummy-data';
import ContentItem from '../components/content/ContentItem';
function ContentScreen({ route, navigation }) {
    const catId = route.params.categoryId
    const displayContent = CONTENTS.filter((content) => {
        return content.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({ title: categoryTitle, headerTitleStyle: { color: '#FA6326' } });
    }, [catId, navigation])

    function renderContentItem(itemData) {
        return (
            <ContentItem
                id={itemData.item.id}
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
            />
        )
    }

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

export default ContentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/category';



function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Content', {
                categoryId : itemData.item.id
            });
        }
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} icon={itemData.item.iconName} onPress={pressHandler} />
        );
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
        />
    );
}

export default CategoriesScreen;
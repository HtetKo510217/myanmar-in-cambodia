import { View, Text } from 'react-native';
function EditContentScreen({route}) {

    const { contentId } = route.params;
    console.log(contentId)
    return (
        <View>
            <Text>EditContentScreen</Text>
        </View>
    );
}

export default EditContentScreen
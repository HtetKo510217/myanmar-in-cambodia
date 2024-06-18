import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import { PostContext } from '../store/post-context';
import { CATEGORIES } from '../data/category';
import * as ImagePicker from 'expo-image-picker';
import { updateData } from '../util/http';
function EditContentScreen({ route, navigation }) {
    const { contentId } = route.params;
    const { posts, updatePost } = useContext(PostContext);
    const [content, setContent] = useState(null);
    const [contentTitle, setContentTitle] = useState('');
    const [contentDescription, setContentDescription] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [address, setAddress] = useState('');
    const [contentImageUri, setContentImageUri] = useState('');
    const [contentImageUrl, setContentImageUrl] = useState('');

    useEffect(() => {
        const foundContent = posts.find((content) => content.id === contentId);
        if (foundContent) {
            setContent(foundContent);
            setContentTitle(foundContent.title);
            setContentDescription(foundContent.description);
            setSelectedCategories(foundContent.categoryIds);
            setAddress(foundContent.address);
            setContentImageUri(foundContent.imageUrl);
            setContentImageUrl({ uri: foundContent.imageUrl });
        }
    }, [contentId, posts]);

    const handlePickImage = async () => {
        let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (result.granted === false) {
            alert('Permission to access media library is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!pickerResult.canceled) {
            setContentImageUri(pickerResult.assets[0].uri);
            setContentImageUrl(pickerResult.assets[0]);
        }
    };

    const handleUpdateContent = async () => {
        const updatedContent = {
            id: content.id,
            userId: content.userId,
            categoryIds: selectedCategories,
            title: contentTitle,
            description: contentDescription,
            imageUrl: contentImageUri,
            address,
        };

        updatePost(content.id, updatedContent);
        await updateData(updatedContent);
        console.log('Content updated:', posts);
        navigation.navigate('Home');

    };

    if (!content) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const categoryItems = CATEGORIES.map((category) => ({
        label: category.title,
        value: category.id,
    }));

    return (
        <ScrollView style={styles.container}>
            <Input
                placeholder="Content Title"
                value={contentTitle}
                onChangeText={setContentTitle}
            />
            <Input
                placeholder="Description"
                value={contentDescription}
                onChangeText={setContentDescription}
                style={styles.descriptionInput}
                multiline
            />
            <Text style={styles.label}>Choose Categories</Text>
            <Picker
                selectedValue={selectedCategories}
                onValueChange={(itemValue) => setSelectedCategories(itemValue)}
            >
                {categoryItems.map((item) => (
                    <Picker.Item key={item.value} label={item.label} value={item.value} style={styles.pickerItem} />
                ))}
            </Picker>
            <TouchableOpacity style={styles.imagePicker} onPress={handlePickImage}>
                {contentImageUri ? (
                    <Image source={{ uri: contentImageUri }} style={styles.image} />
                ) : (
                    <Text>Select an Image</Text>
                )}
            </TouchableOpacity>
            <Input
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
            />
            <View style={styles.btnContainer}>
                <Button title="Update Content" onPress={handleUpdateContent} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
        paddingBottom: 20,
    },
    descriptionInput: {
        minHeight: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    label: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    pickerItem: {
        fontSize: 16,
    },
    imagePicker: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 100,
    },
});

export default EditContentScreen;

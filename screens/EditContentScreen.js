import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import { PostContext } from '../store/post-context';
import { CATEGORIES } from '../data/category';
import * as ImagePicker from 'expo-image-picker';
import { updateData } from '../util/http';
import Toast from 'react-native-root-toast';

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
    const [errors, setErrors] = useState({});

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
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!contentTitle) newErrors.title = 'Title is required.';
        if (!contentDescription) newErrors.description = 'Description is required.';
        if (!selectedCategories.length) newErrors.categories = 'Please select at least one category.';
        if (!contentImageUri) newErrors.image = 'Image is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

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
        if (!validateForm()) return;

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
        Toast.show('Content updated successfully!', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            backgroundColor: 'green',
        });
        navigation.navigate('ContentDetail', {
            contentId: content.id,
            updated: true
        });

    };

    if (!content) {
        return (
            <View style={styles.loadingContainer}>
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
                placeholder="သင်တင်ချင်တဲ. အကြောင်းအရာ"
                value={contentTitle}
                onChangeText={setContentTitle}
                errorMessage={errors.title}
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
            />
            <Input
                placeholder="အကြောင်းအရာ အသေးစိတ်"
                value={contentDescription}
                onChangeText={setContentDescription}
                style={styles.descriptionInput}
                multiline
                errorMessage={errors.description}
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
            />
            <Text style={styles.label}>မှန်ကန်စွာ ရွေးချယ်ပါ</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCategories}
                    onValueChange={(itemValue) => setSelectedCategories(itemValue)}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                >
                    {categoryItems.map((item) => (
                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                    ))}
                </Picker>
            </View>
            {errors.categories && <Text style={styles.errorText}>{errors.categories}</Text>}
            <TouchableOpacity style={styles.imagePicker} onPress={handlePickImage}>
                {contentImageUri ? (
                    <Image source={{ uri: contentImageUri }} style={styles.image} />
                ) : (
                    <View style={styles.imagePlaceholder}>
                        <Icon name="camera" size={36} color="#aaa" />
                        <Text>Select an Image</Text>
                    </View>
                )}
            </TouchableOpacity>
            {errors.image && <Text style={styles.errorText}>{errors.image}</Text>}
            <View style={styles.inputWrapper}>
                <Input
                    placeholder="လိပ်စာ သိရင် ထည်.ပေးပါ"
                    value={address}
                    onChangeText={setAddress}
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button title="Update Content" onPress={handleUpdateContent} buttonStyle={styles.button} />
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapper: {
        paddingBottom: 100,
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 10,
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
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FA6326',
    },
    pickerContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    pickerItem: {
        fontSize: 16,
        height: 50,
        color: '#FA6326',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    imagePicker: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    imagePlaceholder: {
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 100,
    },
    button: {
        backgroundColor: '#FA6326',
    },
});

export default EditContentScreen;

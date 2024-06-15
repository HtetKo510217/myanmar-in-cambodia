import React, { useState } from 'react';
import { StyleSheet, ScrollView , Image, TouchableOpacity } from 'react-native';
import { Input, Button, Text, Card } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import Content from '../../models/content';
import { CATEGORIES } from '../../data/category';

const AddContentForm = ({ onContentAdd }) => {
  const [contentTitle, setContentTitle] = useState('');
  const [contentImageUri, setContentImageUri] = useState('');
  const [contentDescription, setContentDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

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
    }
  };

  const handleAddContent = () => {
    const newContent = new Content(
      uuid.v4(), // Automatically generate a unique content ID
      selectedCategories,
      contentTitle,
      contentImageUri,
      contentDescription
    );
    onContentAdd(newContent);
    setContentTitle('');
    setContentImageUri('');
    setContentDescription('');
    setSelectedCategories([]);
  };

  const categoryItems = CATEGORIES.map((category) => ({
    label: category.title,
    value: category.id,
  }));

  return (
    <ScrollView style={styles.container}>
    <Card containerStyle={styles.card}>
      <Text h4 style={styles.header}>Add New Content</Text>
      <Input
        placeholder="Content Title"
        value={contentTitle}
        onChangeText={setContentTitle}
      />
      <TouchableOpacity style={styles.imagePicker} onPress={handlePickImage}>
        {contentImageUri ? (
          <Image source={{ uri: contentImageUri }} style={styles.image} />
        ) : (
          <Text>Select an Image</Text>
        )}
      </TouchableOpacity>
      <Input
        placeholder="Content Description"
        value={contentDescription}
        onChangeText={setContentDescription}
        style={styles.descriptionInput}
        multiline
      />
      <Text style={styles.label}>Select Categories</Text>
      <Picker
        selectedValue={selectedCategories}
        onValueChange={(itemValue) => setSelectedCategories([itemValue])}
      >
        {categoryItems.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
      <Button title="Share Content" onPress={handleAddContent} />
    </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#f0f0f0',
    paddingBottom: 100,
  },
  card: {
    borderRadius: 10,
    padding: 20,
  },
  header: {
    marginBottom: 10,
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
  descriptionInput: {
    minHeight: 500, // Increase height for longer content
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },

  label: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export default AddContentForm;

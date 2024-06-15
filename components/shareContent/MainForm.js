import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AddContentForm from './AddContentForm';

const MainForm = () => {
  const [contents, setContents] = useState([]);

  const handleContentAdd = (content) => {
    setContents([...contents, content]);
    console.log('Content added:', content);
    storeDataInDB(content);
  };

  const storeDataInDB = async (data) => {
    const url = 'http://192.168.0.109:5000/api/content';
    console.log('Data to be stored:', data);

    const formData = new FormData();
    formData.append('content', JSON.stringify({
      id: data.id,
      categoryIds: data.categoryIds,
      title: data.title,
      description: data.description,
    }));

    if (data.imageUrl) {
      const fileName = data.imageUrl.split('/').pop();
      formData.append('image', {
        uri: data.imageUrl,
        type: 'image/jpeg',
        name: fileName,
      });
    } else {
      console.error('Error: imageUri is undefined');
    }

    console.log('FormData:', formData);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Data stored in DB:', result);
    } catch (error) {
      console.error('Error storing data in DB:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AddContentForm onContentAdd={handleContentAdd} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default MainForm;

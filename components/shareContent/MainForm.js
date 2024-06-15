import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AddContentForm from './AddContentForm';

const MainForm = () => {
  const [contents, setContents] = useState([]);

  const handleContentAdd = (content) => {
    setContents([...contents, content]);
    console.log('Content added:', content);
    // Here you should add the code to store the content in your backend
    // storeDataInDB(content, 'content');
  };

  const storeDataInDB = async (data) => {
    const url = 'api/content';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(`Data stored in DB [${type}]:`, result);
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

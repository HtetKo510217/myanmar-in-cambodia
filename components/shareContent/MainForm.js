import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AddContentForm from './AddContentForm';
import { uploadToFirebase } from "../../firebase-config"
import { storeData } from '../../util/http';
const MainForm = () => {
  const [contents, setContents] = useState([]);

  const handleContentAdd = (content) => {
    setContents([...contents, content]);
    // console.log('Content added:', content);
    storeDataInDB(content);
  };

  const storeDataInDB = async (data) => {
    const {uri} = data.imageUrl;
    const fileName = uri.split("/").pop();
    const uploadResp = await uploadToFirebase(uri, fileName, (v) =>
      console.log(v)
    );
    const {downloadUrl} = uploadResp;
    const postData = {
      id: data.id,
      userId: data.userId,
      categoryIds: data.categoryIds,
      title: data.title,
      description: data.description,
      imageUrl: downloadUrl,
      address: data.address
    }
    console.log("postData", postData)
    storeData(postData);
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

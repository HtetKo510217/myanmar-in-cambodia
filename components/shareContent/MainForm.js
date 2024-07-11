import React, { useState ,useContext} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AddContentForm from './AddContentForm';
import { uploadToFirebase } from "../../firebase-config"
import { storeData } from '../../util/http';
import { PostContext } from '../../store/post-context';
import { AuthContext } from '../../store/auth-context';
const MainForm = () => {
  const [contents, setContents] = useState([]);
  const { posts, addPost } = useContext(PostContext);
  const { token } = useContext(AuthContext);
  const handleContentAdd = (content) => {
    setContents([...contents, content]);
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
    addPost(postData);
    storeData(postData, token);
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

import React, { useState ,useContext} from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { Input, Button, Text, Card } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import Content from '../../models/content';
import { CATEGORIES } from '../../data/category';
import { useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../ui/LoadingOverlay';
import { AuthContext } from '../../store/auth-context';
const AddContentForm = ({ onContentAdd }) => {
  const [contentTitle, setContentTitle] = useState('');
  const [contentImageUri, setContentImageUri] = useState('');
  const [contentImageUrl, setContentImageUrl] = useState('');
  const [contentDescription, setContentDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext); 
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

  const handleAddContent = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const newContent = new Content(
        uuid.v4(),
        userId,
        selectedCategories,
        contentTitle,
        contentImageUrl,
        contentDescription,
        address
      );
      onContentAdd(newContent);
      setContentTitle('');
      setContentImageUri('');
      setContentImageUrl(null);
      setContentDescription('');
      setSelectedCategories([]);
      setAddress('');
      navigation.goBack();
    }, 2000);
  };

  const categoryItems = CATEGORIES.map((category) => ({
    label: category.title,
    value: category.id,
  }));
  if (isLoading) {
    return (
      <View>
        <LoadingOverlay message="Adding content ..." />
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text h4 style={styles.header}>မင်္ဂလာပါ</Text>
        <Input
          placeholder="သင်တင်ချင်တဲ. အကြောင်းအရာ"
          value={contentTitle}
          onChangeText={setContentTitle}
        />

        <Input
          placeholder="အကြောင်းအရာ အသေးစိတ်"
          value={contentDescription}
          onChangeText={setContentDescription}
          style={styles.descriptionInput}
          multiline
        />
        <Text style={styles.label}>မှန်ကန်စွာ ရွေးချယ်ပါ</Text>
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
          placeholder="လိပ်စာ သိရင် ထည်.ပေးပါ"
          value={address}
          onChangeText={setAddress}
        />
        <Button title="မျှဝေမယ်" buttonStyle={{ backgroundColor: '#FA6326' }} containerStyle={{ marginTop: 20 }} onPress={handleAddContent} />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'lightgray',
    paddingBottom: 100,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    paddingBottom: 50,
  },
  header: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#FA6326',
    fontWeight: 'bold',
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
    minHeight: 500,
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
    color: '#FA6326',
  },

  pickerItem: {
    fontSize: 16,
    color: '#FA6326',
  },
});

export default AddContentForm;

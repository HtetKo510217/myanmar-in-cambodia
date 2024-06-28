import React, { useState, useContext } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { Input, Button, Text, Card, Icon } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import Content from '../../models/content';
import { CATEGORIES } from '../../data/category';
import { useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../ui/LoadingOverlay';
import { AuthContext } from '../../store/auth-context';
import Toast from 'react-native-root-toast';

const AddContentForm = ({ onContentAdd }) => {
  const [contentTitle, setContentTitle] = useState('');
  const [contentImageUri, setContentImageUri] = useState('');
  const [contentImageUrl, setContentImageUrl] = useState('');
  const [contentDescription, setContentDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);

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

  const handleAddContent = () => {
    if (!validateForm()) return;

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
      Toast.show('Content added successfully!', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        backgroundColor: 'green',
      });
      navigation.goBack();
    }, 2000);
  };

  const categoryItems = CATEGORIES.map((category) => ({
    label: category.title,
    value: category.id,
  })).filter((category) => category.value !== 'c7');

  

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <LoadingOverlay message="Adding content ..." />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text h4 style={styles.header}>မင်္ဂလာပါ</Text>
        <Input
          placeholder="သင်တင်ချင်တဲ. အကြောင်းအရာ"
          value={contentTitle}
          onChangeText={setContentTitle}
          errorMessage={errors.title}
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="အကြောင်းအရာ အသေးစိတ်"
          value={contentDescription}
          onChangeText={setContentDescription}
          style={styles.descriptionInput}
          multiline
          errorMessage={errors.description}
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
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
        <Input
          placeholder="လိပ်စာ သိရင် ထည်.ပေးပါ"
          value={address}
          onChangeText={setAddress}
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
        />
        <Button
          title="မျှဝေမယ်"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={handleAddContent}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 200,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFC30B',
    fontWeight: 'bold',
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
    color: '#000',
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
    color: '#000',
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
  button: {
    backgroundColor: '#FFC30B',
  },
  buttonContainer: {
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddContentForm;

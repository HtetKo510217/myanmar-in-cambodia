import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, FlatList, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import { Avatar, Card, Icon, Button as ElementsButton } from 'react-native-elements';
import { getUserProfile, updateUserProfile, deleteUser } from '../util/user';
import { getData, deleteData } from '../util/http';
import { AuthContext } from '../store/auth-context';
import { useFocusEffect } from '@react-navigation/native';
import ContentItem from '../components/content/ContentItem';
function UserProfileScreen({ navigation }) {
  const authCtx = useContext(AuthContext);

  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const userId = authCtx.userId;
  const idToken = authCtx.token;

  const fetchProfile = useCallback(async () => {
    try {
      const userProfile = await getUserProfile(userId);
      setProfile(userProfile);
    } catch (error) {
      Alert.alert('Error', 'Failed to load profile.');
    }
  }, [userId]);

  const fetchUserPosts = useCallback(async () => {
    try {
      const posts = await getData();
      const filteredPosts = posts.filter(post => post.userId === userId);
      setUserPosts(filteredPosts);
    } catch (error) {
      Alert.alert('Error', 'Failed to load posts.');
    }
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchProfile();
    fetchUserPosts();
  }, [fetchProfile, fetchUserPosts]);

  useFocusEffect(
    useCallback(() => {
      fetchProfile();
      fetchUserPosts();
    }, [fetchProfile, fetchUserPosts])
  );

  const handleUpdate = async () => {
    try {
      await updateUserProfile(userId, profile);
      Alert.alert('Success', 'Profile updated successfully.');
      setIsEditing(false);
      setModalVisible(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: handleLogout },
      ],
      { cancelable: false }
    );
  };

  const handleLogout = () => {
    authCtx.logout();
  };

  const confirmDelete = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: handleDelete },
      ],
      { cancelable: false }
    );
  };

  const handleDelete = async () => {
    try {
      await deleteUser(userId, idToken);
      for (const post of userPosts) {
        await deleteData(post.id);
      }
      Alert.alert('Success', 'Account deleted successfully.');
      authCtx.logout();
    } catch (error) {
      Alert.alert('Error', 'Failed to delete account.');
    }
  };

  const renderContentItem = ({ item }) => {
    return (
      <ContentItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Edit Profile</Text>
          <TextInput
            style={styles.modalInput}
            value={profile.name}
            onChangeText={(text) => setProfile({ ...profile, name: text })}
            placeholder="Name"
          />
          <ElementsButton
            title="Save Changes"
            buttonStyle={styles.saveButton}
            onPress={handleUpdate}
          />
          <ElementsButton
            title="Cancel"
            buttonStyle={styles.cancelButton}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>

      <View style={styles.profileContainer}>
        <Avatar
          rounded
          size="large"
          source={require('../assets/images/slider_img/slider_img_04.jpg')}
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.email}>{profile.email}</Text>
        <View style={styles.buttonContainer}>
          <ElementsButton
            icon={<Icon name="edit" size={15} color="white" />}
            title="Edit Profile"
            buttonStyle={styles.editButton}
            onPress={() => setModalVisible(true)}
          />
          <ElementsButton
            title="Logout"
            buttonStyle={styles.logoutButton}
            onPress={confirmLogout}
          />
        </View>
      </View>
      <Text style={styles.subtitle}>Your Posts</Text>
      {userPosts.length > 0 ? (
        <FlatList
          data={userPosts}
          keyExtractor={(item) => item.id}
          renderItem={renderContentItem}
        />
      ) : (
        <Text style={styles.noPostsText}>You have no posts yet.</Text>
      )}
      <ElementsButton
        title="Delete Account"
        buttonStyle={styles.deleteButton}
        onPress={confirmDelete}
        containerStyle={styles.deleteButtonContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#007bff',
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#ff6347',
    marginBottom: 10,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    height: 200,
  },
  cardTitleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noPostsText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  deleteButtonContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
});

export default UserProfileScreen;

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, FlatList, ActivityIndicator, TouchableOpacity, Modal, ImageBackground, SafeAreaView } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { getUserProfile, updateUserProfile, deleteUser } from '../util/user';
import { getData, deleteData } from '../util/http';
import { AuthContext } from '../store/auth-context';
import { PostContext } from '../store/post-context';
import { useFocusEffect } from '@react-navigation/native';

function UserProfileScreen({ navigation }) {
  const authCtx = useContext(AuthContext);
  const { setPosts } = useContext(PostContext);

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
      const userProfile = await getUserProfile(userId, idToken);
      setProfile(userProfile);
    } catch (error) {
      Alert.alert('Error', 'Failed to load profile.');
    }
  }, [userId]);

  const fetchUserPosts = useCallback(async () => {
    try {
      const posts = await getData(idToken);
      setPosts(posts);
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
      await updateUserProfile(userId, profile, idToken);
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
      for (const post of userPosts) {
        await deleteData(post.id, idToken);
      }
      await deleteUser(userId, idToken);
      Alert.alert('Success', 'Account deleted successfully.');
      authCtx.logout();
    } catch (error) {
      Alert.alert('Error', 'Failed to delete account.');
    }
  };

  const renderContentItem = ({ item }) => (
    <TouchableOpacity style={styles.postItem} onPress={() => navigation.navigate('ContentDetail', { contentId: item.id })}>
      <ImageBackground source={{ uri: item.imageUrl }} style={styles.postImage}>
        <BlurView intensity={80} tint="dark" style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>{item.title}</Text>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradientBackground}
      >
        <View style={styles.profileContainer}>
          <Avatar
            rounded
            size="large"
            source={require('../assets/images/slider_img/slider_img_04.jpg')}
            containerStyle={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{profile?.name}</Text>
            <Text style={styles.email}>{profile?.email}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.profileButton} onPress={() => setModalVisible(true)}>
            <Icon name="edit" size={20} color="white" />
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton} onPress={confirmLogout}>
            <Icon name="log-out" type="feather" size={20} color="white" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton} onPress={confirmDelete}>
            <Icon name="trash-2" type="feather" size={20} color="white" />
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>Your Posts</Text>
        {userPosts.length > 0 ? (
          <FlatList
            data={userPosts}
            keyExtractor={(item) => item.id}
            renderItem={renderContentItem}
            numColumns={2}
            columnWrapperStyle={styles.postList}
          />
        ) : (
          <Text style={styles.noPostsText}>You have no posts yet.</Text>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <BlurView intensity={100} tint="dark" style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Profile</Text>
            <TextInput
              style={styles.modalInput}
              value={profile?.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
              placeholder="Name"
              placeholderTextColor={'#aaa'}
            />
            <TextInput
              style={styles.modalInput}
              value={profile?.email}
              editable={false}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              placeholder="Email"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  gradientBackground: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    marginRight: 15,
    borderWidth: 3,
    borderColor: 'white',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  postList: {
    justifyContent: 'space-between',
  },
  postItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  postTitleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  postTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  noPostsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  modalInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: 250,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#999',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
});

export default UserProfileScreen;

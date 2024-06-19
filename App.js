import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import ContentScreen from './screens/ContentScreen';
import ContentDetailScreen from './screens/ContentDetailScreen';
import ShareContentScreen from './screens/ShareContentScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import EditContentScreen from './screens/EditContentScreen';
import JoinCommunityScreen from './screens/JoinCommunityScreen';
import KhmerLearningScreen from './screens/KhmerLearningScreen';
import LoadingOverlay from './components/ui/LoadingOverlay';
import { Ionicons } from '@expo/vector-icons';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import PostContextProvider from './store/post-context';
import { useContext, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Alert } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const authCtx = useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <Ionicons
              name="exit"
              size={24}
              color="#FA6326"
              style={{ marginRight: 15 }}
              onPress={() => {
                Alert.alert(
                  'Logout',
                  'Are you sure you want to logout?',
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                    {
                      text: 'Logout',
                      onPress: () => {
                        authCtx.logout();
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
              title="Logout"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Share Content"
        component={ShareContentScreen}
        options={{
          title: 'Share Content',
          headerTitleStyle: { color: '#FA6326' },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="share-social" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function AuthStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false, title: 'Onboarding' }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}


function AuthenticatedStack() {
  return (
    <PostContextProvider>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name="Home screen"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        options={{ title: 'Content' }}
      />
      <Stack.Screen
        name="ContentDetail"
        component={ContentDetailScreen}
        options={{ title: 'Content Detail' }}
      />
      <Stack.Screen
        name="EditContent"
        component={EditContentScreen}
        options={{ title: 'Edit Content' }}
      />
      <Stack.Screen
        name="JoinCommunity"
        component={JoinCommunityScreen}
        options={{ title: 'Join Community' }}
      />
      <Stack.Screen
        name="KhmerLearning"
        component={KhmerLearningScreen}
        options={{ title: 'Khmer Learning' }}
      />
    </Stack.Navigator>
    </PostContextProvider>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');
      const storedLocalId = await AsyncStorage.getItem('localId');
      if (storedToken) {
        authCtx.authenticate(storedToken);
        authCtx.setLocalId(storedLocalId);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return (
      <View style={styles.container}>
        <LoadingOverlay message="Wecome to Myanmar in Cambodia" />
      </View>
    )
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

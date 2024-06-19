import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import LoadingOverlay from './components/ui/LoadingOverlay';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './components/navigation/AuthStack';
import AuthenticatedStack from './components/navigation/AuthenticatedStack';

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

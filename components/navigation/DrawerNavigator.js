import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import CategoriesScreen from '../../screens/CategoriesScreen';
import ShareContentScreen from '../../screens/ShareContentScreen';
import ExchangeScreen from '../../screens/ExchangeScreen';
import MyanmarEmbassy from '../../screens/MyanmarEmbassy';
import { AuthContext } from '../../store/auth-context';

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
            <Drawer.Screen
                name="Exchange"
                component={ExchangeScreen}
                options={{
                    title: 'Today Exchange Rate',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="cash" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Myanmar Embassy"
                component={MyanmarEmbassy}
                options={{
                    title: 'Myanmar Embassy',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="flag" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

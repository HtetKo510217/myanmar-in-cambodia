import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/HomeScreen';
import CategoriesScreen from '../../screens/CategoriesScreen';
import ShareContentScreen from '../../screens/ShareContentScreen';
import ExchangeScreen from '../../screens/ExchangeScreen';
import MyanmarEmbassy from '../../screens/MyanmarEmbassy';
import AboutMeScreen from '../../screens/AboutMeScreen';
import UserProfileScreen from '../../screens/UserProfileScreen';
import { AuthContext } from '../../store/auth-context';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    const authCtx = useContext(AuthContext);

    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#FFC30B' },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#fff' },
                drawerContentStyle: { backgroundColor: '#fff' },
                drawerInactiveTintColor: 'black',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#FFC30B',
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
                    headerTitleStyle: { color: '#fff' },
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
            <Drawer.Screen
                name="User Profile"
                component={UserProfileScreen}
                options={{
                    title: 'User Profile',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="About Me"
                component={AboutMeScreen}
                options={{
                    title: 'About Me',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="information-circle" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

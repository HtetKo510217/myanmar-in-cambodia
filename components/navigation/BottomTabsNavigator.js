import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/HomeScreen';
import CategoriesScreen from '../../screens/CategoriesScreen';
import ShareContentScreen from '../../screens/ShareContentScreen';
import ExchangeScreen from '../../screens/ExchangeScreen';
import UserProfileScreen from '../../screens/UserProfileScreen';
import MyanmarEmbassy from '../../screens/MyanmarEmbassy';
const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Categories') {
                        iconName = 'list';
                    } else if (route.name === 'Share Content') {
                        iconName = 'share-social';
                    } else if (route.name === 'Exchange') {
                        iconName = 'cash';

                    } else if (route.name === 'Myanmar Embassy') {
                        iconName = 'flag';
                    } else if (route.name === 'User Profile') {
                        iconName = 'person';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FFC30B',
                tabBarInactiveTintColor: 'gray',
                headerStyle: { backgroundColor: '#FFC30B' },
                headerTintColor: 'white',
                tabBarStyle: { backgroundColor: '#fff' },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Categories" component={CategoriesScreen} />
            <Tab.Screen name="Share Content" component={ShareContentScreen} />
            {/* <Tab.Screen name="Exchange" component={ExchangeScreen} /> */}
            <Tab.Screen name="Myanmar Embassy" component={MyanmarEmbassy} />
            <Tab.Screen name="User Profile" component={UserProfileScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabsNavigator;

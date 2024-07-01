import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContentScreen from '../../screens/ContentScreen';
import ContentDetailScreen from '../../screens/ContentDetailScreen';
import EditContentScreen from '../../screens/EditContentScreen';
import JoinCommunityScreen from '../../screens/JoinCommunityScreen';
import KhmerLearningScreen from '../../screens/KhmerLearningScreen';
import KhmerLearningDetailScreen from '../../screens/KhmerLearningDetailScreen';
import PostContextProvider from '../../store/post-context';
import BottomTabsNavigator from './BottomTabsNavigator';
import FAQScreen from '../../screens/FaqScreen';
import AboutMe from '../../screens/AboutMeScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="BottomTabs"
                component={BottomTabsNavigator}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
}

function AuthenticatedStack() {
    return (
        <PostContextProvider>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#FFC30B' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#fff' },
                    headerBackTitle: 'Back',
                }}
            >
                <Stack.Screen
                    name="Drawer"
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

                <Stack.Screen
                    name="KhmerLearningDetail"
                    component={KhmerLearningDetailScreen}
                    options={{ title: 'Khmer Learning Detail' }}
                />

                <Stack.Screen
                    name="FAQ"
                    component={FAQScreen}
                    options={{ title: 'FAQ' }}
                />

                <Stack.Screen
                    name="AboutMe"
                    component={AboutMe}
                    options={{ title: 'About Me' }}
                />

                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabsNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </PostContextProvider>
    );
}

export default AuthenticatedStack;

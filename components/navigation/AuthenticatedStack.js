import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import ContentScreen from '../../screens/ContentScreen';
import ContentDetailScreen from '../../screens/ContentDetailScreen';
import EditContentScreen from '../../screens/EditContentScreen';
import JoinCommunityScreen from '../../screens/JoinCommunityScreen';
import KhmerLearningScreen from '../../screens/KhmerLearningScreen';
import PostContextProvider from '../../store/post-context';

const Stack = createNativeStackNavigator();

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

export default AuthenticatedStack;

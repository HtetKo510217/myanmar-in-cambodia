import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

function ContentItem({ id, title, imageUrl }) {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('ContentDetail', {
            contentId: id,
        });
    }

    return (
        <Pressable style={styles.postItem} onPress={pressHandler}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.postImage}>
                <BlurView intensity={80} tint="dark" style={styles.postTitleContainer}>
                    <Text style={styles.postTitle}>{title}</Text>
                </BlurView>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
});

export default ContentItem;
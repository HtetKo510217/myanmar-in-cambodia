import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ContentItem({ id, title, imageUrl }) {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('ContentDetail', {
            contentId: id,
        });
    }

    return (
        <Pressable style={styles.container} onPress={pressHandler}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}

export default ContentItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#000',
    },
});

import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

function SkeletonContentItem() {
    return (
        <View style={styles.container}>
            <View style={styles.image} />
            <View style={styles.title} />
        </View>
    );
}

export default SkeletonContentItem;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#E1E9EE', // Light grey background for the skeleton
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: '#C0C0C0', // Darker grey for the skeleton image
    },
    title: {
        height: 20,
        margin: 10,
        backgroundColor: '#C0C0C0', // Darker grey for the skeleton text
    },
});

import React from 'react';
import { Text, TouchableOpacity, StyleSheet , Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddressText = ({ address, style }) => {
    const isLink = address.startsWith('http') || address.startsWith('https');

    const handlePress = () => {
        if (isLink) {
            Linking.openURL(address);
        }
    };

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={handlePress} 
            disabled={!isLink}
        >
            <Text style={[styles.address, style, isLink && styles.link]}>
                {address}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    address: {
        fontSize: 14,
        color: '#666',
        flex: 1,
    },
    link: {
        color: '#007AFF',
        textDecorationLine: 'underline',
    },
});

export default AddressText;
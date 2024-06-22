import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView ,Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MyanmarEmbassy() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/images/yangon.jpg')}
                style={styles.image}
            />
            <Text style={styles.header}>Contact Us</Text>
            <View style={styles.infoContainer}>
                <Icon name='location-on' size={24} color='#000' />
                <Text style={styles.infoText}>7B, Street 466, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh</Text>
            </View>
            <View style={styles.infoContainer}>
                <Icon name='print' size={24} color='#000' />
                <Text style={styles.infoText}>(855-23) 223 763</Text>
            </View>
            <View style={styles.infoContainer}>
                <Icon name='phone' size={24} color='#000' />
                <Text style={styles.infoText}>(855-23) 223 761, (855-23) 223 762</Text>
            </View>
            <View style={styles.infoContainer}>
                <Icon name='email' size={24} color='#000' />
                <Text style={styles.infoText}>mephnompenh@yahoo.com</Text>
            </View>
            <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL('https://www.mephnompenh.org/')}>
                <Icon name='language' size={24} color='#000' />
                <Text style={[styles.infoText, { textDecorationLine: 'underline' }]}>www.mephnompenh.org</Text>
            </TouchableOpacity>
            <View style={styles.officeHours}>
                <Text style={styles.infoText}>Office Hours:</Text>
                <Text style={styles.infoText}>Monday - Friday: 9:00 AM - 5:00 PM</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#FFFAE6',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    infoText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#555',
    },
    officeHours: {
        marginTop: 16,
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
    },
});

export default MyanmarEmbassy;

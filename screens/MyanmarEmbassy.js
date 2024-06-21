import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
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
            <View style={styles.infoContainer}>
                <Icon name='language' size={24} color='#000' />
                <Text style={styles.infoText}>www.mephnompenh.org</Text>
            </View>
            <Text style={styles.officeHours}>
                Office Hours: 09:00 am to 16:30 pm (Monday to Friday)
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
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
        marginLeft: 8,
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

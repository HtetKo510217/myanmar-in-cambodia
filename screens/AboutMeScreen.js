import React from 'react';
import { View, Text, StyleSheet, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AboutMeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>About Me</Text>
            <Image
                source={require('../assets/images/my_photo.jpg')} // Replace with your profile picture if available
                style={styles.profileImage}
            />
            <Text style={styles.name}>Htet Ko</Text>
            <Text style={styles.bio}>Software Developer passionate about creating impactful software solutions.</Text>

            <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL('https://www.facebook.com/htet.510217/')}>
                <Icon name='facebook' size={24} color='#3b5998' />
                <Text style={styles.infoText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL('https://www.linkedin.com/in/htet-ko-34799b198')}>
                <MaterialCommunityIcons name='linkedin' size={24} color='#0e76a8' />
                <Text style={styles.infoText}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL('https://github.com/HtetKo510217')}>
                <MaterialCommunityIcons name='github' size={24} color='#333' />
                <Text style={styles.infoText}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL('mailto:htetko510217@gmail.com')}>
                <Icon name='email' size={24} color='#d44638' />
                <Text style={styles.infoText}>htetko510217@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL('https://wa.me/95975524545')}>
                <MaterialCommunityIcons name='whatsapp' size={24} color='#25D366' />
                <Text style={styles.infoText}>+95975524545 (WhatsApp)</Text>
            </TouchableOpacity>

            <View style={styles.qrContainer}>
                <View style={styles.qrItem}>
                    <Icon name='coffee' size={48} color='#333' />
                    <Text style={styles.qrText}>Buy Me A Coffee</Text>
                </View>
                <Image
                    source={require('../assets/images/by-me-coffee.jpg')}
                    style={styles.qrImage}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bio: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    infoText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#555',
        textDecorationLine: 'underline',
    },
    qrContainer: {
        marginTop: 32,
        alignItems: 'center',
    },
    qrItem: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 16,
    },
    qrText: {
        fontSize: 18,
        color: '#333',
        marginTop: 8,
    },
    qrImage: {
        width: 300,
        height: 300,
        marginTop: 16,
        borderRadius: 10,
    },
});

export default AboutMeScreen;

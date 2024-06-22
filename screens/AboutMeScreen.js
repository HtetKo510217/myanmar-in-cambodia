import React from 'react';
import { View, Text, StyleSheet, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function AboutMeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('../assets/images/my_photo.jpg')}
                        style={styles.profileImage}
                    />
                </View>
                <Text style={styles.name}>Htet Ko</Text>
                <Text style={styles.bio}>Software Developer passionate about creating impactful software solutions.</Text>
            </View>
            <View style={styles.infoContainer}>
                <TouchableOpacity style={styles.infoItem} onPress={() => Linking.openURL('https://www.facebook.com/htet.510217/')}>
                    <Icon name='facebook' size={24} color='#3b5998' />
                    <Text style={styles.infoText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem} onPress={() => Linking.openURL('https://www.linkedin.com/in/htet-ko-34799b198')}>
                    <MaterialCommunityIcons name='linkedin' size={24} color='#0e76a8' />
                    <Text style={styles.infoText}>LinkedIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem} onPress={() => Linking.openURL('https://github.com/HtetKo510217')}>
                    <MaterialCommunityIcons name='github' size={24} color='#333' />
                    <Text style={styles.infoText}>GitHub</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem} onPress={() => Linking.openURL('mailto:htetko510217@gmail.com')}>
                    <Icon name='email' size={24} color='#d44638' />
                    <Text style={styles.infoText}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem} onPress={() => Linking.openURL('https://wa.me/95975524545')}>
                    <MaterialCommunityIcons name='whatsapp' size={24} color='#25D366' />
                    <Text style={styles.infoText}>WhatsApp</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.qrContainer}>
                <TouchableOpacity style={styles.qrItem}>
                    <Icon name='coffee' size={48} color='#FA6326' />
                    <Text style={styles.qrText}>Buy Me A Coffee</Text>
                </TouchableOpacity>
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
        marginTop: 50,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 16,
        width: '100%',
        paddingTop: 10, 
    },
    profileImageContainer: {
        position: 'absolute',
        top: -50,
        alignItems: 'center',
        width: '100%',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50, 
        marginBottom: 8,
        color: '#333',
    },
    bio: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    infoContainer: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    infoText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    qrContainer: {
        alignItems: 'center',
        marginBottom: 32,
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
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
});

export default AboutMeScreen;

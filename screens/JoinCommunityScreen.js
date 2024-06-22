import React from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Message from '../components/home/Message';
import { Image, Linking } from 'react-native';

const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

function JoinCommunityScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/images/yangon.jpg')} style={styles.image} />
            <Message title="Join Community">
                <Text style={styles.message}>
                    Community တွေ join ထားခြင်းအားဖြင့်{'\n'}
                    အခက်အခဲရှိတဲ့အခါ အကူညီ ရနိုင်ပါတယ်။
                </Text>
            </Message>
            <Message title="Facebook Groupity">
                <Text style={styles.message}>
                ကမ္ဘောဒီးယားရောက် မြန်မာတွေ အသုံးပြုကြတဲ့{'\n'}
                facebook group တွေပါ။
                </Text>
            </Message>
            <View style={styles.card}>
                <CustomButton 
                    title='ကမ္ဘောဒီးယားရောက် မြန်မာနိုင်ငံသားများ Myanmar Expat in Cambodia'
                    onPress={() => Linking.openURL('https://www.facebook.com/groups/mminkh')}
                />
            </View>
            <View style={styles.card}>
                <CustomButton 
                    title='Myanmar Society Cambodia'
                    onPress={() => Linking.openURL('https://www.facebook.com/groups/880691069661044')}
                />
            </View>
            <View style={styles.card}>
                <CustomButton 
                    title='Cambodia ရောက် ရွှေမြန်မာများ ဆုံစည်းရာ'
                    onPress={() => Linking.openURL('https://www.facebook.com/groups/2400229157033310')}
                />
            </View>
        </ScrollView>
    );
}

export default JoinCommunityScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFC30B',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/FontAwesome';

const phrases = [
    { khmer: "សួស្ដី", burmese: "မင်္ဂလာပါ", english: "Hello", pronounce: "soom srdei" },
    { khmer: "សូមអរគុណ", burmese: "ကျေးဇူးတင်ပါတယ်", english: "Thank you", pronounce: "saum arkoun" },
    { khmer: "ជំរាបលា", burmese: "သွားတော့မယ်", english: "Goodbye", pronounce: "jom-reab-lear" },
    { khmer: "បាទ/ចាស", burmese: "ဟုတ်ကဲ့", english: "Yes", pronounce: "baht/cha" },
    { khmer: "ទេ", burmese: "မဟုတ်ဘူး", english: "No", pronounce: "te" },
    { khmer: "សូមទោស", burmese: "ဆောရီး", english: "Sorry", pronounce: "soum toh" },
    { khmer: "ចង់បាន", burmese: "လိုချင်တယ်", english: "Want", pronounce: "jong ban" },
    { khmer: "ធ្វើដំណើរ", burmese: "ခရီးသွား", english: "Travel", pronounce: "twer dom-nao" },
    { khmer: "ល្អ", burmese: "ကောင်းတယ်", english: "Good", pronounce: "lah" },
    { khmer: "មិនល្អ", burmese: "မကောင်းဘူး", english: "Bad", pronounce: "min lah" }
];

export default function KhmerLearningScreen() {
    const [language, setLanguage] = useState('pronounce');

    const speakPhrase = (phrase) => {
        const text = phrase[language];
        Speech.speak(text);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/cambodia-kmer-language.jpg')} style={styles.image} />
            <FlatList
                data={phrases}
                keyExtractor={(item) => item.english}
                renderItem={({ item }) => (
                    <View style={styles.phraseContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.englishText}>{item.english}</Text>
                            <Text style={styles.khmerText}>{item.khmer}</Text>
                            <Text style={styles.burmeseText}>{item.burmese}</Text>
                        </View>
                        <TouchableOpacity style={styles.speakButton} onPress={() => speakPhrase(item)}>
                            <Icon name="volume-up" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )}
                style={styles.phraseListContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    phraseListContainer: {
        flex: 1,
    },
    phraseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    textContainer: {
        flex: 1,
    },
    englishText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    khmerText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    burmeseText: {
        fontSize: 16,
        color: '#555',
    },
    speakButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});

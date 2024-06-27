import React, { useState, memo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { encode } from 'base64-arraybuffer';
import Icon from 'react-native-vector-icons/FontAwesome';
import learningData from '../data/khmerPhrases.json';

const EXPO_PUBLIC_EDGE_TTS_API = process.env.EXPO_PUBLIC_EDGE_TTS_API;

const PhraseItem = memo(({ phrase, language, speakPhrase }) => (
    <View style={styles.phraseContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.englishText}>{phrase.english}</Text>
            <Text style={styles.khmerText}>{phrase.khmer}</Text>
            <Text style={styles.burmeseText}>{phrase.burmese}</Text>
            <Text style={styles.pronounceText}>{phrase.pronounce}</Text>
        </View>
        <TouchableOpacity style={styles.speakButton} onPress={() => speakPhrase(phrase)}>
            <Icon name="volume-up" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
));

const KhmerLearningScreen = () => {
    const [language, setLanguage] = useState('khmer');
    const [sound, setSound] = useState();

    const speakPhrase = async (phrase) => {
        const text = phrase[language];
        try {
            const response = await axios.post(EXPO_PUBLIC_EDGE_TTS_API, { text }, {
                responseType: 'arraybuffer',
            });

            const base64 = encode(response.data);

            const fileUri = FileSystem.documentDirectory + 'output.mp3';
            await FileSystem.writeAsStringAsync(fileUri, base64, {
                encoding: FileSystem.EncodingType.Base64,
            });

            const { sound } = await Audio.Sound.createAsync(
                { uri: fileUri },
                { shouldPlay: true }
            );
            setSound(sound);
        } catch (error) {
            console.error('Error with TTS:', error);
        }
    };

    const sections = Object.keys(learningData[0]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/cambodia-kmer-language.jpg')} style={styles.image} />
            <FlatList
                data={sections}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.sectionTitle}>{item}</Text>
                        {learningData[0][item].map((phrase, index) => (
                            <PhraseItem
                                key={index}
                                phrase={phrase}
                                language={language}
                                speakPhrase={speakPhrase}
                            />
                        ))}
                    </View>
                )}
                style={styles.phraseListContainer}
            />
        </View>
    );
};

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
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    phraseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFC30B',
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
        color: '#000',
    },
    khmerText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 4,
    },
    burmeseText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 4,
    },
    pronounceText: {
        fontSize: 14,
        color: '#555',
    },
    speakButton: {
        backgroundColor: '#7D7C7C',
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default KhmerLearningScreen;

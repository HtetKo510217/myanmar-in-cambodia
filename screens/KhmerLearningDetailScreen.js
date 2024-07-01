import React, { useState, useCallback, memo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { encode } from 'base64-arraybuffer';

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

const KhmerLearningDetailScreen = ({ route }) => {
    const { section, phrases, language } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
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

    const filteredPhrases = useCallback(() => {
        return phrases.filter(phrase =>
            phrase.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
            phrase.khmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            phrase.burmese.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search phrases..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>
            <FlatList
                data={filteredPhrases()}
                keyExtractor={(item, index) => `${section}-${index}`}
                renderItem={({ item }) => (
                    <PhraseItem
                        phrase={item}
                        language={language}
                        speakPhrase={speakPhrase}
                    />
                )}
                ListHeaderComponent={<Text style={styles.sectionTitle}>{section}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 16,
        paddingHorizontal: 16,
        borderRadius: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 16,
        marginHorizontal: 16,
        color: '#333',
    },
    phraseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFC30B',
        padding: 16,
        margin: 16,
        borderRadius: 15,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    textContainer: {
        flex: 1,
    },
    englishText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333',
    },
    khmerText: {
        fontSize: 16,
        color: '#0066CC',
        marginBottom: 4,
    },
    burmeseText: {
        fontSize: 16,
        color: '#006600',
        marginBottom: 4,
    },
    pronounceText: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
    speakButton: {
        backgroundColor: '#0066CC',
        padding: 12,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default KhmerLearningDetailScreen;

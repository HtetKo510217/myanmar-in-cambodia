import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import learningData from '../data/khmerPhrases.json';

const KhmerLearningScreen = ({ navigation }) => {
    const [language, setLanguage] = useState('khmer');

    const sections = Object.keys(learningData[0]);

    const filteredData = useCallback(() => {
        return sections.reduce((acc, section) => {
            const phrases = learningData[0][section];
            if (phrases.length > 0) {
                acc[section] = phrases;
            }
            return acc;
        }, {});
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/cambodia-kmer-language.jpg')} style={styles.image} />
            <FlatList
                data={Object.entries(filteredData())}
                keyExtractor={([section]) => section}
                renderItem={({ item: [section, phrases] }) => (
                    <CategoryGridTile
                        title={section}
                        color="#FFC30B" 
                        icon="book" 
                        onPress={() => navigation.navigate('KhmerLearningDetail', {
                            section,
                            phrases,
                            language,
                        })}
                    />
                )}
                
                style={styles.phraseListContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    image: {
        width: '100%',
        height: 200,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
    },
    phraseListContainer: {
        paddingHorizontal: 10,
    },
});

export default KhmerLearningScreen;

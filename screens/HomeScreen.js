import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CarouselView from '../components/home/CarouselView';
import Message from '../components/home/Message';
import { Card, Button, Icon } from '@rneui/themed';

function HomeScreen({ navigation }) {
    function pressHandler() {
        navigation.navigate('Content', {
            categoryId: 'c10'
        });
    }

    return (
        <ScrollView style={styles.container}>
            <CarouselView />
            <View style={styles.cardContainer}>
                <Card containerStyle={styles.card}>
                    <Icon name="group" type="material" size={50} color="#FFC30B" />
                    <Text style={styles.cardTitle}>Join Community</Text>
                    <Button
                        onPress={() => navigation.navigate('JoinCommunity')}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonTitle}
                    >
                        Join Now
                    </Button>
                </Card>
                <Card containerStyle={styles.card}>
                    <Icon name="info" type="material" size={50} color="#FFC30B" />
                    <Text style={styles.cardTitle}>ဆောင်ရန်/ရှောင်ရန်များ</Text>
                    <Button
                        onPress={pressHandler}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonTitle}
                    >
                        Learn More
                    </Button>
                </Card>
            </View>
            <Card containerStyle={styles.messageCard}>
                <Message title="HOW IT WORKS">
                    <Text style={styles.message}>
                        ကမ္ဘောဒီယားရောက် မြန်မာတွေအတွက်{'\n'}
                        တနေရာတည်းမှာ သိသင့်သမျှ မျှဝေပေးတဲ့ App လေးတစ်ခုဖြစ်ပါတယ်။
                    </Text>
                </Message>
            </Card>
            <Card containerStyle={styles.messageCard}>
                <Message title="WHY THIS APP">
                    <Text style={styles.message}>
                        တိုင်းတပါးမှာ ရှင်သန်ကြတဲ့အခါ အရာရာတိုင်းက {'\n'}
                        ခက်ခဲပါတယ်။ ဒီ App လုပ်ရတဲ့ရည်ရွယ်ချက်က ကမ္ဘောဒီးယားမှာရောက်နေကြတဲ့ {'\n'}
                        မြန်မာအချင်းချင်း အကူညီတစုံတရာပေးနိုင်ဖို့{'\n'} အလို့ငှာ တည်ဆောက်ထားရခြင်းဖြစ်ပါတယ်။
                    </Text>
                </Message>
            </Card>
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    card: {
        width: '45%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#FFC30B',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonTitle: {
        fontSize: 16,
        color: '#fff',
    },
    messageCard: {
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
});

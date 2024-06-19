import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const OnboardingScreen = ({ navigation }) => {
    const skipHandler = () => {
        AsyncStorage.setItem("alreadyLaunched", "true");
        navigation.replace("Login");
    }

    const doneHandler = () => {
        AsyncStorage.setItem("alreadyLaunched", "true");
        navigation.replace("Login");
    }
    return (
        <Onboarding
            onSkip={skipHandler}
            onDone={doneHandler}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'ဘာလာ ရှာပါသလည်း ?', 
                    subtitle: 'ဘာမှ မရှိလို. စိတ်မကောင်းပါ ။',
                    titleStyles: { fontWeight: 'bold', textAlign: 'center', color: '#3f2f25'},
                    subTitleStyles: { fontWeight: 'bold', textAlign: 'center',color: '#3f2f25'},
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'ပေးစရာ ဆိုလို.',
                    subtitle: 'မင်းပေးခဲ.တဲ. ဥပေက္ခာတွေဘဲ ရှိတာပါ',
                    titleStyles: { fontWeight: 'bold', textAlign: 'center', color: '#3f2f25'},
                    subTitleStyles: { fontWeight: 'bold', textAlign: 'center',color: '#3f2f25'},
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'ကမ္ဘောဒီးယား ရောက်ပီဆိုတော.',
                    subtitle: "ကမ္ဘောဒီးယားလို နှုတ်ဆက်ရမှာပေါ. မင်္ဂလာပါ 😁",
                    titleStyles: { fontWeight: 'bold', textAlign: 'center', color: '#3f2f25'},
                    subTitleStyles: { fontWeight: 'bold', textAlign: 'center',color: '#3f2f25'},
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
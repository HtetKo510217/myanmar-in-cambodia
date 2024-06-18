import { View, Text ,ScrollView, StyleSheet} from 'react-native'
import Message from '../components/home/Message';
import { Image, Button , Linking } from 'react-native';

function JoinCommunityScreen() {
    return (
        <ScrollView>
            <Image source={require('../assets/images/Angkor_Wat_Temple.jpg')} style={styles.image} />
            <Message title="Join Community" message="Community တွေ join ထားခြင်းအားဖြင်. အခက်အခဲ ရှိတဲ. အခါ အကူအညီ တစ်စုံတစ်ရာ ရနိင်ပါတယ်" />
            <Message title="Facebook Group" message="ကမ္ဘောဒီးယားရောက် မြန်မာတွေ အသုံးပြုကြတဲ. group တွေပါ" />
            <Button title='ကမ္ဘောဒီးယားရောက် မြန်မာနိုင်ငံသားများ / Myanmar Expat in Cambodia' onPress={() => Linking.openURL('https://www.facebook.com/groups/mminkh')} style={{marginBottom: 10}} />
            
            <Button title='Myanmar Society Cambodia' onPress={() => Linking.openURL('https://www.facebook.com/groups/880691069661044')} style={{marginBottom: 10}} />

            <Button title='Cambodia ရောက် ရွှေမြန်မာများ ဆုံစည်းရာ' onPress={() => Linking.openURL('https://www.facebook.com/groups/2400229157033310')} style={{marginBottom: 10}} />

        </ScrollView>
    );
}

export default JoinCommunityScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 300,
    },
})
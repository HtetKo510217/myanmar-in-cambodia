import { View, ScrollView, StyleSheet } from 'react-native'
import CarouselView from '../components/home/CarouselView';
import Message from '../components/home/Message';
import Button from '../components/home/Button';
function HomeScreen({ navigation }) {
    function pressHandler() {
        navigation.navigate('Content', {
            categoryId : 'c9'
        });
    }
    return (
        <ScrollView>
            <View>
                <CarouselView />
                <View>
                    <Message title="ကမ္ဘောဒီးယား ကို မလာခင်" message="ကမ္ဘောဒီးယား ကို မလာခင် သိသင်.သမျှ အချက်အလက်တွေကို ဒီကို လာရှာပါ" />
                    <View style={styles.buttonContainer}>
                        <Button onPress={() => navigation.navigate('JoinCommunity')} setBackground={false}>Join Community</Button>
                        <Button onPress={pressHandler} setBackground>ဆောင်ရန်/ရှောင်ရန်များ</Button>
                    </View>
                </View>
                <Message title="HOW IT WORKS" message="ကမ္ဘောဒီးယား ရောက်မြန်မာတွေ အတွက် တစ်နေရာတည်းမှာ သိသင်.သမျှ မျှ‌ဝေနေတဲ. app တစ်ခုဖြစ်ပါတယ်" />
                <Message title="WHY THIS PROJECT" message="တိုင်းတစ်ပါး မှာ ရှင်သန်ကြတဲ. အခါ အရာရာတိုင်းက ခက်ခဲ.ပါတယ် ။ ဒီ project လုပ်ရတဲ. ရည်ရွယ်ချက်က ကမ္ဘောဒီးယား မှာရောက်နေကြတဲ. မြန်မာအချင်းချင်း အကူအညီ တစ်စုံတစ်ရာ ပေးနိင်ဖို. အလို ငှာ တည်ဆောက်ထားရခြင်းဖြစ်ပါတယ်။" />
            </View>
        </ScrollView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
})
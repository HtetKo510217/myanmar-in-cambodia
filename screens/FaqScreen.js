import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Icon } from 'react-native-elements';

const faqData = [
    {
        question: 'Passport အကြောင်း',
        answer: 'PV/ PJ - ကမ္ဘောဒီးယားမှာ လုံးဝ ပြဿနာမရှိ။ ကြိုက်တဲ့ passport နဲ့လာလို့ရတယ်',
    },
    {
        question: 'Visa အခြေအနေ',
        answer: 'Arrival Visa  - ၁၄ ရက်ရမယ်။ အခမဲ့။ လေဆိပ်ရောက်တာနဲ့ immigration ကို passport ထိုးပေးလိုက်ရင် တုံးထုပေးမယ်။ ပိုနေလို့မရ။ extend မရ။ Tourist Visa -   ၃၀ ရက်ရမယ်။ ၃၀$ ပေးရမယ်။  တလထပ်တိုးလို့ရတယ်။ ကုန်တာနဲ့ လစ် Business Visa - ၃၀ ရက်ရမယ်၊ ၁/၃/၆/၁၂ လ တိုးလို့ရ။  ဗီဇာကုန် ထပ်တိုးလို့ရ။ ၆လ ဗီဇာကစပြီး ဝင်ချင်သလိုဝင် ထွက်ချင်သလိုထွက်ရတယ်။ 35$ ပေးရမယ်။ စာရွက်စာတမ်းမပါရင် 15$ ပိုပေးလိုက် အငြိမ်း။ အသက် ၅၅ နှစ်ကျော်ရင်တော့ Retirement Visa လျောက်လို့ရမယ်။ ဒါပေမည့် Business Visa နဲ့တော့ စစချင်းဝင်ရမယ်။ကလေးတွေကျောင်းလာတက်တယ်။ ကျောင်းက စာရွက်စာတမ်းမပေးလည်း ရတယ် Business visa နဲ့ဝင်ခဲ့ Dependent ပြန်လျောက်လို့ရတယ်။ အေးဆေး။မြန်မာမှာ Business Visa လျောက်ရင် ၃၅$ + ခရီးစရိတ် + Employment contract + ဘာညာ စာရွက် စာတန်း + Visa form ဖြည့် + email နဲ့ပို့ ၃ ရက်စောင့်ဘာညာ။ အချိန်ငွေ ကုန် အာရုံစားတယ်။ ဒီရောက်လေဆိပ်မှ နဲနဲပါးပါးပြောပြီး ၅၀$ လောက်ပေးပြီး Business Visa ငြိမ့်ငြိမ့်လေးယူလိုက်။ ကိုယ့်ဖာသာကိုယ် မပြောချင် မယူချင်၊ မရမှာကြောက်ရင် ဝန်တောင်မှု ပေးတဲ့ အေးဂျင့်ရှိတယ်။  Visa Extension ဆိုရင်လဲ  agent တွေမှိုလိုပေါက်။မြန်မာနဲ့မှလုပ်ချင်ရင် တရားဝင်မှတ်ပုံတင်ထားတဲ့ လိုင်စင် အေးဂျင့်ရှိတယ်။ ဥပမာ မြန်မာမောင်စတိုး ',
    },
    {
        question: "ငွေကြေး",
        answer: "ကမ္ဘောဒီးယားက currency နှစ်ခုသုံးပါတယ်။ ဒေါ်လာရော riel ကောသုံးပါတယ်။ ဘဏ်စျေးက 1USD = 4100riel ပါ။ ဒါပေမဲ့ အရပ်ထဲမှာကတော့ အလွယ်ပဲ ၁ဒေါ်လာကို ၄၀၀၀ ရီရယ်နဲ့တွက်ပါတယ်။ လမ်းဘေးဆိုင်လေးတွေကအစ ဒေါ်လာနဲ့ရှင်းလို့ ရတာများပါတယ်။ ရီရယ်သီးသန့် မလိုအပ်ပါဘူး။ တကယ်လို့ စျေးသွားမယ်ဆိုရင်တော့ စျေးထဲမှာ ရီရယ် လိုကောင်းလိုပါမယ်။ ကမ္ဘောဒီးဟားမှာ mobile payment က တွင်တွင်ကျယ်ကျယ်သုံးပါတယ်။ အသုံးအများဆုံးကတော့ ABA ပါ။ ဆိုင်တိုင်းနီးပါးမှာ ABA QR code ကို scan လုပ်ပြီး ငွေပေးလို့အဆင်ပြေပါတယ်။ လေဆိပ်မှာ ဒေါ်လာတွေကို ရီရယ် လဲစရာမလိုအပ်ပါဘူး။ ဒေါ်လာကို အသေးသုံးတွေသုံးလို့ရအောင် အကြွေတွေယူခဲ့တာက အသုံးဝင်ပါမယ်။"
    },
    {
        question: "သွားလာစားရိတ်",
        answer: "Cambodia မှာက အဓိက ကိုယ်ပိုင်ကားရယ် ဆိုင်ကယ်ရယ်အသုံးများကြပါတယ်။ Public transportation အနေနဲ့ bus ကားရှိပေမဲ့ မမြင်ရသလောက်ကို ရှားပါတယ်။ public transportation ကို အားကိုးလို့ လုံးဝမရပါဘူး။ PassApp နဲ. Tuk Tuk ငှားလို့ရပါမယ်။ Tuk Tuk ကတော့ မြန်မာက Taxi စျေးတွေနဲ့ယှဉ်ရင် စျေးပေါတယ်လို့ ပြောလို့ရပါတယ်။ Taxi လည်း ငှားလို့ရပါတယ်။ Grab သုံးပြီး ငှားလို့ရတယ်။ တခြား app တွေလည်းရှိတယ်။ မြန်မာမှာ visa credit card လုပ်ထားတာရှိရင် grab မှာ ထည့်ထားပြီး စီးလို့ရမယ်။ ကမ္ဘောဒီးယားမှာ ဘဏ်အကောင့်ဖွင့်ပြီးရင်တော့ အဲဒိ အကောင့်နဲ့ချိတ်သုံးပေါ့။"
    },
    {
        question: "ကျန်းမာရေး",
        answer: "ဘာမှမဖြစ်တာအကောင်းဆုံးပါ။ ဆေးရုံတွေ ဆေးခန်းတွေက စျေးအရမ်းကြီးပါတယ်။ နိုင်ငံခြားသားတွေအတွက် အဆင်ပြေတာကတော့ Khema Internationa Clinic ဆိုတဲ့ ဆေးရုံကို recommend ပေးပါတယ်။ အင်္ဂလိပ်လိုကောင်းကောင်းပြောလို့ရတယ်။ ဝန်ဆောင်မှုကောင်းတယ်။ ဆေးတွေလည်း စျေးကြီးပါတယ်။"
    },
    {
        question: "အလုပ်အကိုင်",
        answer: "အလုပ်အကိုင်မပေါပါဘူ။ ခမာတွေကိုယ်တိုင် အလုပ်အကိုင်ရှားပါးတဲ့ဒဏ်ကို ခံနေရပါတယ်။ အလုပ်ခေါ်စာတွေကြည့်ရင်တော့ အနိမ့်ဆုံး ဒေါ်လာ ၂၀၀ လောက်ကနေစပေးကြပါတယ်။ ခမာလိုတတ်မှခေါ်တဲ့အလုပ်များပါတယ်။ တရုတ်စကားပြောတတ်ရင် သူများထက်တပန်းသာပါမယ်။ ကာစီနိုတွေ ကျားဖြန့်တွေရှိတာမို့ အလုပ်ရှာရင် (အထူး) အထူးသတိထားပါ။ ပညာရှင်အနေနဲ့ လာမယ်ဆို အနည်းဆုံး တစ်လကို ၈၀၀ လောက်တော့ ရပါစေ။ တစ်လ ၈၀၀ ဆိုတာ အခန်းခတွေ တခြားအသုံးစားရိတ်တွေနဲ့ တွက်မယ်ဆိုရင် တော်တော်လေး ရုန်းကန်ရဦးမှာပါ။ ဖြစ်နိုင်ရင် ၁၀၀၀ အထက်ရပါစေ။"
    },
    {
        question: 'အထွေထွေ',
        answer: "Cambodia မှာ အကုန်စျေးကြီးပါတယ်။ အဝတ်အစား အသုံးအဆောင် အစားအသောက် ဆံပင်ညှပ်ခပါမကျန် အကုန်လုံးစျေးကြီးပါတယ်။ ကိုယ်သောက်နေကျဆေးရှိရင် မြန်မာကနေတစ်ခါတည်း သယ်ခဲ့ပါ။ အဝတ်အစားတွေ တတ်နိုင်သမျှသယ်ခဲ့ပါ။ ပူတဲ့နိုင်ငံမို့ လက်ရှည်တွေ သိပ်မလိုပါဘူး။ လက်တို ပေါ့ပေါ့ပါးပါးတွေဆိုအဆင်ပြေတယ်။ လမ်းထွက်ရင်လည်း လူတွေက bangkok လိုမျိုး ရှိုးစမိုးတွေသိပ်မရှိတာမို့ အရမ်းလှပနေစရာ ပြင်ဆင်နေစရာမလိုပါဘူး။ တော်ယုံသင့်ယုံအဝတ်အစားလောက်နဲ့ လမ်းထွက်လို့ရပါတယ်။ တခြားမှာချင်တာတွေကတော့ ထမင်းပေါင်းအိုးတစ်လုံးမဖြစ်မနေယူလာပါ။ extension cord အနည်းဆုံးတစ်ခုသယ်လာပါ။"
    }
];

const FaqScreen = () => {
    const [activeSections, setActiveSections] = useState([]);

    const toggleSection = (index) => {
        setActiveSections((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>မကြာခဏ မေးလေ့ရှိသော မေးခွန်းများ</Text>
            {faqData.map((item, index) => (
                <View key={index} style={styles.faqItem}>
                    <TouchableOpacity
                        style={styles.questionContainer}
                        onPress={() => toggleSection(index)}
                    >
                        <Text style={styles.question}>{item.question}</Text>
                        <Icon
                            name={activeSections.includes(index) ? 'chevron-up' : 'chevron-down'}
                            type="feather"
                            size={20}
                            color="#007bff"
                        />
                    </TouchableOpacity>
                    <Collapsible collapsed={!activeSections.includes(index)}>
                        <View style={styles.answerContainer}>
                            <Text style={styles.answer}>{item.answer}</Text>
                        </View>
                    </Collapsible>
                </View>
            ))}
            <Text style={styles.reference}>
                Reference: FB Account: Maung Maung ,Yar Zar Aye Cho
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    faqItem: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    questionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    question: {
        fontSize: 18,
        fontWeight: '600',
        color: '#007bff',
    },
    answerContainer: {
        paddingTop: 10,
    },
    answer: {
        fontSize: 16,
        color: '#555',
    },
    reference: {
        fontSize: 12,
        color: '#999',
        marginTop: 20,
    },
});

export default FaqScreen;

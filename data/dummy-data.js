import Category from '../models/category';
import Content from '../models/content';

export const CATEGORIES = [
    new Category('c1', 'စျေးနှုန်းသင်. localဆိုင်များ', '#f5428d'),
    new Category('c2', 'မြန်မာ ဆိုင်များ', '#f54242'),
    new Category('c3', 'လည်ပတ်သင်.သောနေရာများ', '#f5a442'),
    new Category('c4', 'အလုပ်အကိုင်များ', '#f5d142'),
    new Category('c5', 'တည်းခိုစရာ နေရာများ', '#368dff'),
    new Category('c6', 'ဆေးရုံ/ဆေးခန်းများ', '#41d95d'),
    new Category('c7', 'ဆောင်ရန်/ရှောင်ရန်များ', '#9eecff'),
    new Category('c8','အခြေခံ ခမာ စကား','#f5a442'),
];

export const CONTENTS = [
    // c1: စျေးနှုန်းသင်. localဆိုင်များ
    new Content(
        'ct1',
        ['c1'],
        'စျေးနှုန်းသင်. localဆိုင်များ ၁',
        'https://images.unsplash.com/photo-1589470288084-ecad61835772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9jYWwlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D',
        'စျေးနှုန်းသင်. localဆိုင်များကို အမှန်တကယ် ဖော်ပြပါသည်။ ဒီနေရာတွင် စျေးကွက်တွင် ဝယ်ယူရန်အတွက် အထူးပစ္စည်းများ၊ အစားအစာနှင့် အချဉ်သီးများကို ရောင်းချကြသည်။ ဤဆိုင်များတွင် ရရှိနိုင်သော အစားအစာအများစုမှာ လတ်ဆတ်သော ဆန်၊ ငါးပေါင်း၊ ဟင်းခါးနှင့် အသီးအနှံများဖြစ်သည်။ ထို့အပြင် ဈေးကွက်တွင် ထူးခြားသော ပစ္စည်းများ၊ အဝတ်အထည်များ၊ သုတေသနစာအုပ်များနှင့် လက်ဆောင်ပစ္စည်းများကိုလည်း ဝယ်ယူနိုင်သည်။'
    ),
    new Content(
        'ct2',
        ['c1'],
        'စျေးနှုန်းသင်. localဆိုင်များ ၂',
        'https://images.unsplash.com/photo-1600104197373-c07cc35e4f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYWwlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D',
        'စျေးနှုန်းသင်. localဆိုင်များအတွက် မြန်မာနိုင်ငံ၏ လမ်းခရီးသွားများ အတွက် အထူးအဆင်ပြေမှုကို ပေးနိုင်သည်။ အထူးသဖြင့် လမ်းခရီးသွားများ၏ လိုအပ်ချက်များကို ဖြည့်ဆည်းပေးသော ဆိုင်များနှင့် စျေးကွက်များကို ဖော်ပြသည်။ ဤဆိုင်များတွင် လတ်ဆတ်သော အသီးအနှံများ၊ အစားအစာများနှင့် လက်ဆောင်ပစ္စည်းများကို ရောင်းချကြသည်။ လမ်းခရီးသွားများသည် ဈေးကွက်ထဲတွင် ဝယ်ယူရန် အထူးသဖြင့် လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကို ရရှိနိုင်သည်။ ဆိုင်များတွင် ရှိသော အစားအစာများမှာ ထမင်းနှင့် ဟင်းခါး၊ လက်ဖက်စိမ်းနှင့် အသီးအနှံများဖြစ်သည်။ ဈေးကွက်ထဲတွင် လှုပ်ရှားမှုများရှိပြီး ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။'
    ),
    new Content(
        'ct3',
        ['c1'],
        'စျေးနှုန်းသင်. localဆိုင်များ ၃',
        'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvY2FsJTIwbWFya2V0fGVufDB8fDB8fHww',
        'စျေးနှုန်းသင်. localဆိုင်များတွင် ရောင်းချသူများသည် လတ်ဆတ်သော အသီးအနှံများ၊ အစားအစာများနှင့် လက်ဆောင်ပစ္စည်းများကို ရောင်းချကြသည်။ ဈေးကွက်ထဲတွင် ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။ လမ်းခရီးသွားများသည် ဈေးကွက်ထဲတွင် ဝယ်ယူရန် အထူးသဖြင့် လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကို ရရှိနိုင်သည်။ ဆိုင်များတွင် ရှိသော အစားအစာများမှာ ထမင်းနှင့် ဟင်းခါး၊ လက်ဖက်စိမ်းနှင့် အသီးအနှံများဖြစ်သည်။ ဈေးကွက်ထဲတွင် လှုပ်ရှားမှုများရှိပြီး ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။'
    ),
    new Content(
        'ct4',
        ['c1'],
        'စျေးနှုန်းသင်. localဆိုင်များ ၄',
        'https://images.unsplash.com/photo-1611756620393-dcf4539927e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvY2FsJTIwbWFya2V0fGVufDB8fDB8fHww',
        'စျေးနှုန်းသင်. localဆိုင်များတွင် ရောင်းချသူများသည် လတ်ဆတ်သော အသီးအနှံများ၊ အစားအစာများနှင့် လက်ဆောင်ပစ္စည်းများကို ရောင်းချကြသည်။ ဈေးကွက်ထဲတွင် ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။ လမ်းခရီးသွားများသည် ဈေးကွက်ထဲတွင် ဝယ်ယူရန် အထူးသဖြင့် လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကို ရရှိနိုင်သည်။ ဆိုင်များတွင် ရှိသော အစားအစာများမှာ ထမင်းနှင့် ဟင်းခါး၊ လက်ဖက်စိမ်းနှင့် အသီးအနှံများဖြစ်သည်။ ဈေးကွက်ထဲတွင် လှုပ်ရှားမှုများရှိပြီး ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။'
    ),
    new Content(
        'ct5',
        ['c1'],
        'စျေးနှုန်းသင်. localဆိုင်များ ၅',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxvY2FsJTIwbWFya2V0fGVufDB8fDB8fHww',
        'စျေးနှုန်းသင်. localဆိုင်များတွင် ရောင်းချသူများသည် လတ်ဆတ်သော အသီးအနှံများ၊ အစားအစာများနှင့် လက်ဆောင်ပစ္စည်းများကို ရောင်းချကြသည်။ ဈေးကွက်ထဲတွင် ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။ လမ်းခရီးသွားများသည် ဈေးကွက်ထဲတွင် ဝယ်ယူရန် အထူးသဖြင့် လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကို ရရှိနိုင်သည်။ ဆိုင်များတွင် ရှိသော အစားအစာများမှာ ထမင်းနှင့် ဟင်းခါး၊ လက်ဖက်စိမ်းနှင့် အသီးအနှံများဖြစ်သည်။ ဈေးကွက်ထဲတွင် လှုပ်ရှားမှုများရှိပြီး ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။'
    ),
    new Content(
        'ct6',
        ['c1'],
        'စျေးနှုန်းသင်. localဆိုင်များ ၆',
        'https://images.unsplash.com/photo-1554486855-60050042cd53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGxvY2FsJTIwbWFya2V0fGVufDB8fDB8fHww',
        'စျေးနှုန်းသင်. localဆိုင်များတွင် ရောင်းချသူများသည် လတ်ဆတ်သော အသီးအနှံများ၊ အစားအစာများနှင့် လက်ဆောင်ပစ္စည်းများကို ရောင်းချကြသည်။ ဈေးကွက်ထဲတွင် ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။ လမ်းခရီးသွားများသည် ဈေးကွက်ထဲတွင် ဝယ်ယူရန် အထူးသဖြင့် လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကို ရရှိနိုင်သည်။ ဆိုင်များတွင် ရှိသော အစားအစာများမှာ ထမင်းနှင့် ဟင်းခါး၊ လက်ဖက်စိမ်းနှင့် အသီးအနှံများဖြစ်သည်။ ဈေးကွက်ထဲတွင် လှုပ်ရှားမှုများရှိပြီး ဝယ်ယူရသော ပစ္စည်းများသည် လတ်ဆတ်ပြီး အရသာရှိသော အစားအစာများဖြစ်သည်။'
    ),

    // c2: မြန်မာ ဆိုင်များ
    new Content(
        'ct7',
        ['c2'],
        'မြန်မာ ဆိုင်များ ၁',
        'https://lh3.googleusercontent.com/p/AF1QipP37q5d9opyGnlp6B9GdAGXxJtP9hOZCzuGIIcl=s680-w680-h510',
        'မြန်မာ ဆိုင်များတွင် ဝယ်ယူရန်အတွက် စိတ်ဝင်စားဖွယ်ရာပစ္စည်းများ၊ လတ်ဆတ်သော အသီးအနှံများနှင့် အရသာရှိသော အစားအစာများကို ရောင်းချကြသည်။ ဤဆိုင်များတွင် ရရှိနိုင်သော အစားအစာအများစုမှာ မြန်မာ့ရိုးရာ အစားအစာများဖြစ်ပြီး အာဆီဝလုံး၊ မုန့်ဟင်းခါး၊ လက်ဖက်ထမင်း စသည့် အစားအစာများကို ဝယ်ယူနိုင်သည်။ ထို့အပြင် အဝတ်အထည်များ၊ လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကိုလည်း ရောင်းချကြသည်။'
    ),
    new Content(
        'ct8',
        ['c2'],
        'မြန်မာ ဆိုင်များ ၂',
        'https://lh3.googleusercontent.com/p/AF1QipMEU8cCQitlPBftG-trF8ArJMiOptf4J3kr1p4I=s680-w680-h510',
        'မြန်မာ ဆိုင်များတွင် ဝယ်ယူရန်အတွက် စိတ်ဝင်စားဖွယ်ရာပစ္စည်းများ၊ လတ်ဆတ်သော အသီးအနှံများနှင့် အရသာရှိသော အစားအစာများကို ရောင်းချကြသည်။ ဤဆိုင်များတွင် ရရှိနိုင်သော အစားအစာအများစုမှာ မြန်မာ့ရိုးရာ အစားအစာများဖြစ်ပြီး အာဆီဝလုံး၊ မုန့်ဟင်းခါး၊ လက်ဖက်ထမင်း စသည့် အစားအစာများကို ဝယ်ယူနိုင်သည်။ ထို့အပြင် အဝတ်အထည်များ၊ လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကိုလည်း ရောင်းချကြသည်။'
    ),
    new Content(
        'ct9',
        ['c2'],
        'မြန်မာ ဆိုင်များ ၃',
        'https://lh3.googleusercontent.com/p/AF1QipMWLmu5WqgB4DkIvm-S-kTcOz0mCvcGXeZE2gvT=s680-w680-h510',
        'မြန်မာ ဆိုင်များတွင် ဝယ်ယူရန်အတွက် စိတ်ဝင်စားဖွယ်ရာပစ္စည်းများ၊ လတ်ဆတ်သော အသီးအနှံများနှင့် အရသာရှိသော အစားအစာများကို ရောင်းချကြသည်။ ဤဆိုင်များတွင် ရရှိနိုင်သော အစားအစာအများစုမှာ မြန်မာ့ရိုးရာ အစားအစာများဖြစ်ပြီး အာဆီဝလုံး၊ မုန့်ဟင်းခါး၊ လက်ဖက်ထမင်း စသည့် အစားအစာများကို ဝယ်ယူနိုင်သည်။ ထို့အပြင် အဝတ်အထည်များ၊ လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကိုလည်း ရောင်းချကြသည်။'
    ),
    new Content(
        'ct10',
        ['c2'],
        'မြန်မာ ဆိုင်များ ၄',
        'https://lh3.googleusercontent.com/p/AF1QipM8ynh-YqUg0abqqA2n_Tob5FtCzDty7_wkK-Qd=s680-w680-h510',
        'မြန်မာ ဆိုင်များတွင် ဝယ်ယူရန်အတွက် စိတ်ဝင်စားဖွယ်ရာပစ္စည်းများ၊ လတ်ဆတ်သော အသီးအနှံများနှင့် အရသာရှိသော အစားအစာများကို ရောင်းချကြသည်။ ဤဆိုင်များတွင် ရရှိနိုင်သော အစားအစာအများစုမှာ မြန်မာ့ရိုးရာ အစားအစာများဖြစ်ပြီး အာဆီဝလုံး၊ မုန့်ဟင်းခါး၊ လက်ဖက်ထမင်း စသည့် အစားအစာများကို ဝယ်ယူနိုင်သည်။ ထို့အပြင် အဝတ်အထည်များ၊ လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကိုလည်း ရောင်းချကြသည်။'
    ),
    new Content(
        'ct11',
        ['c2'],
        'မြန်မာ ဆိုင်များ ၅',
        'https://aredheadincambodia.wordpress.com/wp-content/uploads/2013/03/0371.jpg?w=300',
        'မြန်မာ ဆိုင်များတွင် ဝယ်ယူရန်အတွက် စိတ်ဝင်စားဖွယ်ရာပစ္စည်းများ၊ လတ်ဆတ်သော အသီးအနှံများနှင့် အရသာရှိသော အစားအစာများကို ရောင်းချကြသည်။ ဤဆိုင်များတွင် ရရှိနိုင်သော အစားအစာအများစုမှာ မြန်မာ့ရိုးရာ အစားအစာများဖြစ်ပြီး အာဆီဝလုံး၊ မုန့်ဟင်းခါး၊ လက်ဖက်ထမင်း စသည့် အစားအစာများကို ဝယ်ယူနိုင်သည်။ ထို့အပြင် အဝတ်အထည်များ၊ လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကိုလည်း ရောင်းချကြသည်။'
    ),
    new Content(
        'ct12',
        ['c2'],
        'မြန်မာ ဆိုင်များ ၆',
        'https://lh3.googleusercontent.com/p/AF1QipNt00nqfnJZxFfg5ilmEqKpYSPuPDPsiwosx_8d=s680-w680-h510',
        'မြန်မာ ဆိုင်များတွင် ဝယ်ယူရန်အတွက် စိတ်ဝင်စားဖွယ်ရာပစ္စည်းများ၊ လတ်ဆတ်သော အသီးအနှံများနှင့် အရသာရှိသော အစားအစာများကို ရောင်းချကြသည်။ ဤဆိုင်များတွင် ရရှိနိုင်သော အစားအစာအများစုမှာ မြန်မာ့ရိုးရာ အစားအစာများဖြစ်ပြီး အာဆီဝလုံး၊ မုန့်ဟင်းခါး၊ လက်ဖက်ထမင်း စသည့် အစားအစာများကို ဝယ်ယူနိုင်သည်။ ထို့အပြင် အဝတ်အထည်များ၊ လက်ဆောင်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများကိုလည်း ရောင်းချကြသည်။'
    ),

    // c3: လည်ပတ်သင်.သောနေရာများ
    new Content(
        'ct13',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ ၁',
        'https://goguides.azureedge.net/media/hxrjavse/11b4988c-106d-4717-86b2-4ed6c1e85363.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
        'မြန်မာနိုင်ငံတွင် လည်ပတ်သင့်သောနေရာများ အများကြီးရှိသည်။ ဤနေရာများတွင် စိတ်ဝင်စားဖွယ်ရာ ဆွဲဆောင်မှုများနှင့် သဘာဝလှပမှုများကို ကြည့်ရှုနိုင်သည်။ အထူးသဖြင့် ဘုရားကျောင်းများ၊ ရှေးဟောင်းအဆောက်အအုံများနှင့် သဘာဝသယံဇာတများတို့ကို လေ့လာနိုင်သည်။'
    ),
    new Content(
        'ct14',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ ၂',
        'https://goguides.azureedge.net/media/jcshwgaz/3f7accc6-dd75-4e78-9b2b-aabf76ef7af5.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
        'မြန်မာနိုင်ငံတွင် လည်ပတ်သင့်သောနေရာများ အများကြီးရှိသည်။ ဤနေရာများတွင် စိတ်ဝင်စားဖွယ်ရာ ဆွဲဆောင်မှုများနှင့် သဘာဝလှပမှုများကို ကြည့်ရှုနိုင်သည်။ အထူးသဖြင့် ဘုရားကျောင်းများ၊ ရှေးဟောင်းအဆောက်အအုံများနှင့် သဘာဝသယံဇာတများတို့ကို လေ့လာနိုင်သည်။'
    ),
    new Content(
        'ct15',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ ၃',
        'https://goguides.azureedge.net/media/l0qno5dd/bd311f56-610f-4c40-8e37-98444cfae17f.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
        'မြန်မာနိုင်ငံတွင် လည်ပတ်သင့်သောနေရာများ အများကြီးရှိသည်။ ဤနေရာများတွင် စိတ်ဝင်စားဖွယ်ရာ ဆွဲဆောင်မှုများနှင့် သဘာဝလှပမှုများကို ကြည့်ရှုနိုင်သည်။ အထူးသဖြင့် ဘုရားကျောင်းများ၊ ရှေးဟောင်းအဆောက်အအုံများနှင့် သဘာဝသယံဇာတများတို့ကို လေ့လာနိုင်သည်။'
    ),
    new Content(
        'ct16',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ ၄',
        'https://goguides.azureedge.net/media/r3jhlij5/bbea9ab8-bf06-45b4-b628-2dc166420808.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
        'မြန်မာနိုင်ငံတွင် လည်ပတ်သင့်သောနေရာများ အများကြီးရှိသည်။ ဤနေရာများတွင် စိတ်ဝင်စားဖွယ်ရာ ဆွဲဆောင်မှုများနှင့် သဘာဝလှပမှုများကို ကြည့်ရှုနိုင်သည်။ အထူးသဖြင့် ဘုရားကျောင်းများ၊ ရှေးဟောင်းအဆောက်အအုံများနှင့် သဘာဝသယံဇာတများတို့ကို လေ့လာနိုင်သည်။'
    ),
    new Content(
        'ct17',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ ၅',
        'https://goguides.azureedge.net/media/xfamgees/9fef05ca-dba2-4de1-bc23-0abcdd69c0eb.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
        'မြန်မာနိုင်ငံတွင် လည်ပတ်သင့်သောနေရာများ အများကြီးရှိသည်။ ဤနေရာများတွင် စိတ်ဝင်စားဖွယ်ရာ ဆွဲဆောင်မှုများနှင့် သဘာဝလှပမှုများကို ကြည့်ရှုနိုင်သည်။ အထူးသဖြင့် ဘုရားကျောင်းများ၊ ရှေးဟောင်းအဆောက်အအုံများနှင့် သဘာဝသယံဇာတများတို့ကို လေ့လာနိုင်သည်။'
    ),
    new Content(
        'ct18',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ ၆',
        'https://goguides.azureedge.net/media/pswewmci/36735c74-a323-4f71-a5f5-4d4c538506ea.jpg?anchor=center&mode=crop&width=1600&height=1066&quality=50',
        'မြန်မာနိုင်ငံတွင် လည်ပတ်သင့်သောနေရာများ အများကြီးရှိသည်။ ဤနေရာများတွင် စိတ်ဝင်စားဖွယ်ရာ ဆွဲဆောင်မှုများနှင့် သဘာဝလှပမှုများကို ကြည့်ရှုနိုင်သည်။ အထူးသဖြင့် ဘုရားကျောင်းများ၊ ရှေးဟောင်းအဆောက်အအုံများနှင့် သဘာဝသယံဇာတများတို့ကို လေ့လာနိုင်သည်။'
    ),

    // c4: အလုပ်အကိုင်များ
    new Content(
        'ct19',
        ['c4'],
        'အလုပ်အကိုင်များ ၁',
        'https://plus.unsplash.com/premium_photo-1661594799674-3ff72093b7f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNhbWJvZGlhJTIwam9ifGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် အလုပ်အကိုင်အခွင့်အလမ်းများ အများကြီးရှိသည်။ ဤနေရာတွင် အလုပ်အကိုင်ရှာဖွေရန် အထူးအဆင်ပြေသော နေရာများနှင့် အလုပ်အကိုင်အတွက် လိုအပ်သော အချက်များကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct20',
        ['c4'],
        'အလုပ်အကိုင်များ ၂',
        'https://plus.unsplash.com/premium_photo-1661607247524-64f8d38e3cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtYm9kaWElMjBqb2IlMjBoaXJpbmd8ZW58MHx8MHx8fDA%3D',
        'မြန်မာနိုင်ငံတွင် အလုပ်အကိုင်အခွင့်အလမ်းများ အများကြီးရှိသည်။ ဤနေရာတွင် အလုပ်အကိုင်ရှာဖွေရန် အထူးအဆင်ပြေသော နေရာများနှင့် အလုပ်အကိုင်အတွက် လိုအပ်သော အချက်များကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct21',
        ['c4'],
        'အလုပ်အကိုင်များ ၃',
        'https://plus.unsplash.com/premium_photo-1661517191467-6a0a2292e054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbWJvZGlhJTIwam9iJTIwaGlyaW5nfGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် အလုပ်အကိုင်အခွင့်အလမ်းများ အများကြီးရှိသည်။ ဤနေရာတွင် အလုပ်အကိုင်ရှာဖွေရန် အထူးအဆင်ပြေသော နေရာများနှင့် အလုပ်အကိုင်အတွက် လိုအပ်သော အချက်များကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct22',
        ['c4'],
        'အလုပ်အကိုင်များ ၄',
        'https://plus.unsplash.com/premium_photo-1661645672144-de1e08be7473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNhbWJvZGlhJTIwam9iJTIwaGlyaW5nfGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် အလုပ်အကိုင်အခွင့်အလမ်းများ အများကြီးရှိသည်။ ဤနေရာတွင် အလုပ်အကိုင်ရှာဖွေရန် အထူးအဆင်ပြေသော နေရာများနှင့် အလုပ်အကိုင်အတွက် လိုအပ်သော အချက်များကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct23',
        ['c4'],
        'အလုပ်အကိုင်များ ၅',
        'https://plus.unsplash.com/premium_photo-1661517142227-aa326744da45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNhbWJvZGlhJTIwam9iJTIwaGlyaW5nfGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် အလုပ်အကိုင်အခွင့်အလမ်းများ အများကြီးရှိသည်။ ဤနေရာတွင် အလုပ်အကိုင်ရှာဖွေရန် အထူးအဆင်ပြေသော နေရာများနှင့် အလုပ်အကိုင်အတွက် လိုအပ်သော အချက်များကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct24',
        ['c4'],
        'အလုပ်အကိုင်များ ၆',
        'https://plus.unsplash.com/premium_photo-1661665287483-d375665ca776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjYW1ib2RpYSUyMGpvYiUyMGhpcmluZ3xlbnwwfHwwfHx8MA%3D%3D',
        'မြန်မာနိုင်ငံတွင် အလုပ်အကိုင်အခွင့်အလမ်းများ အများကြီးရှိသည်။ ဤနေရာတွင် အလုပ်အကိုင်ရှာဖွေရန် အထူးအဆင်ပြေသော နေရာများနှင့် အလုပ်အကိုင်အတွက် လိုအပ်သော အချက်များကို ဖော်ပြသည်။'
    ),

    // c5: တည်းခိုစရာ နေရာများ
    new Content(
        'ct25',
        ['c5'],
        'တည်းခိုစရာ နေရာများ ၁',
        'https://plus.unsplash.com/premium_photo-1691086686283-a5948d046415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwaW4lMjBjYW1ib2RpYXxlbnwwfHwwfHx8MA%3D%3D',
        'မြန်မာနိုင်ငံတွင် တည်းခိုစရာနေရာများ အများကြီးရှိသည်။ ဤနေရာတွင် လုံခြုံသောတည်းခိုနေရာများနှင့် အဆင်ပြေသော ဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct26',
        ['c5'],
        'တည်းခိုစရာ နေရာများ ၂',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် တည်းခိုစရာနေရာများ အများကြီးရှိသည်။ ဤနေရာတွင် လုံခြုံသောတည်းခိုနေရာများနှင့် အဆင်ပြေသော ဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct27',
        ['c5'],
        'တည်းခိုစရာ နေရာများ ၃',
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် တည်းခိုစရာနေရာများ အများကြီးရှိသည်။ ဤနေရာတွင် လုံခြုံသောတည်းခိုနေရာများနှင့် အဆင်ပြေသော ဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct28',
        ['c5'],
        'တည်းခိုစရာ နေရာများ ၄',
        'https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D',
        'မြန်မာနိုင်ငံတွင် တည်းခိုစရာနေရာများ အများကြီးရှိသည်။ ဤနေရာတွင် လုံခြုံသောတည်းခိုနေရာများနှင့် အဆင်ပြေသော ဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct29',
        ['c5'],
        'တည်းခိုစရာ နေရာများ ၅',
        'https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D',
        'မြန်မာနိုင်ငံတွင် တည်းခိုစရာနေရာများ အများကြီးရှိသည်။ ဤနေရာတွင် လုံခြုံသောတည်းခိုနေရာများနှင့် အဆင်ပြေသော ဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct30',
        ['c5'],
        'တည်းခိုစရာ နေရာများ ၆',
        'https://images.unsplash.com/photo-1595262493050-5b0f29ccf4b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D',
        'မြန်မာနိုင်ငံတွင် တည်းခိုစရာနေရာများ အများကြီးရှိသည်။ ဤနေရာတွင် လုံခြုံသောတည်းခိုနေရာများနှင့် အဆင်ပြေသော ဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),

    // c6: ဆေးရုံ/ဆေးခန်းများ
    new Content(
        'ct31',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ ၁',
        'https://cambodiatravel.com/images/2020/10/intro-Best-Hospitals-and-Medical-Centers-in-Phnom-Penh.jpg.webp',
        'မြန်မာနိုင်ငံတွင် ဆေးရုံ/ဆေးခန်းများ၏ အချက်အလက်များကို ဖော်ပြသည်။ ဤနေရာတွင် အဆင်ပြေသော ဆေးရုံ/ဆေးခန်းများနှင့် ဆေးဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct32',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ ၂',
        'https://cambodiatravel.com/images/2020/10/Naga-Clinic-cambodia.jpg.webp',
        'မြန်မာနိုင်ငံတွင် ဆေးရုံ/ဆေးခန်းများ၏ အချက်အလက်များကို ဖော်ပြသည်။ ဤနေရာတွင် အဆင်ပြေသော ဆေးရုံ/ဆေးခန်းများနှင့် ဆေးဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct33',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ ၃',
        'https://cambojanews.com/wp-content/uploads/2023/07/2023-07-28-15.14.12.jpg',
        'မြန်မာနိုင်ငံတွင် ဆေးရုံ/ဆေးခန်းများ၏ အချက်အလက်များကို ဖော်ပြသည်။ ဤနေရာတွင် အဆင်ပြေသော ဆေးရုံ/ဆေးခန်းများနှင့် ဆေးဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct34',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ ၄',
        'https://www.gocambodia.tours/wp-content/uploads/2018/07/U-Care-Pharmacy-Phnom-Penh.jpg',
        'မြန်မာနိုင်ငံတွင် ဆေးရုံ/ဆေးခန်းများ၏ အချက်အလက်များကို ဖော်ပြသည်။ ဤနေရာတွင် အဆင်ပြေသော ဆေးရုံ/ဆေးခန်းများနှင့် ဆေးဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct35',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ ၅',
        'https://c8.alamy.com/comp/R8ME1X/large-green-road-sing-in-sihanoukville-cambodia-points-to-hospital-bus-staion-and-phnom-penh-city-R8ME1X.jpg',
        'မြန်မာနိုင်ငံတွင် ဆေးရုံ/ဆေးခန်းများ၏ အချက်အလက်များကို ဖော်ပြသည်။ ဤနေရာတွင် အဆင်ပြေသော ဆေးရုံ/ဆေးခန်းများနှင့် ဆေးဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),
    new Content(
        'ct36',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ ၆',
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D',
        'မြန်မာနိုင်ငံတွင် ဆေးရုံ/ဆေးခန်းများ၏ အချက်အလက်များကို ဖော်ပြသည်။ ဤနေရာတွင် အဆင်ပြေသော ဆေးရုံ/ဆေးခန်းများနှင့် ဆေးဝန်ဆောင်မှုများကို ဖော်ပြသည်။'
    ),

    // c7: ဆောင်ရန်/ရှောင်ရန်များ
    new Content(
        'ct37',
        ['c7'],
        'ဆောင်ရန်/ရှောင်ရန်များ ၁',
        'https://images.unsplash.com/photo-1581832098405-709cfda0a38b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZvaWR8ZW58MHx8MHx8fDA%3D',
        'ဆောင်ရန်၊ ရှောင်ရန်များ ဆိုတာကို အသုံးများပါ။ နှစ်သက်ရာပြုပြင်ရေးအတွက် ဆောင်ရန်နှင့် ရှောင်ရန်နှင့် အကူအညီများပြုရန် ရည်ရွယ်ပါ။'
    ),
    new Content(
        'ct38',
        ['c7'],
        'ဆောင်ရန်/ရှောင်ရန်များ ၂',
        'https://images.unsplash.com/photo-1543877928-4993f5e161ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2b2lkfGVufDB8fDB8fHww',
        'ဆောင်ရန်၊ ရှောင်ရန်များ ဆိုတာကို အသုံးများပါ။ နှစ်သက်ရာပြုပြင်ရေးအတွက် ဆောင်ရန်နှင့် ရှောင်ရန်နှင့် အကူအညီများပြုရန် ရည်ရွယ်ပါ။'
    ),
    new Content(
        'ct39',
        ['c7'],
        'ဆောင်ရန်/ရှောင်ရန်များ ၃',
        'https://images.unsplash.com/photo-1668433257798-4ec909f0fa2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF2b2lkfGVufDB8fDB8fHww',
        'ဆောင်ရန်၊ ရှောင်ရန်များ ဆိုတာကို အသုံးများပါ။ နှစ်သက်ရာပြုပြင်ရေးအတွက် ဆောင်ရန်နှင့် ရှောင်ရန်နှင့် အကူအညီများပြုရန် ရည်ရွယ်ပါ။'
    ),
    new Content(
        'ct40',
        ['c7'],
        'ဆောင်ရန်/ရှောင်ရန်များ ၄',
        'https://plus.unsplash.com/premium_photo-1667810132139-eabf98b6f35d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2b2lkfGVufDB8fDB8fHww',
        'ဆောင်ရန်၊ ရှောင်ရန်များ ဆိုတာကို အသုံးများပါ။ နှစ်သက်ရာပြုပြင်ရေးအတွက် ဆောင်ရန်နှင့် ရှောင်ရန်နှင့် အကူအညီများပြုရန် ရည်ရွယ်ပါ။'
    ),
    new Content(
        'ct41',
        ['c7'],
        'ဆောင်ရန်/ရှောင်ရန်များ ၅',
        'https://plus.unsplash.com/premium_photo-1674935666154-e88e48759e41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2b2lkfGVufDB8fDB8fHww',
        'ဆောင်ရန်၊ ရှောင်ရန်များ ဆိုတာကို အသုံးများပါ။ နှစ်သက်ရာပြုပြင်ရေးအတွက် ဆောင်ရန်နှင့် ရှောင်ရန်နှင့် အကူအညီများပြုရန် ရည်ရွယ်ပါ။'
    ),
    new Content(
        'ct42',
        ['c8'],
        'အခြေခံ စကား ၁',
        'https://www.gocambodia.tours/wp-content/uploads/2019/05/Cambodian-Language.jpg',
        `စူစတေး => မဂ်လာပါ,
        အော် ကွန်း => ကျေးဇူးတင်ပါတယ်,
        အော် ကွန်း ချရန်း => ကျေးဇူး အများကြီးတင်ပါတယ်
        ခလိုင်ပွန်မိုင်း => ဒါ ဘယ်လောက်လည်း / ဘယ်စျေးလည်း?
        စုံကွစ်တ်လိုင် => ဘေယူခဲ.ပါ ရှင်းမယ်
       `
    ),
    
    new Content(
        'ct43',
        ['c8'],
        'အခြေခံ စကား ၂',
        'https://i.ytimg.com/vi/sSHZy2JWplw/maxresdefault.jpg',
        `စူစတေး => မဂ်လာပါ,
         အော် ကွန်း => ကျေးဇူးတင်ပါတယ်,
         အော် ကွန်း ချရန်း => ကျေးဇူး အများကြီးတင်ပါတယ်
         ခလိုင်ပွန်မိုင်း => ဒါ ဘယ်လောက်လည်း / ဘယ်စျေးလည်း?
         စုံကွစ်တ်လိုင် => ဘေယူခဲ.ပါ ရှင်းမယ်
        `
        
    ),
    
    new Content(
        'ct44',
        ['c8'],
        'အခြေခံ စကား ၃',
        'https://www.gocambodia.tours/wp-content/uploads/2019/04/cambodia-kmer-language.jpg',
        `စူစတေး => မဂ်လာပါ,
        အော် ကွန်း => ကျေးဇူးတင်ပါတယ်,
        အော် ကွန်း ချရန်း => ကျေးဇူး အများကြီးတင်ပါတယ်
        ခလိုင်ပွန်မိုင်း => ဒါ ဘယ်လောက်လည်း / ဘယ်စျေးလည်း?
        စုံကွစ်တ်လိုင် => ဘေယူခဲ.ပါ ရှင်းမယ်
       `
    ),
    
    new Content(
        'ct45',
        ['c8'],
        'အခြေခံ စကား ၄',
        'https://images.saymedia-content.com/.image/t_share/MTc2MzA3Mzk5MjU3NTY0MzMz/khmer-cambodias-official-language.jpg',
        `စူစတေး => မဂ်လာပါ,
        အော် ကွန်း => ကျေးဇူးတင်ပါတယ်,
        အော် ကွန်း ချရန်း => ကျေးဇူး အများကြီးတင်ပါတယ်
        ခလိုင်ပွန်မိုင်း => ဒါ ဘယ်လောက်လည်း / ဘယ်စျေးလည်း?
        စုံကွစ်တ်လိုင် => ဘေယူခဲ.ပါ ရှင်းမယ်
       `
    ),
    
    new Content(
        'ct46',
        ['c8'],
        'အခြေခံ စကား ၅',
        'https://cambodiatravel.com/images/2020/10/Intro-khmer-language-class.jpg.webp',
        `စူစတေး => မဂ်လာပါ,
        အော် ကွန်း => ကျေးဇူးတင်ပါတယ်,
        အော် ကွန်း ချရန်း => ကျေးဇူး အများကြီးတင်ပါတယ်
        ခလိုင်ပွန်မိုင်း => ဒါ ဘယ်လောက်လည်း / ဘယ်စျေးလည်း?
        စုံကွစ်တ်လိုင် => ဘေယူခဲ.ပါ ရှင်းမယ်
       `
    ),    

];
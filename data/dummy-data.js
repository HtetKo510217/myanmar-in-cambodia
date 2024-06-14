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
];

export const CONTENTS = [
    new Content(
        'ct1',
        ['c1', 'c2'],
        'စျေးနှုန်းသင်. localဆိုင်များ',
        'https://plus.unsplash.com/premium_photo-1687131786869-dc26efcbc405?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbWJvZGlhJTIwbWFya2V0fGVufDB8fDB8fHww',
        'မနက်ဖြန်တွက် ပြစ်ပြစ် နှစ်နှစ် အိမ်ချက် ကြာဇံဟင်းခါး ​လေး  ချက်ပါမယ်ခင်ဗျာ🍜😋ထမင်း နဲ့ ဟင်းပဲ စားရတာ ပျင်း​နေသူများတွက် ဒီလို အိမ်ချက် ဟင်းခါးပူပူ ​လေး​တွေ. Alwan Pyay မှာ မှာလို့ရပါတယ်ဗျ🤗မနက်ဖြန် ​နေ့လည် 11:00 Am က စပြီး ပို့​ပေးပါမယ်ဗျOrder to cb or telegram +855 015 496 263'
    ),
    new Content(
        'ct2',
        ['c1', 'c2'],
        'မြန်မာ ဆိုင်များ',
        'https://plus.unsplash.com/premium_photo-1682098240884-9dfc7bf048f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxjYW1ib2RpYSUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D',
        'ရန်ကုန်မြို့တွင် နာမည်ကြီးသော မြန်မာ ဆိုင်များ စုစည်းထားသော ပေါ်တယ်ဖြစ်သည်။ ဤဆိုင်များတွင် မြန်မာ့ အစားအစာအရသာများကို အခြေခံပြီး ရောင်းချသော ဆိုင်များစွာရှိပါသည်။'
    ),
    new Content(
        'ct3',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ',
        'https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8fDA%3D',
        'အင်းလေးကန်သည် မြန်မာနိုင်ငံ၏ အလည်ပတ်ရန်အကြောင်း တစ်ခု ဖြစ်ပါသည်။ အင်းလေးကန်၏ လှပသော သဘာဝ အလှတရားများနှင့် ရေထဲတွင် ရှိသော ရွာများကို လှည့်ပတ်ကြည့်ရှုရမည်။'
    ),
    new Content(
        'ct4',
        ['c3'],
        'လည်ပတ်သင်.သောနေရာများ',
        'https://plus.unsplash.com/premium_photo-1661963850090-cf5b2f556b4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtYm9kaWF8ZW58MHx8MHx8fDA%3D',
        'ပုဂံရှိ ဘုရားကျောင်းများသည် လှပသော နေရာများအနက်တစ်ခု ဖြစ်သည်။ ဤနေရာတွင် အထူးသဖြင့် အိုလီ ဘုရားများနှင့် ဓမ္မရာဇာ ဘုရားများရှိသော ရှေးဟောင်းဝင်နေရာများကို လည်ပတ်ကြည့်ရှုနိုင်ပါသည်။'
    ),
    new Content(
        'ct5',
        ['c4'],
        'အလုပ်အကိုင်များ',
        'https://images.unsplash.com/photo-1683819469709-5efc50fec4ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNhbWJvZGlhJTIwam9ifGVufDB8fDB8fHww',
        'ရန်ကုန်မြို့တွင် အလုပ်အကိုင်များရှာဖွေရန်အတွက် အလွန် အခက်ခဲသည်။ တိုးတက်နေသော အလုပ်အကိုင်များသည် နည်းပါးသောကြောင့် အခက်အခဲများစွာ ရှိပါသည်။'
    ),
    new Content(
        'ct6',
        ['c4'],
        'အလုပ်အကိုင်များ',
        'https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGNhbWJvZGlhJTIwam9ifGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် အလုပ်အကိုင်များရှာဖွေရန်အတွက် အခက်အခဲများကြုံတွေ့ရသည်။ အလုပ်အကိုင် ရှာဖွေရန် လမ်းကြောင်းများနှင့် အကြံပေးမှုများအတွက် လက်တွေ့ နည်းလမ်းများနှင့် ဆွေးနွေးပွဲများလည်း ရှိသည်။'
    ),
    new Content(
        'ct7',
        ['c5'],
        'တည်းခိုစရာ နေရာများ',
        'https://i0.wp.com/www.movetocambodia.com/wp-content/uploads/pavilion-hotel-phnom-penh.jpg?resize=660%2C496&ssl=1',
        'ရန်ကုန်မြို့တွင် တည်းခိုရန် စပ်စီနှင့်သော ဟိုတယ်များရှိပါသည်။ ဤဟိုတယ်များသည် အခန်းပေါင်းစုံနှင့် သုံးစွဲသူများကို လက်ခံကြပါသည်။'
    ),
    new Content(
        'ct8',
        ['c5'],
        'တည်းခိုစရာ နေရာများ',
        'https://i0.wp.com/www.movetocambodia.com/wp-content/uploads/pavilion-hotel-lobby-phnom-penh.jpg?resize=660%2C496&ssl=1',
        'မြန်မာနိုင်ငံ၏ လမ်းကြောင်းများတွင် တည်းခိုရန်အတွက် အကောင်းဆုံးသော နေရာများမှာ ဘော်ဘိုင်ကမ်းခြေရှိ ဟိုတယ်များနှင့် အထူးသဖြင့် အလွန် နာမည်ကြီးသည်။'
    ),
    new Content(
        'ct9',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ',
        'https://i0.wp.com/www.movetocambodia.com/wp-content/uploads/royal-phnom-penh-hospital.jpg?resize=660%2C496&ssl=1',
        'ရန်ကုန်မြို့တွင် ကောင်းမွန်သော ဆေးရုံများစွာရှိသည်။ ဤဆေးရုံများတွင် လူနာများကို ဆေးကုသမှု အထူး ပြုလုပ်ကြသည်။'
    ),
    new Content(
        'ct10',
        ['c6'],
        'ဆေးရုံ/ဆေးခန်းများ',
        'https://i0.wp.com/www.movetocambodia.com/wp-content/uploads/pharmacie-de-la-gare-phnom-penh.jpg?resize=660%2C496&ssl=1',
        'မြန်မာနိုင်ငံရှိ ဆေးရုံများနှင့် ဆေးခန်းများသည် ကျန်းမာရေးပြုစုကုသမှုများကို ထိရောက်စွာ ပြုလုပ်ကြသည်။'
    ),
    new Content(
        'ct11',
        ['c7'],
        'ဆောင်ရန်/ရှောင်ရန်များ',
        'https://images.unsplash.com/photo-1685384785741-f54430b4a30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2b2lkfGVufDB8fDB8fHww',
        'မြန်မာနိုင်ငံတွင် လမ်းကြောင်းများခရီးသွားစဉ် အခြေအနေကို သတိပြုပါ။ ခရီးစဉ်များတွင် လမ်းညွှန်များကို လိုက်နာပြီး လုံခြုံရေးကို ဦးစားပေးရန် အရေးကြီးသည်။'
    ),
    new Content(
        'ct12',
        ['c7'],
        'ဆောင်ရန်/ရှောင်ရန်များ',
        'https://images.unsplash.com/photo-1685384785741-f54430b4a30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2b2lkfGVufDB8fDB8fHww',
        'ခရီးသွားလမ်းစဉ်များတွင် သတိပြုရန်အချက်များမှာ စစ်တပ်စခန်းများနှင့် စစ်ရေးသတိပေးချက်များကို ရှောင်ကြဉ်ရန်ဖြစ်သည်။'
    ),
];

// sentences.js
// Algorithmically generates 10,000 distinct English-Arabic sentences

const subjectsA = [
    {en: "I", ar: "أنا", suf: "", pfx: "أ"},
    {en: "You", ar: "أنت", suf: "", pfx: "ت"},
    {en: "We", ar: "نحن", suf: "", pfx: "ن"},
    {en: "They", ar: "هم", suf: "", pfx: "ي", sufAr: "ون"},
    {en: "The students", ar: "الطلاب", suf: "", pfx: "ي", sufAr: "ون"}
];

const subjectsB = [
    {en: "He", ar: "هو", suf: "s", pfx: "ي"},
    {en: "She", ar: "هي", suf: "s", pfx: "ت"},
    {en: "The child", ar: "الطفل", suf: "s", pfx: "ي"},
    {en: "The man", ar: "الرجل", suf: "s", pfx: "ي"},
    {en: "The woman", ar: "المرأة", suf: "s", pfx: "ت"}
];

const allSubjects = [...subjectsA, ...subjectsB];

// 20 Verbs x 5 Objects = 100 Actions
// 100 Actions x 10 Subjects = 1000 base sentences
// We'll use 10 tenses/forms to get 10,000!

const actions = [
    { v: "like", arA: "حب", objs: [ {e: "apples", a: "التفاح"}, {e: "books", a: "الكتب"}, {e: "cars", a: "السيارات"}, {e: "music", a: "الموسيقى"}, {e: "science", a: "العلوم"} ] },
    { v: "eat", arA: "أكل", objs: [ {e: "pizza", a: "البيتزا"}, {e: "chicken", a: "الدجاج"}, {e: "fish", a: "السمك"}, {e: "bread", a: "الخبز"}, {e: "rice", a: "الأرز"} ] },
    { v: "drink", arA: "شرب", objs: [ {e: "water", a: "الماء"}, {e: "milk", a: "الحليب"}, {e: "tea", a: "الشاي"}, {e: "coffee", a: "القهوة"}, {e: "juice", a: "العصير"} ] },
    { v: "read", arA: "قرأ", objs: [ {e: "a book", a: "كتاباً"}, {e: "the news", a: "الأخبار"}, {e: "a story", a: "قصة"}, {e: "a letter", a: "رسالة"}, {e: "the report", a: "التقرير"} ] },
    { v: "write", arA: "كتب", objs: [ {e: "a letter", a: "رسالة"}, {e: "a story", a: "قصة"}, {e: "code", a: "شيفرة البرمجة"}, {e: "poetry", a: "الشعر"}, {e: "an email", a: "بريداً"} ] },
    { v: "see", arA: "رى", objs: [ {e: "a bird", a: "طائراً"}, {e: "the car", a: "السيارة"}, {e: "the house", a: "المنزل"}, {e: "a tree", a: "شجرة"}, {e: "the stars", a: "النجوم"} ] },
    { v: "want", arA: "ريد", objs: [ {e: "a car", a: "سيارة"}, {e: "a break", a: "استراحة"}, {e: "help", a: "المساعدة"}, {e: "money", a: "المال"}, {e: "time", a: "الوقت"} ] },
    { v: "need", arA: "حتاج", objs: [ {e: "water", a: "الماء"}, {e: "sleep", a: "النوم"}, {e: "support", a: "الدعم"}, {e: "information", a: "معلومات"}, {e: "food", a: "الطعام"} ] },
    { v: "know", arA: "عرف", objs: [ {e: "the answer", a: "الإجابة"}, {e: "the way", a: "الطريق"}, {e: "the truth", a: "الحقيقة"}, {e: "the rules", a: "القواعد"}, {e: "the history", a: "التاريخ"} ] },
    { v: "buy", arA: "شتري", objs: [ {e: "a house", a: "منزلاً"}, {e: "a phone", a: "هاتفاً"}, {e: "clothes", a: "ملابس"}, {e: "gifts", a: "هدايا"}, {e: "shoes", a: "أحذية"} ] },
    { v: "play", arA: "لعب", objs: [ {e: "football", a: "كرة القدم"}, {e: "tennis", a: "التنس"}, {e: "chess", a: "الشطرنج"}, {e: "games", a: "الألعاب"}, {e: "the guitar", a: "الجيتار"} ] },
    { v: "watch", arA: "شاهد", objs: [ {e: "movies", a: "الأفلام"}, {e: "the game", a: "المباراة"}, {e: "the birds", a: "الطيور"}, {e: "TV", a: "التلفاز"}, {e: "the stars", a: "النجوم"} ] },
    { v: "learn", arA: "تعلم", objs: [ {e: "English", a: "الإنجليزية"}, {e: "math", a: "الرياضيات"}, {e: "history", a: "التاريخ"}, {e: "science", a: "العلوم"}, {e: "art", a: "الفن"} ] },
    { v: "find", arA: "جد", objs: [ {e: "the keys", a: "المفاتيح"}, {e: "the treasure", a: "الكنز"}, {e: "a solution", a: "حلاً"}, {e: "the place", a: "المكان"}, {e: "the book", a: "الكتاب"} ] },
    { v: "make", arA: "صنع", objs: [ {e: "art", a: "فناً"}, {e: "a cake", a: "كعكة"}, {e: "a plan", a: "خطة"}, {e: "a decision", a: "قراراً"}, {e: "a mistake", a: "خطأ"} ] },
    { v: "use", arA: "ستخدم", objs: [ {e: "a computer", a: "حاسوباً"}, {e: "a map", a: "خريطة"}, {e: "a pen", a: "قلماً"}, {e: "the phone", a: "الهاتف"}, {e: "the internet", a: "الإنترنت"} ] },
    { v: "build", arA: "بني", objs: [ {e: "a house", a: "منزلاً"}, {e: "a bridge", a: "جسراً"}, {e: "a tower", a: "برجاً"}, {e: "a robot", a: "روبوتاً"}, {e: "a project", a: "مشروعاً"} ] },
    { v: "clean", arA: "نظف", objs: [ {e: "the room", a: "الغرفة"}, {e: "the house", a: "المنزل"}, {e: "the car", a: "السيارة"}, {e: "the kitchen", a: "المطبخ"}, {e: "the windows", a: "النوافذ"} ] },
    { v: "fix", arA: "صلح", objs: [ {e: "the car", a: "السيارة"}, {e: "the computer", a: "الحاسوب"}, {e: "the door", a: "الباب"}, {e: "the broken watch", a: "الساعة المكسورة"}, {e: "the engine", a: "المحرك"} ] },
    { v: "love", arA: "حب", objs: [ {e: "nature", a: "الطبيعة"}, {e: "animals", a: "الحيوانات"}, {e: "peace", a: "السلام"}, {e: "family", a: "العائلة"}, {e: "learning", a: "التعلم"} ] }
];

// Helper to fix specific verb forms
function getVerbForm(v, pfx, sufAr, root) {
    if(v === "like" || v === "love") return pfx + "ح" + (sufAr || "ب"); // e.g. يحب
    if(v === "eat") return pfx === "أ" ? "آكل" : (pfx + "أكل" + (sufAr || ""));
    if(v === "drink") return pfx + "شرب" + (sufAr || "");
    if(v === "read") return pfx + "قرأ" + (sufAr || "");
    if(v === "write") return pfx + "كتب" + (sufAr || "");
    if(v === "see") return pfx === "أ" ? "أرى" : (pfx + "ر" + (sufAr ? "ون" : "ى"));
    if(v === "want") return pfx + "ريد" + (sufAr || "");
    if(v === "need") return pfx + "حتاج" + (sufAr || "");
    if(v === "know") return pfx + "عرف" + (sufAr || "");
    if(v === "buy") return pfx + "شتر" + (sufAr ? "ون" : "ي");
    if(v === "play") return pfx + "لعب" + (sufAr || "");
    if(v === "watch") return pfx + "شاهد" + (sufAr || "");
    if(v === "learn") return pfx + "تعل" + (sufAr ? "مون" : "م");
    if(v === "find") return pfx + "ج" + (sufAr ? "دون" : "د");
    if(v === "make") return pfx + "صنع" + (sufAr || "");
    if(v === "use") return pfx + "ستخدم" + (sufAr || "");
    if(v === "build") return pfx + "بن" + (sufAr ? "ون" : "ي");
    if(v === "clean") return pfx + "نظف" + (sufAr || "");
    if(v === "fix") return pfx + "صلح" + (sufAr || "");
    return pfx + root + (sufAr || "");
}

// Generate phrases
let allSentences = [];

let m = 0;
// We iterate to create 10,000 sentences
while (allSentences.length < 10000) {
    for (let t = 0; t < 10; t++) { // 10 forms/tenses to reach 10,000
        for (let s of allSubjects) {
            for (let a of actions) {
                for (let o of a.objs) {
                    if (allSentences.length >= 10000) break;
                    
                    let en = "";
                    let ar = "";
                    
                    let vBase = a.v;
                    let vEng = a.v + (s.suf === "s" ? (vBase.endsWith("ch") || vBase.endsWith("o") ? "es" : "s") : "");
                    let vArForm = getVerbForm(a.v, s.pfx, s.sufAr, a.arA);

                    if (t === 0) {
                        // Present Simple
                        en = `${s.en} ${vEng} ${o.e}.`;
                        ar = `${s.ar} ${vArForm} ${o.a}.`;
                    } else if (t === 1) {
                        // Always
                        en = `${s.en} always ${vEng} ${o.e}.`;
                        ar = `${s.ar} دائماً ${vArForm} ${o.a}.`;
                    } else if (t === 2) {
                        // Never
                        en = `${s.en} never ${vEng} ${o.e}.`;
                        ar = `${s.ar} لا ${vArForm} ${o.a} أبداً.`;
                    } else if (t === 3) {
                        // Present Negative
                        let auxEn = s.suf === "s" ? "doesn't" : "don't";
                        en = `${s.en} ${auxEn} ${a.v} ${o.e}.`;
                        ar = `${s.ar} لا ${vArForm} ${o.a}.`;
                    } else if (t === 4) {
                        // Can
                        en = `${s.en} can ${a.v} ${o.e}.`;
                        ar = `${s.ar} يستطيع أن ${vArForm} ${o.a}.`;
                        if(s.en === "I") ar = `${s.ar} أستطيع أن ${vArForm} ${o.a}.`;
                        else if(s.en === "We") ar = `${s.ar} نستطيع أن ${vArForm} ${o.a}.`;
                        else if(s.en === "You" || s.en === "She") ar = `${s.ar} تستطيع أن ${vArForm} ${o.a}.`;
                    } else if (t === 5) {
                        // Will
                        en = `${s.en} will ${a.v} ${o.e}.`;
                        ar = `${s.ar} سيتعلم ${o.a}.`; // Placeholder shortcut
                        ar = `${s.ar} س${vArForm} ${o.a}.`;
                    } else if (t === 6) {
                        // Should
                        en = `${s.en} should ${a.v} ${o.e}.`;
                        ar = `يجب أن ${vArForm} ${s.ar} ${o.a}.`;
                    } else if (t === 7) {
                        // Question Present
                        let auxEn = s.suf === "s" ? "Does" : "Do";
                        en = `${auxEn} ${s.en.toLowerCase()} ${a.v} ${o.e}?`;
                        ar = `هل ${s.ar} ${vArForm} ${o.a}؟`;
                    } else if (t === 8) {
                        // Question Will
                        en = `Will ${s.en.toLowerCase()} ${a.v} ${o.e}?`;
                        ar = `هل س${vArForm} ${s.ar} ${o.a}؟`;
                    } else if (t === 9) {
                        // Question Can
                        en = `Can ${s.en.toLowerCase()} ${a.v} ${o.e}?`;
                        ar = `هل يستطيع ${s.ar} أن ${vArForm} ${o.a}؟`;
                    }

                    allSentences.push({ en, ar });
                }
            }
        }
    }
}

// Ensure exactly 10,000 sentences
allSentences = allSentences.slice(0, 10000);

// Randomize array to mix up difficulty smoothly
function shuffleArray(array) {
    let seed = 1;
    for (let i = array.length - 1; i > 0; i--) {
        let x = Math.sin(seed++) * 10000;
        let random = x - Math.floor(x);
        const j = Math.floor(random * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(allSentences);

window.gameSentences = allSentences;
window.getSentencesForLevel = function(levelNum) {
    let zeroIndex = levelNum - 1;
    return allSentences.slice(zeroIndex * 100, (zeroIndex * 100) + 100);
}

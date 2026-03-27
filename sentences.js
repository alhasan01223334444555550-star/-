// sentences.js
// Contains sentences based on important Oxford dictionary vocabulary.
// Note: This file contains a massive core list of distinct sentences.
// To reach exactly 10,000 for the 100 levels without crashing the browser or exceeding file limits,
// the vocabulary will loop/expand dynamically after exhausting the unique base list.

const oxfordSentences = [
    // --- Level 1 : Oxford Foundation Words ---
    {en: "I accept your apology.", ar: "أنا أقبل اعتذارك."},
    {en: "The accident was terrible.", ar: "كان الحادث مريعاً."},
    {en: "He can achieve his goals.", ar: "يمكنه تحقيق أهدافه."},
    {en: "She is an active member.", ar: "هي عضو نشط."},
    {en: "I need some advice.", ar: "أحتاج إلى بعض النصيحة."},
    {en: "This is a huge advantage.", ar: "هذه ميزة ضخمة."},
    {en: "Air is everywhere.", ar: "الهواء موجود في كل مكان."},
    {en: "He walked almost a mile.", ar: "مشى تقريباً ميلاً."},
    {en: "They walk along the beach.", ar: "إنهم يمشون على طول الشاطئ."},
    {en: "I already finished the work.", ar: "لقد أنهيت العمل بالفعل."},
    {en: "We need an alternative plan.", ar: "نحتاج إلى خطة بديلة."},
    {en: "The amount is very small.", ar: "الكمية صغيرة جداً."},
    {en: "He was angry with me.", ar: "كان غاضباً مني."},
    {en: "The animal ran away.", ar: "هرب الحيوان."},
    {en: "Please answer the phone.", ar: "الرجاء الرد على الهاتف."},
    {en: "She felt anxious about the test.", ar: "شعرت بالقلق بشأن الاختبار."},
    {en: "We need anyone to help.", ar: "نحتاج أي شخص للمساعدة."},
    {en: "I must apologize for the delay.", ar: "يجب أن أعتذر عن التأخير."},
    {en: "It is apparent that he is tired.", ar: "من الواضح أنه متعب."},
    {en: "The apple is red.", ar: "التفاحة حمراء."},
    {en: "I approve of this.", ar: "أنا أوافق على هذا."},
    {en: "Use your arms to lift it.", ar: "استخدم ذراعيك لرفعه."},
    {en: "We arrive at noon.", ar: "نحن نصل عند الظهر."},
    {en: "The article was interesting.", ar: "كانت المقالة مثيرة للاهتمام."},
    {en: "Are you asleep?", ar: "هل أنت نائم؟"},
    {en: "He assumes it is true.", ar: "هو يفترض أن ذلك صحيح."},
    {en: "Pay attention to the teacher.", ar: "انتبه للمعلم."},
    {en: "This book is available.", ar: "هذا الكتاب متاح."},
    {en: "He is an average student.", ar: "إنه طالب متوسط."},
    {en: "Stay awake during class.", ar: "ابق مستيقظاً أثناء الدرس."},
    {en: "The baby is crying.", ar: "الطفل يبكي."},
    {en: "My back hurts.", ar: "ظهري يؤلمني."},
    {en: "This is a bad idea.", ar: "هذه فكرة سيئة."},
    {en: "Keep your balance.", ar: "حافظ على توازنك."},
    {en: "The bank is closed.", ar: "البنك مغلق."},
    {en: "This is the basis of our work.", ar: "هذا هو أساس عملنا."},
    {en: "The battle was fierce.", ar: "كانت المعركة شرسة."},
    {en: "She is a beautiful girl.", ar: "إنها فتاة جميلة."},
    {en: "Because he was late.", ar: "لأنه كان متأخراً."},
    {en: "I want to become a doctor.", ar: "أريد أن أصبح طبيباً."},
    {en: "It happens before sunrise.", ar: "يحدث ذلك قبل شروق الشمس."},
    {en: "Let us begin the lesson.", ar: "دعونا نبدأ الدرس."},
    {en: "Look behind the door.", ar: "انظر خلف الباب."},
    {en: "I believe in you.", ar: "أنا أؤمن بك."},
    {en: "The bell is ringing.", ar: "الجرس يرن."},
    {en: "Stay below the speed limit.", ar: "ابق دون الحد الأقصى للسرعة."},
    {en: "Sit beside me.", ar: "اجلس بجانبي."},
    {en: "That is my best friend.", ar: "هذا أفضل صديق لي."},
    {en: "The bird is flying.", ar: "الطائر يطير."},
    {en: "I want a piece of bread.", ar: "أريد قطعة من الخبز."},

    // --- Level 2 : Oxford Essential Words ---
    {en: "We must build a bridge.", ar: "يجب علينا بناء جسر."},
    {en: "She bought a new camera.", ar: "لقد اشترت كاميرا جديدة."},
    {en: "The capital city is crowded.", ar: "العاصمة المزدحمة."},
    {en: "Take care of yourself.", ar: "اعتنِ بنفسك."},
    {en: "They held a grand celebration.", ar: "لقد أقاموا احتفالاً كبيراً."},
    {en: "The center of the room.", ar: "مركز الغرفة."},
    {en: "A century has one hundred years.", ar: "القرن يحتوي على مئة عام."},
    {en: "It is a certain fact.", ar: "إنها حقيقة مؤكدة."},
    {en: "The chair is comfortable.", ar: "الكرسي مريح."},
    {en: "He accepted the challenge.", ar: "لقد قَبِل التحدي."},
    {en: "She has good character.", ar: "لديها شخصية جيدة."},
    {en: "You have a choice.", ar: "لديك خيار."},
    {en: "The church is old.", ar: "الكنيسة قديمة."},
    {en: "The citizens voted today.", ar: "المواطنون صوتوا اليوم."},
    {en: "The claim is false.", ar: "الادعاء كاذب."},
    {en: "The class is listening.", ar: "الفصل يستمع."},
    {en: "Keep the room clean.", ar: "حافظ على نظافة الغرفة."},
    {en: "The climate is changing.", ar: "المناخ يتغير."},
    {en: "The clock is ticking.", ar: "الساعة تدق."},
    {en: "Close the window please.", ar: "أغلق النافذة من فضلك."},
    {en: "The clothes are dry.", ar: "الملابس جافة."},
    {en: "A dark cloud covers the sky.", ar: "سحابة داكنة تغطي السماء."},
    {en: "We formed a club.", ar: "شكلنا نادياً."},
    {en: "Drink some hot coffee.", ar: "اشرب بعض القهوة الساخنة."},
    {en: "Collect the papers.", ar: "اجمع الأوراق."},
    {en: "Which color do you like?", ar: "أي لون يعجبك؟"},
    {en: "Combine the ingredients.", ar: "اجمع المكونات."},
    {en: "The command was clear.", ar: "كان الأمر واضحاً."},
    {en: "We share a common interest.", ar: "نحن نتشارك اهتماماً مشتركاً."},
    {en: "The company is growing.", ar: "الشركة تنمو."},
    {en: "Compare the two items.", ar: "قارن بين العنصرين."},
    {en: "The competition is strong.", ar: "المنافسة قوية."},
    {en: "I complain about the noise.", ar: "أنا أشتكي من الضوضاء."},
    {en: "It is a complex issue.", ar: "إنها قضية معقدة."},
    {en: "Focus on the computer.", ar: "ركز على الحاسوب."},
    {en: "This concept is deep.", ar: "هذا المفهوم عميق."},
    {en: "We must conclude the meeting.", ar: "يجب أن نختتم الاجتماع."},
    {en: "The condition is critical.", ar: "الحالة حرجة."},
    {en: "I have confidence in you.", ar: "لدي ثقة فيك."},
    {en: "Confirm your password.", ar: "قم بتأكيد كلمة المرور الخاصة بك."},
    {en: "Connect the cables.", ar: "قم بتوصيل الكابلات."},
    {en: "Consider the consequences.", ar: "ضع العواقب في اعتبارك."},
    {en: "The container is empty.", ar: "الحاوية فارغة."},
    {en: "Control your emotions.", ar: "سيطر على عواطفك."},
    {en: "We had a long conversation.", ar: "أجرينا محادثة طويلة."},
    {en: "Follow the correct path.", ar: "اتبع المسار الصحيح."},
    {en: "Count from one to ten.", ar: "عِد من واحد إلى عشرة."},
    {en: "The country is beautiful.", ar: "البلد جميل."},
    {en: "To create something new.", ar: "ليبتكر شيئا جديداً."},
    {en: "The crime rate dropped.", ar: "انخفض معدل الجريمة."},

    // --- Level 3 : Oxford Core Words ---
    {en: "The culture is rich.", ar: "الثقافة غنية."},
    {en: "The current flows strongly.", ar: "التيار يتدفق بقوة."},
    {en: "He is a customer.", ar: "إنه زبون."},
    {en: "There is immense danger.", ar: "هناك خطر هائل."},
    {en: "I collect the data.", ar: "أنا أجمع البيانات."},
    {en: "My daughter is young.", ar: "ابنتي صغيرة."},
    {en: "The dead leaves fall.", ar: "الأوراق الميتة تتساقط."},
    {en: "We made a deal.", ar: "لقد عقدنا صفقة."},
    {en: "The debate was intense.", ar: "كان النقاش حاداً."},
    {en: "I have a massive debt.", ar: "لدي دين هائل."},
    {en: "Make a firm decision.", ar: "اتخذ قراراً حازماً."},
    {en: "A deep ocean trench.", ar: "خندق محيطي عميق."},
    {en: "The degree of heat.", ar: "درجة الحرارة."},
    {en: "The delay was unexpected.", ar: "كان التأخير غير متوقع."},
    {en: "I demand an explanation.", ar: "أطالب بتفسير."},
    {en: "Describe the picture.", ar: "صِف الصورة."},
    {en: "Design a new logo.", ar: "صمم شعاراً جديداً."},
    {en: "My desire is strong.", ar: "رغبتي قوية."},
    {en: "The detail matters.", ar: "التفاصيل تهم."},
    {en: "Determine the answer.", ar: "حدد الإجابة."},
    {en: "Develop your skills.", ar: "طور مهاراتك."},
    {en: "Use a different method.", ar: "استخدم طريقة مختلفة."},
    {en: "It is very difficult.", ar: "إنه صعب جداً."},
    {en: "We need direct access.", ar: "نحتاج وصولاً مباشراً."},
    {en: "Discover the hidden truth.", ar: "اكتشف الحقيقة المخفية."},
    {en: "We discuss the problem.", ar: "نناقش المشكلة."},
    {en: "A vast disease spread.", ar: "انتشر مرض واسع."},
    {en: "Display the results.", ar: "اعرض النتائج."},
    {en: "Maintain the distance.", ar: "حافظ على المسافة."},
    {en: "Divide the cake.", ar: "قسّم الكعكة."},
    {en: "The doctor is available.", ar: "الطبيب متاح."},
    {en: "The dog is barking.", ar: "الكلب ينبح."},
    {en: "I doubt his word.", ar: "أشك في كلامه."},
    {en: "Drag the icon.", ar: "اسحب الأيقونة."},
    {en: "Draw a straight line.", ar: "ارسم خطاً مستقيماً."},
    {en: "He is a fast driver.", ar: "إنه سائق سريع."},
    {en: "I dropped the glass.", ar: "لقد أسقطت الكوب."},
    {en: "During the cold winter.", ar: "أثناء الشتاء البارد."},
    {en: "The duty is done.", ar: "تم أداء الواجب."},
    {en: "Earn more money.", ar: "اكسب المزيد من المال."},
    {en: "The earth is round.", ar: "الأرض كروية."},
    {en: "It is an easy task.", ar: "إنها مهمة سهلة."},
    {en: "The economic crisis.", ar: "الأزمة الاقتصادية."},
    {en: "Education is essential.", ar: "التعليم ضروري."},
    {en: "An effective solution.", ar: "حل فعال."},
    {en: "I made an effort.", ar: "لقد بذلت جهداً."},
    {en: "Select the specific element.", ar: "حدد العنصر المحدد."},
    {en: "She feels intense emotion.", ar: "إنها تشعر بعاطفة شديدة."},
    {en: "The empty box.", ar: "الصندوق الفارغ."},
    {en: "Enjoy the beautiful moment.", ar: "استمتع باللحظة الجميلة."}
];

// Combine more words for robust looping up to 10,000 sentences
const OxfordExtraWords = [
    {en: "environment", ar: "البيئة"}, {en: "equipment", ar: "المعدات"}, {en: "error", ar: "الخطأ"},
    {en: "establish", ar: "يؤسس"}, {en: "event", ar: "الحدث"}, {en: "evidence", ar: "الدليل"},
    {en: "exactly", ar: "بالضبط"}, {en: "example", ar: "المثال"}, {en: "exist", ar: "يوجد"},
    {en: "expect", ar: "يتوقع"}, {en: "experience", ar: "الخبرة"}, {en: "explain", ar: "يشرح"},
    {en: "express", ar: "يعبر"}, {en: "extend", ar: "يمتد"}, {en: "factor", ar: "العامل"},
    {en: "factory", ar: "المصنع"}, {en: "fail", ar: "يفشل"}, {en: "family", ar: "العائلة"},
    {en: "famous", ar: "مشهور"}, {en: "feature", ar: "الميزة"}, {en: "feeling", ar: "الشعور"},
    {en: "fiction", ar: "الخيال"}, {en: "field", ar: "الحقل"}, {en: "fight", ar: "يقاتل"},
    {en: "figure", ar: "الشكل"}, {en: "financial", ar: "المالي"}, {en: "finish", ar: "ينهي"},
    {en: "focus", ar: "يركز"}, {en: "force", ar: "القوة"}, {en: "foreign", ar: "أجنبي"},
    {en: "forget", ar: "ينسى"}, {en: "form", ar: "الاستمارة"}, {en: "friend", ar: "الصديق"},
    {en: "function", ar: "الوظيفة"}, {en: "future", ar: "المستقبل"}, {en: "game", ar: "اللعبة"},
    {en: "general", ar: "عام"}, {en: "generate", ar: "يولد"}, {en: "goal", ar: "الهدف"},
    {en: "government", ar: "الحكومة"}, {en: "group", ar: "المجموعة"}, {en: "growth", ar: "النمو"},
    {en: "guess", ar: "يخمن"}, {en: "history", ar: "التاريخ"}, {en: "hospital", ar: "المستشفى"},
    {en: "hotel", ar: "الفندق"}, {en: "human", ar: "بشري"}, {en: "identify", ar: "يحدد"},
    {en: "image", ar: "الصورة"}, {en: "imagine", ar: "يتخيل"}, {en: "impact", ar: "التأثير"}
];

// Sentences Generation Logic to reach 10,000 sentences
let allSentences = [...oxfordSentences];

// To create thousands of sentences from the extra Oxford words
const templatePrefixes = [
    {en: "We must analyze the ", ar: "يجب علينا تحليل "},
    {en: "Please consider the ", ar: "يرجى مراعاة "},
    {en: "This revolves around the ", ar: "هذا يتمحور حول "},
    {en: "They ignored the ", ar: "لقد تجاهلوا "},
    {en: "Let us discuss the ", ar: "دعونا نناقش "},
    {en: "He focuses entirely on the ", ar: "هو يركز تماماً على "},
    {en: "The scientist studied the ", ar: "درس العالم "}
];

// Fill more sentences using extra Oxford words
let extraIndex = 0;
while (allSentences.length < 500) {
    for (let word of OxfordExtraWords) {
        if(allSentences.length >= 500) break;
        let prefix = templatePrefixes[extraIndex % templatePrefixes.length];
        allSentences.push({
            en: prefix.en + word.en + ".",
            ar: prefix.ar + word.ar + "."
        });
        extraIndex++;
    }
}

// Grammatical prefixes to create natural variations of the base sentences without weird placeholders
const prefixesEn = ["", "Indeed, ", "Actually, ", "It is true that ", "Do you know that ", "Yes, ", "No, ", "Clearly, ", "Basically, ", "However, ", "Also, ", "Well, ", "I think ", "They say ", "Of course, ", "Remember that ", "Please note, ", "For sure, ", "Perhaps ", "Maybe "];
const prefixesAr = ["", "بالتأكيد، ", "في الواقع، ", "إنه لمن الصحيح أن ", "هل تعلم أن ", "نعم، ", "لا، ", "بوضوح، ", "أساساً، ", "ومع ذلك، ", "أيضاً، ", "حسناً، ", "أعتقد أن ", "يقولون أن ", "بالطبع، ", "تذكر أن ", "يرجى ملاحظة أن ", "بالتأكيد، ", "ربما ", "لعل "];

let finalSentences = [];

while (finalSentences.length < 10000) {
    let base = allSentences[finalSentences.length % allSentences.length];
    
    // Update prefix context every time we complete a full cycle of 500 words
    let prefixIndex = Math.floor(finalSentences.length / allSentences.length);
    let safePrefixIndex = prefixIndex % prefixesEn.length;
    
    let variationEn = base.en;
    let variationAr = base.ar;
    
    if (safePrefixIndex > 0) {
        let pEn = prefixesEn[safePrefixIndex];
        let pAr = prefixesAr[safePrefixIndex];
        
        // Handle question marks if it's "Do you know that"
        if (pEn === "Do you know that ") {
            variationEn = pEn + variationEn.toLowerCase().replace('.', '?');
            variationAr = pAr + variationAr.replace('.', '؟');
        } else {
            variationEn = pEn + variationEn.toLowerCase();
            variationAr = pAr + variationAr;
        }
    }
    
    finalSentences.push({ en: variationEn, ar: variationAr });
}

window.gameSentences = finalSentences;
window.getSentencesForLevel = function(levelNum) {
    let zeroIndex = levelNum - 1;
    return finalSentences.slice(zeroIndex * 100, (zeroIndex * 100) + 100);
}

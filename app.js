// --- Global Variables ---
let currentCat = "", currentMonth = "", currentTopic = "";
let questions = [];
let currentIndex = 0;
let userAnswers = {}; 
let timer, timeLeft;

// ======================================================
// 🎯 TARGET: JAN 2026 > BIHAR SPECIAL (ONLY)
// ======================================================
const myData = {
    "Jan 2026": {
        "Bihar Special": [
            { q: "विंग्स इंडिया 2026 के दौरान बिहार को किस श्रेणी में राष्ट्रीय पुरस्कार से सम्मानित किया गया?", options: ["क्षेत्रीय संपर्क योजना (RCS) - उड़ान", "कृषि विकास", "डिजिटल शिक्षा", "पर्यटन"], ans: 0, explanation: "बिहार को उत्तर प्रदेश के साथ संयुक्त रूप से 'सर्वाधिक सक्रिय राज्य' श्रेणी में यह पुरस्कार मिला।" },
            { q: "कैथी लिपि के ऐतिहासिक दस्तावेजों को देवनागरी में रूपांतरित करने के लिए कितने विशेषज्ञों का पैनल गठित किया गया है?", options: ["15", "29", "40", "50"], ans: 1, explanation: "राजस्व एवं भूमि सुधार विभाग ने 29 प्रशिक्षित अनुवादकों का पैनल बनाया है।" },
            { q: "1 जनवरी 2026 को बिहार बटालियन की कौन सी स्थापना वर्षगांठ मनाई गई?", options: ["8वीं की 50वीं", "12वीं की 40वीं", "8वीं की 60वीं और 12वीं की 49वीं", "दोनों की 50वीं"], ans: 2, explanation: "8वीं बिहार बटालियन की स्थापना 1965 और 12वीं की 1976 में हुई थी।" },
            { q: "पटना उच्च न्यायालय के 47वें मुख्य न्यायाधीश के रूप में किसने शपथ ली?", options: ["न्यायमूर्ति के. विनोद चंद्रन", "न्यायमूर्ति संगम कुमार साहू", "न्यायमूर्ति प्रवीण कुमार", "न्यायमूर्ति ऋतेश कुमार"], ans: 1, explanation: "न्यायमूर्ति संगम कुमार साहू ने 7 जनवरी 2026 को शपथ ली।" },
            { q: "आईआईटी पटना में बन रहा आधुनिक अनुसंधान पार्क किस मॉडल पर आधारित है?", options: ["आईआईटी दिल्ली", "आईआईटी बॉम्बे", "आईआईटी मद्रास", "आईआईटी कानपुर"], ans: 2, explanation: "यह पार्क 15,000 वर्ग फुट में आईआईटी मद्राas के मॉडल पर विकसित किया जा रहा है।" },
            { q: "13 जनवरी 2026 को हुई मंत्रिपरिषद की बैठक में कुल कितने प्रस्तावों को मंजूरी दी गई?", options: ["32", "43", "50", "25"], ans: 1, explanation: "मुख्यमंत्री नीतीश कुमार की अध्यक्षता में 43 प्रस्तावों को स्वीकृति मिली।" },
            { q: "सोन नदी जल-बंटवारे विवाद के तहत झारखंड को कितना जल आवंटित किया जाएगा?", options: ["7.75 मिलियन एकड़-फुट", "5.75 मिलियन एकड़-फुट", "2.00 मिलियन एकड़-फुट", "1.50 मिलियन एकड़-फुट"], ans: 2, explanation: "सहमति के अनुसार बिहार को 5.75 और झारखंड को 2.00 मिलियन एकड़-फुट जल मिलेगा।" },
            { q: "पटना में विद्युत आपूर्ति को सुधारने के लिए कितने करोड़ की भूमिगत केबलिंग परियोजना को मंजूरी दी गई?", options: ["500 करोड़", "653 करोड़", "800 करोड़", "1000 करोड़"], ans: 1, explanation: "यह परियोजना पटना के 13 प्रमंडलों में लागू की जाएगी।" },
            { q: "पीएम श्री (PM Shri) योजना के तहत बिहार के कितने स्कूलों के लिए निधि स्वीकृत की गई?", options: ["500", "789", "1000", "1200"], ans: 1, explanation: "789 स्कूलों के लिए ₹14.855 अरब की राशि स्वीकृत की गई।" },
            { q: "मुंबई में 'बिहार भवन' के निर्माण हेतु कितनी राशि की प्रशासनिक स्वीकृति दी गई?", options: ["₹100 करोड़", "₹200.5 करोड़", "₹314.2 करोड़", "₹500 करोड़"], ans: 2, explanation: "यह भवन मुंबई आने वाले बिहार के नागरिकों और अधिकारियों की सुविधा के लिए होगा।" },
            { q: "मुख्यमंत्री फेलोशिप योजना के तहत चयनित फेलो को प्रतिमाह कितना मानदेय दिया जाएगा?", options: ["₹25,000 - ₹50,000", "₹50,000 - ₹1,50,000", "₹10,000 - ₹20,000", "₹1,00,000 निश्चित"], ans: 1, explanation: "मानदेय शैक्षणिक योग्यता और अनुभव के आधार पर तय होगा।" },
            { q: "मुख्यमंत्री फेलोशिप योजना के तहत कितने फेलो का चयन किया जाएगा?", options: ["50", "100", "121", "200"], ans: 2, explanation: "योजना के तहत कुल 121 फेलो 2 वर्ष की अवधि के लिए चुने जाएंगे।" },
            { q: "बिहार राज्य पुलिस सम्मेलन 2026 का आयोजन कहाँ किया गया?", options: ["राजगीर", "बोधगया", "पटना", "मुजफ्फरपुर"], ans: 2, explanation: "इसका आयोजन 12-13 जनवरी 2026 को सरदार पटेल भवन, पटना में हुआ।" },
            { q: "बिहार पुलिस की कौन सी नई इकाई का शुभारंभ सम्मेलन के दौरान किया गया?", options: ["STF", "साइबर अपराध एवं सुरक्षा इकाई", "महिला सेल", "पर्यटन पुलिस"], ans: 1, explanation: "इसका उद्देश्य तकनीक-आधारित अपराधों से निपटना है।" },
            { q: "वर्तमान में पटना उच्च न्यायालय में न्यायाधीशों के कुल कितने पद रिक्त हैं?", options: ["10", "16", "20", "5"], ans: 1, explanation: "दो नए न्यायाधीशों की नियुक्ति के बाद अब 53 स्वीकृत पदों में से 16 रिक्त हैं।" },
            { q: "बिहार ने किस वर्ष तक राज्य को पूरी तरह 'कालाजार-मुक्त' बनाने का लक्ष्य रखा है?", options: ["2025", "2026", "2027", "2030"], ans: 2, explanation: "2023 में ब्लॉक स्तर पर उन्मूलन के बाद अब 2027 तक पूर्ण मुक्ति का लक्ष्य है।" },
            { q: "कालाजार किस परजीवी के कारण होता है?", options: ["प्लाज्मोडियम", "लीशमैनिया", "ट्रिपैनोसोमा", "एंटअमीबा"], ans: 1, explanation: "इसे विसरल लीशमैनियासिस (VL) भी कहा जाता है।" },
            { q: "डॉ. वीरेंद्र कुमार भारद्वाज को किस पुस्तक के लिए 'राजनारायण चौधरी बाल साहित्य पुरस्कार' मिला?", options: ["जादू का पिटारा", "देखो मस्त मदारी आया", "बिहार की गाथा", "नन्हे कदम"], ans: 1, explanation: "यह 58 कविताओं का एक बाल कविता संग्रह है।" },
            { q: "बिहार और पटना संग्रहालय को जोड़ने वाली भूमिगत सुरंग की लंबाई कितनी होगी?", options: ["1 किमी", "1.5 किमी", "2 किमी", "3 किमी"], ans: 1, explanation: "यह 1.5 किमी लंबी सुरंग विश्व स्तर की 'हेरिटेज टनल' होगी।" },
            { q: "बिहार के सामान्य प्रशासन विभाग को कौन सा ISO प्रमाणन प्राप्त हुआ है?", options: ["ISO 14001", "ISO 9001:2015", "ISO 27001", "ISO 45001"], ans: 1, explanation: "यह प्रमाणन कर्मचारी प्रबंधन और प्रशासनिक सुधारों के लिए दिया गया है।" }
            q: "दरभंगा राजघराने की किस महारानी का हाल ही में निधन हुआ?", a: ["महारानी राजलक्ष्मी", "महारानी कामसुंदरी देवी", "महारानी प्रिया देवी", "महारानी गायत्री देवी"], c: 1, e: "उनका निधन 12 जनवरी 2026 को 96 वर्ष की आयु में हुआ।" },
    { q: "विश्व का सबसे बड़ा शिवलिंग बिहार के किस जिले में स्थापित किया जा रहा है?", a: ["पश्चिम चंपारण", "पूर्वी चंपारण", "पटना", "गया"], c: 1, e: "यह विराट रामायण मंदिर, कैथवलिया (पूर्वी चंपारण) में स्थापित हो रहा है।" },
    { q: "विराट रामायण मंदिर में स्थापित शिवलिंग की ऊँचाई कितनी है?", a: ["20 फीट", "33 फीट", "50 फीट", "108 फीट"], c: 1, e: "यह 33 फीट ऊँचा शिवलिंग एक ही ग्रेनाइट पत्थर से बना है।" },
    { q: "बैंकॉक में आयोजित 'ITEX 2026' में बिहार के किस व्यक्ति ने स्वर्ण पदक जीता?", a: ["श्रेयस बी. चंद्रा", "नितिन नबीन", "गोपाल जी त्रिवेदी", "विश्वरंजन"], c: 0, e: "उन्होंने AI आधारित डेटाबेस प्रबंधन प्रणाली विकसित करने के लिए यह पदक जीता।" },
    { q: "नितिन नबीन को किस पद पर नियुक्त किया गया है?", a: ["बिहार के राज्यपाल", "भाजपा के राष्ट्रीय अध्यक्ष", "पटना के मेयर", "शिक्षा मंत्री"], c: 1, e: "वे भाजपा के सबसे युवा राष्ट्रीय अध्यक्ष बने हैं।" },
    { q: "बिहार का पहला ऊर्ध्वाधर भूमिगत (Vertical Underground) ऑडिटोरियम 'अर्थशिला' कहाँ स्थित है?", a: ["दानापुर", "बांकीपुर, पटना", "गोला रोड, पटना", "मुजफ्फरपुर"], c: 2, e: "इसका डिजाइन यूनानी थिएटरों की अवधारणा से प्रेरित है।" },
    { q: "डिजिटल भुगतान में सुधार के लिए किस कंपनी को 'EDICON 2026' में सम्मानित किया गया?", a: ["SBPDCL", "NBPDCL", "NTPC", "BSNL"], c: 1, e: "नार्थ बिहार पावर डिस्ट्रीब्यूशन कंपनी लिमिटेड (NBPDCL) को स्वर्ण पुरस्कार मिला।" },
    { q: "हाल ही में जीआई-टैग प्राप्त 'मिथिला मखाना' की पहली समुद्री खेप कहाँ भेजी गई?", a: ["लंदन", "दुबई", "न्यूयॉर्क", "सिंगापुर"], c: 1, e: "पूर्णिया से दो टन मखाना दुबई निर्यात किया गया।" },
    { q: "बिहार मंत्रिपरिषद ने 'महिला रोजगार योजना' के तहत कितनी वित्तीय सहायता की मंजूरी दी है?", a: ["₹1 लाख", "₹2 लाख", "₹5 लाख", "₹10,000"], c: 1, e: "महिला उद्यमियों को ₹2 लाख तक की ब्याज मुक्त सहायता मिलेगी।" },
    { q: "सरकारी कर्मचारियों के लिए जारी 'आचरण नियमावली 2026' का मुख्य फोकस क्या है?", a: ["वेतन वृद्धि", "सोशल मीडिया उपयोग", "पदोन्नति", "स्थानांतरण"], c: 1, e: "इसमें सोशल मीडिया पर राजनीतिक टिप्पणियों और अश्लील सामग्री पोस्ट करने पर रोक है।" },
    { q: "बिहार सेमीकंडक्टर नीति-2026 के तहत भूमि खरीद पर कितनी स्टाम्प शुल्क छूट दी जाएगी?", a: ["50%", "75%", "100%", "25%"], c: 2, e: "नीति के तहत स्टाम्प शुल्क और पंजीकरण शुल्क में 100% छूट मिलेगी।" },
    { q: "वैश्विक क्षमता केंद्र (GCC) नीति 2026 के तहत निवेश पर कितनी सब्सिडी का प्रावधान है?", a: ["10%", "20%", "30%", "50%"], c: 2, e: "आईटी और अनुसंधान क्षेत्र में निवेश पर 30% सब्सिडी (अधिकतम ₹50 करोड़) मिलेगी।" },
    { q: "विद्युत वितरण रेटिंग में बिहार की किस कंपनी को 'A' ग्रेड प्राप्त हुआ है?", a: ["NBPDCL", "SBPDCL", "दोनों को", "किसी को नहीं"], c: 2, e: "NBPDCL को 13वां और SBPDCL को 26वां स्थान मिला, दोनों 'A' ग्रेड में हैं।" },
    { q: "पद्म पुरस्कार 2026 के लिए बिहार से कितने व्यक्तियों का चयन किया गया है?", a: ["1", "3", "5", "10"], c: 1, e: "विशु बंधु, भारत सिंह भारती और गोपाल जी त्रिवेदी को पद्म श्री मिला।" },
    { q: "विशु बंधु (Bishwa Bandhu) का संबंध किस क्षेत्र से है?", a: ["विज्ञान", "कला (लोक नृत्य)", "साहित्य", "समाज सेवा"], c: 1, e: "वे पारंपरिक 'डोमकच' (Domkach) नृत्य को पहचान दिलाने के लिए प्रसिद्ध थे।" },
    { q: "भारत सिंह भारती का जन्म किस जिले में हुआ था?", a: ["पटना", "गया", "भोजपुर", "दरभंगा"], c: 2, e: "वे भोजपुरी लोक संगीत के संरक्षण के लिए जाने जाते हैं।" },
    { q: "गोपाल जी त्रिवेदी को किस क्षेत्र में उत्कृष्ट योगदान के लिए पद्म श्री मिला?", a: ["संगीत", "कृषि (विज्ञान एवं अभियांत्रिकी)", "खेल", "साहित्य"], c: 1, e: "उन्होंने मुजफ्फरपुर में लीची और मक्का की खेती में सुधार के लिए कार्य किया।" },
    { q: "बिहार रेजिमेंट की 5वीं बटालियन का स्थापना दिवस कब मनाया गया?", a: ["1 जनवरी", "12 जनवरी", "28 जनवरी", "30 मार्च"], c: 2, e: "28 जनवरी 2026 को दानापुर छावनी में 64वां स्थापना दिवस मनाया गया।" },
    { q: "बिहार का पहला 'पेपरलेस जिला' कौन बना है?", a: ["पटना", "मधुबनी", "पूर्णिया", "नालंदा"], c: 1, e: "मधुबनी बिहार का पहला पेपरलेस जिला घोषित किया गया है।" },
    { q: "राजगीर में 'जल-आधारित लेजर लाइट एंड साउंड शो' कहाँ आयोजित किया जाएगा?", a: ["वेणु वन", "पांडु पोखर", "घोरा कटोरा", "शांति स्तूप"], c: 1, e: "यह शो 1 मार्च 2026 से पांडु पोखर में शुरू होगा।"
        ],
        "National": [],
        "International": [],
        "Economy": []
    }
};

// --- Step Navigation ---
function showStep(s, val) {
    document.querySelectorAll('.step').forEach(d => d.classList.remove('active'));
    document.getElementById('step' + s).classList.add('active');
    if(s===2) currentCat = val;
    if(s===3) currentMonth = val;
}

// --- Start Mock Test ---
function startMock(topic) {
    currentTopic = topic;
    // Check path: Month > Topic
    questions = (myData[currentMonth] && myData[currentMonth][topic]) ? myData[currentMonth][topic] : [];
    
    if(questions.length === 0) {
        alert("Is section mein sawal nahi hain. Kripya 'Jan 2026' aur 'Bihar Special' chunein.");
        return;
    }
    
    currentIndex = 0;
    userAnswers = {};
    showStep(4);
    
    document.getElementById('test-title').innerText = `${currentMonth} > ${topic}`;
    document.querySelector('.nav-controls').style.display = 'flex';
    document.getElementById('palette-area').style.display = 'flex';
    
    let mins = parseInt(document.getElementById('setTimer').value);
    timeLeft = mins * 60;
    startTimer();
    renderQuestion();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        document.getElementById('time-left').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if(timeLeft <= 0) { clearInterval(timer); finishTest(); }
    }, 1000);
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const q = questions[currentIndex];
    container.innerHTML = `
        <div class="q-card">
            <p><b>Q${currentIndex + 1} / ${questions.length}:</b></p>
            <p>${q.q}</p>
            ${q.options.map((opt, i) => `
                <button class="opt-btn ${userAnswers[currentIndex] === i ? 'selected-opt' : ''}" 
                onclick="selectOption(${i})">${opt}</button>
            `).join('')}
        </div>
    `;
    renderPalette();
}

function selectOption(i) {
    userAnswers[currentIndex] = i;
    renderQuestion();
}

// Next/Prev Navigation
function changeQ(dir) {
    if(currentIndex + dir >= 0 && currentIndex + dir < questions.length) {
        currentIndex += dir;
        renderQuestion();
    }
}

function skipQ() {
    if(userAnswers[currentIndex] === undefined) userAnswers[currentIndex] = null;
    changeQ(1);
}

function jumpTo(i) {
    currentIndex = i;
    renderQuestion();
}

function renderPalette() {
    const pal = document.getElementById('palette-area');
    pal.innerHTML = questions.map((_, i) => {
        let cls = "";
        if(i === currentIndex) cls = "pal-current";
        else if(userAnswers[i] !== undefined && userAnswers[i] !== null) cls = "pal-answered";
        else if(userAnswers[i] === null) cls = "pal-skipped";
        return `<div class="pal-item ${cls}" onclick="jumpTo(${i})">${i+1}</div>`;
    }).join('');
}

function finishTest() {
    clearInterval(timer);
    const container = document.getElementById('quiz-container');
    let correct = 0, wrong = 0, skipped = 0;
    let neg = parseFloat(document.getElementById('negVal').value);

    questions.forEach((q, i) => {
        if(userAnswers[i] === q.ans) correct++;
        else if(userAnswers[i] === undefined || userAnswers[i] === null) skipped++;
        else wrong++;
    });

    let score = (correct * 1) - (wrong * neg);
    container.innerHTML = `
        <div style="text-align:center;">
            <h2>Result Analysis</h2>
            <h1 style="color:#007bff;">${score.toFixed(2)} / ${questions.length}</h1>
            <p>✅ Sahi: ${correct} | ❌ Galat: ${wrong} | ⏩ Skipped: ${skipped}</p>
            <button class="main-menu" style="background:#28a745" onclick="viewSolutions()">Solutions & Explanations</button>
            <button class="main-menu" onclick="startMock('${currentTopic}')">Re-attempt</button>
            <button class="main-menu" style="background:#333" onclick="location.reload()">Back to Home</button>
        </div>
    `;
    document.querySelector('.nav-controls').style.display = 'none';
    document.getElementById('palette-area').style.display = 'none';
}

function viewSolutions() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `<h3 style="text-align:center;">Solutions</h3>` + 
    questions.map((q, i) => `
        <div class="q-card" style="border-left:5px solid ${userAnswers[i] === q.ans ? 'green' : 'red'}">
            <p><b>Q${i+1}:</b> ${q.q}</p>
            <p style="color:green">Sahi Answer: ${q.options[q.ans]}</p>
            <div style="background:#fff3cd; padding:10px; border-radius:5px; font-size:14px; margin-top:5px; border:1px solid #ffeeba;">
                <b>Explanation:</b> ${q.explanation}
            </div>
        </div>
    `).join('') + `<button class="main-menu" onclick="location.reload()">Home Par Jayein</button>`;
}

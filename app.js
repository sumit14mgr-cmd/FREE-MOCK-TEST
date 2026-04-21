let currentCat = "", currentMonth = "", currentTopic = "";
let questions = [];
let currentIndex = 0;
let userAnswers = {}; 
let timer, timeLeft;

// ======================================================
// 🎯 EXACT LOCATION: YAHAN QUESTION PASTE KAREIN
// ======================================================
const myData = {
    "Jan 2026": {
        "Bihar": [
            { 
                q: "विंग्स इंडिया 2026 के दौरान बिहार को किस श्रेणी में राष्ट्रीय पुरस्कार से सम्मानित किया गया?", a: ["क्षेत्रीय संपर्क योजना (RCS) - उड़ान", "कृषि विकास", "डिजिटल शिक्षा", "पर्यटन"], c: 0, e: "बिहार को उत्तर प्रदेश के साथ संयुक्त रूप से 'सर्वाधिक सक्रिय राज्य' श्रेणी में यह पुरस्कार मिला।" },
    { q: "कैथी लिपि के ऐतिहासिक दस्तावेजों को देवनागरी में रूपांतरित करने के लिए कितने विशेषज्ञों का पैनल गठित किया गया है?", a: ["15", "29", "40", "50"], c: 1, e: "राजस्व एवं भूमि सुधार विभाग ने 29 प्रशिक्षित अनुवादकों का पैनल बनाया है।" },
    { q: "1 जनवरी 2026 को बिहार बटालियन की कौन सी स्थापना वर्षगांठ मनाई गई?", a: ["8वीं की 50वीं", "12वीं की 40वीं", "8वीं की 60वीं और 12वीं की 49वीं", "दोनों की 50वीं"], c: 2, e: "8वीं बिहार बटालियन की स्थापना 1965 और 12वीं की 1976 में हुई थी।" },
    { q: "पटना उच्च न्यायालय के 47वें मुख्य न्यायाधीश के रूप में किसने शपथ ली?", a: ["न्यायमूर्ति के. विनोद चंद्रन", "न्यायमूर्ति संगम कुमार साहू", "न्यायमूर्ति प्रवीण कुमार", "न्यायमूर्ति ऋतेश कुमार"], c: 1, e: "न्यायमूर्ति संगम कुमार साहू ने 7 जनवरी 2026 को शपथ ली।" },
    { q: "आईआईटी पटना में बन रहा आधुनिक अनुसंधान पार्क किस मॉडल पर आधारित है?", a: ["आईआईटी दिल्ली", "आईआईटी बॉम्बे", "आईआईटी मद्रास", "आईआईटी कानपुर"], c: 2, e: "यह पार्क 15,000 वर्ग फुट में आईआईटी मद्रास के मॉडल पर विकसित किया जा रहा है।" },
    { q: "13 जनवरी 2026 को हुई मंत्रिपरिषद की बैठक में कुल कितने प्रस्तावों को मंजूरी दी गई?", a: ["32", "43", "50", "25"], c: 1, e: "मुख्यमंत्री नीतीश कुमार की अध्यक्षता में 43 प्रस्तावों को स्वीकृति मिली।" },
    { q: "सोन नदी जल-बंटवारे विवाद के तहत झारखंड को कितना जल आवंटित किया जाएगा?", a: ["7.75 मिलियन एकड़-फुट", "5.75 मिलियन एकड़-फुट", "2.00 मिलियन एकड़-फुट", "1.50 मिलियन एकड़-फुट"], c: 2, e: "सहमति के अनुसार बिहार को 5.75 और झारखंड को 2.00 मिलियन एकड़-फुट जल मिलेगा।" },
    { q: "पटना में विद्युत आपूर्ति को सुधारने के लिए कितने करोड़ की भूमिगत केबलिंग परियोजना को मंजूरी दी गई?", a: ["500 करोड़", "653 करोड़", "800 करोड़", "1000 करोड़"], c: 1, e: "यह परियोजना पटना के 13 प्रमंडलों में लागू की जाएगी।" },
    { q: "पीएम श्री (PM Shri) योजना के तहत बिहार के कितने स्कूलों के लिए निधि स्वीकृत की गई?", a: ["500", "789", "1000", "1200"], c: 1, e: "789 स्कूलों के लिए ₹14.855 अरब की राशि स्वीकृत की गई।" },
    { q: "मुंबई में 'बिहार भवन' के निर्माण हेतु कितनी राशि की प्रशासनिक स्वीकृति दी गई?", a: ["₹100 करोड़", "₹200.5 करोड़", "₹314.2 करोड़", "₹500 करोड़"], c: 2, e: "यह भवन मुंबई आने वाले बिहार के नागरिकों और अधिकारियों की सुविधा के लिए होगा।" },
    { q: "मुख्यमंत्री फेलोशिप योजना के तहत चयनित फेलो को प्रतिमाह कितना मानदेय दिया जाएगा?", a: ["₹25,000 - ₹50,000", "₹50,000 - ₹1,50,000", "₹10,000 - ₹20,000", "₹1,00,000 निश्चित"], c: 1, e: "मानदेय शैक्षणिक योग्यता और अनुभव के आधार पर तय होगा।" },
    { q: "मुख्यमंत्री फेलोशिप योजना के तहत कितने फेलो का चयन किया जाएगा?", a: ["50", "100", "121", "200"], c: 2, e: "योजना के तहत कुल 121 फेलो 2 वर्ष की अवधि के लिए चुने जाएंगे।" },
    { q: "बिहार राज्य पुलिस सम्मेलन 2026 का आयोजन कहाँ किया गया?", a: ["राजगीर", "बोधगया", "पटना", "मुजफ्फरपुर"], c: 2, e: "इसका आयोजन 12-13 जनवरी 2026 को सरदार पटेल भवन, पटना में हुआ।" },
    { q: "बिहार पुलिस की कौन सी नई इकाई का शुभारंभ सम्मेलन के दौरान किया गया?", a: ["STF", "साइबर अपराध एवं सुरक्षा इकाई", "महिला सेल", "पर्यटन पुलिस"], c: 1, e: "इसका उद्देश्य तकनीक-आधारित अपराधों से निपटना है।" },
    { q: "वर्तमान में पटना उच्च न्यायालय में न्यायाधीशों के कुल कितने पद रिक्त हैं?", a: ["10", "16", "20", "5"], c: 1, e: "दो नए न्यायाधीशों की नियुक्ति के बाद अब 53 स्वीकृत पदों में से 16 रिक्त हैं।" },
    { q: "बिहार ने किस वर्ष तक राज्य को पूरी तरह 'कालाजार-मुक्त' बनाने का लक्ष्य रखा है?", a: ["2025", "2026", "2027", "2030"], c: 2, e: "2023 में ब्लॉक स्तर पर उन्मूलन के बाद अब 2027 तक पूर्ण मुक्ति का लक्ष्य है।" },
    { q: "कालाजार किस परजीवी के कारण होता है?", a: ["प्लाज्मोडियम", "लीशमैनिया", "ट्रिपैनोसोमा", "एंटअमीबा"], c: 1, e: "इसे विसरल लीशमैनियासिस (VL) भी कहा जाता है।" },
    { q: "डॉ. वीरेंद्र कुमार भारद्वाज को किस पुस्तक के लिए 'राजनारायण चौधरी बाल साहित्य पुरस्कार' मिला?", a: ["जादू का पिटारा", "देखो मस्त मदारी आया", "बिहार की गाथा", "नन्हे कदम"], c: 1, e: "यह 58 कविताओं का एक बाल कविता संग्रह है।" },
    { q: "बिहार और पटना संग्रहालय को जोड़ने वाली भूमिगत सुरंग की लंबाई कितनी होगी?", a: ["1 किमी", "1.5 किमी", "2 किमी", "3 किमी"], c: 1, e: "यह 1.5 किमी लंबी सुरंग विश्व स्तर की 'हेरिटेज टनल' होगी।" },
    { q: "बिहार के सामान्य प्रशासन विभाग को कौन सा ISO प्रमाणन प्राप्त हुआ है?", a: ["ISO 14001", "ISO 9001:2015", "ISO 27001", "ISO 45001"], c: 1, e: "यह प्रमाणन कर्मचारी प्रबंधन और प्रशासनिक सुधारों के लिए दिया गया है।"}
        ],
        "Bihar Special": [
            { 
                q: "Bihar ke kis jile mein naye IT Park ka udghatan hua?", 
                options: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"], 
                ans: 0,
                explanation: "Patna ke Bihta ilake mein naya IT hub banaya gaya hai."
            },
            // Naye Bihar Special questions yahan paste karein
        ]
    }
};
// ======================================================

function showStep(s, val) {
    document.querySelectorAll('.step').forEach(d => d.classList.remove('active'));
    document.getElementById('step' + s).classList.add('active');
    if(s===2) currentCat = val;
    if(s===3) currentMonth = val;
}

function startMock(topic) {
    currentTopic = topic;
    questions = myData[currentMonth][topic] || [];
    if(questions.length === 0) { alert("Data nahi mila!"); return; }
    
    currentIndex = 0;
    userAnswers = {};
    showStep(4);
    document.getElementById('test-title').innerText = `${currentMonth} - ${topic}`;
    
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
        if(timeLeft <= 0) finishTest();
    }, 1000);
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const q = questions[currentIndex];
    container.innerHTML = `
        <div class="q-card">
            <p><b>Q${currentIndex + 1}:</b> ${q.q}</p>
            ${q.options.map((opt, i) => `
                <button class="opt-btn ${userAnswers[currentIndex] === i ? 'selected-opt' : ''}" 
                onclick="selectOption(${i})">${opt}</button>
            `).join('')}
        </div>
    `;
    renderPalette();
}

function selectOption(i) { userAnswers[currentIndex] = i; renderQuestion(); }

function changeQ(dir) {
    if(currentIndex + dir >= 0 && currentIndex + dir < questions.length) {
        currentIndex += dir;
        renderQuestion();
    }
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

    let finalScore = (correct * 1) - (wrong * neg);
    let status = finalScore > (questions.length / 2) ? "Strong" : "Needs Improvement";

    container.innerHTML = `
        <div style="text-align:center; padding:20px;">
            <h2>Result Analysis</h2>
            <h1 style="color:var(--primary)">${finalScore.toFixed(2)} / ${questions.length}</h1>
            <p>✅ Correct: ${correct} | ❌ Wrong: ${wrong} | ⏩ Skipped: ${skipped}</p>
            <div style="background:#e9ecef; padding:10px; border-radius:8px;">
                <strong>Topic Status:</strong> ${status} (${currentTopic})
            </div>
            <button class="main-menu" style="background:var(--success); margin-top:15px;" onclick="viewSolutions()">View Solutions & Explanations</button>
            <button class="main-menu" style="background:var(--primary); margin-top:10px;" onclick="startMock('${currentTopic}')">Re-attempt Test</button>
            <button class="main-menu" style="background:var(--dark); margin-top:10px;" onclick="location.reload()">Back to Home</button>
        </div>
    `;
    document.querySelector('.nav-controls').style.display = 'none';
    document.getElementById('palette-area').style.display = 'none';
}

function viewSolutions() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `<h2>Solutions</h2>` + questions.map((q, i) => {
        let userSelection = userAnswers[i];
        let isCorrect = userSelection === q.ans;
        return `
            <div class="q-card" style="border-left: 5px solid ${isCorrect ? 'green' : 'red'}">
                <p><b>Q${i+1}:</b> ${q.q}</p>
                <p style="color:green"><b>Sahi Jawab:</b> ${q.options[q.ans]}</p>
                <p style="color:${isCorrect ? 'green' : 'red'}"><b>Aapka Jawab:</b> ${userSelection !== undefined ? q.options[userSelection] : 'Nahi diya'}</p>
                <div style="background:#f1f3f5; padding:10px; font-size:14px; border-radius:5px; margin-top:10px;">
                    <b>Explanation:</b> ${q.explanation}
                </div>
            </div>
        `;
    }).join('');
}

function renderPalette() {
    const pal = document.getElementById('palette-area');
    pal.innerHTML = questions.map((_, i) => `
        <div class="pal-item ${i === currentIndex ? 'pal-current' : (userAnswers[i] !== undefined ? 'pal-answered' : '')}" 
        onclick="jumpTo(${i})">${i+1}</div>
    `).join('');
}
function jumpTo(i) { currentIndex = i; renderQuestion(); }

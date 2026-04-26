const questions = [
    { q: "विंग्स इंडिया 2026 के दौरान बिहार को किस श्रेणी में राष्ट्रीय पुरस्कार से सम्मानित किया गया?", a: ["क्षेत्रीय संपर्क योजना (RCS) - उड़ान", "कृषि विकास", "डिजिटल शिक्षा", "पर्यटन"], c: 0, e: "बिहार को उत्तर प्रदेश के साथ संयुक्त रूप से 'सर्वाधिक सक्रिय राज्य' श्रेणी में यह पुरस्कार मिला।" },
    { q: "कैथी लिपि के ऐतिहासिक दस्तावेजों को देवनागरी में रूपांतरित करने के लिए कितने विशेषज्ञों का पैनल गठित किया गया है?", a: ["15", "29", "40", "50"], c: 1, e: "राजस्व एवं भूमि सुधार विभाग ने 29 प्रशिक्षित अनुवादकों का पैनल बनाया है।" },
    { q: "1 जनवरी 2026 को बिहार बटालियन की कौन सी स्थापना वर्षगांठ मनाई गई?", a: ["8वीं की 50वीं", "12वीं की 40वीं", "8वीं की 60वीं और 12वीं की 49वीं", "दोनों की 50वीं"], c: 2, e: "8वीं बिहार बटालियन की स्थापना 1965 और 12वीं की 1976 in hui thi." },
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
    { q: "डॉ. वीरेंद्र कुमार भारद्वाज को किस पुस्तक के लिए 'राजनारायण चौधरी बाल साहित्य पुरस्कार' मिला?", a: ["जादू का पिटारा", "देखो मस्त मदारी आया", "बिहार की गाथा", "नन्हे कदम"], c: 1, e: "यह 58 कविताओं का एक बाल कविता संग्रह hai." },
    { q: "बिहार और पटना संग्रहालय को जोड़ने वाली भूमिगत सुरंग की लंबाई कितनी होगी?", a: ["1 किमी", "1.5 किमी", "2 किमी", "3 किमी"], c: 1, e: "यह 1.5 किमी लंबी सुरंग विश्व स्तर की 'हेरिटेज टनल' होगी।" },
    { q: "बिहार के सामान्य प्रशासन विभाग को कौन सा ISO प्रमाणन प्राप्त हुआ है?", a: ["ISO 14001", "ISO 9001:2015", "ISO 27001", "ISO 45001"], c: 1, e: "यह प्रमाणन कर्मचारी प्रबंधन और प्रशासनिक सुधारों के लिए दिया गया है।" }
];

let qIndex = 0, userAns = {}, timer, timeLeft = 0;

// Universal View Switcher
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
}

// Button Functions
function showSetView() { showView('set-view'); }
function prepareSettings() { showView('settings-view'); }

function startQuizNow() {
    qIndex = 0; 
    userAns = {};
    timeLeft = parseInt(document.getElementById('timeLimitInput').value) * 60;
    showView('quiz-view');
    loadQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        let m = Math.floor(timeLeft / 60), s = timeLeft % 60;
        document.getElementById('timer-display').innerText = `Time: ${m}:${s < 10 ? '0' : ''}${s}`;
        if (timeLeft-- <= 0) { 
            clearInterval(timer); 
            finishQuiz(); 
        }
    }, 1000);
}

function loadQuestion() {
    const q = questions[qIndex];
    document.getElementById('q-count').innerText = `Question ${qIndex + 1} / ${questions.length}`;
    document.getElementById('question-area').innerHTML = `<div class="q-text">${q.q}</div>`;
    document.getElementById('options-list').innerHTML = q.a.map((opt, i) => `
        <div class="option ${userAns[qIndex] === i ? 'selected' : ''}" onclick="saveAns(${i})">${opt}</div>
    `).join('');
    
    const isLast = qIndex === questions.length - 1;
    document.getElementById('nextBtn').style.display = isLast ? 'none' : 'block';
    document.getElementById('finalSubmitBtn').style.display = isLast ? 'block' : 'none';
}

function saveAns(i) { userAns[qIndex] = i; loadQuestion(); }
function changeQuestion(n) { if(qIndex + n >= 0 && qIndex + n < questions.length) { qIndex += n; loadQuestion(); } }

function finishQuiz() {
    clearInterval(timer);
    showView('result-view');
    let correct = 0, wrong = 0, neg = parseFloat(document.getElementById('negMarkInput').value), wrongIdxs = [];
    
    questions.forEach((q, i) => {
        if(userAns[i] === q.c) correct++;
        else if(userAns[i] !== undefined) {
            wrong++;
            wrongIdxs.push(i);
        }
    });

    document.getElementById('res-total').innerText = questions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = (correct - (wrong * neg)).toFixed(2);

    let aHtml = "<h3>Weak Areas (Review Mistakes):</h3>";
    wrongIdxs.forEach(idx => {
        aHtml += `<span class="q-link" onclick="showSolutions(${idx})">Q${idx+1}</span>`;
    });
    document.getElementById('analysis-box').innerHTML = wrongIdxs.length ? aHtml : "🌟 Perfect! Zero Mistakes.";
}

function showSolutions(mode) {
    showView('solution-view');
    let target = (mode === 'all') ? questions.map((_, i) => i) : [mode];
    
    document.getElementById('solution-list').innerHTML = target.map(i => {
        let q = questions[i], u = userAns[i];
        let optsHtml = q.a.map((opt, oi) => {
            let cls = "sol-option";
            if(oi === q.c) cls += " correct-pick";
            else if(oi === u) cls += " wrong-pick";
            return `<div class="${cls}">${opt}</div>`;
        }).join('');

        return `
        <div class="sol-card">
            <p><b>Q${i+1}: ${q.q}</b></p>
            <div>${optsHtml}</div>
            <div class="exp-box"><b>Explanation:</b> ${q.e}</div>
        </div>`;
    }).join('');
}

// Database logic ko barkarar rakha gaya hai
const database = {
    "jan_2026": {
        "bihar_special_1": [
            { 
                qh: "विंग्स इंडिया 2026 के दौरान बिहार को किस श्रेणी में राष्ट्रीय पुरस्कार से सम्मानित किया गया?", 
                qe: "In which category was Bihar honored with a national award during Wings India 2026?", 
                ah: ["क्षेत्रीय संपर्क योजना (RCS) - उड़ान", "कृषि विकास", "डिजिटल शिक्षा", "पर्यटन"], 
                ae: ["Regional Connectivity Scheme (RCS) - UDAN", "Agricultural Development", "Digital Education", "Tourism"], 
                c: 0, 
                e: "Bihar received this award jointly with UP in 'Most Active State' category." 
            },
            { 
                qh: "कैथी लिपि के ऐतिहासिक दस्तावेजों को देवनागरी में रूपांतरित करने के लिए कितने विशेषज्ञों का पैनल गठित किया गया है?", 
                qe: "How many experts' panel has been formed to convert historical documents of Kaithi script into Devanagari?", 
                ah: ["15", "29", "40", "50"], 
                ae: ["15", "29", "40", "50"], 
                c: 1, 
                e: "Revenue and Land Reforms Department formed a panel of 29 trained translators." 
            },
            { 
                qh: "1 जनवरी 2026 को बिहार बटालियन की कौन सी स्थापना वर्षगांठ मनाई गई?", 
                qe: "Which raising day anniversary of Bihar Battalion was celebrated on January 1, 2026?", 
                ah: ["8वीं की 50वीं", "12वीं की 40वीं", "8वीं की 60वीं और 12वीं की 49वीं", "दोनों की 50वीं"], 
                ae: ["50th of 8th", "40th of 12th", "60th of 8th and 49th of 12th", "50th of both"], 
                c: 2, 
                e: "8th Bihar Battalion was raised in 1965 and 12th in 1976." 
            },
            { 
                qh: "पटना उच्च न्यायालय के 47वें मुख्य न्यायाधीश के रूप में किसने शपथ ली?", 
                qe: "Who took oath as the 47th Chief Justice of Patna High Court?", 
                ah: ["न्यायमूर्ति के. विनोद चंद्रन", "न्यायमूर्ति संगम कुमार साहू", "न्यायमूर्ति प्रवीण कुमार", "न्यायमूर्ति ऋतेश कुमार"], 
                ae: ["Justice K. Vinod Chandran", "Justice Sangam Kumar Sahu", "Justice Praveen Kumar", "Justice Ritesh Kumar"], 
                c: 1, 
                e: "Justice Sangam Kumar Sahu took oath on January 7, 2026." 
            },
            { 
                qh: "आईआईटी पटना में बन रहा आधुनिक अनुसंधान पार्क किस मॉडल पर आधारित है?", 
                qe: "The modern research park being built at IIT Patna is based on which model?", 
                ah: ["आईआईटी दिल्ली", "आईआईटी बॉम्बे", "आईआईटी मद्रास", "आईआईटी कानपुर"], 
                ae: ["IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur"], 
                c: 2, 
                e: "This park is being developed on the model of IIT Madras." 
            },
            { 
                qh: "13 जनवरी 2026 को हुई मंत्रिपरिषद की बैठक में कुल कितने प्रस्तावों को मंजूरी दी गई?", 
                qe: "How many proposals were approved in the cabinet meeting held on January 13, 2026?", 
                ah: ["32", "43", "50", "25"], 
                ae: ["32", "43", "50", "25"], 
                c: 1, 
                e: "43 proposals were approved under the chairmanship of CM Nitish Kumar." 
            },
            { 
                qh: "सोन नदी जल-बंटवारे विवाद के तहत झारखंड को कितना जल आवंटित किया जाएगा?", 
                qe: "How much water will be allocated to Jharkhand under the Son River water-sharing dispute?", 
                ah: ["7.75 MAF", "5.75 MAF", "2.00 MAF", "1.50 MAF"], 
                ae: ["7.75 Million Acre-Feet", "5.75 Million Acre-Feet", "2.00 Million Acre-Feet", "1.50 Million Acre-Feet"], 
                c: 2, 
                e: "Bihar will get 5.75 and Jharkhand 2.00 million acre-feet." 
            },
            { 
                qh: "पटना में विद्युत आपूर्ति को सुधारने के लिए कितने करोड़ की भूमिगत केबलिंग परियोजना को मंजूरी दी गई?", 
                qe: "How many crore underground cabling project has been approved for Patna?", 
                ah: ["500 करोड़", "653 करोड़", "800 करोड़", "1000 करोड़"], 
                ae: ["500 Cr", "653 Cr", "800 Cr", "1000 Cr"], 
                c: 1, 
                e: "Project approved for 13 divisions in Patna." 
            },
            { 
                qh: "पीएम श्री (PM Shri) योजना के तहत बिहार के कितने स्कूलों के लिए निधि स्वीकृत की गई?", 
                qe: "For how many schools in Bihar has funding been approved under PM Shri?", 
                ah: ["500", "789", "1000", "1200"], 
                ae: ["500", "789", "1000", "1200"], 
                c: 1, 
                e: "₹14.855 billion approved for 789 schools." 
            },
            { 
                qh: "मुंबई में 'बिहार भवन' के निर्माण हेतु कितनी राशि की प्रशासनिक स्वीकृति दी गई?", 
                qe: "What amount of administrative approval was given for 'Bihar Bhavan' in Mumbai?", 
                ah: ["₹100 करोड़", "₹200.5 करोड़", "₹314.2 करोड़", "₹500 करोड़"], 
                ae: ["₹100 Cr", "₹200.5 Cr", "₹314.2 Cr", "₹500 Cr"], 
                c: 2, 
                e: "Approved for the convenience of Bihar citizens visiting Mumbai." 
            },
            { 
                qh: "मुख्यमंत्री फेलोशिप योजना के तहत चयनित फेलो को प्रतिमाह कितना मानदेय दिया जाएगा?", 
                qe: "What monthly stipend will be given under the CM Fellowship Scheme?", 
                ah: ["₹25,000 - ₹50,000", "₹50,000 - ₹1,50,000", "₹10,000 - ₹20,000", "₹1,00,000 निश्चित"], 
                ae: ["₹25k - ₹50k", "₹50k - ₹1.5L", "₹10k - ₹20k", "₹1L Fixed"], 
                c: 1, 
                e: "Decided based on qualification and experience." 
            },
            { 
                qh: "मुख्यमंत्री फेलोशिप योजना के तहत कितने फेलो का चयन किया जाएगा?", 
                qe: "How many fellows will be selected under the CM Fellowship Scheme?", 
                ah: ["50", "100", "121", "200"], 
                ae: ["50", "100", "121", "200"], 
                c: 2, 
                e: "121 fellows will be selected for 2 years." 
            },
            { 
                qh: "बिहार राज्य पुलिस सम्मेलन 2026 का आयोजन कहाँ किया गया?", 
                qe: "Where was the Bihar State Police Conference 2026 organized?", 
                ah: ["राजगीर", "बोधगया", "पटना", "मुजफ्फरपुर"], 
                ae: ["Rajgir", "Bodh Gaya", "Patna", "Muzaffarpur"], 
                c: 2, 
                e: "Held at Sardar Patel Bhavan, Patna." 
            },
            { 
                qh: "बिहार पुलिस की कौन सी नई इकाई का शुभारंभ सम्मेलन के दौरान किया गया?", 
                qe: "Which new unit of Bihar Police was launched during the conference?", 
                ah: ["STF", "साइबर अपराध एवं सुरक्षा इकाई", "महिला सेल", "पर्यटन पुलिस"], 
                ae: ["STF", "Cyber Crime & Security Unit", "Women Cell", "Tourism Police"], 
                c: 1, 
                e: "Aims to deal with tech-based crimes." 
            },
            { 
                qh: "वर्तमान में पटना उच्च न्यायालय में न्यायाधीशों के कुल कितने पद रिक्त हैं?", 
                qe: "How many posts of judges are currently vacant in Patna High Court?", 
                ah: ["10", "16", "20", "5"], 
                ae: ["10", "16", "20", "5"], 
                c: 1, 
                e: "16 posts are vacant out of 53 sanctioned posts." 
            },
            { 
                qh: "बिहार ने किस वर्ष तक राज्य को पूरी तरह 'कालाजार-मुक्त' बनाने का लक्ष्य रखा है?", 
                qe: "By which year has Bihar aimed to make the state 'Kala-azar free'?", 
                ah: ["2025", "2026", "2027", "2030"], 
                ae: ["2025", "2026", "2027", "2030"], 
                c: 2, 
                e: "Target set for complete elimination by 2027." 
            },
            { 
                qh: "कालाजार किस परजीवी के कारण होता है?", 
                qe: "Kala-azar is caused by which parasite?", 
                ah: ["प्लाज्मोडियम", "लीशमैनिया", "ट्रिपैनोसोमा", "एंटअमीबा"], 
                ae: ["Plasmodium", "Leishmania", "Trypanosoma", "Entamoeba"], 
                c: 1, 
                e: "Known as Visceral Leishmaniasis (VL)." 
            },
            { 
                qh: "डॉ. वीरेंद्र कुमार भारद्वाज को किस पुस्तक के लिए 'राजनारायण चौधरी बाल साहित्य पुरस्कार' मिला?", 
                qe: "For which book did Dr. Virendra Kumar receive the award?", 
                ah: ["जादू का पिटारा", "देखो मस्त मदारी आया", "बिहार की गाथा", "नन्हे कदम"], 
                ae: ["Jadu Ka Pitara", "Dekho Mast Madari Aya", "Bihar Ki Gatha", "Nanhe Kadam"], 
                c: 1, 
                e: "A collection of 58 children's poems." 
            },
            { 
                qh: "बिहार और पटना संग्रहालय को जोड़ने वाली भूमिगत सुरंग की लंबाई कितनी होगी?", 
                qe: "Length of the underground tunnel connecting Bihar and Patna Museum?", 
                ah: ["1 किमी", "1.5 किमी", "2 किमी", "3 किमी"], 
                ae: ["1 km", "1.5 km", "2 km", "3 km"], 
                c: 1, 
                e: "1.5 km long world-class Heritage Tunnel." 
            },
            { 
                qh: "बिहार के सामान्य प्रशासन विभाग को कौन सा ISO प्रमाणन प्राप्त हुआ है?", 
                qe: "Which ISO certification received by Bihar General Admin Dept?", 
                ah: ["ISO 14001", "ISO 9001:2015", "ISO 27001", "ISO 45001"], 
                ae: ["ISO 14001", "ISO 9001:2015", "ISO 27001", "ISO 45001"], 
                c: 1, 
                e: "Received for employee management reforms." 
            }
        ]
    }
};

let currentQuestions = [];
let qIndex = 0, userAns = {}, timer, timeLeft = 0;

// Views logic - same as before
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
}

function showSetView() { showView('set-view'); }

function prepareSettings() {
    // Jan 2026 ka Bihar Special 1 load kar rahe hain
    currentQuestions = database["jan_2026"]["bihar_special_1"]; 
    showView('settings-view');
}

function startQuizNow() {
    qIndex = 0; userAns = {};
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
        if (timeLeft-- <= 0) { clearInterval(timer); finishQuiz(); }
    }, 1000);
}

function loadQuestion() {
    const q = currentQuestions[qIndex];
    document.getElementById('q-count').innerText = `Question ${qIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('question-area').innerHTML = `
        <div class="q-text"><b>H:</b> ${q.qh}</div>
        <div class="q-text" style="color:#666; font-size:16px;"><b>E:</b> ${q.qe}</div>
    `;
    document.getElementById('options-list').innerHTML = q.ah.map((opt, i) => `
        <div class="option ${userAns[qIndex] === i ? 'selected' : ''}" onclick="saveAns(${i})">
            <b>${opt}</b><br><small style="color:#555">${q.ae[i]}</small>
        </div>
    `).join('');
    
    const isLast = qIndex === currentQuestions.length - 1;
    document.getElementById('nextBtn').style.display = isLast ? 'none' : 'block';
    document.getElementById('finalSubmitBtn').style.display = isLast ? 'block' : 'none';
}

function saveAns(i) { userAns[qIndex] = i; loadQuestion(); }
function changeQuestion(n) { if(qIndex + n >= 0 && qIndex + n < currentQuestions.length) { qIndex += n; loadQuestion(); } }

function finishQuiz() {
    clearInterval(timer);
    showView('result-view');
    let correct = 0, wrong = 0, neg = parseFloat(document.getElementById('negMarkInput').value), wrongIdxs = [];
    currentQuestions.forEach((q, i) => {
        if(userAns[i] === q.c) correct++;
        else if(userAns[i] !== undefined) { wrong++; wrongIdxs.push(i); }
    });
    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = (correct - (wrong * neg)).toFixed(2);

    let aHtml = "<h3>Review Mistakes:</h3>";
    wrongIdxs.forEach(idx => { aHtml += `<span class="q-link" onclick="showSolutions(${idx})">Q${idx+1}</span>`; });
    document.getElementById('analysis-box').innerHTML = wrongIdxs.length ? aHtml : "🌟 Perfect Score!";
}

function showSolutions(mode) {
    showView('solution-view');
    let target = (mode === 'all') ? currentQuestions.map((_, i) => i) : [mode];
    document.getElementById('solution-list').innerHTML = target.map(i => {
        let q = currentQuestions[i], u = userAns[i];
        let optsHtml = q.ah.map((opt, oi) => {
            let cls = "sol-option";
            if(oi === q.c) cls += " correct-pick";
            else if(oi === u) cls += " wrong-pick";
            return `<div class="${cls}"><b>${opt}</b> (${q.ae[oi]})</div>`;
        }).join('');
        return `<div class="sol-card"><p><b>Q${i+1}: ${q.qh}</b></p><div>${optsHtml}</div><div class="exp-box">${q.e}</div></div>`;
    }).join('');
}

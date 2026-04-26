// DATABASE: Isme Set 1 aur Set 2 dono ka poora data hai
const database = {
    "jan_2026": {
        "bihar_special_1": [
            { qh: "विंग्स इंडिया 2026 के दौरान बिहार को किस श्रेणी में राष्ट्रीय पुरस्कार से सम्मानित किया गया?", qe: "In which category was Bihar honored with a national award during Wings India 2026?", ah: ["क्षेत्रीय संपर्क योजना (RCS) - उड़ान", "कृषि विकास", "डिजिटल शिक्षा", "पर्यटन"], ae: ["Regional Connectivity Scheme (RCS) - UDAN", "Agricultural Development", "Digital Education", "Tourism"], c: 0, topic: "Awards & Honors", e: "Bihar received this award jointly with UP in 'Most Active State' category." },
            { qh: "कैथी लिपि के ऐतिहासिक दस्तावेजों को देवनागरी में रूपांतरित करने के लिए कितने विशेषज्ञों का पैनल गठित किया गया है?", qe: "How many experts' panel has been formed to convert historical documents of Kaithi script into Devanagari?", ah: ["15", "29", "40", "50"], ae: ["15", "29", "40", "50"], c: 1, topic: "Art & Culture", e: "Revenue and Land Reforms Department formed a panel of 29 trained translators." },
            { qh: "1 जनवरी 2026 को बिहार बटालियन की कौन सी स्थापना वर्षगांठ मनाई गई?", qe: "Which raising day anniversary of Bihar Battalion was celebrated on January 1, 2026?", ah: ["8वीं की 50वीं", "12वीं की 40वीं", "8वीं की 60वीं और 12वीं की 49वीं", "दोनों की 50वीं"], ae: ["50th of 8th", "40th of 12th", "60th of 8th and 49th of 12th", "50th of both"], c: 2, topic: "Defense", e: "8th Bihar Battalion was raised in 1965 and 12th in 1976." },
            { qh: "पटना उच्च न्यायालय के 47वें मुख्य न्यायाधीश के रूप में किसने शपथ ली?", qe: "Who took oath as the 47th Chief Justice of Patna High Court?", ah: ["न्यायमूर्ति के. विनोद चंद्रन", "न्यायमूर्ति संगम कुमार साहू", "न्यायमूर्ति प्रवीण कुमार", "न्यायमूर्ति ऋतेश कुमार"], ae: ["Justice K. Vinod Chandran", "Justice Sangam Kumar Sahu", "Justice Praveen Kumar", "Justice Ritesh Kumar"], c: 1, topic: "Appointment", e: "Justice Sangam Kumar Sahu took oath on January 7, 2026." },
            { qh: "आईआईटी पटना में बन रहा आधुनिक अनुसंधान पार्क किस मॉडल पर आधारित है?", qe: "The modern research park being built at IIT Patna is based on which model?", ah: ["आईआईटी दिल्ली", "आईआईटी बॉम्बे", "आईआईटी मद्रास", "आईआईटी कानपुर"], ae: ["IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur"], c: 2, topic: "Science & Tech", e: "This park is being developed on the model of IIT Madras." },
            { qh: "13 जनवरी 2026 को हुई मंत्रिपरिषद की बैठक में कुल कितने प्रस्तावों को मंजूरी दी गई?", qe: "How many proposals were approved in the cabinet meeting held on January 13, 2026?", ah: ["32", "43", "50", "25"], ae: ["32", "43", "50", "25"], c: 1, topic: "Governance", e: "43 proposals were approved under the chairmanship of CM Nitish Kumar." },
            { qh: "सोन नदी जल-बंटवारे विवाद के तहत झारखंड को कितना जल आवंटित किया जाएगा?", qe: "How much water will be allocated to Jharkhand under the Son River water-sharing dispute?", ah: ["7.75 MAF", "5.75 MAF", "2.00 MAF", "1.50 MAF"], ae: ["7.75 Million Acre-Feet", "5.75 Million Acre-Feet", "2.00 Million Acre-Feet", "1.50 Million Acre-Feet"], c: 2, topic: "Geography/Polity", e: "Bihar will get 5.75 and Jharkhand 2.00 million acre-feet." },
            { qh: "पटना में विद्युत आपूर्ति को सुधारने के लिए कितने करोड़ की भूमिगत केबलिंग परियोजना को मंजूरी दी गई?", qe: "How many crore underground cabling project has been approved for Patna?", ah: ["500 करोड़", "653 करोड़", "800 करोड़", "1000 करोड़"], ae: ["500 Cr", "653 Cr", "800 Cr", "1000 Cr"], c: 1, topic: "Infrastructure", e: "Project approved for 13 divisions in Patna." },
            { qh: "पीएम श्री (PM Shri) योजना के तहत बिहार के कितने स्कूलों के लिए निधि स्वीकृत की गई?", qe: "For how many schools in Bihar has funding been approved under PM Shri?", ah: ["500", "789", "1000", "1200"], ae: ["500", "789", "1000", "1200"], c: 1, topic: "Schemes", e: "₹14.855 billion approved for 789 schools." },
            { qh: "मुंबई में 'बिहार भवन' के निर्माण हेतु कितनी राशि की प्रशासनिक स्वीकृति दी गई?", qe: "What amount of administrative approval was given for 'Bihar Bhavan' in Mumbai?", ah: ["₹100 करोड़", "₹200.5 करोड़", "₹314.2 करोड़", "₹500 करोड़"], ae: ["₹100 Cr", "₹200.5 Cr", "₹314.2 Cr", "₹500 Cr"], c: 2, topic: "Infrastructure", e: "Approved for the convenience of Bihar citizens visiting Mumbai." },
            { qh: "मुख्यमंत्री फेलोशिप योजना के तहत चयनित फेलो को प्रतिमाह कितना मानदेय दिया जाएगा?", qe: "What monthly stipend will be given under the CM Fellowship Scheme?", ah: ["₹25,000 - ₹50,000", "₹50,000 - ₹1,50,000", "₹10,000 - ₹20,000", "₹1,00,000 निश्चित"], ae: ["₹25k - ₹50k", "₹50k - ₹1.5L", "₹10k - ₹20k", "₹1L Fixed"], c: 1, topic: "Schemes", e: "Decided based on qualification and experience." },
            { qh: "मुख्यमंत्री फेलोशिप योजना के तहत कितने फेलो का चयन किया जाएगा?", qe: "How many fellows will be selected under the CM Fellowship Scheme?", ah: ["50", "100", "121", "200"], ae: ["50", "100", "121", "200"], c: 2, topic: "Schemes", e: "121 fellows will be selected for 2 years." },
            { qh: "बिहार राज्य पुलिस सम्मेलन 2026 का आयोजन कहाँ किया गया?", qe: "Where was the Bihar State Police Conference 2026 organized?", ah: ["राजगीर", "बोधगया", "पटना", "मुजफ्फरपुर"], ae: ["Rajgir", "Bodh Gaya", "Patna", "Muzaffarpur"], c: 2, topic: "Governance", e: "Held at Sardar Patel Bhavan, Patna." },
            { qh: "बिहार पुलिस की कौन सी नई इकाई का शुभारंभ सम्मेलन के दौरान किया गया?", qe: "Which new unit of Bihar Police was launched during the conference?", ah: ["STF", "साइबर अपराध एवं सुरक्षा इकाई", "महिला सेल", "पर्यटन पुलिस"], ae: ["STF", "Cyber Crime & Security Unit", "Women Cell", "Tourism Police"], c: 1, topic: "Security", e: "Aims to deal with tech-based crimes." },
            { qh: "वर्तमान में पटना उच्च न्यायालय में न्यायाधीशों के कुल कितने पद रिक्त हैं?", qe: "How many posts of judges are currently vacant in Patna High Court?", ah: ["10", "16", "20", "5"], ae: ["10", "16", "20", "5"], c: 1, topic: "Judiciary", e: "16 posts are vacant out of 53 sanctioned posts." },
            { qh: "बिहार ने किस वर्ष तक राज्य को पूरी तरह 'कालाजार-मुक्त' बनाने का लक्ष्य रखा है?", qe: "By which year has Bihar aimed to make the state 'Kala-azar free'?", ah: ["2025", "2026", "2027", "2030"], ae: ["2025", "2026", "2027", "2030"], c: 2, topic: "Health", e: "Target set for complete elimination by 2027." },
            { qh: "कालाजार किस परजीवी के कारण होता है?", qe: "Kala-azar is caused by which parasite?", ah: ["प्लाज्मोडियम", "लीशमैनिया", "ट्रिपैनोसोमा", "एंटअमीबा"], ae: ["Plasmodium", "Leishmania", "Trypanosoma", "Entamoeba"], c: 1, topic: "Science & Health", e: "Known as Visceral Leishmaniasis (VL)." },
            { qh: "डॉ. वीरेंद्र कुमार भारद्वाज को किस पुस्तक के लिए 'राजनारायण चौधरी बाल साहित्य पुरस्कार' मिला?", qe: "For which book did Dr. Virendra Kumar receive the award?", ah: ["जादू का पिटारा", "देखो मस्त मदारी आया", "बिहार की गाथा", "नन्हे कदम"], ae: ["Jadu Ka Pitara", "Dekho Mast Madari Aya", "Bihar Ki Gatha", "Nanhe Kadam"], c: 1, topic: "Awards & Honors", e: "A collection of 58 children's poems." },
            { qh: "बिहार और पटना संग्रहालय को जोड़ने वाली भूमिगत सुरंग की लंबाई कितनी होगी?", qe: "Length of the underground tunnel connecting Bihar and Patna Museum?", ah: ["1 किमी", "1.5 किमी", "2 किमी", "3 किमी"], ae: ["1 km", "1.5 km", "2 km", "3 km"], c: 1, topic: "Infrastructure", e: "1.5 km long world-class Heritage Tunnel." },
            { qh: "बिहार के सामान्य प्रशासन विभाग को कौन सा ISO प्रमाणन प्राप्त हुआ है?", qe: "Which ISO certification received by Bihar General Admin Dept?", ah: ["ISO 14001", "ISO 9001:2015", "ISO 27001", "ISO 45001"], ae: ["ISO 14001", "ISO 9001:2015", "ISO 27001", "ISO 45001"], c: 1, topic: "Governance", e: "Received for employee management reforms." }
        ],
        "bihar_special_2": [
            { qh: "दरभंगा राजघराने की किस महारानी का हाल ही में निधन हुआ?", qe: "Which Queen of Darbhanga Raj family passed away recently?", ah: ["महारानी राजलक्ष्मी", "महारानी कामसुंदरी देवी", "महारानी प्रिया देवी", "महारानी गायत्री देवी"], ae: ["Maharani Rajlaxmi", "Maharani Kamsundari Devi", "Maharani Priya Devi", "Maharani Gayatri Devi"], c: 1, topic: "Obituary", e: "उनका निधन 12 जनवरी 2026 को 96 वर्ष की आयु में हुआ।" },
            { qh: "विश्व का सबसे बड़ा शिवलिंग बिहार के किस जिले में स्थापित किया जा रहा है?", qe: "In which district of Bihar is the world's largest Shivling being installed?", ah: ["पश्चिम चंपारण", "पूर्वी चंपारण", "पटना", "गया"], ae: ["West Champaran", "East Champaran", "Patna", "Gaya"], c: 1, topic: "Infrastructure", e: "यह विराट रामायण मंदिर, कैथवलिया (पूर्वी चंपारण) में स्थापित हो रहा है।" },
            { qh: "विराट रामायण मंदिर में स्थापित शिवलिंग की ऊँचाई कितनी है?", qe: "What is the height of the Shivling installed in Virat Ramayan Temple?", ah: ["20 फीट", "33 फीट", "50 फीट", "108 फीट"], ae: ["20 ft", "33 ft", "50 ft", "108 ft"], c: 1, topic: "Infrastructure", e: "यह 33 फीट ऊँचा शिवलिंग एक ही ग्रेनाइट पत्थर से बना है।" },
            { qh: "बैंकॉक में आयोजित 'ITEX 2026' में बिहार के किस व्यक्ति ने स्वर्ण पदक जीता?", qe: "Who from Bihar won the gold medal at 'ITEX 2026' held in Bangkok?", ah: ["श्रेयस बी. चंद्रा", "नितिन नबीन", "गोपाल जी त्रिवेदी", "विश्वरंजन"], ae: ["Shreyas B. Chandra", "Nitin Nabin", "Gopal Ji Trivedi", "Vishwaranjan"], c: 0, topic: "Awards/Science", e: "उन्होंने AI आधारित डेटाबेस प्रबंधन प्रणाली विकसित करने के लिए यह पदक जीता।" },
            { qh: "नितिन नबीन को किस पद पर नियुक्त किया गया है?", qe: "To which post has Nitin Nabin been appointed?", ah: ["बिहार के राज्यपाल", "भाजपा के राष्ट्रीय अध्यक्ष", "पटना के मेयर", "शिक्षा मंत्री"], ae: ["Governor of Bihar", "National President of BJP", "Mayor of Patna", "Education Minister"], c: 1, topic: "Appointment", e: "वे भाजपा के सबसे युवा राष्ट्रीय अध्यक्ष बने हैं।" },
            { qh: "बिहार का पहला ऊर्ध्वाधर भूमिगत (Vertical Underground) ऑडिटोरियम 'अर्थशिला' कहाँ स्थित है?", qe: "Where is Bihar's first Vertical Underground auditorium 'Arthshila' located?", ah: ["दानापुर", "बांकीपुर, पटना", "गोला रोड, पटना", "मुजफ्फरपुर"], ae: ["Danapur", "Bankipur, Patna", "Gola Road, Patna", "Muzaffarpur"], c: 2, topic: "Infrastructure", e: "इसका डिजाइन यूनानी थिएटरों की अवधारणा से प्रेरित है।" },
            { qh: "डिजिटल भुगतान में सुधार के लिए किस कंपनी को 'EDICON 2026' में सम्मानित किया गया?", qe: "Which company was honored at 'EDICON 2026' for digital payment improvement?", ah: ["SBPDCL", "NBPDCL", "NTPC", "BSNL"], ae: ["SBPDCL", "NBPDCL", "NTPC", "BSNL"], c: 1, topic: "Economy", e: "नार्थ बिहार पावर डिस्ट्रीब्यूशन कंपनी लिमिटेड (NBPDCL) को स्वर्ण पुरस्कार मिला।" },
            { qh: "हाल ही में जीआई-टैग प्राप्त 'मिथिला मखाना' की पहली समुद्री खेप कहाँ भेजी गई?", qe: "Where was the first sea consignment of GI-tagged 'Mithila Makhana' sent?", ah: ["लंदन", "दुबई", "न्यूयॉर्क", "सिंगापुर"], ae: ["London", "Dubai", "New York", "Singapore"], c: 1, topic: "Export", e: "पूर्णिया से दो टन मखाना दुबई निर्यात किया गया।" },
            { qh: "बिहार मंत्रिपरिषद ने 'महिला रोजगार योजना' के तहत कितनी वित्तीय सहायता की मंजूरी दी है?", qe: "How much financial assistance approved under 'Women Employment Scheme'?", ah: ["₹1 लाख", "₹2 लाख", "₹5 लाख", "₹10,000"], ae: ["₹1 Lakh", "₹2 Lakh", "₹5 Lakh", "₹10,000"], c: 1, topic: "Schemes", e: "महिला उद्यमियों को ₹2 लाख तक की ब्याज मुक्त सहायता मिलेगी।" },
            { qh: "सरकारी कर्मचारियों के लिए जारी 'आचरण नियमावली 2026' का मुख्य फोकस क्या है?", qe: "What is the main focus of 'Conduct Rules 2026' for employees?", ah: ["वेतन वृद्धि", "सोशल मीडिया उपयोग", "पदोन्नति", "स्थानांतरण"], ae: ["Salary Hike", "Social Media Usage", "Promotion", "Transfer"], c: 1, topic: "Governance", e: "इसमें सोशल मीडिया पर राजनीतिक टिप्पणियों और अश्लील सामग्री पोस्ट करने पर रोक है।" },
            { qh: "बिहार सेमीकंडक्टर नीति-2026 के तहत भूमि खरीद पर कितनी स्टाम्प शुल्क छूट दी जाएगी?", qe: "How much stamp duty exemption on land purchase under Bihar Semiconductor Policy?", ah: ["50%", "75%", "100%", "25%"], ae: ["50%", "75%", "100%", "25%"], c: 2, topic: "Policy", e: "नीति के तहत स्टाम्प शुल्क और पंजीकरण शुल्क में 100% छूट मिलेगी।" },
            { qh: "वैश्विक क्षमता केंद्र (GCC) नीति 2026 के तहत निवेश पर कितनी सब्सिडी का प्रावधान है?", qe: "How much investment subsidy is provided under GCC Policy 2026?", ah: ["10%", "20%", "30%", "50%"], ae: ["10%", "20%", "30%", "50%"], c: 2, topic: "Economy", e: "आईटी और अनुसंधान क्षेत्र में निवेश पर 30% सब्सिडी (अधिकतम ₹50 करोड़) मिलेगी।" },
            { qh: "विद्युत वितरण रेटिंग में बिहार की किस कंपनी को 'A' ग्रेड प्राप्त हुआ है?", qe: "Which company of Bihar received 'A' grade in power distribution?", ah: ["NBPDCL", "SBPDCL", "दोनों को", "किसी को नहीं"], ae: ["NBPDCL", "SBPDCL", "Both", "None"], c: 2, topic: "Governance", e: "NBPDCL को 13वां और SBPDCL को 26वां स्थान मिला, दोनों 'A' ग्रेड में हैं।" },
            { qh: "पद्म पुरस्कार 2026 के लिए बिहार से कितने व्यक्तियों का चयन किया गया है?", qe: "How many persons from Bihar selected for Padma Awards 2026?", ah: ["1", "3", "5", "10"], ae: ["1", "3", "5", "10"], c: 1, topic: "Awards & Honors", e: "विशु बंधु, भारत सिंह भारती और गोपाल जी त्रिवेदी को पद्म श्री मिला।" },
            { qh: "विशु बंधु (Bishwa Bandhu) का संबंध किस क्षेत्र से है?", qe: "Bishwa Bandhu is related to which field?", ah: ["विज्ञान", "कला (लोक नृत्य)", "साहित्य", "समाज सेवा"], ae: ["Science", "Art (Folk Dance)", "Literature", "Social Service"], c: 1, topic: "Art & Culture", e: "वे पारंपरिक 'डोमकच' (Domkach) नृत्य को पहचान दिलाने के लिए प्रसिद्ध थे।" },
            { qh: "भारत सिंह भारती का जन्म किस जिले में हुआ था?", qe: "In which district was Bharat Singh Bharti born?", ah: ["पटना", "गया", "भोजपुर", "दरभंगा"], ae: ["Patna", "Gaya", "Bhojpur", "Darbhanga"], c: 2, topic: "Culture", e: "वे भोजपुरी लोक संगीत के संरक्षण के लिए जाने जाते हैं।" },
            { qh: "गोपाल जी त्रिवेदी को किस क्षेत्र में उत्कृष्ट योगदान के लिए पद्म श्री मिला?", qe: "For which field did Gopal Ji Trivedi receive Padma Shri?", ah: ["संगीत", "कृषि (विज्ञान एवं अभियांत्रिकी)", "खेल", "साहित्य"], ae: ["Music", "Agriculture", "Sports", "Literature"], c: 1, topic: "Science", e: "उन्होंने मुजफ्फरपुर में लीची और मक्का की खेती में सुधार के लिए कार्य किया।" },
            { qh: "बिहार रेजिमेंट की 5वीं बटालियन का स्थापना दिवस कब मनाया गया?", qe: "When was the raising day of the 5th Battalion of Bihar Regiment celebrated?", ah: ["1 जनवरी", "12 जनवरी", "28 जनवरी", "30 मार्च"], ae: ["Jan 1", "Jan 12", "Jan 28", "March 30"], c: 2, topic: "Defense", e: "28 जनवरी 2026 को दानापुर छावनी में 64वां स्थापना दिवस मनाया गया।" },
            { qh: "बिहार का पहला 'पेपरलेस जिला' कौन बना है?", qe: "Which has become the first 'Paperless District' of Bihar?", ah: ["पटना", "मधुबनी", "पूर्णिया", "नालंदा"], ae: ["Patna", "Madhubani", "Purnea", "Nalanda"], c: 1, topic: "Governance", e: "मधुबनी बिहार का पहला paperless जिला घोषित किया गया है।" },
            { qh: "राजगीर में 'जल-आधारित लेजर लाइट एंड साउंड शो' कहाँ आयोजित किया जाएगा?", qe: "Where will the 'water-based laser light and sound show' be in Rajgir?", ah: ["वेणु वन", "पांडु पोखर", "घोरा कटोरा", "शांति स्तूप"], ae: ["Venu Van", "Pandu Pokhar", "Ghora Katora", "Shanti Stupa"], c: 1, topic: "Tourism", e: "यह शो 1 मार्च 2026 से पांडु पोखर में शुरू होगा।" }
        ]
    }
};

let currentQuestions = [];
let qIndex = 0, userAns = {}, timer, timeLeft = 0;

function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
}

function showSetView() { showView('set-view'); }

function prepareSettings(setName) {
    currentQuestions = database["jan_2026"][setName]; 
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
    let correct = 0, wrong = 0, neg = parseFloat(document.getElementById('negMarkInput').value);
    let weakTopics = new Set();
    let wrongIdxs = [];

    currentQuestions.forEach((q, i) => {
        if(userAns[i] === q.c) correct++;
        else if(userAns[i] !== undefined) { 
            wrong++; 
            wrongIdxs.push(i);
            weakTopics.add(q.topic);
        }
    });

    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = (correct - (wrong * neg)).toFixed(2);

    let aHtml = "<h3>Your Weak Sections:</h3><p style='color:#c62828; font-weight:bold;'>";
    aHtml += Array.from(weakTopics).join(", ") || "None";
    aHtml += "</p><hr><h4>Review Mistakes:</h4>";
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
        return `<div class="sol-card"><span style="background:#eee; padding:2px 8px; border-radius:4px; font-size:12px;">Topic: ${q.topic}</span><p><b>Q${i+1}: ${q.qh}</b></p><div>${optsHtml}</div><div class="exp-box"><b>Explanation:</b> ${q.e}</div></div>`;
    }).join('');
}

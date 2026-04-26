// 1. DATABASE WITH TOPICS
const database = {
    "jan_2026": {
        "bihar_special_1": [
            { qh: "विंग्स इंडिया 2026...", qe: "Wings India 2026...", ah: [...], ae: [...], c: 0, topic: "Awards & Honors", e: "..." },
            { qh: "कैथी लिपि...", qe: "Kaithi script...", ah: [...], ae: [...], c: 1, topic: "Art & Culture", e: "..." },
            { qh: "बिहार बटालियन...", qe: "Bihar Battalion...", ah: [...], ae: [...], c: 2, topic: "Defense", e: "..." },
            { qh: "मुख्य न्यायाधीश...", qe: "Chief Justice...", ah: [...], ae: [...], c: 1, topic: "Appointment", e: "..." },
            { qh: "आईआईटी पटना पार्क...", qe: "IIT Patna Park...", ah: [...], ae: [...], c: 2, topic: "Science & Tech", e: "..." },
            { qh: "मंत्रिपरिषद बैठक...", qe: "Cabinet Meeting...", ah: [...], ae: [...], c: 1, topic: "Governance", e: "..." },
            { qh: "सोन नदी विवाद...", qe: "Son River Dispute...", ah: [...], ae: [...], c: 2, topic: "Geography/Polity", e: "..." },
            { qh: "भूमिगत केबलिंग...", qe: "Underground Cabling...", ah: [...], ae: [...], c: 1, topic: "Infrastructure", e: "..." },
            { qh: "पीएम श्री योजना...", qe: "PM Shri Scheme...", ah: [...], ae: [...], c: 1, topic: "Schemes", e: "..." },
            { qh: "मुंबई बिहार भवन...", qe: "Mumbai Bihar Bhavan...", ah: [...], ae: [...], c: 2, topic: "Infrastructure", e: "..." },
            { qh: "फेलोशिप मानदेय...", qe: "Fellowship Stipend...", ah: [...], ae: [...], c: 1, topic: "Schemes", e: "..." },
            { qh: "फेलोशिप संख्या...", qe: "Fellowship Count...", ah: [...], ae: [...], c: 2, topic: "Schemes", e: "..." },
            { qh: "पुलिस सम्मेलन...", qe: "Police Conference...", ah: [...], ae: [...], c: 2, topic: "Governance", e: "..." },
            { qh: "पुलिस नई इकाई...", qe: "Police New Unit...", ah: [...], ae: [...], c: 1, topic: "Security", e: "..." },
            { qh: "न्यायाधीश रिक्त पद...", qe: "Judge Vacancy...", ah: [...], ae: [...], c: 1, topic: "Judiciary", e: "..." },
            { qh: "कालाजार लक्ष्य...", qe: "Kala-azar Target...", ah: [...], ae: [...], c: 2, topic: "Health", e: "..." },
            { qh: "कालाजार परजीवी...", qe: "Kala-azar Parasite...", ah: [...], ae: [...], c: 1, topic: "Science/Health", e: "..." },
            { qh: "बाल साहित्य पुरस्कार...", qe: "Literature Award...", ah: [...], ae: [...], c: 1, topic: "Awards & Honors", e: "..." },
            { qh: "भूमिगत सुरंग...", qe: "Underground Tunnel...", ah: [...], ae: [...], c: 1, topic: "Infrastructure", e: "..." },
            { qh: "ISO प्रमाणन...", qe: "ISO Certification...", ah: [...], ae: [...], c: 1, topic: "Governance", e: "..." }
        ]
    }
};

let currentQuestions = [];
let qIndex = 0, userAns = {}, timer, timeLeft = 0;

// Logic Functions (Same as before)
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
}

function showSetView() { showView('set-view'); }
function prepareSettings() { currentQuestions = database["jan_2026"]["bihar_special_1"]; showView('settings-view'); }

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

// 2. MODIFIED FINISH QUIZ (FOR WEAK TOPICS)
function finishQuiz() {
    clearInterval(timer);
    showView('result-view');
    let correct = 0, wrong = 0, neg = parseFloat(document.getElementById('negMarkInput').value);
    let weakTopics = new Set(); // Unique topics ke liye
    let wrongIdxs = [];

    currentQuestions.forEach((q, i) => {
        if(userAns[i] === q.c) correct++;
        else if(userAns[i] !== undefined) { 
            wrong++; 
            wrongIdxs.push(i);
            weakTopics.add(q.topic); // Topic ko set mein add karein
        }
    });

    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = (correct - (wrong * neg)).toFixed(2);

    // Analysis Box Update
    let aHtml = "<h3>Your Weak Sections:</h3><p style='color:#c62828; font-weight:bold;'>";
    aHtml += Array.from(weakTopics).join(", ") + "</p><hr>";
    aHtml += "<h4>Review Mistakes (By Question):</h4>";
    wrongIdxs.forEach(idx => { 
        aHtml += `<span class="q-link" onclick="showSolutions(${idx})">Q${idx+1}</span>`; 
    });
    document.getElementById('analysis-box').innerHTML = wrongIdxs.length ? aHtml : "🌟 Excellent! All sections are strong.";
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
        return `<div class="sol-card">
            <span style="background:#eee; padding:2px 8px; border-radius:4px; font-size:12px;">Topic: ${q.topic}</span>
            <p><b>Q${i+1}: ${q.qh}</b></p>
            <div>${optsHtml}</div>
            <div class="exp-box">${q.e}</div>
        </div>`;
    }).join('');
}

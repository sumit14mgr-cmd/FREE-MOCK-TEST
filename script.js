// DATABASE: Isme aap naye Set aur Questions add karte rahein
const database = {
    "January 2026": {
        "Bihar Special": [
            { q: "Bihar ke kis jile mein naya ethanol plant khula hai?", a: ["Patna", "Purnia", "Muzaffarpur", "Gaya"], c: 1, exp: "Purnia mein Bharat ka pehla grain-based ethanol plant setup kiya gaya hai.", sec: "Bihar Industry" },
            { q: "Bihar Startup Policy kab launch hui?", a: ["2022", "2023", "2024", "2026"], c: 0, exp: "Bihar Startup Policy 2022 mein entrepreneurs ko protsahit karne ke liye aayi.", sec: "Governance" }
        ],
        "Set 2": [
            { q: "National News Sample Question?", a: ["A", "B", "C", "D"], c: 2, exp: "Sample Explanation.", sec: "National" }
        ]
    }
};

let currentQuestions = [], qIndex = 0, userAnswers = {}, activeMonth = "";

// View Controller
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hide'));
    document.getElementById(id).classList.remove('hide');
    window.scrollTo(0,0);
}

// Month Selector Logic
function showMonthlyView() {
    showView('monthly-view');
    const list = document.getElementById('month-list');
    list.innerHTML = "";
    Object.keys(database).forEach(m => {
        list.innerHTML += `<button class="month-btn" onclick="showSetView('${m}')">${m}</button>`;
    });
}

// Set Selector Logic (Sirf Set Name Button par)
function showSetView(month) {
    activeMonth = month;
    showView('set-view');
    document.getElementById('month-name-title').innerText = month;
    const list = document.getElementById('set-list');
    list.innerHTML = "";
    Object.keys(database[month]).forEach(s => {
        list.innerHTML += `<button class="set-btn" onclick="startQuiz('${s}')">${s}</button>`;
    });
}

// Start Test Logic
function startQuiz(setName) {
    currentQuestions = database[activeMonth][setName];
    qIndex = 0; userAnswers = {};
    showView('quiz-view');
    loadQuestion();
}

// Quiz Render Logic
function loadQuestion() {
    const q = currentQuestions[qIndex];
    document.getElementById('q-count').innerText = `Question ${qIndex + 1}/${currentQuestions.length}`;
    document.getElementById('question-text').innerText = q.q;
    const list = document.getElementById('options-list');
    list.innerHTML = "";
    q.a.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = "option" + (userAnswers[qIndex] === i ? " selected" : "");
        div.innerText = opt;
        div.onclick = () => { userAnswers[qIndex] = i; loadQuestion(); };
        list.appendChild(div);
    });
    document.getElementById('submitBtn').classList.toggle('hide', qIndex !== currentQuestions.length - 1);
}

function changeQuestion(n) {
    if(qIndex + n >= 0 && qIndex + n < currentQuestions.length) { qIndex += n; loadQuestion(); }
}

// Result & Performance Logic
function showResult() {
    showView('result-view');
    const neg = parseFloat(document.getElementById('negMark').value);
    let correct = 0, wrong = 0, analysis = {};
    currentQuestions.forEach((q, i) => {
        if(userAnswers[i] === q.c) correct++;
        else if(userAnswers[i] !== undefined) { wrong++; analysis[q.sec] = (analysis[q.sec] || 0) + 1; }
    });
    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = (correct - (wrong * neg)).toFixed(2);
    
    let aHtml = "<h3>Weak Sections Analysis:</h3>";
    for(let s in analysis) aHtml += `<p>⚠️ <b>${s}:</b> You made ${analysis[s]} mistake(s).</p>`;
    document.getElementById('analysis-section').innerHTML = Object.keys(analysis).length ? aHtml : "✅ Amazing! You cleared all sections with accuracy.";
}

// Detailed Solution Logic
function showSolutions() {
    showView('solution-view');
    const list = document.getElementById('solution-list');
    list.innerHTML = "<h2 class='section-title'>Detailed Explanations</h2>";
    currentQuestions.forEach((q, i) => {
        const isCor = userAnswers[i] === q.c;
        list.innerHTML += `<div class="sol-card" style="border-left:5px solid ${isCor?'#2e7d32':'#c62828'}">
            <p><b>Q${i+1}: ${q.q}</b></p>
            <p>Your Ans: <span style="color:${isCor?'green':'red'}">${userAnswers[i]!==undefined ? q.a[userAnswers[i]] : 'Not Attempted'}</span></p>
            <p style="color:green">Correct Ans: ${q.a[q.c]}</p>
            <div class="exp-box"><b>Explanation:</b> ${q.exp}</div>
        </div>`;
    });
}

function reattempt() { qIndex = 0; userAnswers = {}; showView('quiz-view'); loadQuestion(); }

// Initialize
showView('category-view');

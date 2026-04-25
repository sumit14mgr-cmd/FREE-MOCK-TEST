const database = {
    "January 2026": {
        "Bihar Special": [
            { q: "Bihar ke naye ethanol plant ka udghatan kaha hua?", a: ["Patna", "Purnia", "Araria", "Gaya"], c: 1, exp: "Purnia mein Bharat ka pehla grain-based plant khula hai.", sec: "Industry" },
            { q: "Bihar Startup Policy 2026 ka uddeshya kya hai?", a: ["Education", "Entrepreneurs", "Agriculture", "None"], c: 1, exp: "Youth ko startup ke liye protsahit karna.", sec: "Policy" }
        ]
    }
};

let currentQuestions = [], qIndex = 0, userAnswers = {}, activeMonth = "";

function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hide'));
    document.getElementById(id).classList.remove('hide');
}

function showMonthlyView() {
    showView('monthly-view');
    const list = document.getElementById('month-list');
    list.innerHTML = "";
    Object.keys(database).forEach(m => {
        list.innerHTML += `<button class="month-btn" onclick="showSetView('${m}')">${m}</button>`;
    });
}

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

function startQuiz(setName) {
    currentQuestions = database[activeMonth][setName];
    qIndex = 0; userAnswers = {};
    showView('quiz-view');
    loadQuestion();
}

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
    
    let aHtml = "<h3>Weak Sections:</h3>";
    for(let s in analysis) aHtml += `<p>⚠️ ${s}: ${analysis[s]} mistakes</p>`;
    document.getElementById('analysis-section').innerHTML = Object.keys(analysis).length ? aHtml : "✅ All Clear!";
}

function showSolutions() {
    showView('solution-view');
    const list = document.getElementById('solution-list');
    list.innerHTML = "<h2>Solutions</h2>";
    currentQuestions.forEach((q, i) => {
        const isCor = userAnswers[i] === q.c;
        list.innerHTML += `<div class="sol-card" style="border-left:5px solid ${isCor?'green':'red'}">
            <p><b>Q${i+1}: ${q.q}</b></p>
            <p style="color:green">Ans: ${q.a[q.c]}</p>
            <div class="exp-box"><b>Logic:</b> ${q.exp}</div>
        </div>`;
    });
}

function reattempt() { qIndex = 0; userAnswers = {}; showView('quiz-view'); loadQuestion(); }
showView('category-view');

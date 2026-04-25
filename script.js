const database = {
    "January 2026": {
        "Bihar Special": [
            { q: "Bihar ka pehla 'Self-Moot' court kaha bana?", a: ["Patna", "Bhagalpur", "Purnia", "Gaya"], c: 1, exp: "Bhagalpur jila adalat mein Bihar ka pehla digital/self-moot court setup hua.", sec: "Bihar Legal" },
            { q: "Bihar ke naye Governor kaun hain?", a: ["Person A", "Person B", "Person C", "Person D"], c: 2, exp: "Iska explanation yahan likhein.", sec: "Appointments" }
        ],
        "Set 2": [
            { q: "National news question?", a: ["A", "B", "C", "D"], c: 0, exp: "Explanation here.", sec: "National" }
        ]
    },
    "February 2026": {}
};

let activeMonth = "";
let currentQuestions = [];
let qIndex = 0;
let userAnswers = {};

// --- Navigation ---
function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hide'));
    document.getElementById(id).classList.remove('hide');
}

function showMonthlyView() {
    showView('monthly-view');
    const monthList = document.getElementById('month-list');
    monthList.innerHTML = "";
    ["January 2026", "February 2026", "March 2026"].forEach(m => {
        monthList.innerHTML += `<button class="month-btn" onclick="showSetView('${m}')">${m}</button>`;
    });
}

function showSetView(month) {
    activeMonth = month;
    showView('set-view');
    document.getElementById('month-name-title').innerText = month;
    const setList = document.getElementById('set-list');
    setList.innerHTML = "";
    
    const sets = database[month] || {};
    Object.keys(sets).forEach(setName => {
        setList.innerHTML += `<button class="set-btn" onclick="startQuiz('${setName}')">Click here to start ${setName}</button>`;
    });
    if(Object.keys(sets).length === 0) setList.innerHTML = "<p>Coming Soon...</p>";
}

function startQuiz(setName) {
    currentQuestions = database[activeMonth][setName];
    qIndex = 0;
    userAnswers = {};
    showView('quiz-view');
    loadQuestion();
}

// --- Quiz Engine ---
function loadQuestion() {
    const q = currentQuestions[qIndex];
    document.getElementById('q-count').innerText = `Question ${qIndex + 1}/${currentQuestions.length}`;
    document.getElementById('question-text').innerText = q.q;
    
    const list = document.getElementById('options-list');
    list.innerHTML = "";
    q.a.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = "option";
        if(userAnswers[qIndex] === i) div.classList.add('selected');
        div.innerText = opt;
        div.onclick = () => selectOption(i, q.c);
        list.appendChild(div);
    });

    document.getElementById('finishBtn').classList.toggle('hide', qIndex !== currentQuestions.length - 1);
}

function selectOption(selected, correct) {
    userAnswers[qIndex] = selected;
    const opts = document.querySelectorAll('.option');
    opts.forEach(o => { o.style.pointerEvents = "none"; }); // Lock clicks

    if(selected === correct) {
        opts[selected].classList.add('correct');
    } else {
        opts[selected].classList.add('wrong');
        opts[correct].classList.add('correct');
    }
    
    setTimeout(() => { if(qIndex < currentQuestions.length-1) changeQuestion(1); }, 800);
}

function changeQuestion(n) {
    if(qIndex + n >= 0 && qIndex + n < currentQuestions.length) {
        qIndex += n;
        loadQuestion();
    }
}

// --- Result & Analysis ---
function showResult() {
    showView('result-view');
    const neg = parseFloat(document.getElementById('negMark').value);
    let correct = 0, wrong = 0;
    let weakAreas = {};

    currentQuestions.forEach((q, i) => {
        if(userAnswers[i] === q.c) correct++;
        else if(userAnswers[i] !== undefined) {
            wrong++;
            weakAreas[q.sec] = (weakAreas[q.sec] || 0) + 1;
        }
    });

    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = ((correct * 1) - (wrong * neg)).toFixed(2);
}

function showSolutions() {
    showView('solution-view');
    const list = document.getElementById('solution-list');
    list.innerHTML = "";
    currentQuestions.forEach((q, i) => {
        list.innerHTML += `
            <div class="sol-card">
                <p><strong>Q${i+1}:</strong> ${q.q}</p>
                <p style="color:green">Correct: ${q.a[q.c]}</p>
                <div style="background:#f1f1f1; padding:8px; border-radius:5px; font-size:14px; margin-top:5px;">
                    <strong>Explanation:</strong> ${q.exp}
                </div>
            </div>
        `;
    });
}

function reattempt() {
    qIndex = 0;
    userAnswers = {};
    showView('quiz-view');
    loadQuestion();
}

showView('category-view');

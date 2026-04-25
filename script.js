const database = {
    "January 2026": {
        "Bihar Special": [
            { q: "Bihar ka pehla floating solar power plant kaha hai?", a: ["Patna", "Darbhanga", "Supaul", "Araria"], c: 1, exp: "Darbhanga ke Kadirabad mein Bihar ka pehla floating solar plant laga hai.", sec: "Energy" },
            { q: "Bihar Diwas 2026 ki theme kya thi?", a: ["Yuva Shakti", "Jal Jeevan Hariyali", "Viksit Bihar", "None"], c: 2, exp: "Bihar Diwas har saal 22 March ko manaya jata hai.", sec: "General Knowledge" }
        ],
        "National Current Affairs": [
            { q: "G20 Summit 2026 host city?", a: ["New Delhi", "Mumbai", "Bangalore", "Chennai"], c: 0, exp: "Sample explanation.", sec: "International" }
        ]
    }
};

let currentQuestions = [];
let qIndex = 0;
let userAnswers = {}; // userAnswers[questionIndex] = selectedOptionIndex

function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hide'));
    document.getElementById(id).classList.remove('hide');
}

function showMonthlyView() {
    showView('monthly-view');
    const monthList = document.getElementById('month-list');
    monthList.innerHTML = "";
    Object.keys(database).forEach(m => {
        monthList.innerHTML += `<button class="month-btn" onclick="showSetView('${m}')">${m}</button>`;
    });
}

function showSetView(month) {
    showView('set-view');
    document.getElementById('month-name-title').innerText = month;
    const setList = document.getElementById('set-list');
    setList.innerHTML = "";
    
    const sets = database[month] || {};
    Object.keys(sets).forEach(setName => {
        // Updated: Only Set Name on button
        setList.innerHTML += `<button class="set-btn" onclick="startQuiz('${month}', '${setName}')">${setName}</button>`;
    });
}

function startQuiz(month, setName) {
    currentQuestions = database[month][setName];
    qIndex = 0;
    userAnswers = {};
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
        div.onclick = () => {
            userAnswers[qIndex] = i;
            loadQuestion(); // Re-render to show selected
        };
        list.appendChild(div);
    });

    document.getElementById('submitBtn').classList.toggle('hide', qIndex !== currentQuestions.length - 1);
}

function changeQuestion(n) {
    if(qIndex + n >= 0 && qIndex + n < currentQuestions.length) {
        qIndex += n;
        loadQuestion();
    }
}

function showResult() {
    showView('result-view');
    const neg = parseFloat(document.getElementById('negMark').value);
    let correct = 0, wrong = 0;
    let analysis = {};

    currentQuestions.forEach((q, i) => {
        if(userAnswers[i] === q.c) {
            correct++;
        } else if(userAnswers[i] !== undefined) {
            wrong++;
            analysis[q.sec] = (analysis[q.sec] || 0) + 1;
        }
    });

    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = (correct - (wrong * neg)).toFixed(2);

    // Performance Analysis
    let analysisHtml = "<h3>Weak Sections Analysis:</h3>";
    if(Object.keys(analysis).length > 0) {
        for(let sec in analysis) {
            analysisHtml += `<p>⚠️ <b>${sec}:</b> You missed ${analysis[sec]} questions here.</p>`;
        }
    } else {
        analysisHtml += "<p>✅ Great job! No specific weak areas found.</p>";
    }
    document.getElementById('analysis-section').innerHTML = analysisHtml;
}

function showSolutions() {
    showView('solution-view');
    const list = document.getElementById('solution-list');
    list.innerHTML = "<h2>Solutions & Explanations</h2>";
    currentQuestions.forEach((q, i) => {
        const userAns = userAnswers[i] !== undefined ? q.a[userAnswers[i]] : "Not Attempted";
        const isCorrect = userAnswers[i] === q.c;
        
        list.innerHTML += `
            <div class="sol-card" style="border-left: 5px solid ${isCorrect ? 'green' : 'red'}">
                <p><b>Q${i+1}: ${q.q}</b></p>
                <p>Your Ans: <span style="color:${isCorrect ? 'green' : 'red'}">${userAns}</span></p>
                <p style="color:green">Correct Ans: ${q.a[q.c]}</p>
                <div class="exp-box">
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

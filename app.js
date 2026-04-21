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
        "National": [
            { 
                q: "77th Republic Day 2026 ki theme kya thi?", 
                options: ["Viksit Bharat", "Nari Shakti", "Digital India", "Self-reliant India"], 
                ans: 1,
                explanation: "Is saal ki theme 'Nari Shakti' thi jisme mahila sashaktikaran par zor diya gaya tha."
            },
            // Naye National questions yahan paste karein
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

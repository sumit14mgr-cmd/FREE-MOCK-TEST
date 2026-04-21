let currentCat = "", currentMonth = "", currentTopic = "";
let questions = [];
let currentIndex = 0;
let userAnswers = {}; // { index: selectedOption }
let timer;
let timeLeft;

// ==========================================
// KHAALI DATA: YAHAN QUESTIONS PASTE KAREIN
// ==========================================
const myData = {
    "Jan 2026": {
        "National": [
            // Paste National Questions here
        ],
        "Bihar Special": [
            // Paste Bihar Special Questions here
        ]
    }
};

function showStep(s, val) {
    document.querySelectorAll('.step').forEach(d => d.classList.remove('active'));
    document.getElementById('step' + s).classList.add('active');
    if(s===2) currentCat = val;
    if(s===3) currentMonth = val;
}

function startMock(topic) {
    currentTopic = topic;
    questions = myData[currentMonth][topic] || [];
    if(questions.length === 0) { alert("No questions found!"); return; }
    
    currentIndex = 0;
    userAnswers = {};
    showStep(4);
    document.getElementById('test-title').innerText = topic;
    
    // Timer Setup
    let mins = parseInt(document.getElementById('setTimer').value);
    timeLeft = mins * 60;
    startTimer();
    
    renderQuestion();
    renderPalette();
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
    let optionsHtml = q.options.map((opt, i) => `
        <button class="opt-btn ${userAnswers[currentIndex] === i ? 'selected-opt' : ''}" 
        onclick="selectOption(${i})">${opt}</button>
    `).join('');

    container.innerHTML = `
        <div class="q-card">
            <p><b>Question ${currentIndex + 1}:</b></p>
            <p>${q.q}</p>
            ${optionsHtml}
        </div>
    `;
    renderPalette();
}

function selectOption(optIdx) {
    userAnswers[currentIndex] = optIdx;
    renderQuestion();
}

function changeQ(dir) {
    if(currentIndex + dir >= 0 && currentIndex + dir < questions.length) {
        currentIndex += dir;
        renderQuestion();
    }
}

function skipQ() {
    if(userAnswers[currentIndex] === undefined) {
        userAnswers[currentIndex] = null; // Mark as skipped
    }
    changeQ(1);
}

function renderPalette() {
    const pal = document.getElementById('palette-area');
    pal.innerHTML = questions.map((_, i) => {
        let status = "";
        if(i === currentIndex) status = "pal-current";
        else if(userAnswers[i] !== undefined && userAnswers[i] !== null) status = "pal-answered";
        else if(userAnswers[i] === null) status = "pal-skipped";
        
        return `<div class="pal-item ${status}" onclick="jumpTo(${i})">${i+1}</div>`;
    }).join('');
}

function jumpTo(i) { currentIndex = i; renderQuestion(); }

function finishTest() {
    clearInterval(timer);
    let score = 0;
    let neg = parseFloat(document.getElementById('negVal').value);
    
    questions.forEach((q, i) => {
        if(userAnswers[i] === q.ans) score += 1;
        else if(userAnswers[i] !== undefined && userAnswers[i] !== null) score -= neg;
    });

    alert(`Test Finished!\nYour Score: ${score.toFixed(2)} / ${questions.length}`);
    showStep(1);
}

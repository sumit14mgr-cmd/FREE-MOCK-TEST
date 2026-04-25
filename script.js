// Database Structure: Category > Month > Set
const database = {
    "Current Affairs": {
        "January 2026": {
            "Set 1": [
                { q: "Jan Set 1: Question 1?", a: ["Ans A", "Ans B", "Ans C", "Ans D"], c: 2, exp: "Exp 1" },
                { q: "Jan Set 1: Question 2?", a: ["X", "Y", "Z", "W"], c: 0, exp: "Exp 2" }
            ],
            "Set 2": [
                { q: "Jan Set 2: Question 1?", a: ["1", "2", "3", "4"], c: 1, exp: "Exp 3" }
            ]
        },
        "February 2026": {
            "Set 1": [ { q: "Feb Question?", a: ["A","B","C","D"], c:0, exp: "Test" } ]
        }
    }
};

let currentSet = [];
let qIndex = 0;
let userAnswers = {};
let activeSubject = "";
let activeMonth = "";

// --- Navigation Logic ---

function showCategoryView() {
    hideAll();
    document.getElementById('category-view').classList.remove('hide');
}

function showMonthlyView(subject) {
    if(subject) activeSubject = subject;
    hideAll();
    const view = document.getElementById('monthly-view');
    view.classList.remove('hide');
    
    const monthList = document.getElementById('month-list');
    monthList.innerHTML = "";
    
    const months = ["January 2026", "February 2026", "March 2026", "April 2026"]; // Add all 12
    months.forEach(m => {
        monthList.innerHTML += `<button class="month-btn" onclick="showSetView('${m}')">${m}</button>`;
    });
}

function showSetView(month) {
    activeMonth = month;
    hideAll();
    const view = document.getElementById('set-view');
    view.classList.remove('hide');
    document.getElementById('selected-month-title').innerText = month;

    const setList = document.getElementById('set-list-container');
    setList.innerHTML = "";
    
    const sets = database[activeSubject][month] || {};
    Object.keys(sets).forEach(setName => {
        setList.innerHTML += `<button class="set-btn" onclick="startQuiz('${setName}')">Click here to start ${setName}</button>`;
    });

    if(Object.keys(sets).length === 0) setList.innerHTML = "<p>No sets available for this month.</p>";
}

function startQuiz(setName) {
    currentSet = database[activeSubject][activeMonth][setName];
    qIndex = 0;
    userAnswers = {};
    hideAll();
    document.getElementById('quiz-view').classList.remove('hide');
    loadQuestion();
}

// --- Quiz Engine ---

function loadQuestion() {
    const q = currentSet[qIndex];
    document.getElementById('q-status').innerText = `Question ${qIndex + 1}/${currentSet.length}`;
    document.getElementById('question-text').innerText = q.q;
    
    const list = document.getElementById('options-list');
    list.innerHTML = "";
    q.a.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = "option";
        if(userAnswers[qIndex] === i) div.classList.add('selected');
        div.innerText = opt;
        div.onclick = () => {
            userAnswers[qIndex] = i;
            if(i === q.c) div.classList.add('correct'); else div.classList.add('wrong');
            setTimeout(() => changeQuestion(1), 500); // Auto next
        };
        list.appendChild(div);
    });

    document.getElementById('finishBtn').classList.toggle('hide', qIndex !== currentSet.length - 1);
}

function changeQuestion(n) {
    if(qIndex + n >= 0 && qIndex + n < currentSet.length) {
        qIndex += n;
        loadQuestion();
    }
}

function hideAll() {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hide'));
}

function calculateResult() {
    // Result logic (same as previous response)
    alert("Test Completed! Scorecard will be generated.");
    showCategoryView(); 
}

// Initial Run
showCategoryView();

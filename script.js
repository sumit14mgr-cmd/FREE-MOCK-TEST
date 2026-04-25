const quizData = {
    "Jan 2026": [
        { q: "January 2026 ka pehla sawal?", a: ["Option A", "Option B", "Correct A", "Option D"], c: 2, exp: "Jan explanation here." },
        { q: "Second question of January?", a: ["Ans A", "Ans B", "Ans C", "Ans D"], c: 0, exp: "Logic detail here." }
    ],
    "Feb 2026": [
        { q: "February 2026 special question?", a: ["A", "B", "C", "D"], c: 1, exp: "Feb explanation here." }
    ],
    // Baaki months dec 2026 tak yahan add karein...
};

let currentMonth = "Jan 2026";
let qIndex = 0;
let userAnswers = {};

// 1. Load Monthly Sub-tabs on Start
function loadMonths() {
    const monthContainer = document.getElementById('month-list');
    const months = ["Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026", "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026", "Oct 2026", "Nov 2026", "Dec 2026"];
    
    monthContainer.innerHTML = months.map(m => 
        `<button class="month-btn ${m === currentMonth ? 'active' : ''}" onclick="selectMonth('${m}')">${m}</button>`
    ).join('');
}

function selectMonth(m) {
    currentMonth = m;
    qIndex = 0;
    userAnswers = {};
    loadMonths();
    startQuiz();
}

function startQuiz() {
    document.getElementById('result-box').classList.add('hide');
    document.getElementById('solution-box').classList.add('hide');
    document.getElementById('quiz-box').classList.remove('hide');
    loadQuestion();
}

function loadQuestion() {
    const data = quizData[currentMonth] || [];
    if(data.length === 0) {
        document.getElementById('question-text').innerText = "Questions coming soon for " + currentMonth;
        document.getElementById('options-list').innerHTML = "";
        return;
    }

    const q = data[qIndex];
    document.getElementById('q-status').innerText = `Question ${qIndex + 1}/${data.length}`;
    document.getElementById('q-month-tag').innerText = currentMonth;
    document.getElementById('question-text').innerText = q.q;

    const optList = document.getElementById('options-list');
    optList.innerHTML = "";
    q.a.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = "option";
        if(userAnswers[qIndex] === i) div.classList.add('selected');
        div.innerText = opt;
        div.onclick = () => handleAnswer(i, q.c);
        optList.appendChild(div);
    });

    document.getElementById('finishBtn').classList.toggle('hide', qIndex !== data.length - 1);
}

function handleAnswer(selected, correct) {
    userAnswers[qIndex] = selected;
    const opts = document.querySelectorAll('.option');
    opts.forEach(o => o.className = "option");

    if(selected === correct) {
        opts[selected].classList.add('correct');
    } else {
        opts[selected].classList.add('wrong');
        opts[correct].classList.add('correct');
    }
}

function calculateResult() {
    const neg = parseFloat(document.getElementById('negMark').value);
    let correct = 0, wrong = 0;
    const data = quizData[currentMonth];

    data.forEach((q, i) => {
        if(userAnswers[i] === q.c) correct++;
        else if(userAnswers[i] !== undefined) wrong++;
    });

    const finalScore = (correct * 1) - (wrong * neg);
    
    document.getElementById('quiz-box').classList.add('hide');
    const resBox = document.getElementById('result-box');
    resBox.classList.remove('hide');
    resBox.innerHTML = `
        <h2>Result: ${currentMonth}</h2>
        <p>Score: <b>${finalScore.toFixed(2)}</b></p>
        <p>Correct: ${correct} | Wrong: ${wrong}</p>
        <button onclick="showSolutions()">View Solution</button>
        <button onclick="startQuiz()">Re-attempt</button>
    `;
}

function showSolutions() {
    const solBox = document.getElementById('solution-box');
    solBox.classList.remove('hide');
    solBox.innerHTML = "<h3>Explanations</h3>";
    
    quizData[currentMonth].forEach((q, i) => {
        solBox.innerHTML += `
            <div style="margin-bottom:20px; padding:10px; border-bottom:1px solid #ccc;">
                <p><b>Q: ${q.q}</b></p>
                <p style="color:green">Ans: ${q.a[q.c]}</p>
                <p style="background:#eee; padding:5px;"><i>Logic: ${q.exp}</i></p>
            </div>
        `;
    });
}

function changeQuestion(n) {
    const data = quizData[currentMonth];
    if(qIndex + n >= 0 && qIndex + n < data.length) {
        qIndex += n;
        loadQuestion();
    }
}

// Initial Call
loadMonths();
startQuiz();

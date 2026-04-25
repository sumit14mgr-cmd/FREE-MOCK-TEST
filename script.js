// QUESTION DATABASE: Yahan aap questions add kar sakte hain
const quizDatabase = {
    "jan_2026": [
        {
            q: "Who was appointed as the new Chairman of ISRO in January 2026?",
            options: ["Person A", "Person B", "Person C", "Person D"],
            correct: 2,
            category: "Science & Tech",
            explanation: "ISRO has appointed Person C due to his contribution in space research."
        },
        {
            q: "Which state won the Best Tableau award in Republic Day 2026?",
            options: ["Bihar", "Uttar Pradesh", "Maharashtra", "Uttarakhand"],
            correct: 0,
            category: "National",
            explanation: "Bihar's tableau showcased its cultural heritage and won 1st prize."
        }
    ],
    "feb_2026": [] // Add Feb data here
};

let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // Stores {questionIndex: selectedOptionIndex}

function initQuiz() {
    const month = document.getElementById('monthSelect').value;
    currentQuestions = quizDatabase[month] || [];
    currentIndex = 0;
    userAnswers = {};
    
    document.getElementById('result-box').classList.add('hide');
    document.getElementById('solution-box').classList.add('hide');
    document.getElementById('quiz-box').classList.remove('hide');
    
    if(currentQuestions.length > 0) {
        showQuestion();
    } else {
        document.getElementById('question-text').innerText = "No questions found for this month.";
    }
}

function showQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('q-count').innerText = `Question ${currentIndex + 1}/${currentQuestions.length}`;
    document.getElementById('q-category').innerText = `Category: ${q.category}`;
    document.getElementById('question-text').innerText = q.q;
    
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = "";
    
    q.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = "option";
        if(userAnswers[currentIndex] === index) div.classList.add('selected');
        
        div.innerText = opt;
        div.onclick = () => selectOption(index);
        optionsList.appendChild(div);
    });

    // Toggle Buttons
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('submitBtn').classList.toggle('hide', currentIndex !== currentQuestions.length - 1);
}

function selectOption(index) {
    userAnswers[currentIndex] = index;
    const options = document.querySelectorAll('.option');
    options.forEach(o => o.classList.remove('selected'));
    options[index].classList.add('selected');
    
    // Auto-Color feedback (Optional: Instant color)
    const correctIdx = currentQuestions[currentIndex].correct;
    if(index === correctIdx) {
        options[index].classList.add('correct');
    } else {
        options[index].classList.add('wrong');
        options[correctIdx].classList.add('correct');
    }
}

function changeQuestion(step) {
    currentIndex += step;
    showQuestion();
}

function calculateResult() {
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let analysis = {};
    const neg = parseFloat(document.getElementById('negMark').value);

    currentQuestions.forEach((q, i) => {
        if(userAnswers[i] !== undefined) {
            if(userAnswers[i] === q.correct) {
                correct++;
                score += 1;
            } else {
                wrong++;
                score -= neg;
                analysis[q.category] = (analysis[q.category] || 0) + 1;
            }
        }
    });

    document.getElementById('quiz-box').classList.add('hide');
    document.getElementById('result-box').classList.remove('hide');
    
    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = score.toFixed(2);

    let weakHtml = "<h3>Weak Areas:</h3>";
    for(let cat in analysis) {
        weakHtml += `<p>⚠️ ${cat}: ${analysis[cat]} mistakes</p>`;
    }
    document.getElementById('weak-analysis').innerHTML = (Object.keys(analysis).length > 0) ? weakHtml : "<p>✅ Excellent! No weak areas found.</p>";
}

function toggleSolutions() {
    const solBox = document.getElementById('solution-box');
    solBox.classList.toggle('hide');
    solBox.innerHTML = "<h2>Detailed Solutions</h2>";

    currentQuestions.forEach((q, i) => {
        const userAns = userAnswers[i] !== undefined ? q.options[userAnswers[i]] : "Skipped";
        const isCorrect = userAnswers[i] === q.correct;

        solBox.innerHTML += `
            <div class="sol-card">
                <p><strong>Q${i+1}:</strong> ${q.q}</p>
                <p>Your Answer: <span style="color:${isCorrect?'green':'red'}">${userAns}</span></p>
                <p>Correct Answer: <span style="color:green">${q.options[q.correct]}</span></p>
                <div class="exp-text"><strong>Explanation:</strong> ${q.explanation}</div>
            </div>
        `;
    });
}

// Start
initQuiz();

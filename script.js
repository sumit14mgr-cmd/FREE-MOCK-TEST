const quizData = {
    "current-affairs": [
        { q: "Bharat ke naye CDS kaun hain?", a: ["Person A", "Person B", "Anil Chauhan", "Person D"], correct: 2 },
        { q: "G20 2024 kaha hua?", a: ["India", "Brazil", "USA", "France"], correct: 1 }
    ],
    "science": [
        { q: "Pani ka formula kya hai?", a: ["CO2", "O2", "H2O", "NaCl"], correct: 2 }
    ]
};

let currentTab = "current-affairs";
let currentQIndex = 0;

function openTab(tabName) {
    currentTab = tabName;
    currentQIndex = 0;
    document.getElementById('tab-title').innerText = tabName.replace('-', ' ').toUpperCase();
    
    // UI Update
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase().includes(tabName.split('-')[0]));
    });
    
    loadQuestion();
}

function loadQuestion() {
    const data = quizData[currentTab][currentQIndex];
    document.getElementById('question-text').innerText = data.q;
    const optionsDiv = document.getElementById('options-container');
    optionsDiv.innerHTML = "";
    
    data.a.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = "option";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, data.correct);
        optionsDiv.appendChild(btn);
    });
    document.getElementById('next-btn').style.display = "none";
}

function checkAnswer(selected, correct) {
    const options = document.querySelectorAll('.option');
    if(selected === correct) {
        options[selected].style.backgroundColor = "#d4edda";
    } else {
        options[selected].style.backgroundColor = "#f8d7da";
        options[correct].style.backgroundColor = "#d4edda";
    }
    document.getElementById('next-btn').style.display = "inline-block";
}

function nextQuestion() {
    currentQIndex++;
    if(currentQIndex < quizData[currentTab].length) {
        loadQuestion();
    } else {
        alert("Quiz Finished!");
        openTab(currentTab);
    }
}

// Initial Load
openTab('current-affairs');

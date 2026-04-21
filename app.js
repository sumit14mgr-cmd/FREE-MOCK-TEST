let currentCategory = "";
let currentMonth = "";

// Navigation Logic
function nav(step, val) {
    document.getElementById('step1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('step2').style.display = step === 2 ? 'block' : 'none';
    document.getElementById('step3').style.display = step === 3 ? 'block' : 'none';

    if(step === 2) {
        currentCategory = val;
        document.getElementById('cat-title').innerText = val;
    }
    if(step === 3) {
        currentMonth = val;
        document.getElementById('path-display').innerText = `${currentCategory} > ${val}`;
        document.getElementById('quiz-area').innerHTML = "Select a topic to start.";
    }
}

// ==========================================
// YAHAN QUESTION PASTE KAREIN (AI FORMAT)
// ==========================================
const myData = {
    "Jan 2026": {
        "National": [
            { q: "Jan 2026 Republic Day Chief Guest kaun the?", options: ["Brazil President", "USA President", "France President", "None"], ans: 0 },
            { q: "National Youth Day 2026 ki theme kya thi?", options: ["Viksit Yuva", "Digital India", "Youth for Change", "None"], ans: 0 }
        ],
        "Bihar Special": [
            { q: "Bihar ke kis jile mein naya IT park ban raha hai?", options: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"], ans: 0 }
        ],
        "International": [],
        "Economy": []
    }
};

// Quiz Loading Logic
function loadQuiz(topic) {
    const area = document.getElementById('quiz-area');
    const neg = document.getElementById('negVal').value;
    area.innerHTML = `<h3>Topic: ${topic}</h3>`;
    
    const questions = myData[currentMonth] ? myData[currentMonth][topic] : [];
    
    if(!questions || questions.length === 0) {
        area.innerHTML += "<p>No questions added yet.</p>";
        return;
    }

    questions.forEach((item, qIdx) => {
        let optionsHtml = item.options.map((opt, oIdx) => 
            `<div class="option" onclick="checkAns(${qIdx}, ${oIdx}, ${item.ans})">${opt}</div>`
        ).join('');
        
        area.innerHTML += `
            <div class="quiz-card">
                <p><b>Q${qIdx+1}:</b> ${item.q}</p>
                ${optionsHtml}
                <div id="res${qIdx}" class="result"></div>
            </div>`;
    });
}

function checkAns(qIdx, selected, correct) {
    const resDiv = document.getElementById(`res${qIdx}`);
    const neg = document.getElementById('negVal').value;
    resDiv.style.display = "block";

    if(selected === correct) {
        resDiv.innerHTML = "Sahi Jawab! (+1)";
        resDiv.style.background = "#d4edda";
        resDiv.style.color = "#155724";
    } else {
        resDiv.innerHTML = `Galat Jawab! (-${neg})`;
        resDiv.style.background = "#f8d7da";
        resDiv.style.color = "#721c24";
    }
}

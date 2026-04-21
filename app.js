const newsData = [
    { topic: "National", title: "77th Republic Day", desc: "India celebrated with focus on Nari Shakti." },
    { topic: "Bihar Special", title: "Mithila Makhana Export", desc: "New export policy for Bihar farmers." }
];

const quizData = [
    {
        q: "Jan 2026 mein Republic Day par Chief Guest kaun tha?",
        options: ["Brazil President", "USA President", "France President", "None"],
        ans: 0
    },
    {
        q: "Patna Metro Phase 1 kab tak complete hoga?",
        options: ["Dec 2025", "June 2026", "Jan 2027", "March 2026"],
        ans: 1
    }
];

function filterContent(topic) {
    const area = document.getElementById('main-area');
    area.innerHTML = '';
    let filtered = topic === 'all' ? newsData : newsData.filter(n => n.topic === topic);
    
    filtered.forEach(item => {
        area.innerHTML += `
            <div style="border-bottom: 1px solid #eee; padding: 10px 0;">
                <small style="color:orange">#${item.topic}</small>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>`;
    });
}

function showQuiz() {
    const area = document.getElementById('main-area');
    const neg = document.getElementById('negVal').value;
    area.innerHTML = `<h4>Practice Quiz (Negative: -${neg})</h4>`;

    quizData.forEach((item, qIdx) => {
        let optionsHtml = item.options.map((opt, oIdx) => 
            `<div class="option" onclick="checkAns(${qIdx}, ${oIdx}, ${item.ans})">${opt}</div>`
        ).join('');
        
        area.innerHTML += `
            <div class="quiz-card" id="q${qIdx}">
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

// Start with News
filterContent('all');

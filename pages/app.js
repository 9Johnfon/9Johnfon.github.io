let currentFilter = 'all';
let currentMode = 'study';
let currentIndex = 0;
let filteredQuestions = [...questions];
let userAnswers = {};

function getFilteredQuestions() {
    if (currentFilter === 'all') return [...questions];
    return questions.filter(q => q.category === currentFilter);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const question = filteredQuestions[currentIndex];

    if (!question) {
        container.innerHTML = '<p>ไม่มีข้อสอบในหมวดนี้</p>';
        return;
    }

    const categoryLabels = {
        emc: 'EMC',
        disaster: 'Disaster',
        etc: 'ETC'
    };

    let html = `
        <div class="question-card">
            <span class="category-badge ${question.category}">${categoryLabels[question.category] || question.category}</span>
            <div class="question-header">
                <div class="question-number">ข้อ ${question.number}</div>
            </div>
            <div class="question-text">${question.question}</div>
    `;

    if (currentMode === 'study') {
        html += `
            <div class="answer-section study">
                <span class="answer-label">✅ คำตอบ:</span>
                <div class="answer-text">${question.answer}</div>
                ${question.explanation ? `<p style="margin-top:10px;color:#666;font-size:0.95em;">💡 ${question.explanation}</p>` : ''}
            </div>
        `;
    } else {
        const savedAnswer = userAnswers[question.id];
        const showResult = savedAnswer !== undefined;

        html += `<ul class="options-list">`;
        question.options.forEach((opt, idx) => {
            let optClass = 'option-item';
            if (showResult) {
                const isCorrect = opt === question.answer;
                const isSelected = opt === savedAnswer;
                if (isCorrect) optClass += ' correct';
                else if (isSelected && !isCorrect) optClass += ' incorrect';
            } else if (savedAnswer === opt) {
                optClass += ' selected';
            }
            html += `<li class="${optClass}" data-option="${opt}">${opt}</li>`;
        });
        html += `</ul>`;

        if (showResult) {
            html += `
                <div class="answer-section ${savedAnswer === question.answer ? 'correct' : 'incorrect'}">
                    <span class="answer-label">${savedAnswer === question.answer ? '✅ ถูก!' : '❌ ผิด'}</span>
                    <div class="answer-text">คำตอบที่ถูก: ${question.answer}</div>
                    ${question.explanation ? `<p style="margin-top:10px;color:#666;font-size:0.95em;">💡 ${question.explanation}</p>` : ''}
                </div>
            `;
        }
    }

    html += `</div>`;
    container.innerHTML = html;

    // Add click handlers for options in quiz mode
    if (currentMode === 'quiz' && !userAnswers[question.id]) {
        document.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                userAnswers[question.id] = this.dataset.option;
                setTimeout(renderQuestion, 300);
            });
        });
    }

    updateNavButtons();
    updateScore();
}

function updateNavButtons() {
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('next-btn').disabled = currentIndex === filteredQuestions.length - 1;

    const checkBtn = document.getElementById('check-btn');
    if (currentMode === 'quiz' && !userAnswers[filteredQuestions[currentIndex]?.id]) {
        checkBtn.classList.remove('hidden');
    } else {
        checkBtn.classList.add('hidden');
    }
}

function updateScore() {
    const scoreDisplay = document.getElementById('score-display');
    const answered = Object.keys(userAnswers).length;
    const correct = Object.entries(userAnswers).filter(([id, ans]) => {
        const q = questions.find(q => q.id == id);
        return q && ans === q.answer;
    }).length;

    if (currentMode === 'quiz' && answered > 0) {
        scoreDisplay.textContent = `คะแนน: ${correct}/${answered}`;
        scoreDisplay.classList.remove('hidden');
    } else {
        scoreDisplay.classList.add('hidden');
    }
}

function showResult() {
    const total = filteredQuestions.length;
    const answered = Object.keys(userAnswers).length;
    const correct = Object.entries(userAnswers).filter(([id, ans]) => {
        const q = questions.find(q => q.id == id);
        return q && ans === q.answer;
    }).length;

    const modal = document.getElementById('result-modal');
    document.getElementById('result-text').textContent = 
        `คุณตอบถูก ${correct}/${total} ข้อ (${Math.round(correct/total*100)}%)`;
    modal.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    filteredQuestions = getFilteredQuestions();
    document.getElementById('question-count').textContent = `${filteredQuestions.length} ข้อ`;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            currentIndex = 0;
            userAnswers = {};
            filteredQuestions = getFilteredQuestions();
            document.getElementById('question-count').textContent = `${filteredQuestions.length} ข้อ`;
            renderQuestion();
        });
    });

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentMode = this.dataset.mode;
            userAnswers = {};
            renderQuestion();
        });
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentIndex < filteredQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        }
    });

    document.getElementById('check-btn').addEventListener('click', showResult);

    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('result-modal').classList.add('hidden');
    });

    renderQuestion();
});

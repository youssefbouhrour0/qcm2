const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "What Digiup?",
        answers: ["ydir", "youssef", "oussama", "mehdi"],
        correct: 1
    },
    {
        question: "What hihi?",
        answers: ["ydir", "youssef", "oussama", "mehdi"],
        correct: 3
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timePerQuestion = 10; // seconds

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
    startTimer();
    document.getElementById('submit-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
});

function showQuestion(index) {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    const question = questions[index];

    questionContainer.textContent = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, i) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(i);
        answersContainer.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(index) {
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === questions[currentQuestionIndex].correct) {
            btn.style.backgroundColor = '#76c7c0';
        } else if (i === index) {
            btn.style.backgroundColor = '#d9534f';
        }
    });
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';

    if (index === questions[currentQuestionIndex].correct) {
        score++;
    }
}

function checkAnswer() {
    selectAnswer(-1);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        resetTimer();
    } else {
        showResults();
    }
}

function updateProgress() {
    const progressPercent = Math.round((currentQuestionIndex / questions.length) * 100);
    document.getElementById('progress-percent').textContent = `${progressPercent}%`;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
}

function startTimer() {
    let timeLeft = timePerQuestion;
    document.getElementById('time-left').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'none';
    startTimer();
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
}

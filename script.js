let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestions();
    document.getElementById('submit-all-btn').addEventListener('click', showResults);
});

function showQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = ''; // Clear existing questions
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';

        const questionTitle = document.createElement('div');
        questionTitle.className = 'question-title';
        questionTitle.textContent = question.question;
        questionDiv.appendChild(questionTitle);

        const answersDiv = document.createElement('div');
        answersDiv.className = 'answers';
        question.answers.forEach((answer, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = i;
            input.onclick = () => selectAnswer(input, index, i);
            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            answersDiv.appendChild(label);
        });
        questionDiv.appendChild(answersDiv);

        questionsContainer.appendChild(questionDiv);
    });
}

function selectAnswer(input, questionIndex, answerIndex) {
    const question = questions[questionIndex];
    const labels = document.querySelectorAll(`#questions-container .question-container:nth-child(${questionIndex + 1}) .answers label`);
    labels.forEach(label => label.classList.add('disabled'));

    if (answerIndex === question.correct) {
        input.parentElement.classList.add('correct');
        score++;
    } else {
        input.parentElement.classList.add('incorrect');
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    let resultsHTML = `<h2>Vous avez obtenu ${score} sur ${questions.length}</h2>`;
    resultsHTML += '<h3>Revoir vos réponses :</h3>';
    questions.forEach((q, index) => {
        const userAnswerIndex = Array.from(document.querySelectorAll(`input[name="question-${index}"]`)).findIndex(input => input.checked);
        const userAnswer = userAnswerIndex !== -1 ? q.answers[userAnswerIndex] : 'Aucune réponse';
        const isCorrect = userAnswerIndex === q.correct;

        resultsHTML += `
            <div class="result ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>${q.question}</strong></p>
                <p>${isCorrect ? '✔' : '✖'} ${userAnswer}</p>
                <p>Réponse correcte : ${q.answers[q.correct]}</p>
            </div>
        `;
    });
    quizContainer.innerHTML = resultsHTML;
}

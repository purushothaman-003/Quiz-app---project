const quizData = [
    {
        question: "What is the capital of Tamil Nadu?",
        a: "Coimbatore",
        b: "Madurai",
        c: "Chennai",
        correct: "c"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: " font-color",
        b: "color",
        c: "text-color",
        correct: "b"
    },
    {
        question: "Which is the largest ocean in the world?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Pacific Ocean",
        correct: "c"
    },
    {
        question: "Which language is used for web apps?",
        a: "Python",
        b: "JavaScript",
        c: "Java",
        correct: "b"
    }
];

const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit');
const resultContainer = document.getElementById('result-container');
const result = document.getElementById('result');
const retryBtn = document.getElementById('retry');
const quizContainer = document.querySelector('.quiz-container');

let score = 0;

function loadQuiz() {
    quizData.forEach((currentQuizData, index) => {
        const quizBlock = document.createElement('div');
        quizBlock.classList.add('question');
        quizBlock.innerHTML = `
            <div>${index + 1}. ${currentQuizData.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" id="a${index}" value="a"> <label for="a${index}">${currentQuizData.a}</label></li>
                <li><input type="radio" name="question${index}" id="b${index}" value="b"> <label for="b${index}">${currentQuizData.b}</label></li>
                <li><input type="radio" name="question${index}" id="c${index}" value="c"> <label for="c${index}">${currentQuizData.c}</label></li>
            </ul>
        `;
        quizForm.appendChild(quizBlock);
    });
}

function getSelectedAnswers() {
    const answers = [];
    quizData.forEach((_, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        answers.push(answer ? answer.value : undefined);
    });
    return answers;
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const answers = getSelectedAnswers();
    score = 0;
    answers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    result.innerHTML = `You answered ${score}/${quizData.length} questions correctly.`;
});

retryBtn.addEventListener('click', () => {
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    quizForm.reset();
    score = 0;
});

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    quizContainer.style.display = 'block';
});


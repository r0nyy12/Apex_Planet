const quizData = [
  {
    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "HighText Machine Language",
    c: "HyperTool Markup Language",
    d: "None of these",
    correct: "a"
  },
  {
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "CSS",
    c: "Java",
    d: "PHP",
    correct: "b"
  },
  {
    question: "Which is not a JavaScript framework?",
    a: "React",
    b: "Angular",
    c: "Vue",
    d: "Django",
    correct: "d"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function loadQuiz() {
  deselectOptions();
  const currentQuiz = quizData[currentQuestion];
  questionEl.innerText = currentQuiz.question;
  optionA.innerText = currentQuiz.a;
  optionB.innerText = currentQuiz.b;
  optionC.innerText = currentQuiz.c;
  optionD.innerText = currentQuiz.d;
}

function deselectOptions() {
  [optionA, optionB, optionC, optionD].forEach(btn => {
    btn.style.backgroundColor = "#f0f0f0";
    btn.removeAttribute("data-selected");
  });
}

[optionA, optionB, optionC, optionD].forEach(btn => {
  btn.addEventListener("click", () => {
    deselectOptions();
    btn.style.backgroundColor = "#d1e7dd";
    btn.setAttribute("data-selected", "true");
  });
});

nextBtn.addEventListener("click", () => {
  const selectedBtn = document.querySelector(".option[data-selected='true']");
  if (selectedBtn) {
    const answer = selectedBtn.id;
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      document.querySelector(".quiz-box").innerHTML = `
        <h2>🎉 You scored ${score}/${quizData.length}!</h2>
        <button onclick="location.reload()">Play Again</button>
      `;
    }
  } else {
    alert("Please select an answer!");
  }
});

loadQuiz();
const quizData = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Which language is used for web?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correct: 2
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language",
      "Hyper Tool Multi Language"
    ],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  answersEl.innerHTML = "";
  selectedAnswer = null;

  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;

    li.addEventListener("click", () => {
      document.querySelectorAll("li").forEach(el => el.classList.remove("selected"));
      li.classList.add("selected");
      selectedAnswer = index;
    });

    answersEl.appendChild(li);
  });

  progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Please select an answer!");
    return;
  }

  if (selectedAnswer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>Quiz Completed 🎉</h2>
    <p>Your score: ${score} / ${quizData.length}</p>
    <button onclick="location.reload()">Restart</button>
  `;
}

loadQuestion();
const startBtn = document.getElementById("start");
const questionContainer = document.getElementById("questions");
const startContainer = document.getElementById("start-screen");
// const questionElement = document.getElementById("question");
// const answerButtons = document.querySelectorAll(".answer-btn");
// const resultContainer = document.getElementById("result-container");
// const resultElement = document.getElementById("result");
// const initialsInput = document.getElementById("initials");
// const submitBtn = document.getElementById("submit-btn");

let currentQuestionIndex = 0;
// let score = 0;
let timeRemaining = 60;
let timerInterval;

function startQuiz() {
  startContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  timerInterval = setInterval(updateTime, 1000);
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    answerButtons[index].textContent = answer;
    answerButtons[index].addEventListener("click", () => checkAnswer(index));
  });
}

// function checkAnswer(selectedIndex) {
//   const currentQuestion = questions[currentQuestionIndex];

//   if (selectedIndex === currentQuestion.correctIndex) {
//     score++;
//   } else {
//     timeRemaining -= 10;
//     if (timeRemaining < 0) {
//       timeRemaining = 0;
//     }
//   }

//   currentQuestionIndex++;

//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     endQuiz();
//   }
// }

// function endQuiz() {
//   clearInterval(timerInterval);
//   questionContainer.classList.add("hide");
//   resultContainer.classList.remove("hide");
//   resultElement.textContent = `Your Score: ${score}`;
// }

function updateTime() {
  document.getElementById("time").textContent = timeRemaining;

  if (timeRemaining > 0) {
    timeRemaining--;
  } else {
    endQuiz();
  }
}

// function saveScore() {
//   const initials = initialsInput.value.trim();
//   if (initials !== "") {
//     // You can implement saving the score with initials to a database or localStorage.
//     console.log(`Initials: ${initials}, Score: ${score}`);
//   }
// }
startBtn.addEventListener("click", startQuiz);
// submitBtn.addEventListener("click", saveScore);

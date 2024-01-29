const startBtn = document.getElementById("start");
const questionContainer = document.getElementById("questions");
const startContainer = document.getElementById("start-screen");
const questionElement = document.getElementById("question-title");
const answerButtons = document.querySelectorAll(".answer-btn");
const resultContainer = document.getElementById("end-screen");
const resultElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitBtn = document.getElementById("submit-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 60;
let timerInterval;

function startQuiz() {
  console.log("Starting quiz")
  startContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  timerInterval = setInterval(updateTime, 1000);
  showQuestion(true);
}

function showQuestion(firstTime) {
  // Debug
  console.log(`
    currentQuestionIndex: ${currentQuestionIndex}
  `)
  //

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  
  currentQuestion.answers.forEach((answer, index) => {
    answerButtons[index].textContent = answer;
    if (!firstTime) return
    answerButtons[index].addEventListener("click", () => {
      checkAnswer(index)
    });
  });
}

function checkAnswer(selectedIndex) {
  console.log("Checking answer")
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctIndex) {
    score++;
  } else {
    timeRemaining -= 10;
    if (timeRemaining < 0) {
      timeRemaining = 0;
    }
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  resultElement.textContent = score;
}

function updateTime() {
  document.getElementById("time").textContent = timeRemaining;

  if (timeRemaining > 0) {
    timeRemaining--;
  } else {
    endQuiz();
  }
}

function saveScore() {
  const initials = initialsInput.value.trim();
  if (initials === "") return
  // You can implement saving the score with initials to a database or localStorage.
  const scores = JSON.parse(localStorage.getItem('mod6hw-hiscore')||"[]")
  scores.push([initials, score])
  localStorage.setItem('mod6hw-hiscore', JSON.stringify(scores))
  location.reload()
  // console.log(`Initials: ${initials}, Score: ${score}`);
}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", saveScore);

// Global variables
var timerEl = document.getElementById("time");
var startScreen = document.querySelector("#start-screen");
var startEL = document.querySelector(".start");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var questionsHide = document.querySelector("#questions");
var scores = document.getElementById("scores");
var finalScore = document.getElementById("#final-score");
var timeLeft = 0;
var currentQuestionIndex = 0;

//Function for the timer
function timeCountDown() {
  timeLeft = 6000;

  var timeInterval = setInterval(function () {
    timerEl.innerText = timeLeft;
    timeLeft--;
    if (timeLeft < 0 || currentQuestionIndex > 3) {
      timeLeft + 1;

      clearTimeout(timeInterval);
      endScreen.classList.remove("hide");
      questionsHide.classList.add("hide");
      choicesOutput.classList.add("hide");
    }
  }, 6000);
}

// Start Quiz function
if (startEL) {
  startEL.addEventListener("click", startQuiz);
}

function startQuiz(event) {
  startScreen.classList.add("hide");
  event.preventDefault();
  timeCountDown();
  questionLoop();
}

// Quiz function loop
function questionLoop() {
  var currentQuestion = triviaData[currentQuestionIndex];
  choicesOutput.innerHTML = "";
  questionTitle.innerHTML = "";

  if (currentQuestion && currentQuestion.choices) {
    var choices = currentQuestion.choices;
    questionTitle.innerText = currentQuestion.question;

    for (var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      var isCorrect = currentQuestion.answer === choice;

      choicesOutput.insertAdjacentHTML(
        "beforeend",
        `
          <button data-correct=${isCorrect}>${choice}</button>
        `
      );
    }

    // Add event listener to each button in choicesOutput
    choicesOutput.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        checkCorrectAnswer(button);
      });
    });

    questionsHide.classList.remove("hide");
  }
}

// Checking the correct answer conditions and displaying correct answer
function checkCorrectAnswer(button) {
  console.log("checkCorrectAnswer called");
  var dataCorrect = button.getAttribute("data-correct");
  var feedBack = document.querySelector("#feedback");

  clearInterval(feedBack.fadeEffect);

  feedBack.classList.remove("hide");
  var correctAudio = new Audio("assets/sfx/correct.wav");
  var incorrectAudio = new Audio("assets/sfx/incorrect.wav");

  if (dataCorrect === "true") {
    feedBack.innerText = "Correct!";
    correctAudio.play();
    fadeOut(feedBack);
    currentQuestionIndex++;
    setTimeout(questionLoop, 1000);
  } else {
    feedBack.innerText = "Incorrect!";
    incorrectAudio.play();
    fadeOut(feedBack);
    timeLeft -= 10;
    currentQuestionIndex++;
    setTimeout(questionLoop, 1000);
    console.log(timeLeft);
    // finalScore.innerHTML = timeLeft;
  }
}

// Fading out the feedback caption
function fadeOut(feedBack) {
  feedBack.style.opacity = 1;
  feedBack.fadeEffect = setInterval(function () {
    if (feedBack.style.opacity > 0) {
      feedBack.style.opacity -= 0.1;
    } else {
      clearInterval(feedBack.fadeEffect);
    }
  }, 100);
}

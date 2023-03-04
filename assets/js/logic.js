// // Global variables
// var timerEl = document.getElementById("time");
// var startScreen = document.querySelector("#start-screen");
// var startEL = document.querySelector(".start");
// var questionTitle = document.querySelector("#question-title");
// var choicesOutput = document.querySelector("#choices");
// var endScreen = document.querySelector("#end-screen");
// var questionsHide = document.querySelector("#questions");
// var scores = document.getElementById("scores");
// var timeLeft = 0;
// var currentQuestionIndex = 0;
// var wrapper = document.querySelector(".wrapper");
// var check = localStorage.getItem("user_data");
// var fadeEffect;

// //Function for the timer
// function timeCountDown() {
//   timeLeft = 405;

//   var timeInerval = setInterval(function () {
//     timerEl.innerText = timeLeft;
//     timeLeft--;
//     if (timeLeft < 0 || currentQuestionIndex > 3) {
//       timeLeft + 1;
//       clearTimeout(timeInerval);
//       endScreen.classList.remove("hide");
//       questionsHide.classList.add("hide");
//       printFinalScore();
//     }
//   }, 405);
// }

// // Start Quiz function
// if (startEL) {
//   startEL.addEventListener("click", startQuiz);
// }
// function startQuiz(event) {
//   startScreen.classList.add("hide");
//   event.preventDefault();
//   timeCountDown();
//   questionTitle.innerHTML = ""; // clear the question title element
//   questionLoop();
// }

// // Quiz function loop
// function questionLoop() {
//   var currentQuestion = triviaData[currentQuestionIndex];
//   choicesOutput.innerHTML = "";
//   // questionTitle.innerHTML = "";

//   var choices = currentQuestion.choices;
//   if (choices) {
//     questionTitle.innerText = currentQuestion.question;
//   }

//   for (var i = 0; i < choices.length; i++) {
//     var choice = choices[i];
//     var isCorrect = currentQuestion.answer === choice;

//     choicesOutput.insertAdjacentHTML(
//       "beforeend",
//       `
//     <button data-correct=${isCorrect}>${choice}</button>
//      `
//     );
//   }
//   questionsHide.classList.remove("hide");
// }

// // Checking the correct answer conditions and displaying correct answer

// if (choicesOutput) {
//   choicesOutput.addEventListener("click", checkCorrectAnswer);
// }

// function checkCorrectAnswer(event) {
//   console.log("checkCorrectAnswer called");
//   var element = event.target;
//   var dataCorrect = element.getAttribute("data-correct");
//   var feedBack = document.querySelector("#feedback");

//   clearInterval(fadeEffect);

//   feedBack.classList.remove("hide");
//   var correctAudio = new Audio("assets/sfx/correct.wav");
//   var incorrectAudio = new Audio("assets/sfx/incorrect.wav");

//   if (dataCorrect === "true") {
//     // feedBack.style.opacity = 1;
//     feedBack.innerText = "Correct!";
//     // correctAudio.play();
//     fadeOut();
//     currentQuestionIndex++;
//     questionLoop();
//   } else {
//     // feedBack.style.opacity = 1;
//     feedBack.innerText = "Incorrect!";
//     // incorrectAudio.play();
//     fadeOut();
//     timeLeft -= 10;
//     currentQuestionIndex++;
//     questionLoop();
//   }
// }

// // Fading out the feeback caption
// function fadeOut(callback) {
//   var feedBack = document.querySelector("#feedback");
//   var fadeEffect = setInterval(function () {
//     if (!feedBack.style.opacity) {
//       feedBack.style.opacity = 1;
//     }
//     if (feedBack.style.opacity > 0) {
//       feedBack.style.opacity -= 0.1;
//     } else {
//       clearInterval(fadeEffect);
//       // feedBack.style.opacity = 1;
//       // if (typeof callback === "function") {
//       //   callback();
//       //   }
//     }
//   }, 90);
// }

// // Prints final score to page
// function printFinalScore() {
//   finalScore.innerText = timeLeft;
// }

// Global variables
var timerEl = document.getElementById("time");
var startScreen = document.querySelector("#start-screen");
var startEL = document.querySelector(".start");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var questionsHide = document.querySelector("#questions");
var scores = document.getElementById("scores");
var timeLeft = 0;
var currentQuestionIndex = 0;

//Function for the timer
function timeCountDown() {
  timeLeft = 30;

  var timeInterval = setInterval(function () {
    timerEl.innerText = timeLeft;
    timeLeft--;
    if (timeLeft < 0 || currentQuestionIndex > 3) {
      timeLeft + 1;

      clearTimeout(timeInterval);
      endScreen.classList.remove("hide");
      questionsHide.classList.add("hide");
      //printFinalScore();
    }
  }, 30);
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

// Prints final score to page
// function printFinalScore(finalScore) {
//   scores.innerHTML = finalScore;
// }

// function printFinalScore() {
//   // calculate the final score
//   var finalScore = timeLeft;
//   localStorage.setItem("score", finalScore);
//   // call the saveScore function in scores.js and pass finalScore as an argument
//   // saveScore(finalScore);
//   console.log(finalScore);
// }

// function printFinalScore() {
//   // calculate the final score
//   var finalScore = timeLeft;

//   // Get the high scores list from local storage
//   var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];

//   // Get the user's initials
//   var initialsInput = document.querySelector("#initials");
//   var initials = initialsInput.value;

//   // Create a new high score object
//   var newHighScore = {
//     initials: initials,
//     score: finalScore,
//   };

//   // Add the new high score object to the high scores list
//   highScoresList.push(newHighScore);

//   // Save the updated high scores list to local storage
//   localStorage.setItem("highScores", JSON.stringify(highScoresList));

//   // Log the final score to the console
//   console.log(finalScore);
// }

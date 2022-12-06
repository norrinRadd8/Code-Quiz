// Global variables
var timerEl = document.getElementById("time");
var startScreen = document.querySelector("#start-screen");
var startEL = document.querySelector(".start");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen")
var questionsHide = document.querySelector("#questions")
var scores = document.getElementById("scores")
var timeLeft = 0;
var currentQuestionIndex = 0
var wrapper = document.querySelector(".wrapper");
var check = localStorage.getItem('user_data');

//Function for the timer
function timeCountDown() {
    timeLeft = 105

    var timeInerval = setInterval(function () {
        timerEl.innerText = timeLeft;
        timeLeft--;
        if (timeLeft < 0 || currentQuestionIndex > 3) {
            clearTimeout(timeInerval);
            endScreen.classList.remove('hide')
            questionsHide.classList.add('hide')
            printFinalScore()
        }
    }, 105)

}

// Start Quiz function
if(startEL){
    startEL.addEventListener("click", startQuiz);
}
function startQuiz(event) {
    startScreen.classList.add('hide')
    event.preventDefault()
    timeCountDown()
    questionLoop()
}

// Quiz function loop
function questionLoop() {

    var currentQuestion = triviaData[currentQuestionIndex];
    choicesOutput.innerHTML = '';
    questionTitle.innerHTML = '';

    var choices = currentQuestion.choices; 
    if(choices) {
        questionTitle.innerText = currentQuestion.question;
        }
        
    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var isCorrect = currentQuestion.answer === choice;

        choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}>${choice}</button>
     `)
    }
    questionsHide.classList.remove('hide');
   
}

// Checking the correct answer conditions and displaying correct answer

if(choicesOutput) {
    choicesOutput.addEventListener("click", checkCorrectAnswer);
}

function checkCorrectAnswer(event) {
    
    var element = event.target
    var dataCorrect = element.getAttribute("data-correct")
    var feedBack = document.querySelector("#feedback")

    feedBack.classList.remove('hide')
    var correctAudio = new Audio("assets/sfx/correct.wav")
    var incorrectAudio = new Audio("assets/sfx/incorrect.wav")

    if (dataCorrect === "true") {
        feedBack.innerText = 'Correct!'
        correctAudio.play()
        fadeOut()
        currentQuestionIndex++
        questionLoop()

    } else {
        feedBack.innerText = 'Incorrect!'
        incorrectAudio.play()
        fadeOut()
        timeLeft -= 10
        currentQuestionIndex++
        questionLoop()
    }
    
    
}

// Fading out the feeback caption
function fadeOut() {
    var feedBack = document.querySelector("#feedback")
    var fadeEffect = setInterval(function () {

        if (!feedBack.style.opacity) {
            feedBack.style.opacity = 1
        }
        if (feedBack.style.opacity > 0) {
            feedBack.style.opacity -= 0.1
        } else {
            clearInterval(fadeEffect)
        }
    }, 90)
}

// Prints final score to page
function printFinalScore() {
    finalScore.innerText = timeLeft
}














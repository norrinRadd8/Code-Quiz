// Global variables
var timerEl = document.getElementById("time");
var startScreen = document.querySelector("#start-screen");
var startEL = document.querySelector(".start");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen")
var questionsHide = document.querySelector("#questions")
var finalScore = document.querySelector("#final-score")
var initials = document.querySelector("#initials")
var submit = document.querySelector("#submit")
var scores = document.getElementById("scores")
var timeLeft = 0;
var currentQuestionIndex = 0


var highScores = document.getElementById("highscores")
var wrapper = document.querySelector(".wrapper");
var check = localStorage.getItem('user_data')


choicesOutput.addEventListener('click', checkCorrectAnswer)
startEL.addEventListener('click', startQuiz)
submit.addEventListener('click', enterInitials)


//Function for the timer
function timeCountDown() {
    timeLeft = 180

    var timeInerval = setInterval(function () {
        timerEl.innerText = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearTimeout(timeInerval);
            endScreen.classList.remove('hide')
            questionsHide.classList.add('hide')
            printFinalScore()
        }
    }, 180)

}

// Start Quiz function
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

    if(choices == undefined){
        //stop timer
        console.log('Hello')
    }

    var choices = currentQuestion.choices;
        questionTitle.innerText = currentQuestion.question;
    
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

function checkCorrectAnswer(event) {
    var element = event.target
    var dataCorrect = element.getAttribute("data-correct")
    var feedBack = document.querySelector("#feedback")

    feedBack.classList.remove('hide')
    var correctAudio = new Audio("assets/sfx/correct.wav")
    var incorrectAudio = new Audio("assets/sfx/incorrect.wav")

    if (dataCorrect === "true") {
        correctAudio.play()
        feedBack.innerText = 'Correct!'
        currentQuestionIndex++
        questionLoop()

    } else {
        incorrectAudio.play()
        feedBack.innerText = 'Incorrect!'
        currentQuestionIndex++
        timeLeft -= 30
        questionLoop()
    }
    fadeOut()
    
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
    }, 120)
}


function printFinalScore() {
    finalScore.innerText = timeLeft
}

// Submission 
var userData = [{           // May use this array to getItem to populate highScores
    initials: initials,
    finalScore: finalScore
}]

function enterInitials() {
    // Data storage
    var enterInitials = initials.value
    initials.value = " "

    var iPush = userData.push(enterInitials) // Thinking if worth pushing to an array then grabbing it to populate 
    var tPush = userData.push(timeLeft)

    var finalData = (enterInitials + `, ` + timeLeft)

    localStorage.setItem('user_data', finalData)
    highScores.innerHTML = 'Hello' // Uncaught TypeError: Cannot set properties of null (setting 'innerHTML)

}

function scoresPage() {
    console.log(userData)
}

// Clear localStorage  
function clearScores() {
    var clear = document.querySelector("#clear")
    localStorage.clear() 
    highScores.innerText = ""   
    
}




// Global variables
var timerEl = document.getElementById("time");
var startScreen = document.querySelector("#start-screen");
var startEL = document.querySelector(".start");
var wrapper = document.querySelector(".wrapper");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen")
var questionsHide = document.querySelector("#questions")
var finalScore = document.querySelector("#final-score")
var initials = document.querySelector("#initials")
var submit = document.querySelector("#submit")
var finalScore = document.querySelector("#final-score")
//var currentQuestionIndex = Math.floor(Math.random() * 3)
var timeLeft = 0;
var currentQuestionIndex = 0
var currentQuestion = triviaData[currentQuestionIndex]

choicesOutput.addEventListener('click', checkCorrectAnswer) 
startEL.addEventListener('click', startQuiz)
submit.addEventListener('click', enterName)

//Function for the timer
function timeCountDown() {
        timeLeft = 100
    
    var timeInerval = setInterval(function() {
        timerEl.innerText = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            clearTimeout(timeInerval);
            endScreen.classList.remove('hide')
            questionsHide.classList.add('hide')
            printFinalScore()
        }
    }, 100)
    
    
}

// Start Quiz function
function startQuiz(event) {
    startScreen.classList.add('hide')
    event.preventDefault()
    timeCountDown()
    questionLoop()
    currentQuestionIndex
    
}

// Quiz function loop
 function questionLoop(event) {
    var choices = currentQuestion.choices
    questionTitle.innerText = currentQuestion.question
    
    choicesOutput.innerHTML = ''

    for(var i = 0; i < choices.length; i++) {
     var choice = choices[i]
     var isCorrect = currentQuestion.answer === choice
    
     choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}>${choice}</button>
     `)
     choicesOutput.setAttribute('data-next', currentQuestionIndex++ ) //Storing values that I'm not quite sure what they are
    }   
    questionsHide.classList.remove('hide') 
    console.log(choicesOutput)   
}

// Checking the correct answer conditions and displaying correct answer
function checkCorrectAnswer(event) {
    var element = event.target
    var dataCorrect = element.getAttribute("data-correct")
    var feedBack = document.querySelector("#feedback")
    
    
    feedBack.classList.remove('hide')

    if(dataCorrect === "true") {
        feedBack.innerText = 'Correct!'
        currentQuestionIndex ++ 
              
    } else {
        feedBack.innerText = 'Incorrect!'
        timeLeft -= 30
        
    } 
    fadeOut()
    nextQuestion()
    
}         
    
// Need to fade out the feeback caption
function fadeOut() {
    var feedBack = document.querySelector("#feedback")
    var fadeEffect = setInterval(function() {
    
    if(!feedBack.style.opacity) {
        feedBack.style.opacity = 1
    }
    if(feedBack.style.opacity > 0) {
        feedBack.style.opacity -=0.1
    } else {
        clearInterval(fadeEffect)
    }
}, 200)
}

// Need to go onto the next question 
function nextQuestion() {
    currentQuestionIndex ++
}

// Need to review code
function printFinalScore() {
    localStorage.setItem('score', timeLeft)
    finalScore.innerText = timeLeft
    console.log(timeLeft)
    console.log(finalScore)
    
}

// Submission
function enterName() {
    var name = initials.value
    localStorage.setItem('initials', name)
    initials.value = " "
}



// Global variables
var timerEl = document.getElementById("time");
var startScreen = document.querySelector("#start-screen");
var startEL = document.querySelector(".start");
var wrapper = document.querySelector(".wrapper");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen")
var questionsHide = document.querySelector("#questions")
//var currentQuestionIndex = Math.floor(Math.random() * 3)
var currentQuestionIndex = 0
var currentQuestion = triviaData[currentQuestionIndex]

choicesOutput.addEventListener('click', checkCorrectAnswer) 
startEL.addEventListener('click', startQuiz)

//Function for the timer
function timeCountDown() {
    var timeLeft = 1200;
    var timeInerval = setInterval(function() {
        timerEl.innerText = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            clearTimeout(timeInerval);
            endScreen.classList.remove('hide')
        }
    }, 1200)
    
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
    questionsHide.classList.remove('hide')
    questionTitle.innerText = currentQuestion.question
    
    for(var i = 0; i < choices.length; i++) {
     var choice = choices[i]
     var isCorrect = currentQuestion.answer === choice
    
     choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}>${choice}</button>
     `)
    }    
    console.log(choicesOutput)   
}

// Checking the correct answer conditions and displaying correct answer
function checkCorrectAnswer(event) {
    var element = event.target
    var dataCorrect = element.getAttribute("data-correct")
    var feedBack = document.querySelector("#feedback")
    currentQuestionIndex ++ 
    feedBack.classList.remove('hide')
   // Need to 'flash' the feeback caption

    if(dataCorrect === "true") {
        feedBack.innerText = 'Correct!'
        currentQuestionIndex ++  
         
    } else
        feedBack.innerText = 'Incorrect!'
    } 
    
    
    
     
    // Need to go onto the next question 






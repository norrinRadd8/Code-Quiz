// Global variables
var timerEl = document.getElementById("time");
var startEl = document.querySelector(".start");
var wrapper = document.querySelector(".wrapper");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen")
var questionsHide = document.querySelector("#questions")
var currentQuestionIndex = Math.floor(Math.random() * 3)
var currentQuestion = triviaData[currentQuestionIndex]



//Function for the timer
function timeCountDown() {
    var timeLeft = 1000;
    var timeInerval = setInterval(function() {
        timerEl.innerText = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            clearTimeout(timeInerval);
            questionsHide.innerText = ''
            endScreen.classList.remove('hide')
        }
    }, 1000)
    
}

function startQuiz(event) {
    timeCountDown()
    event.preventDefault()
    startEl.innerText = ''
    questionLoop()
}

 function questionLoop() {
    
    var choices = currentQuestion.choices

    questionTitle.innerText = currentQuestion.question
    choicesOutput.innerHTML = ''
    questionsHide.classList.remove('hide')

    for(var i = 0; i < choices.length; i++) {
     var choice = choices[i]
     var isCorrect = currentQuestion.answer === choice
    
     choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}>${choice}</button>
     `)
     currentQuestionIndex
    }    
    //console.log(event)
}

function checkCorrectAnswer(event) {
    
    var element = event.target
    var dataCorrect = element.getAttribute("data-correct")
    var feedBack = document.querySelector("#feedback")
    
    feedBack.classList.remove('hide')
   

    if(dataCorrect === "true") {
        feedBack.innerText = 'Correct!'
            
    } 
    if(dataCorrect != "true") {
        feedBack.innerText = 'Incorrect!'
        
    }  
    questionLoop(event)
    
    console.log(typeof currentQuestionIndex) 
    console.log(typeof feedBack)
   
}

// function displayFeedback() {

// }

choicesOutput.addEventListener('click', checkCorrectAnswer) 
startEl.addEventListener('click', startQuiz)



// function currentQuestion() {
    
// }

// currentQuestion()


// if(){

// }
// checkCorrectAnswer()
// if(element.dataset.correct === true) {
//     console.log('CORRECT')
// }
//console.log(triviaData[0].answer)
// 


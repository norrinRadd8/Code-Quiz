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

//var currentQuestionIndex = Math.floor(Math.random() * 3)
var timeLeft = 0;
var currentQuestionIndex = 0
var currentQuestion = triviaData[currentQuestionIndex]


//choicesOutput.addEventListener('click', checkCorrectAnswer)
startEL.addEventListener('click', startQuiz)
submit.addEventListener('click', enterInitials)




//console.log(currentQuestion)

//Function for the timer
function timeCountDown() {
        timeLeft = 1000
    
    var timeInerval = setInterval(function() {
        timerEl.innerText = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            clearTimeout(timeInerval);
            endScreen.classList.remove('hide')
            questionsHide.classList.add('hide')
            printFinalScore()
        }
    }, 1000)
    
    
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
    
    choicesOutput.innerHTML = ''
    questionTitle.innerHTML = ''
    
    var choices = currentQuestion.choices
    questionTitle.innerText = currentQuestion.question   

    for(var i = 0; i < choices.length; i++) {
     var choice = choices[i]
     var isCorrect = currentQuestion.answer === choice
     
     choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}>${choice}</button>
     `)
    
    }  
    questionsHide.classList.remove('hide')
}

// Checking the correct answer conditions and displaying correct answer
function checkCorrectAnswer(event) {
    var element = event.target 
    console.log(element)
    currentQuestionIndex++
    var dataCorrect = element.getAttribute("data-correct")
    var feedBack = document.querySelector("#feedback")
    
    feedBack.classList.remove('hide')

    if(dataCorrect === "true") {
        feedBack.innerText = 'Correct!'
        // currentQuestionIndex++ 
        console.log(currentQuestionIndex)
        console.log(feedBack)
        
                  
    } else {
        feedBack.innerText = 'Incorrect!'
        // currentQuestionIndex++
        console.log(currentQuestionIndex)
        timeLeft -= 30
        
    } 
    fadeOut()
    //nextQuestion()
    
}         
    
// Fading out the feeback caption
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
function nextQuestion(event) {
    // var nextQ = event.target
    // currentQuestionIndex++
}
    
//   }

// Need to review code
function printFinalScore() {
    //localStorage.setItem('score', timeLeft)
    finalScore.innerText = timeLeft
}


// Submission
// var userData = [{
//     initials: initials,
//     finalScore: finalScore
// }]


function enterInitials() {
    // Data storage
    
    var enterInitials = initials.value
    
    // initials.value = " "
    
    // var iPush = userData.push(enterInitials)
    // var tPush = userData.push(timeLeft)

    var finalData = (enterInitials + `, ` + timeLeft)
    
    localStorage.setItem('user_data', finalData)
    
    
    
    console.log(finalData)
    console.log(localStorage.getItem('user_data'))
}
choicesOutput.onclick = checkCorrectAnswer
// choicesOutput.addEventListener('click', ()=> {
//     console.log(choicesOutput)
//     checkCorrectAnswer
// })
printFinalScore()



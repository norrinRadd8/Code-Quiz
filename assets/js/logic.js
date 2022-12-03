// Global variables
var timerEl = document.getElementById("time");
var startEl = document.querySelector(".start");
var wrapper = document.querySelector(".wrapper");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen")
var questionsHide = document.querySelector('#questions')
var currentQuestionIndex = 0


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

startEl.addEventListener("click", function(event) {
    event.preventDefault()
    timeCountDown()
    startEl.innerText = ''
    var currentQuestion = triviaData[currentQuestionIndex]
    
    var choices = currentQuestion.choices

    questionsHide.classList.remove('hide')
    questionTitle.innerText = currentQuestion.question
    
    choicesOutput.innerHTML = ''

    for(var i = 0; i < choices.length; i++) {
     var choice = choices[i]
     var isCorrect = currentQuestion.answer === choice
    
     choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}>${choice}</button>
     `)
     
    }
    
    
})

function checkCorrectAnswer(event) {
    console.log(event.target)
    var dataCorrect = element.dataset.correct = ""
}
choicesOutput.addEventListener('click', checkCorrectAnswer)
// if(){

// }
checkCorrectAnswer()
if(element.dataset.correct === true) {
    console.log('CORRECT')
}



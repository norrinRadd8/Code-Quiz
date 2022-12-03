// Global variables
var timerEl = document.getElementById("time");
var startEl = document.querySelector(".start");
var wrapper = document.querySelector(".wrapper");
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen")
var questionsHide = document.querySelector("#questions")
var answer = " "
var currentQuestionIndex = 0
var currentQuestion = triviaData[currentQuestionIndex]
var check = currentQuestion.answer


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

    
    var choices = currentQuestion.choices

    questionTitle.innerText = currentQuestion.question
    
    choicesOutput.innerHTML = ''
    questionsHide.classList.remove('hide')

    for(var i = 0; i < choices.length; i++) {
     var choice = choices[i]
     var isCorrect = currentQuestion.answer === choice
     
     
    //  console.log(typeof choice)
    //  console.log(typeof currentQuestion.answer)
    
     choicesOutput.insertAdjacentHTML('beforeend', `
    <button data-correct=${isCorrect}>${choice}</button>
     `)
     
    }    
})


function checkCorrectAnswer(event) {
    
    var element = event.target
    var dataCorrect = element.getAttribute("data-correct")
    var feedBack = document.querySelector("#feedback")
    

    feedBack.classList.remove('hide')
    
    console.log(element)
    // for(var i = 0; i < choices.length; i++) {
    //     var check = [i].answer
    //     console.log(check)
    // }
    if(dataCorrect = 'true') {
        feedBack.innerText = `Correct!`
        //console.log(dataCorrect)
        
        
        
    } 
    console.log(typeof dataCorrect)
    //console.log(check)
    //console.log('Correct')
    //console.log(event)
    //console.log(dataCorrect)
    //console.log(check)
    
    

    //triviaData[0].answer
    
    
   
}
choicesOutput.addEventListener('click', checkCorrectAnswer) 



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


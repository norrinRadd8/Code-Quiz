// Global variables
var timerEl = document.getElementById("time");
var startEl = document.querySelector(".start");
var wrapper = document.querySelector('.wrapper');
var questionTitle = document.querySelector("#question-title");
var choicesOutput = document.querySelector("#choices");
var currentQuestionIndex = 0


//Function for the timer
function timeCountDown() {
    var timeLeft = 120;
    var timeInerval = setInterval(function() {
        timerEl.innerText = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            clearTimeout(timeInerval);
        }
    }, 1200)
    
}

startEl.addEventListener("click", function(event) {
    event.preventDefault()
    timeCountDown()
    startEl.innerText = ''
    var currentQuestion = triviaData[currentQuestionIndex]
    var questionsHide = document.querySelector('#questions')
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
     console.log(choice)
    }
    
    
})


 console.log(questionTitle)

// var title = questionsEl.children[0]
// questionsEl = 'Hi There!!'
// var output = questionsEl += title.innerText

// console.log(output)

// function loopQuestions() {
//     var arr = triviaData
//     for(var i = 0; i < triviaData; i++) {   
        
//     }
//     console.log(arr[0].question)
//     console.log(arr[0].choices[2])
// }

// loopQuestions()
// Clear localStorage
var clear = document.querySelector("#clear")
var highScores = document.querySelector("#highscores")
var submit = document.querySelector("#submit")
var initials = document.querySelector("#initials")
var finalScore = document.querySelector("#final-score")

    
if(clear) {
    clear.addEventListener('click', clearScores)
}    
function clearScores() {
    localStorage.clear()    
    
}

// Submission 
// var userData = [{           // May use this array to getItem to populate highScores
//     initials: initials,
//     finalScore: finalScore
// }]

if(submit) {
    submit.addEventListener("click", enterInitials);
}

function enterInitials() {
    // Data storage
    var enterInitials = initials.value   
    
    // var iPush = userData.push(enterInitials) // Thinking if worth pushing to an array then grabbing it to populate 
    // var tPush = userData.push(timeLeft)
    var finalData = (enterInitials + `, ` + timeLeft)
    
    window.location.replace("highscores.html")
    var showScore = localStorage.getItem('user_data')
    highScores.innerText = localStorage.setItem(JSON.stringify(showScore))

    initials.value = " "
    
}
    console.log(typeof highScores)
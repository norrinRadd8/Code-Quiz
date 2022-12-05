var highScores = document.querySelector("#highscores")
//highScores.innerText = localStorage.getItem('user_data')



// Clear localStorage  
function clearScores() {
    var clear = document.querySelector("#clear")
    localStorage.clear() 
    highScores.innerText = ""   
    
}
console.log(highScores)

// Needs Reviewing
//highScores.innerText = localStorage.getItem('initials')
//highScores.innerText = localStorage.getItem('score')


// Search how to store a list in local storage
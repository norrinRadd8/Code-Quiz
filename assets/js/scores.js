// Clear localStorage
var clear = document.querySelector("#clear")
var highScores = document.querySelector("#highscores")

clear.addEventListener('click', clearScores)
    
    
function clearScores() {
    localStorage.clear() 
    highScores.innerText = ""   
    
}
// Needs Reviewing
highScores.innerText = localStorage.getItem('initials', name)
highScores.innerText = localStorage.getItem('score', timeLeft)

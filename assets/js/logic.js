var timerEl = document.getElementById("time");
var startEl = document.querySelector(".start");

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
    timeCountDown()
    event.preventDefault()
    console.log(event)
})



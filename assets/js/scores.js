// // Get the high scores list from local storage
// var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScoresList);

// // Get the submit button and add a click event listener to handle the form submission
// var submitButton = document.querySelector("#submit");
// if (submitButton) {
//   submitButton.addEventListener("click", function (event) {
//     // Prevent the form from submitting
//     event.preventDefault();

//     // Get the user's initials
//     var initialsInput = document.querySelector("#initials");
//     var initials = initialsInput.value;

//     // Get the final score
//     var finalScore = localStorage.getItem("mostRecentScore");

//     // Create a new high score object
//     var newHighScore = {
//       initials: initials,
//       score: finalScore,
//     };

//     // Add the new high score object to the high scores list
//     highScoresList.push(newHighScore);

//     // Save the updated high scores list to local storage
//     localStorage.setItem("highScores", JSON.stringify(highScoresList));

//     // Redirect to the high scores page
//     window.location.href = "highscores.html";
//   });
// }

// // Get the high scores table and populate it with the high scores list
// var highScoresTable = document.querySelector("#highscores-table");
// if (highScoresTable) {
//   // Sort the high scores list in descending order of score
//   highScoresList.sort(function (a, b) {
//     return b.score - a.score;
//   });

//   // Populate the high scores table with the high scores list
//   for (var i = 0; i < highScoresList.length; i++) {
//     var highScore = highScoresList[i];
//     var row = document.createElement("tr");
//     var rank = document.createElement("td");
//     var initials = document.createElement("td");
//     var score = document.createElement("td");

//     rank.textContent = i + 1;
//     initials.textContent = highScore.initials;
//     score.textContent = highScore.score;

//     row.appendChild(rank);
//     row.appendChild(initials);
//     row.appendChild(score);
//     highScoresTable.appendChild(row);

//     console.log(score);
//   }
// }

// // Get the clear button and add a click event listener to handle clearing the high scores list
// var clearButton = document.querySelector("#clear");
// if (clearButton) {
//   clearButton.addEventListener("click", function () {
//     // Clear the high scores list from local storage
//     localStorage.removeItem("highScores");

//     // Remove the high scores table from the high scores page
//     highScoresTable.remove();
//   });
// }

// function saveScore(score) {
//   // do something with the score, like saving it to a database or displaying it on the high scores page
// }

// // Get the high scores list from local storage
// var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScoresList);

// // Get the submit button and add a click event listener to handle the form submission
// var submitButton = document.querySelector("#submit");
// if (submitButton) {
//   submitButton.addEventListener("click", function (event) {
//     // Prevent the form from submitting
//     event.preventDefault();

//     // Get the user's initials
//     var initialsInput = document.querySelector("#initials");
//     var initials = initialsInput.value;

//     // Get the final score
//     var finalScore = localStorage.getItem("mostRecentScore");

//     // Save the final score to local storage
//     saveScore(finalScore);

//     // Create a new high score object
//     var newHighScore = {
//       initials: initials,
//       score: finalScore,
//     };

//     // Add the new high score object to the high scores list
//     highScoresList.push(newHighScore);

//     // Save the updated high scores list to local storage
//     localStorage.setItem("highScores", JSON.stringify(highScoresList));

//     // Redirect to the high scores page
//     window.location.href = "highscores.html";
//   });
// }
//******************************************************* *//

// // Get the high scores table and populate it with the high scores list
// var highScoresTable = document.querySelector("#highscores-table");
// if (highScoresTable) {
//   // Sort the high scores list in descending order of score
//   highScoresList.sort(function (a, b) {
//     return b.score - a.score;
//   });

//   // Populate the high scores table with the high scores list
//   for (var i = 0; i < highScoresList.length; i++) {
//     var highScore = highScoresList[i];
//     var row = document.createElement("tr");
//     var rank = document.createElement("td");
//     var initials = document.createElement("td");
//     var score = document.createElement("td");

//     rank.textContent = i + 1;
//     initials.textContent = highScore.initials;
//     score.textContent = highScore.score;

//     row.appendChild(rank);
//     row.appendChild(initials);
//     row.appendChild(score);
//     highScoresTable.appendChild(row);

//     console.log(score);
//   }
// }

// // Get the clear button and add a click event listener to handle clearing the high scores list
// var clearButton = document.querySelector("#clear");
// if (clearButton) {
//   clearButton.addEventListener("click", function () {
//     // Clear the high scores list from local storage
//     localStorage.removeItem("highScores");

//     // Remove the high scores table from the high scores page
//     highScoresTable.remove();
//   });
// }

// function saveScore(score) {
//   // Save the final score to local storage
//   localStorage.setItem("finalScore", score);
// }

// // Get the high scores list from local storage
// var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScoresList);

// // Get the submit button and add a click event listener to handle the form submission
// var submitButton = document.querySelector("#submit");
// if (submitButton) {
//   submitButton.addEventListener("click", function (event) {
//     // Prevent the form from submitting
//     event.preventDefault();

//     // Get the user's initials
//     var initialsInput = document.querySelector("#initials");
//     var initials = initialsInput.value;

//     // Get the final score
//     var finalScore = localStorage.getItem("mostRecentScore") || 0;
//     finalScore = parseInt(finalScore);

//     // Create a new high score object
//     var newHighScore = {
//       initials: initials,
//       score: finalScore,
//     };

//     // Add the new high score object to the high scores list
//     highScoresList.push(newHighScore);

//     // Sort the high scores list in descending order of score
//     highScoresList.sort(function (a, b) {
//       return b.score - a.score;
//     });

//     // Save the updated high scores list to local storage
//     localStorage.setItem("highScores", JSON.stringify(highScoresList));

//     // Redirect to the high scores page
//     window.location.href = "highscores.html";
//   });
// }

//*****************************************************//

// // Get the high scores table and populate it with the high scores list
// var highScoresTable = document.querySelector("#highscores-table");
// if (highScoresTable) {
//   // Populate the high scores table with the high scores list
//   for (var i = 0; i < highScoresList.length; i++) {
//     var highScore = highScoresList[i];
//     var row = document.createElement("tr");
//     var rank = document.createElement("td");
//     var initials = document.createElement("td");
//     var score = document.createElement("td");

//     rank.textContent = i + 1;
//     initials.textContent = highScore.initials;
//     score.textContent = highScore.score;

//     row.appendChild(rank);
//     row.appendChild(initials);
//     row.appendChild(score);
//     highScoresTable.appendChild(row);

//     console.log(score);
//   }
// }

// // Get the clear button and add a click event listener to handle clearing the high scores list
// var clearButton = document.querySelector("#clear");
// if (clearButton) {
//   clearButton.addEventListener("click", function () {
//     // Clear the high scores list from local storage
//     localStorage.removeItem("highScores");

//     // Remove the high scores table from the high scores page
//     highScoresTable.remove();
//   });
// }

// function saveScore(score) {
//   // do something with the score, like saving it to a database or displaying it on the high scores page
// }

// // Get the high scores list from local storage
// var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];

// // Get the submit button and add a click event listener to handle the form submission
// var submitButton = document.querySelector("#submit");
// if (submitButton) {
//   submitButton.addEventListener("click", function (event) {
//     // Prevent the form from submitting
//     event.preventDefault();

//     // Get the user's initials
//     var initialsInput = document.querySelector("#initials");
//     var initials = initialsInput.value;

//     // Get the final score
//     var finalScore = localStorage.getItem("mostRecentScore") || 0;
//     finalScore = parseInt(finalScore);

//     // Create a new high score object
//     var newHighScore = {
//       initials: initials,
//       score: finalScore,
//     };

//     // Add the new high score object to the high scores list
//     highScoresList.push(newHighScore);

//     // Sort the high scores list in descending order of score
//     highScoresList.sort(function (a, b) {
//       return b.score - a.score;
//     });

//     // Save the updated high scores list to local storage
//     localStorage.setItem("highScores", JSON.stringify(highScoresList));

//     // Print the high scores table with the high scores list
//     var highScoresTable = document.querySelector("#highscores-table");
//     if (highScoresTable) {
//       highScoresTable.innerHTML = "";
//       for (var i = 0; i < highScoresList.length; i++) {
//         var highScore = highScoresList[i];
//         var row = document.createElement("tr");
//         var rank = document.createElement("td");
//         var initials = document.createElement("td");
//         var score = document.createElement("td");

//         rank.textContent = i + 1;
//         initials.textContent = highScore.initials;
//         score.textContent = highScore.score;

//         row.appendChild(rank);
//         row.appendChild(initials);
//         row.appendChild(score);
//         highScoresTable.appendChild(row);
//       }
//     }

//     // Redirect to the high scores page
//     window.location.href = "highscores.html";
//   });
// }

// // Get the clear button and add a click event listener to handle clearing the high scores list
// var clearButton = document.querySelector("#clear");
// if (clearButton) {
//   clearButton.addEventListener("click", function () {
//     // Clear the high scores list from local storage
//     localStorage.removeItem("highScores");

//     // Remove the high scores table from the high scores page
//     var highScoresTable = document.querySelector("#highscores-table");
//     if (highScoresTable) {
//       highScoresTable.remove();
//     }
//   });
// }

// function saveScore(score) {
//   // do something with the score, like saving it to a database or displaying it on the high scores page
// }

// // Get the high scores list from local storage
// var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScoresList);

// // Get the submit button and add a click event listener to handle the form submission
// var submitButton = document.querySelector("#submit");
// if (submitButton) {
//   submitButton.addEventListener("click", function (event) {
//     // Prevent the form from submitting
//     event.preventDefault();

//     // Get the user's initials
//     var initialsInput = document.querySelector("#initials");
//     var initials = initialsInput.value;

//     // Get the final score
//     var finalScore = localStorage.getItem("mostRecentScore");

//     // Create a new high score object
//     var newHighScore = {
//       initials: initials,
//       score: finalScore,
//     };

//     // Add the new high score object to the high scores list
//     highScoresList.push(newHighScore);

//     // Save the updated high scores list to local storage
//     localStorage.setItem("highScores", JSON.stringify(highScoresList));

//     // Redirect to the high scores page
//     window.location.href = "highscores.html";
//   });
// }

// // Get the high scores table and populate it with the high scores list
// var highScoresTable = document.querySelector("#highscores-table");
// if (highScoresTable) {
//   // Sort the high scores list in descending order of score
//   highScoresList.sort(function (a, b) {
//     return b.score - a.score;
//   });

//   // Populate the high scores table with the high scores list
//   for (var i = 0; i < highScoresList.length; i++) {
//     var highScore = highScoresList[i];
//     var row = document.createElement("tr");
//     var rank = document.createElement("td");
//     var initials = document.createElement("td");
//     var score = document.createElement("td");

//     rank.textContent = i + 1;
//     initials.textContent = highScore.initials;
//     score.textContent = highScore.score;

//     row.appendChild(rank);
//     row.appendChild(initials);
//     row.appendChild(score);
//     highScoresTable.appendChild(row);

//     console.log(score);
//   }
// }

// // Get the clear button and add a click event listener to handle clearing the high scores list
// var clearButton = document.querySelector("#clear");
// if (clearButton) {
//   clearButton.addEventListener("click", function () {
//     // Clear the high scores list from local storage
//     localStorage.removeItem("highScores");

//     // Remove the high scores table from the high scores page
//     highScoresTable.remove();
//   });
// }

// Get the high scores list from local storage
var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScoresList);

// Get the submit button and add a click event listener to handle the form submission
var submitButton = document.querySelector("#submit");
if (submitButton) {
  submitButton.addEventListener("click", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the user's initials
    var initialsInput = document.querySelector("#initials");
    var initials = initialsInput.value.substring(0, 3);

    // Get the final score
    // var finalScore = localStorage.getItem("mostRecentScore");

    // Create a new high score object
    var newHighScore = {
      initials: initials,
      score: timeLeft,
    };
    // Add the new high score object to the high scores list
    highScoresList.push(newHighScore);

    // Save the updated high scores list to local storage
    localStorage.setItem("highScores", JSON.stringify(highScoresList));

    // Redirect to the high scores page
    window.location.href = "highscores.html";
  });
}

// Get the high scores table and populate it with the high scores list
var highScoresTable = document.querySelector("#highscores-table");
if (highScoresTable) {
  // Sort the high scores list in descending order of score
  highScoresList.sort(function (a, b) {
    return b.score - a.score;
  });

  // Populate the high scores table with the high scores list
  for (var i = 0; i < highScoresList.length; i++) {
    var highScore = highScoresList[i];
    var row = document.createElement("tr");
    var rank = document.createElement("td");
    var initials = document.createElement("td");
    var score = document.createElement("td");

    rank.textContent = i + 1;
    initials.textContent = highScore.initials;
    score.textContent = highScore.score;

    row.appendChild(rank);
    row.appendChild(initials);
    row.appendChild(score);
    highScoresTable.appendChild(row);
  }
}

// Get the clear button and add a click event listener to handle clearing the high scores list
var clearButton = document.querySelector("#clear");
if (clearButton) {
  clearButton.addEventListener("click", function () {
    // Clear the high scores list from local storage
    localStorage.removeItem("highScores");

    // Remove the high scores table from the high scores page
    highScoresTable.remove();
  });
}

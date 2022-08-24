//Create Timer Logic

var start = Date.now(); //Grab init time
var timer = 100; //Set timer countdown
var questionValidation = true; //Flag for whether question is right/wrong
var startBtn = document.querySelector("#startButton"); //Grab Start Button
var timerHTML = document.querySelector("#timer"); //Grab Timer HTML

//Start timer on Start click & move to next card
startBtn.addEventListener("click", function() {
  setInterval(function() {
    timer--;
    if (!questionValidation) {
      timer = timer - 10;
      questionValidation = true;
    }
    if (timer <= 0) {
      //GOTO FINISH PAGE
    }
    timerHTML.innerHTML = "Time: " + timer;
  }, 1000);
});


//Create 5 Question Cards

//Create Logic to keep track of what question you are on

//Create Finish screen displaying score and asking for initials

//Create Validation to check answer
  //Create Map of Questions and Answers

//Create HighScore Card and Logic
  //log high score even after refresh
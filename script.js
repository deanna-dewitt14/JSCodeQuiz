//Create Timer Logic

var start = Date.now(); //Grab init time
var timer = 100; //Set timer countdown
var questionValidation = true; //Flag for whether question is right/wrong
var startBtn = document.querySelector("#startButton"); //Grab Start Button
var timerHTML = document.querySelector("#timer"); //Grab Timer HTML
var questionsAndAnswers = [
  question0 = ['Commonly used data types DO NOT include:', 'Strings', 'Booleans', 'Alerts', 'Numbers'],
  question1 = ['Arrays in Javascript can be used to store:', 'Numbers & Strings', 'Other Arrays', 'Booleans', 'All of the Above'],
  question2 = ['String Values Must be Enclosed within ______ when being assigned to variables', 'Commas','Curly Brackets','Quotes','Parenthesis'],
  question3 = ['A very useful tool used during development and debugging for printing content to the debugger is:', 'Javascript', 'Terminal/Bash', 'For loops', 'console.log'],
  question4 = ['The condition in an If/Else statement is enclosed with:', 'Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets']
];
var answerSheet = {
  question0: 3,
  question1: 4,
  question2: 3,
  question3: 4,
  question4: 3
}

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

function askAQuestion () {



}
//Create 5 Question Cards

//Create Logic to keep track of what question you are on

//Create Finish screen displaying score and asking for initials

//Create Validation to check answer
  //Create Map of Questions and Answers

//Create HighScore Card and Logic
  //log high score even after refresh
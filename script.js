//VARIABLES
var start = Date.now(); //Grab init time
var timer = 100; //Set timer countdown
var questionValidation = true; //Flag for whether question is right/wrong
var startBtn = document.querySelector("#startButton"); //Grab Start Button
var cardTimer = document.querySelector("#timer"); //Grab Timer HTML
var cardQuestion = document.querySelector("#cardQuestion"); //Grab element to populate questions
var cardAnswers = document.querySelectorAll(".answer");
var cardAnswer1 = document.querySelector("#answer1");
var cardAnswer2 = document.querySelector("#answer2");
var cardAnswer3 = document.querySelector("#answer3");
var cardAnswer4 = document.querySelector("#answer4");
var cardPrompt = document.querySelector(".card-prompt"); //Grab element to toggle additional displayed text
var cardInput = document.querySelector(".card-input"); //Grab element to populate buttons
var cardFooter = document.querySelector(".card-footer"); //Grab element to populate validation result
var successMessage = document.querySelector("#success");
var failMessage = document.querySelector("#fail");
var currentQuestion = 0; //Pointer to current question
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

//EVENT LISTENERS
startBtn.addEventListener("click", startQuiz());
cardAnswer1.addEventListener("click", validateAnswer(1));
cardAnswer2.addEventListener("click", validateAnswer(2));
cardAnswer3.addEventListener("click", validateAnswer(3));
cardAnswer4.addEventListener("click", validateAnswer(4));

//FUNCTIONS
//Start timer on Start click & move to next card
function startQuiz() {
  cardPrompt.style.display = "none";
  startBtn.style.display = "none";
  askAQuestion();
  setInterval(function() {
    timer--;
    if (!questionValidation) {
      timer = timer - 10;
      questionValidation = true;
    }
    if (timer <= 0) {
      //GOTO FINISH PAGE
    }
    cardTimer.innerHTML = "Time: " + timer;
  }, 1000);
};

function askAQuestion () {
  cardQuestion.innerHTML = questionsAndAnswers[currentQuestion][0];
  cardAnswer1.innerHTML = questionsAndAnswers[currentQuestion][1];
  cardAnswer2.innerHTML = questionsAndAnswers[currentQuestion][2];
  cardAnswer3.innerHTML = questionsAndAnswers[currentQuestion][3];
  cardAnswer4.innerHTML = questionsAndAnswers[currentQuestion][4];

  cardAnswers.forEach(element => {
    element.style.display = "initial";
  });
}

function validateAnswer(answer) {
  if (answerSheet[currentQuestion] == answer) {
    failMessage.style.display = "none";
    successMessage.style.display = "initial";
  } else {
    successMessage.style.display = "none";
    failMessage.style.display = "initial";
  }
  currentQuestion++;
  if(currentQuestion < questionsAndAnswers.length()) {
    askAQuestion();
  } else {
    //GOTO FINISH PAGE
  }
}
//Create 5 Question Cards

//Create Logic to keep track of what question you are on

//Create Finish screen displaying score and asking for initials

//Create Validation to check answer
  //Create Map of Questions and Answers

//Create HighScore Card and Logic
  //log high score even after refresh
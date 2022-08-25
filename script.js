//VARIABLES
var start = Date.now(); //Grab init time
var score = 0;
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
var restart = document.querySelector("#restart");
var clearHighscores = document.querySelector("#clear");
var cardPrompt = document.querySelector(".card-prompt"); //Grab element to toggle additional displayed text
var cardInput = document.querySelector(".card-input"); //Grab element to populate buttons
var cardFooter = document.querySelector(".card-footer"); //Grab element to populate validation result
var enterInitials = document.querySelector("#enterInitials");
var initials = document.querySelector("#initials");
var viewHighscores = document.querySelector("#highscore");
var submitButton = document.querySelector("#submitButton");
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
var answerSheet = [3,4,3,4,3];

//EVENT LISTENERS
startBtn.addEventListener("click", startQuiz);
cardAnswer1.addEventListener("click", validateAnswer);
cardAnswer2.addEventListener("click", validateAnswer);
cardAnswer3.addEventListener("click", validateAnswer);
cardAnswer4.addEventListener("click", validateAnswer);
submitButton.addEventListener("click", addHighscore);
viewHighscores.addEventListener("click", highscorePage);
restart.addEventListener("click", reset);
clearHighscores.addEventListener("click", clearHighscore);

//FUNCTIONS
//Start timer on Start click & move to next card

function startQuiz() {
  cardPrompt.style.display = "none";
  startBtn.style.display = "none";
  askAQuestion();
  const timerInterval = setInterval(function() {
    timer--;
    if (!questionValidation) {
      timer = timer - 10;
      questionValidation = true;
    }
    if (timer <= 0) {
      clearInterval(timerInterval);
      generateFinalScreen();
    }
    cardTimer.innerHTML = "Time: " + timer;
  }, 1000);
};

function askAQuestion() {
  cardQuestion.innerHTML = questionsAndAnswers[currentQuestion][0];
  cardAnswer1.innerHTML = questionsAndAnswers[currentQuestion][1];
  cardAnswer2.innerHTML = questionsAndAnswers[currentQuestion][2];
  cardAnswer3.innerHTML = questionsAndAnswers[currentQuestion][3];
  cardAnswer4.innerHTML = questionsAndAnswers[currentQuestion][4];

  cardAnswers.forEach(element => {
    element.style.display = "block";
  });
};

function validateAnswer(evt) {
  var answerIndex = evt.target.id.substring(6);

  if (answerSheet[currentQuestion] == answerIndex) {
    failMessage.style.display = "none";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
    failMessage.style.display = "block";
    timer = timer - 10;
  };
  currentQuestion++;
  if(currentQuestion < questionsAndAnswers.length) {
    askAQuestion();
  } else {
    generateFinalScreen();
  }
};

function generateFinalScreen() {
  score = timer;
  cardAnswers.forEach(element => {
    element.style.display = "none";
  });
  cardTimer.style.display = "none";
  cardQuestion.innerHTML = "All done!";
  cardPrompt.innerHTML = "Your final score is: " + score;
  cardPrompt.style.display = "block";
  enterInitials.style.display = "block";
}

function addHighscore() {
  localStorage.setItem("1", initials.value + ' - ' + score);
  highscorePage();
}

function clearHighscore(){
  localStorage.clear();
  highscorePage();
}

function highscorePage() {
  startBtn.style.display = "none";
  cardAnswers.forEach(element => {
    element.style.display = "none";
  });
  cardQuestion.innerHTML = "High scores";
  cardPrompt.innerHTML = localStorage.getItem(1);
  cardPrompt.style.display = "block";
  enterInitials.style.display = "none";
  restart.style.display = "block";
  clearHighscores.style.display = "block";

};

function reset() {
  clearHighscores.style.display = "none";
  restart.style.display = "none";
  failMessage.style.display = "none";
  successMessage.style.display = "none";
  currentQuestion = 0;
  timer = 100;
  startQuiz();
}
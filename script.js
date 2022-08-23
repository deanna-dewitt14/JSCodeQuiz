//Create Timer Logic

var start = Date.now();
var timer = 100;
console.log("Date.now: " + start);

setInterval(function() {
  timer--;
  console.log("Timer: " + timer);

  //Add trigger to start on quiz start

  //Add logic to subtract time when validation fails
  //Flag that last question was wrong, subract 10 from timer, reset the flag

  //Add if timer equals zero, cut to Finish Screen

  //Display Timer on HTML

}, 1000);


//Create HighScore Card and Logic

//Create 5 Question Cards

//Create Logic to keep track of what question you are on

//Create Finish screen displaying score and asking for initials

//Create Validation to check answer
  //Create Map of Questions and Answers
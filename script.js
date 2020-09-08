
// Create a timer that starts at 5 minutes and begins counting down when I click the Start Quiz button

var timer = document.querySelector(".time");
var timeLeft = 300;

function setTimer() {
    var time = timeInterval(function(){
        timeLeft--;
        if (timeLeft === 0) {
        return "Time's UP!"
        }
    })
}

setTimer();

// Make the timer deduct 15 seconds when a question is answered incorrectly
// Prompt User with first question
// When the User answers the first question, open a new page and prompt second question
// When the User answers the second question, open a new page and prompt third question
// When the User answers the third question, open a new page and prompt fourth question
// When the User answers the fourth question, open a new page and prompt fifth question
// End game when all five questions have been answered or when the timer reaches zero
// Allow User to save their initials and score

console.log ("This page is connected.");
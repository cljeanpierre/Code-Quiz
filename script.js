
// Create a timer that starts at 5 minutes and begins counting down when I click the Start Quiz button

var timeLeft = 300;

var startQuiz = document.getElementById("go").addEventListener("click", () => setInterval(function(){
    console.log(timeLeft);  
    document.getElementById("time").innerHTML = timeLeft; 
    timeLeft--; 
    if (timeLeft === 0  || timeLeft < 0) {
        document.getElementById("time").innerHTML = "Time's Up!"
    } 
        }, 1000));


// Write Questions
var quizQuestions = [
    {
        question: "How many branches of government are there in the United States?",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "Which of the following systems of government does the United States operate under?",
        choices: ["representative democracy", "direct democracy", "aristocracy", "monarchy"],
        answer: "representative democracy" 
    },
    {
        question: "Which is NOT a part of the United States Constitution?",
        choices: ["pramble", "amendments", "political parties", "articles"],
        answer: "political parties"
    },
    {
        question: "What is the legal process through which immigrants can become United States citizens?",
        choices: ["rationalization", "consideration", "naturalization", "volunteerism"],
        answer: "naturalization"
    },
    {
        question: "Which government entity is part of the executive branch?",
        choices: ["Democratic National Committee", "Congress's House Rules Committee", "US Court of Appeals", "The State Department"],
        answer: "The State Department"
    },
    {
        question: "How many amendments does the United States Constitution have?",
        choices: ["25", "26", "27", "28"],
        answer: "27"
    },
    {
        question: "Who is in charge of the executive branch?",
        choices: ["House of Representatives", "Senate", "President", "Supreme Court"],
        answer: "President"
    },
    {
        question: "How many years is one term for a United States Senator?",
        choices: ["2", "4", "6", "8"],
        answer: "8"
    },
    {
        question: "What is the minimum age requirement for a United States president?",
        choices: ["30", "35", "40", "45"],
        answer: "35"
    },
    {
        question: "Who was president of the United States during World War I?",
        choices: ["Franklin Roosevelt", "Woodrow Wilson", "Lyndon Johnson", "William Taft"],
        answer: "Woodrow Wilson"
    },
    {
        question: "Which state borders Mexico?",
        choices: ["Louisiana", "Colorado", "Nevada", "Arizona"],
        answer: "Arizona"
    }

]
// Prompt User with first question
var eachQuestion = 0;

var displayQuestion = document.getElementById("go").addEventListener("click", function() {
    var [question, choices] = [quizQuestions[eachQuestion].question, quizQuestions[eachQuestion].choices];
});

// End game when all five questions have been answered or when the timer reaches zero
// Allow User to save their initials and score

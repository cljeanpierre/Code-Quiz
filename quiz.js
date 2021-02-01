//set up global variables

let [eachQuestion, correct, incorrect, unanswered] = [0, 0, 0, 0];

var timeLeft = 300;


//set up questions array

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
        choices: ["preamble", "amendments", "political parties", "articles"],
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

//start quiz function

var startQuiz = document.getElementById("go").addEventListener("click", () => setInterval(function () {
    console.log(timeLeft);
    document.getElementById("time").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft === 0 || timeLeft < 0) {
        document.getElementById("time").innerHTML = "Time's Up!"
    }
}, 1000));


// grab the question function




//decides if the user made a wrong/right click




// function to end quiz





//save high score function





//set up click events


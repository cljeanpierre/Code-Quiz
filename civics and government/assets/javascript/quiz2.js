//set up global variables

let [eachQuestion, correct, incorrect] = [0, 0, 0];

var timeLeft = 300;
let timer;

var startTimer = document.getElementById("start").addEventListener("click", () => setInterval(function () {
    console.log(timeLeft);
    document.getElementById("timer").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft === 0 || timeLeft < 0) {
        document.getElementById("timer").innerHTML = "Time's Up!"
    }
}, 1000));

//set up questions array

const quiz = [
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





//make the counter stop at 0 and fire next question
timeStop = () => {
    clearInterval(timer);
    unanswered++;
    rightWrongAnswer();
    setTimeout(nextQuestion, 3 * 1000);
};

//make a countdown timer
countDown = () => {
    counter--;
    $(".timer").html(`<div class='card m-3 p-3'><h5>${counter} Seconds remaining</h5></div>`);
    if(counter === 0){
        timeStop();
    };
};


var displayQuestion = document.getElementById("start").addEventListener("click", 

function () {
    var question = quiz[eachQuestion].question
    var choices =  quiz[eachQuestion].choices

    var prompt = document.getElementById("prompt")
    prompt.style.display = "none";
    
    var questionElement = document.getElementById("question")
    questionElement.prepend (quiz[eachQuestion].question);
    
for (var i=0; i < quiz[eachQuestion].choices.length; i++) {
    
}

    // var choiceA = document.getElementById("choiceA");
    // choiceA.addEventListener("click", function () {

    // })

    //when clicked, do something to upate score if correct

});

//function to load choices
displayChoices = (choices) => {
    let result = "";
    for ( var i = 0; i < choices.length; i++ ) {
        result = result + (`<button class='btn btn-primary col-sm m-2 choice' data-answer='${choices[i]}'>${choices[i]}</button>`);
    };
    return result;
};

//function to go to the next question
nextQuestion = () => {
    //check if the game is over
    let endGame = (quiz.length - 1) === eachQuestion;
    endGame ? 
        displayResults() : 
            (eachQuestion++, 
            displayQuestion());
};

//display picture if right answer, display different pic if wrong answer
rightWrongAnswer = (state) => {
    switch(state) {
        case "right":
            displayQuestion();
            displayChoices();
            break;
        case "wrong":
            displayQuestion();
            displayChoices();
            timer = setInterval(countDown, 1000);
            break;
        default:
            document.getElementById("timer").innerHTML = timeLeft;
            timeLeft--;
            if (timeLeft === 0 || timeLeft < 0) {
                document.getElementById("timer").innerHTML = "Time's Up!"
            }
    }; 
};



resetGame = () => {
    [eachQuestion, correct, incorrect, timer] = [0, 0, 0, null];

    displayQuestion();
};


startQuiz = () => {
    $("start").remove();
    displayQuestion();

};

//allow a click event on a dynamically added button
$(document).on("click", ".choice", function(){
    clearInterval(timer);

    let [clicked, correctAnswer] = [$(this).attr("data-answer"), quiz[eachQuestion].answer];

    (correctAnswer === clicked) ?
        //user wins
        (correct++,
        rightWrongAnswer("right"),
        setTimeout(nextQuestion, 3 * 1000)) : 
            //user lost
            (incorrect++,
            rightWrongAnswer("wrong"),
            setTimeout(nextQuestion, 3 * 1000));
});

//click events
$(document).on("click", ".start", () => { startQuiz() });

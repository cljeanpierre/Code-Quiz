const correctAnswers = ['C', 'A', 'C', 'C', 'D', 'C', 'C', 'D', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

    //start timer and quiz
    form.addEventListener('button', e => {
        e.preventDefault();
        var timeLeft = 300;
    
        var startTimer = document.getElementById("start").addEventListener("click", () => setInterval(function () {
            console.log(timeLeft);
            document.getElementById("timer").innerHTML = timeLeft;
            timeLeft--;
            if (timeLeft === 0 || timeLeft < 0) {
                document.getElementById("timer").innerHTML = "Time's Up!"
            }
        }, 1000));
    })



form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 10;
        }
    });

    //show result on page - will include score and deduced time
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const time = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output ++;
        }
    }, 30);



    // setTimeout(() => {

    // }, 3000);

    // let i = 0;
    // const time = setInterval(() => {
    //     i++;
    //     if(i===5){
    //         clearInterval(time);
    //     }
    // }, 1000);

});
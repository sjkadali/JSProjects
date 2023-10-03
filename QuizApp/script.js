const quizInfo = [
    {
        question: 'Capital of New Hampshire',
        a: 'Manchester',
        b: 'Nashua',
        c: 'Hollis',
        d: 'Concord',
        correct: 'd'
    },
    {
        question: 'Capital of Massachussets',
        a: 'Boston',
        b: 'Lowell',
        c: 'Woburn',
        d: 'Amherst',
        correct: 'a'
    },
    {
        question: 'Current President of US',
        a: 'Barack Obama',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Matt Gaetz',
        correct: 'c'
    }
];

const answers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const option_a = document.getElementById("option_a");
const option_b = document.getElementById("option_b");
const option_c = document.getElementById("option_c");
const option_d = document.getElementById("option_d");
const quiz = document.getElementById("quiz");

let currentQn = 0;
let correctNum = 0;

let currentQnInfo = quizInfo[currentQn];

loadQuiz();

function loadQuiz() {    
    deselectAnswers();
    console.log(currentQn, currentQnInfo);
    question.innerHTML = currentQnInfo.question;
    option_a.innerHTML = currentQnInfo.a;
    option_b.innerHTML = currentQnInfo.b;
    option_c.innerHTML = currentQnInfo.c;
    option_d.innerHTML = currentQnInfo.d;    
}

function getSelected() {
    let answer = '';

    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    console.log("Answer: "+answer + " correct answer: "+ currentQnInfo.correct, currentQnInfo.correct === answer);
    return answer;
}

function deselectAnswers() {
    answers.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();    
    if(answer){
        correctNum = currentQnInfo.correct === answer ? correctNum+1 : correctNum;
        console.log("Score: "+correctNum);
        if(currentQn < quizInfo.length-1){
            currentQn++;
            console.log(currentQn);
            currentQnInfo = quizInfo[currentQn];
            loadQuiz();
        } else{
            quiz.innerHTML=`<h2>Quiz Result: ${correctNum} </h2>;
            <button onclick="location.reload()"> Reload</button>`;
        } 
    }
})
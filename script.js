const quizData = [
    {
        question: 'How old is Dhaka?',
        a: '10',
        b: '15',
        c: '200',
        d: '400',
        correct: 'd'
    },
    {
        question: 'What is the most popular programming language?',
        a: 'java',
        b: 'C#',
        c: 'python',
        d: 'javascript',
        correct: 'a'
    },
    {
        question: 'Who is the prime minister of BD?',
        a: 'Sheikh Hasina',
        b: 'Khaleda Zia',
        c: 'Ershad',
        d: 'Trump',
        correct: 'a'
    },
    {
        question: 'HTML stands for what?',
        a: 'JavaScript Object Notation',
        b: 'Cascading Style Sheet',
        c: 'Hyper Text Markup language',
        d: 'Nothing',
        correct: 'c'
    }

]

const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll(".ansewer")

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('btn')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

}

function getSelected() {
    let answer = undefined;    

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });    

}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    if(answe === quizData[currentQuiz].correct){
        score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    } else {
        //TODO show result
        alert("You're finished")
    }

    
})
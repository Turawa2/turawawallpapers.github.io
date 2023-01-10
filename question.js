const quizData = [
    {
        question: "WHAT IS MY FULL NAME?",
        a: "Musa Ahmad Bature",
        b: "Hamza Musa Tarawa",
        c: "Musa Hamza Turawa",
        d: "Isa Haruna Turawa",
        correct: "c",
    },
    {
        question: "WHAT IS MY DATE OF BIRTH?",
        a: "09-09-2003",
        b: "03-10-2001",
        c: "10-10-2002",
        d: "21-08-2004",
        correct: "a",  
         
    },
    {
        question: "WHAT IS MY NCKNAME IN PRIMARY SCHOOL?",
        a: "Singham",
        b: "Lil baby",
        c: "Tamil",
        d: "Pilot",
        correct: "d",
    },
    {
        question: "WHERE WERE I BORN?",
        a: "Gonar-ganye Zaria",
        b: "Jushi Zaria",
        c: "Kwarbai Zaria",
        d: "Tudun-wada Zaria",
        correct: "b",
    },
    {
        question: "WHAT IS MY RELIGION?",
        a: "Islam",
        b: "Christain",
        c: "Jews",
        d: "Hindu",
        correct: "a",
    },
    {
        question: "WHAT IS MY FAVOURITE SPORT?",
        a: "Badminton",
        b: "Football",
        c: "Basketball",
        d: "Volleyball",
        correct: "a",  
         
    },
    {
        question: "WHEN I WAS A CHILD WHAT WAS MY AMBITION ?",
        a: "To become a police man",
        b: "To become a doctor",
        c: "To become a pilot",
        d: "To become an armrubber",
        correct: "c",
    },
    {
        question: "WHO IS MY MENTOR?",
        a: "Wizkid",
        b: "Davido",
        c: "Dangote",
        d: "Adamu Jethro",
        correct: "d",
    },
    {
        question: "WHAT IS MY FAVORITE HOBBY?",
        a: "Coding",
        b: "Dancing",
        c: "Reading",
        d: "Singing",
        correct: "a",
    },
    {
        question: "WHO IS MY GF?",
        a: "Ha........",
        b: "Ju........",
        c: "Ai........",
        d: "Ma........",
        correct: "a",
    },


] ;

var name = prompt("enter your nickname");
if(name == ""){
    name = "Turawa's friend";
}
const quiz =  document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text =  document.getElementById('a_text');
const b_text =  document.getElementById('b_text');
const c_text =  document.getElementById('c_text');
const d_text =  document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
 
function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false);
}
function getSelected(){
    let answerEl;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
        
    });
    return answer
}
    submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();

        }else{
            quiz.innerHTML = 
             '<h2>' +  name +' You Answered '+ score + '/' + quizData.length + 
           ' Questions Correctly</h2> <button onclick="location.reload()">RELOAD</button>';     
          
        }

    }
})


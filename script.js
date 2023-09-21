const questions = [
  {
    question: "which is largest animal in the world ?",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "capital of Oman ?",
    answers: [
      { text: "muscat", correct: true },
      { text: "rusayl", correct: false },
      { text: "sohar", correct: false },
      { text: "alkuwaire", correct: false },
    ],
  },
  {
    question: "capital of india ?",
    answers: [
      { text: "chennai", correct: false },
      { text: "delhi", correct: true },
      { text: "kerla", correct: false },
      { text: "andhra", correct: false },
    ],
  },
  {
    question: "capital of tamilnadu ?",
    answers: [
      { text: "kovai", correct: false },
      { text: "madurai", correct: false },
      { text: "chennai", correct: true },
      { text: "trichy", correct: false },
    ],
  },
  {
    question: "which is largest country in the population?",
    answers: [
      { text: "india", correct: false },
      { text: "china", correct: true },
      { text: "oman", correct: false },
      { text: "dubai", correct: false },
    ],
  },
];

const questionele = document.getElementById("question");

const ansbutton = document.getElementById("answer-buttons");

const nextbtn = document.getElementById("next-btn");

let currentquestionindex = 0;

let score = 0;

function startQuiz() {

  currentquestionindex = 0;

  score = 0;

  nextbtn.innerHTML = "Next";

  showQuestion();

}

function showQuestion(){

  resetstate();

  let currentquestion=questions[currentquestionindex];

  let questionNo=currentquestionindex + 1;

  questionele.innerHTML=questionNo+ "." +currentquestion.question;

  currentquestion.answers.forEach(answer=>{

    const btn=document.createElement("button");

    btn.innerHTML=answer.text;

    btn.classList.add('btn');

    ansbutton.appendChild(btn);

    if(answer.correct){
      btn.dataset.correct=answer.correct;
    }
    
    btn.addEventListener("click",selectAnswer)


  })
}

function resetstate(){
  nextbtn.style.display="none";
  while(ansbutton.firstChild){
    ansbutton.removeChild(ansbutton.firstChild);
  }
}


function selectAnswer(e){
  const selectbtn=e.target;
  const iscorrect=selectbtn.dataset.correct=='true';
  if(iscorrect){
   selectbtn.classList.add("correct");
   score++;

  }
  else{
    selectbtn.classList.add("incorrect");
  }

  Array.from(ansbutton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct")
    }
    button.disabled=true;
  })
  nextbtn.style.display="block"
}

function showScore(){
  resetstate();
  questionele.innerHTML=`you Score ${score} out of ${questions.length}!`;
  nextbtn.innerHTML="play agian";
  nextbtn.style.display="block"
}

function handleNextButton(){

  currentquestionindex++;

  if(currentquestionindex<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }

}

nextbtn.addEventListener('click',()=>{
  if(currentquestionindex <questions.length){

    handleNextButton();

  }

  else{
    startQuiz()
  }
})
startQuiz();


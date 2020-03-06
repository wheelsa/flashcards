
let deck = [ "What is an Object in JavaScript?", 
            "An object is an instance which contains a set of key value pairs. Unlike primitive data types, objects can represent multiple or complex values and can change over their life time. The values can be scalar values or functions or even array of other objects.",
             "What is my favorite color?", "Green or sometimes blue",
             "What is your favorite color?", "Black or sometimes blue"]
let deckIndex = 0
const flashCardView = document.getElementById('display')
let showAnswer = document.getElementById('showAnswer')
let showQuestion = document.getElementById('showQuestion').style.display = 'none'
let nextQuestion = document.getElementById('nextQuestion').style.display = 'none'
let previousQuestionE = document.getElementById('previousQuestion')
flashCardView.innerText = deck[deckIndex]

function showAnswerClick(){
  deckIndex++;
  flashCardView.innerText = deck[deckIndex];
  showQuestion = document.getElementById('showQuestion')
  nextQuestion= document.getElementById('nextQuestion')
  previousQuestionE = document.getElementById('previousQuestion')
  return showQuestion.style.display = "block",showAnswer.style.display = "none", nextQuestion.style.display = "block", previousQuestionE.style.display = "none"

}
 

function showQuestionClick(){
  deckIndex--;
  flashCardView.innerText = deck[deckIndex];
  showQuestion = document.getElementById('showQuestion')
  showAnswer = document.getElementById('showAnswer')
  nextQuestion= document.getElementById('nextQuestion')
  previousQuestionE = document.getElementById('previousQuestion')
  return showQuestion.style.display = "none",showAnswer.style.display = "block", nextQuestion.style.display = "none", previousQuestionE.style.display = "block"
}

function showNextQuestion(){
  if (deckIndex == deck.length-1){
  deckIndex = 0;
  flashCardView.innerText = deck[deckIndex];}
  else {
    deckIndex ++
    flashCardView.innerText = deck[deckIndex];}
    
  showQuestion = document.getElementById('showQuestion')
  showAnswer = document.getElementById('showAnswer')
  previousQuestionE = document.getElementById('previousQuestion')
  return showQuestion.style.display = "none",showAnswer.style.display = "block", nextQuestion.style.display = "none", previousQuestionE.style.display = "block"

}

function previousQuestion(){
  if (deckIndex == 0){
    deckIndex = deck.length - 2
    flashCardView.innerText = deck[deckIndex];}
  else{
    deckIndex --
    deckIndex --
    flashCardView.innerText = deck[deckIndex];}
    showQuestion = document.getElementById('showQuestion')
    showAnswer = document.getElementById('showAnswer')
  return showQuestion.style.display = "none", showAnswer.style.display = "block"

}

let questionNew = document.getElementById('questionNew')
let answerNew = document.getElementById('answerNew')

function addFlashCard(){
  deck.push(questionNew.value)
  deck.push(answerNew.value)
  return alert("Flash Card Added!")
}


// showAnswer.addEventListener('click', showAnswerClick)
// showQuestion.addEventListener('click', showQuestionClick)


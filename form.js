let questionNew = document.getElementById('questionNew')
let answerNew = document.getElementById('answerNew')

function addFlashCard(){
  deck.push(questionNew.value)
  deck.push(answerNew.value)
  alert("Flash Card Added!")
}
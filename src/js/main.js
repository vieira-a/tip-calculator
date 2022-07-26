let bill = 0
let numberOfpeople = 0

document.querySelector('#bill').addEventListener("change", function() {
  bill = Number(document.querySelector('#bill').value)
  console.log(bill)
})

document.querySelector('#number-of-people').addEventListener("change", function() {
  numberOfpeople = Number(document.querySelector('#number-of-people').value)
  console.log(numberOfpeople)
})

let tip = ''
function getTip(clickedTip) {
  tip = Number(clickedTip)
  document.getElementById(tip).style.backgroundColor = 'red'
}

function calculateAmount() {
  let amountTip = bill*(tip/100)
  let amountTipByPerson = amountTip/numberOfpeople
  let amount = bill + amountTip
  let amountByPerson = amount/numberOfpeople
  
  document.getElementById('tip-by-person').textContent = `R$ ${amountTipByPerson.toFixed(2)}`
  document.getElementById('total-by-person').textContent = `R$ ${amountByPerson.toFixed(2)}`
}

function getNumberPeople() {
  let people = document.querySelector('#number-of-people').value
  return people
  //console.log(people)
}

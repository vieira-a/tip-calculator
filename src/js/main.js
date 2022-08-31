let bill = 0
let numberOfpeople = 0

document.querySelector('#bill').addEventListener('change', function () {
  bill = Number(document.querySelector('#bill').value)
  console.log(bill)
})

document.querySelector('#number-of-people').addEventListener('change', function () {
    numberOfpeople = Number(document.querySelector('#number-of-people').value)
    console.log(numberOfpeople)
  })

let tip = ''
function getTip(clickedTip) {
  tip = Number(clickedTip)
  document.getElementById(tip).style.backgroundColor = '#26c0a3'
  document.getElementById(tip).style.color = '#025a51'
}

function calculateAmount() {
  let amountTip = bill * (tip / 100)
  let amountTipByPerson = amountTip / numberOfpeople
  let amount = bill + amountTip
  let amountByPerson = amount / numberOfpeople
  
  document.getElementById('calculate').style.display = 'none'

  //O conteúdo document.getElementById('tip-by-person') pode ser substituído pelo id do elemento diretamente. 
  //Exemplo: tip-by-person.textContent = `$ ${amountTipByPerson.toFixed(2)}`
  document.getElementById('tip-by-person').textContent = `$ ${amountTipByPerson.toFixed(2)}`
  document.getElementById('total-by-person').textContent = `$ ${amountByPerson.toFixed(2)}`
}

function getNumberPeople() {
  let people = document.querySelector('#number-of-people').value
  return people
}

function resetForm() {
  if(document.getElementById('calculate').textContent = 'RESET') {
    window.location.reload()
  }
}
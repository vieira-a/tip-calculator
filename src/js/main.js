/**
 * Refactoring and improving 
 */

//Variables initialization

//General

let billValue = 0;

let tipValue = 0; 

let numberOfpeople = 0;

const validationText = "Invalid option";

let tipButtonColorOriginal = "#014141"

let tipButtonColorHover = "#26c0a3"

/**
 * DOM elements 
 */

//Bill

const billElement = document.getElementById('bill');

const billValidation = document.getElementById('bill-validation');

//Tip

const tipButtons = document.querySelectorAll('.billButton');

const tipTaxCustom = document.querySelector('.tipCustom');

//People

const people = document.getElementById('number-of-people');

/**
 * Functions to get elements values
 */

/**
 * Bill value on <input type="number" id="bill">
 */

function getBillValue() {
  
  billElement.addEventListener('change', function(){
    
    billValue = Number(billElement.value);

    validationBill()

  }
)}
  
function validationBill() {
  
  if(billValue === 0 ) {
  
    billValidation.textContent = validationText;
  
  } else {
  
    billValidation.textContent = " ";
  
  }

}

/**
 * Tip tax on <button class="billButton" id="5">5%</button></li>
 * Id value will be the tax
 */

function getTipTax() {
  
  tipButtons.forEach(function(currentButton) {
    
      currentButton.addEventListener('click', function () {
        
        validationBill()
        
        cleanTipButtonColor()

        if(tipTaxCustom.value === "") {

          currentButton.style.backgroundColor = tipButtonColorHover;
          
          tipValue = Number(currentButton.id);

        } else {

          tipValue = tipTaxCustom.value

        }
        
      })
    })  
}

function getTipTaxCustom() {

  tipTaxCustom.addEventListener('change', function() {
    
    validationBill()
    
    tipValue = Number(tipTaxCustom.value);
    
    cleanTipButtonColor()
  
  })

}

function cleanTipButtonColor() {
  
  tipButtons.forEach(function(currentButton) {

    if(currentButton.style.backgroundColor = tipButtonColorHover){
      
      currentButton.style.backgroundColor = tipButtonColorOriginal;
    
    }

    })

}

function getPeople() {
  
  people.addEventListener('change', function() {
    
    numberOfpeople = people.value;
    
  })

}

getBillValue()
getTipTax()
getTipTaxCustom()
getPeople()

/**
 * 
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

 */
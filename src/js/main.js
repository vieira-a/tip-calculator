/**
 * Refactoring and improving 
 */

//Variables initialization

//General

let billValue = 0;

let tipValue = 0; 

let numberOfpeople = 0;

const validationBillText = "Please, enter a Bill value.";

const validationTipText = "Please, enter a Tip value.";

const validationPeopleText = "Please, enter the number of people.";

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

const tipValidation = document.getElementById('tip-validation');

//People

const people = document.getElementById('number-of-people');

const peopleValidation = document.getElementById('people-validation');

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
  
    billValidation.textContent = validationBillText;
  
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

          tipTaxCustom.value = "";

          currentButton.style.backgroundColor = tipButtonColorHover;
          
          tipValue = Number(currentButton.id);

          //tipValue = tipTaxCustom.value

        }
        
        validationTipTax()

        calculate()

      })
    })  
}

function getTipTaxCustom() {

  tipTaxCustom.addEventListener('keyup', function() {
    
    validationBill()
    
    tipValue = Number(tipTaxCustom.value);
    
    cleanTipButtonColor()

    calculate()
  
  })

}

function validationTipTax() {

  if(tipValue === 0) {

    tipValidation.textContent = validationTipText;

  } else {

    tipValidation.textContent = " ";

  }

}

function cleanTipButtonColor() {
  
  tipButtons.forEach(function(currentButton) {

    if(currentButton.style.backgroundColor = tipButtonColorHover){
      
      currentButton.style.backgroundColor = tipButtonColorOriginal;
    
    }

    })

}

function getPeople() {
  
  people.addEventListener('keyup', function() {
    
    validationBill()
  
    validationTipTax()

    numberOfpeople = people.value;

    calculate()
    
  })

}

function validationPeople() {

  if(numberOfpeople === 0) {

    peopleValidation.textContent = validationPeopleText;

  } else {

    peopleValidation.textContent = " ";

  }

}

function calculate() {

  if(billValue > 0 && tipValue > 0 && numberOfpeople > 0) {
  
    let amountTip = billValue * (tipValue / 100);
    let amountTipByPerson = amountTip / numberOfpeople;
    let amount = billValue + amountTip;
    let amountByPerson = amount / numberOfpeople;

    tipByPerson.textContent = `$ ${amountTipByPerson.toFixed(2)}`;
    totalByPerson.textContent = `$ ${amountByPerson.toFixed(2)}`;

  }

}

function resetForm() {
  
  window.location.reload()
  
}

getBillValue()
getTipTax()
getTipTaxCustom()
getPeople()
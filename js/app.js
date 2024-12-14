'use strict'

//// HTML Refrences
// Name for Cost
let expenseInput = document.querySelector('#expense')
console.log(expense);
// Cash cost
let amountInput = document.querySelector('#amount')
// Entry cash
let total = document.querySelector('#total')
console.log(total);
// Left Cash
let left = document.querySelector('#left')
// Bnt in order to add Cash
let addingBtn = document.querySelector('.addingBtn')
// UL
let list = document.querySelector('.list-group')


let incomeNum
do {
    incomeNum = Number(prompt('Gimme Some Cash u Lil Ni**a'))
    
} while (isNaN(incomeNum) || incomeNum <= 0);


let totalEntry = incomeNum
total.innerHTML = incomeNum
left.innerHTML = totalEntry


addingBtn.addEventListener('click' , function(e) {
    e.preventDefault()

    if (expenseInput.value == ''|| amountInput.value == '' ) {
        alert('Empty Inputs. \n (mke sure to enter only numbers in cost section)')
    } else {
        let expense = expenseInput.value
        let amount = Number(amountInput.value)

            console.log('Only Number'); 
            jigar()
            addToList(expense, amount)
            expenseInput.value = ''
            amountInput.value = ''               
    }
})

function jigar() {
    totalEntry -= amount.value
    left.innerHTML = totalEntry
    // console.log(amount.value);
}

function addToList(expense, amount) {
    list.innerHTML += `<li class="meowList">${expense}   ==> ${amount}T </li>`

}










// better way for while... i gotta find out how this works.. isNaN(incomeNum) || incomeNum <= 0
















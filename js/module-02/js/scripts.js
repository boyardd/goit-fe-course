'use strict'
let userInput;
const numbers = [];
let total = 0;
let isValidInput;

do {
  userInput = prompt('Введите число');
  let asNumber = Number(userInput);
  isValidInput = userInput !== null && !Number.isNaN(asNumber);
 
  if(isValidInput) {
    numbers.push(asNumber);
  }
  else{
    alert ('Было введено не число, попробуйте еще раз');
  }
  
} while (isValidInput);

for (let i=0; i<numbers.length; i++){
    total = total + numbers[i];}
    console.log('Сумма элементов равна:' +total);
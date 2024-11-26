const timer = document.getElementById('timer');
const start = document.getElementById('start')
const randomNumbers = document.getElementById('random-numbers')

let counter = 10
timer.innerHTML = counter;

let pcNumbers = [];


console.log(pcNumbers)

start.addEventListener('click',() =>{
  
  // 1. creo il conto alla rovescia
  const interval = setInterval (()=>{
   // a ogni intervallo il mio counter si decrementa  
   counter --
   timer.innerHTML = counter;
   // il  timer si deve fermare allo 0
   if(counter===0){
    clearInterval(interval)
   }
  
  }, 1000)

  // 2. genero 5 numeri casuali da 1 a 50
  
  for (let i= 0; i <= 4; i++){
   pcNumbers.push(Math.ceil(Math.random() * 50));
   randomNumbers.innerHTML = pcNumbers;
  }

  start.disabled = true;




})






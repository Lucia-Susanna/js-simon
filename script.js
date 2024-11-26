const timer = document.getElementById('timer');
const start = document.getElementById('start')
const randomNumbers = document.getElementById('random-numbers')
const userAnswer = document.getElementById('answer')
const send = document.getElementById('send')
const getResult = document.getElementById('result')



let counter = 10
timer.innerHTML = counter;

let counterRightAnswers=0;


let pcNumbers = [];
let userNumbers = [];
let rightAnswers = [];

start.addEventListener('click',() =>{
  
  // 1. creo il conto alla rovescia
  const interval = setInterval (()=>{
   // a ogni intervallo il mio counter si decrementa  
   counter --
   timer.innerHTML = counter;
   // il  timer si deve fermare allo 0 e i numeri devono scomparire
   if(counter===0){
    clearInterval(interval)

    randomNumbers.classList.add('hide')
    userAnswer.classList.remove('hide')
    
   }
  
  }, 10)

  // 2. genero 5 numeri casuali da 1 a 50
  
  for (let i= 0; i <= 4; i++){
   pcNumbers.push(Math.ceil(Math.random() * 50));
   randomNumbers.innerHTML = pcNumbers.join(' ');
  }

  start.disabled = true;

})

send.addEventListener('click', () =>{
  event.preventDefault();

const numA = (document.getElementById('numA')).value;
const numB = (document.getElementById('numB')).value;
const numC = (document.getElementById('numC')).value;
const numD = (document.getElementById('numD')).value;
const numE = (document.getElementById('numE')).value;

userNumbers = [parseInt(numA), parseInt(numB), parseInt(numC), parseInt(numD), parseInt(numE)];

for (let i = 0; i<=5; i++){

  if (pcNumbers.includes(userNumbers[i])===true){
    counterRightAnswers++
  }
  
}

userAnswer.classList.add('hide')

getResult.classList.remove('hide')
getResult.innerHTML+= `${counterRightAnswers} numeri!`
    
})




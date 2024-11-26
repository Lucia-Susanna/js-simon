const timer = document.getElementById('timer');
const start = document.getElementById('start')
let counter = 10
timer.innerHTML = counter;

//creo il conto alla rovescia
start.addEventListener('click',() =>{

  const interval = setInterval (()=>{
   // a ogni intervallo il mio counter si decrementa  
   counter --
   timer.innerHTML = counter;
   // il  timer si deve fermare allo 0
   if(counter===0){
    clearInterval(interval)
   }
  
  }, 1000)
})






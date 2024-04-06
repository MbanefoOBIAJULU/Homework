/*let customerName = window.prompt('whats your name?')
let firstTimeDriving = window.prompt('is this your first time driving?')
let customerNickName = window.prompt('whats your nickname?')
let customerAge = window.prompt('how old are you?')
 if (customerAge<=18){
    console.log('sorry, unable to drive at the moment')
 }
else {
    console.log('congratulations, you can drive now')
}
let uloma; 
console.log(uloma) 



const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);}
if (age >=100){
    resultElement.textContent = `you are too old to enter this site`;
    }
    else if(age==0){
        resultElement.textContent = `you can't enter c'mon, you were just born`;
     }
     else if (age>=18){
        resultElement.textContent = `you are old enough to enter this site`;
     }
     else if (age<0){
        resultElement.textContent = `your age can't be below 0`;
     else{
            resultElement.textContent = `your agemust be 18+ to enter this site`;
     }
    } */

    for (var w = 1; w < 201; w++) {
      if (w % 15 == 0) console.log("FizzBuzz");
      else if (w % 3 == 0) console.log("Fizz");
      else if (w % 5 == 0) console.log("Buzz");
      else console.log(w);
  }
    
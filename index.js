var userNum = prompt("Please Fill the number that you want to play");
let numberRandom = Math.random().toFixed(2)*100  
if(userNum === numberRandom){
  console.log("you win!")
}else{
  console.log("sorry you lose please try again the number of lotery is "+ numberRandom +" but your number is " + userNum)
}


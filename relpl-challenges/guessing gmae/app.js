let tries = 0;
let maxTries = 3;
let message = "Enter your guess below:"
let winningNum = Math.floor(Math.random() * 10) + 1;
console.log(winningNum)
function promptFx() {
    while (tries < maxTries){
      let userInput = prompt(`${message}`, "1 - 10");
      let attempts = parseInt(userInput)
      tries += 1;
      if(userInput === null){
        return;
      }
      if (tries > maxTries){
          document.write("You lose, try again?");
      };
      if (attempts === winningNum){
          alert("Congrats")
          maxTries = null
      }
    else if (attempts > winningNum) {    
      alert("Too high!");
    }
    else {
      alert("Too low!")
    }
  } 
}



let tries = 0;
let maxTries = 3;
let message = "Enter your guess below:"
let winningNum = Math.floor(Math.random() * 10) + 1;
console.log(winningNum)
function promptFx() {
    while (tries < maxTries){
      let userInput = prompt(`${message}`, "1 - 10");
      let attempts = parseInt(userInput)
      tries += 1;
      if(userInput === null){
        return;
      }
      
    if (attempts === winningNum) {
      alert("Congrats!")
      maxTries = null
    } else if (attempts > winningNum) {
      alert("Too High!")
    } else {
      alert("Too Low")
    }
  
  } alert("You lose, try again?")
}

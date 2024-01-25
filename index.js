let inputElement = document.getElementById("userInput");
let GameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random()*100);

function checkGuess(){
    if(parseInt(inputElement.value) > randomNumber){
        GameResult.textContent = 'Too high! Try Again...';
        GameResult.style.backgroundColor = 'chocolate';  
    }
  else if(parseInt(inputElement.value) < randomNumber){
        GameResult.textContent = 'Too Low! Try Again...';
        GameResult.style.backgroundColor = 'chocolate';    
    }
    else if(parseInt(inputElement.value) === randomNumber){
        GameResult.textContent = 'Congratulations!! You got it Right.Refresh to Play Again!'
        GameResult.style.backgroundColor = 'Green';
    }
    else{
        GameResult.textContent = 'please enter a valid input' ;
        GameResult.style.backgroundColor = 'Red';
    }
    
}

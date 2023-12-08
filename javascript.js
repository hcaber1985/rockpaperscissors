
function getComputerChoice() {
    let min = 1;
    let max = 3;
    let randomNumber = getRandomNumber(min, max);

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getRandomNumber(min, max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min)
}


//Write function for prompting the user

function getUserChoice(){
    let choice = prompt("Select Rock Paper or Scissors").toLowerCase();
    return choice;
}

//Write a function to ensures they enter rock paper or scissors and compare to comp choice
function gameStart(){
    let computer = getComputerChoice();
    let player = getUserChoice();
    console.log(computer);
    console.log(player);
    if(computer == "rock" && player == "rock" ){
        return(gameStart());
    }else if(computer == "rock" && player == "paper" ){
        return("you win");
    }else if(computer == "rock" && player == "scissors" ){
        return("you lose");
    }else if(computer == "paper" && player == "paper" ){
        return( ameStart());
    }else if(computer == "paper" && player == "rock" ){
        return("you lose");
    }else if(computer == "paper" && player == "scissors" ){
        return("you win");
    }else if(computer == "scissors" && player == "paper" ){
        return("you lose");
    }else if(computer == "scissors" && player == "scissors" ){
        return(gameStart());
    }else if(computer == "scissors" && player == "rock" ){
        return("you win");
    }
    
    
} 


//making calls to the random number generator for each if and else if block
/*function getComputerChoice(){
    let min = 1;
    let max = 3;

    if (getRandomNumber(min, max) == 1){
        return "rock";
    }else if(getRandomNumber(min, max) == 2 ){
        return "paper";
    }else if(getRandomNumber(min, max) == 3 ){
        return "scissors";
    }else{
        return getRandomNumber(min, max);
    }        

}*/

/*let x = getComputerChoice(1,3);

function random(){
    return Math.random();
}*/



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

function getRandomNumber(min, max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min)
}

/*let x = getComputerChoice(1,3);

function random(){
    return Math.random();
}*/
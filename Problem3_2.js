//Create guess the number game
let i = true;
let gameNum = 34;

while(i) {
    let userNum = prompt("Guess the number");
    if (userNum == gameNum) {
        i = false;
    }
    else {
        console.log("Wrong guess");
    }
}

console.log("congratulations, you have won the game");

let randInt = Math.floor(Math.random() * 10) + 1;
let usersGuess;

while (randInt != usersGuess) {
    usersGuess = prompt('Enter a number:...');
    if(randInt == usersGuess) console.log('Good work buddy!');
    else console.log('Try again.')
}



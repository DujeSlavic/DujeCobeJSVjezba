
let randomInt = Math.floor(Math.random() * 10) + 1;
let usersGuess;

while (randomInt != usersGuess) {
    usersGuess = prompt('Enter a number:...');
    //ostavljeno == da ne padnje na type
    (randomInt == usersGuess) ? console.log('Good work buddy!') : console.log('Try again.');
}
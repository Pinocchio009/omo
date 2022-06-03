
function guessNumber() {

    // generating a random integer from 1 to 2
    const random = Math.floor(Math.random() * 2) +1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 2: '));

    // take the input until the guess is correct
    while(number == random) {
        console.log('correct you advanced to level 2')
     return guessNumber()
    }


    // check if the guess is correct
    if(number == random) {
        console.log('You guessed the correct number.');
    }
    else if (number != random) {
        console.log('oops you don fail')
    }

  }

// call the function
guessNumber();
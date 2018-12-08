// VARIABLES DEFINED FOR GAME
// ===================================================================
var winCount = 1;
var lossCount = 0;
var guessesLeft = 10;
var guessedLetters = [];

// Array of alphabet
var alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
    "x", "y", "z"];

// Computer picks random "letter" or value from alphabet array
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet [randomLetter];

console.log ("Computer choice = " + computerChoice);

// GENERATES RANDOM CUMPUTER CHOICE AND ALLOWS USER TO CHOOSE LETTERS
// ===================================================================

// Listener for user key press
document.onkeyup = function (event) {
    // Stores user key press into userChoice variable and
    // converts to lowercase to avoid uppercase choices
    // from being missed
    var userChoice = event.key.toLowerCase();

    // RegExp object for confirming that userChoice is a
    // letter from the alphabet array
    var regexp = /[a-z]/gi;

        // Alerts user to try again if key other than letter is chosen
        if (!regexp.test (userChoice)) {
            alert ("Letters are in the alphabet dummy! Try again");
        }

        else {
        }

// If statmens that determine wins and loses. Also tracks progress
// ===================================================================

        if (guessesLeft <= 0) {
            lossCount++;
            document.getElementById ("lossCounty").innerHTML = lossCount++;
            console.log ("You lost");
            alert ("You lost!");
            guessesLeft = 10;
            guessedLetters = [];
            document.getElementById ("guessedLetters").innherHTML = guessedLetters;
            document.getElementById ("guessesLeft").innerHTML = guessesLeft -1;
            // randomLetter = Math.floor(Math.random() * alphabet.length);
            computerChoice = alphabet [randomLeter];
            console.log ("Computer choice = " + computerChoice);
        }

        if (computerChoice == userChoice) {
            console.log ("You won!");
            alert ("You won!");
            document.getElementById ("winCount").innerHTML = winCount++;
            guessedLetters = [];
            document.getElementById ("guessedLetters").innerHTML = guessedLetters;
            computerChoice = alphabet [randomLetter];
            console.log ("Computer choice = " + computerChoice);
            guessesLeft = 10;
            document.getElementById ("guessesLeft").innerHTML = 10;
        }

        else {
            document.getElementById ("guessesLeft").innerHTML = guessesLeft - 1;
            guessedLetters.push (userChoice);
            alert ("Guess again!");
            document.getElementById ("guessedLetters").innerHTML = guessedLetters;
        }
        // Not working: Computer generates random letter but keeps choosing same letter
}

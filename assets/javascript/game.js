
// Varibles/Counters
var wins = 0
var winstext = document.getElementById("wins-text");
currentwordtext = document.getElementById("currentword-text");
remainingguessestext = document.getElementById("remainingguesses-text");
letterguessestext = document.getElementById("letterguesses-text");
//This function setup the initial game
function initgame() {
    //reinitiating the all the variables
    wrongletter = [];
    remainingLetters = 12;
    countercomplete = 0;
    complete = false;
    youlost = false;
    alredyguessedletter = [];
    wordselected = usastates[Math.floor(Math.random() * usastates.length)];
    wordlowercase = wordselected.toLowerCase();
    console.log(wordselected);
    string = [];
    answerArray = [];
    for (var i = 0; i < wordselected.length; i++) {
        answerArray[i] = "_";
        string.push(wordlowercase.charAt(i));
        if (string[i] === " ") {
            answerArray[i] = " "
            countercomplete++;
        }
    }
}
//Create an array with the list of the States of United States of America.
var usastates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana",
    "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
// When user press a key this function is run.
var string = [];
var answerArray = [];
var wrongletter = [];
var remainingLetters = 12;
var countercomplete = 0;
var complete = false;
var youlost = false;
var alredyguessedletter = [];
var wordselected = null;
var wordlowercase = null;
initgame();
console.log(answerArray);
console.log(string);

document.onkeyup = function (event) {
    // Determines which key was pressed.
    var letterfound = false;
    var userGuess = event.key;
    if (alredyguessedletter.includes(userGuess)) {
        alert("Choose another letter, you already guessed this");
    }
    else {
        alredyguessedletter.push(userGuess);
        for (var j = 0; j < wordlowercase.length; j++) {
            if (userGuess.toLowerCase() === string[j]) {
                answerArray[j] = userGuess;
                countercomplete++;
                console.log(answerArray);
                letterfound = true;
                if (countercomplete === wordselected.length) {
                    complete = true;
                    console.log(complete);
                    alert("Congrats! The answer is " + wordselected);
                    wins++
                    console.log(wins);
                    initgame();
                }
            }
        }
        if (letterfound === false) {
            remainingLetters--;
            console.log(remainingLetters);
            wrongletter.push(userGuess);
            console.log(wrongletter);
            if (remainingLetters === 0) {
                youlost = true;
                console.log(youlost);
                alert("Sorry! You lost")
                initgame()
            }
        }

    }
    winstext.textContext = wins;
    currentwordtext.textContext = answerArray;
    remainingguessestext.textContext = remainingLetters;
    letterguessestext.textContext = wrongletter;

}






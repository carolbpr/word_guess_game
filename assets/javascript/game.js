
// Varibles/Counters
var wins = 0
var winstext = document.getElementById("wins-text");
var currentwordtext = document.getElementById("currentword-text");
var remainingguessestext = document.getElementById("remainingguesses-text");
var letterguessestext = document.getElementById("letterguesses-text");
var initialMessagetext = document.getElementById("initialmessage-text");
var answertext = document.getElementById("answer-text");
//This function setup the initial game
function initgame() {
    //reinitiating the all the variables
    initialMessagetext.textContent = "Press a letter to start playing!";
    wrongletter = [];
    remainingLetters = 12;
    countercomplete = 0;
    complete = false;
    youlost = false;
    alredyguessedletter = [];
    wordselected = usastates[Math.floor(Math.random() * usastates.length)];
    wordlowercase = wordselected.toUpperCase();
    console.log(wordselected);
    string = [];
    answerArray = [];
    userGuess = "[A-Za-z]{1}";
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
var userGuess="[A-Za-z]{1}"
initgame();
console.log(answerArray);
console.log(string);

document.onkeyup = function (event) {
    // Determines which key was pressed.
    initialMessagetext.textContent =" ";
    answertext.textContent = " ";
    var letterfound = false;
    userGuess = event.key;
    if (alredyguessedletter.includes(userGuess)) {
        alert("Choose another letter, you already guessed this");
    }

    else {
        alredyguessedletter.push(userGuess);
        for (var j = 0; j < wordlowercase.length; j++) {
            if (userGuess.toUpperCase() === string[j]) {
                answerArray[j] = userGuess.toUpperCase();
                countercomplete++;
                console.log(answerArray);
                letterfound = true;
                if (countercomplete === wordselected.length) {
                    complete = true;
                    console.log(complete);
                    answertext.textContent = "Congrats! The answer is " + wordselected;
                    wins++
                    console.log(wins);
                    initgame();
                }
            }
        }
        if (letterfound === false) {
            remainingLetters--;
            console.log(remainingLetters);
            wrongletter.push(userGuess.toUpperCase());
            console.log(wrongletter);
            if (remainingLetters === 0) {
                youlost = true;
                console.log(youlost);
                alert("Sorry! You lost. Try again !")
                initgame()
            }
        }

    }

    winstext.textContent = wins;
    //Replace "," to " "(spaces)
    currentwordtext.textContent = answerArray.toString().replace(new RegExp(",", 'g')," ");
    remainingguessestext.textContent = remainingLetters;
    //Replace "," to " "(spaces)
    letterguessestext.textContent = wrongletter.toString().replace(new RegExp(",", 'g')," ");
    
};






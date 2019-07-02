
// Varibles/Counters
var wins = 0
var winstext = document.getElementById("wins-text");
var currentwordtext = document.getElementById("currentword-text");
var remainingguessestext = document.getElementById("remainingguesses-text");
var letterguessestext = document.getElementById("letterguesses-text");
var initialMessagetext = document.getElementById("initialmessage-text");
var answertext = document.getElementById("answer-text");
var imageanwser = document.getElementById("image-answer");
var modal = document.getElementById("popupImage");
var captionText = document.getElementById("imageCaption");
var endthisfunction = false;
//var states = document.createElement("img");
var stateimage = "";
var states = {
    Alabama: "assets/images/Alabama.png",
    Alaska: "assets/images/Alaska.png",
    Arizona: "assets/images/Arizona.png",
    Arkansas: "assets/images/Arizona.png",
    California: "assets/images/California.png",
    Colorado: "assets/images/Colorado.png",
    Connecticut: "assets/images/Connecticut.png",
    Delaware: "assets/images/Delaware.png",
    Florida: "assets/images/Florida.png",
    Georgia: "assets/images/Georgia.png",
    Hawaii: "assets/images/Hawaii.png",
    Idaho: "assets/images/Idaho.png",
    Illinois: "assets/images/Illinois.png",
    Indiana: "assets/images/Indiana.png",
    Iowa: "assets/images/Iowa.png",
    Kansas: "assets/images/Kansas.png",
    Kentucky: "assets/images/Kentucky.png",
    Louisiana: "assets/images/Louisiana.png",
    Maine: "assets/images/Maine.png",
    Maryland: "assets/images/Maryland.png",
    Massachusetts: "assets/images/Massachusetts.png",
    Michigan: "assets/images/Michigan.png",
    Minnesota: "assets/images/Minnesota.png",
    Mississippi: "assets/images/Mississippi.png",
    Missouri: "assets/images/Missouri.png",
    Montana: "assets/images/Montana.png",
    Nebraska: "assets/images/Nebraska.png",
    Nevada: "assets/images/Nevada..png",
    New_Hampshire: "assets/images/New_Hampshire.png",
    New_Jersey: "assets/images/New_Jersey.png",
    New_Mexico: "assets/images/New_Mexico.png",
    New_York: "assets/images/New_York.png",
    North_Carolina: "assets/images/North_Carolina.png",
    North_Dakota: "assets/images/North_Dakota.png",
    Ohio: "assets/images/Ohio.png",
    Oklahoma: "assets/images/Oklahoma.png",
    Oregon: "assets/images/Oregon.png",
    Pennsylvania: "assets/images/Pennsylvania.png",
    Rhode_Island: "assets/images/Rhode_Island.png",
    South_Carolina: "assets/images/South_Carolina.png",
    South_Dakota: "assets/images/South_Dakota.png",
    Tennessee: "assets/images/Tennessee.png",
    Texas: "assets/images/Texas.png",
    Utah: "assets/images/Utah.png",
    Vermont: "assets/images/Vermont.png",
    Virginia: "assets/images/Virginia.png",
    Washington: "assets/images/Washington.png",
    West_Virginia: "assets/images/West_Virginia.png",
    Wisconsin: "assets/images/Wisconsin.png",
    Wyoming: "assets/images/Wyoming.png",
}
//This function setup the initial game
function initgame() {
    //reinitiating the all the variables
    initialMessagetext.textContent = "Press a letter to continue playing!";
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
            answerArray[i] = " ";
            countercomplete++;
        }
    }
}
function findimage() {
    for (var i = 0; i < wordselected.length; i++) {
        if (wordselected.charAt(i) === " ") {
            stateimage = wordselected.replace(/ /i, "_");
            console.log(stateimage);
            endthisfunction = true;
        }
        else if (endthisfunction === false) {
            stateimage = wordselected;
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
var userGuess = "[A-Za-z]{1}"
initgame();
console.log(answerArray);
console.log(string);
document.onkeyup = function (event) {
    // Determines which key was pressed.  
    initialMessagetext.textContent = " ";
    answertext.textContent = " ";
    userGuess = event.key;
    var letterfound = false;
    var keyCode = event.which;
    if (alredyguessedletter.includes(userGuess)) {
        document.getElementById('nope-sound').play();
        alert("Choose another letter, you already guessed this");
    }
    else if (keyCode < 65 || keyCode > 90) {
        alert("Please choose just letters");
    }
    else {
        document.getElementById('click-sound').play();
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
                    findimage();

                    modal.style.display = "block";
                    imageanwser.src = states[stateimage];
                    captionText.textContent = wordselected;
                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];
                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    document.getElementById('winner-sound').play();
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
                document.getElementById('lost-sound').play();
                alert("Sorry! You lost. Try again !")
                initgame()
            }
        }

    }

    winstext.textContent = wins;
    //Replace "," to " "(spaces)
    currentwordtext.textContent = answerArray.toString().replace(new RegExp(",", 'g'), " ");
    remainingguessestext.textContent = remainingLetters;
    //Replace "," to " "(spaces)
    letterguessestext.textContent = wrongletter.toString().replace(new RegExp(",", 'g'), " ");

};






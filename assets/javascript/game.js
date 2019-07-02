//Varibles/Counters initialization and declarations
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
var stateimage = "";
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
var userGuess = "[A-Za-z]{1}";

//Create an object to hold all the image source per State
var states = {
    Alabama: "assets/images/Alabama.png",
    Alaska: "assets/images/Alaska.png",
    Arizona: "assets/images/Arizona.png",
    Arkansas: "assets/images/Arkansas.png",
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

//This function setup the initial game after Winning or Losing
function initgame() {

    //reinitiating the all the variables
    initialMessagetext.textContent = "Press a letter to continue playing!";
    wrongletter = [];
    remainingLetters = 12;
    countercomplete = 0;
    complete = false;
    youlost = false;
    alredyguessedletter = [];
    stateimage = "";
    endthisfunction = false;

    //Randomly select the State name for the player to guess
    wordselected = usastates[Math.floor(Math.random() * usastates.length)];
    wordlowercase = wordselected.toUpperCase();

    //This string array will hold the an array to later compare if the word is completed or not
    string = [];

    //This array will be holding the letters entered by the player
    answerArray = [];

    //userGuess variable can only be letters
    userGuess = "[A-Za-z]{1}";

    //This loop is created the array to hold the initial count of letter with "_" per letter and will 
    //delete any space if the State name has it ex: North Carolina
    for (var i = 0; i < wordselected.length; i++) {
        answerArray[i] = "_";
        string.push(wordlowercase.charAt(i));
        if (string[i] === " ") {
            answerArray[i] = " ";
            countercomplete++;
        }
    }
}

//This function is created to find the image source in the "states" object
function findimage() {
    for (var i = 0; i < wordselected.length; i++) {
        if (wordselected.charAt(i) === " ") {
            stateimage = wordselected.replace(/ /i, "_");
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
initgame();
test.on('keyup touchend', function(event){
   // Determines which key was pressed.  
    initialMessagetext.textContent = " ";
    answertext.textContent = " ";
    userGuess = event.key;
    var letterfound = false;
    var keyCode = event.which;

    //This conditions determinate either if the letter entered has been already entered, if it is a letter or not, of if it is a new letter
    if (alredyguessedletter.includes(userGuess)) {
        document.getElementById('nope-sound').play();
        alert("Choose another letter, you already guessed this");
    }
    else if (keyCode < 65 || keyCode > 90) {
        document.getElementById('nope-sound').play();
        alert("Please choose just letters");
    }

    //if it is a new letter then these conditions will identify if the letter is part of the word or not
    else {
        document.getElementById('click-sound').play();
        alredyguessedletter.push(userGuess);
        for (var j = 0; j < wordlowercase.length; j++) {

            //This condition will fill the answer array with the letters that are part of the word
            if (userGuess.toUpperCase() === string[j]) {
                answerArray[j] = userGuess.toUpperCase();
                countercomplete++;
                letterfound = true;

                //This condition will check if the word is completed
                if (countercomplete === wordselected.length) {
                    
                    complete = true;
                    //will play a Winner sound
                    document.getElementById('winner-sound').play();
                    answertext.textContent = "Congrats! The answer is " + wordselected;
                    wins++
                    findimage();

                    //This will show a popup window with the correct answer guessed and a Image of the State
                    modal.style.display = "block";
                    imageanwser.src = states[stateimage];
                    captionText.textContent = wordselected;
                    initgame();

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];

                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function () {
                        modal.style.display = "none";
                        
                    }
                }
            }
        }

        //This condition will fill the array with the wrong letters
        if (letterfound === false && complete === false) {
            remainingLetters--;
            wrongletter.push(userGuess.toUpperCase());

            //This condition will check if the user has remaining time to guess 
            if (remainingLetters === 0) {
                youlost = true;
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

} 

document.onkeyup = function (event) {
    // Determines which key was pressed.  
    initialMessagetext.textContent = " ";
    answertext.textContent = " ";
    userGuess = event.key;
    var letterfound = false;
    var keyCode = event.which;

    //This conditions determinate either if the letter entered has been already entered, if it is a letter or not, of if it is a new letter
    if (alredyguessedletter.includes(userGuess)) {
        document.getElementById('nope-sound').play();
        alert("Choose another letter, you already guessed this");
    }
    else if (keyCode < 65 || keyCode > 90) {
        document.getElementById('nope-sound').play();
        alert("Please choose just letters");
    }

    //if it is a new letter then these conditions will identify if the letter is part of the word or not
    else {
        document.getElementById('click-sound').play();
        alredyguessedletter.push(userGuess);
        for (var j = 0; j < wordlowercase.length; j++) {

            //This condition will fill the answer array with the letters that are part of the word
            if (userGuess.toUpperCase() === string[j]) {
                answerArray[j] = userGuess.toUpperCase();
                countercomplete++;
                letterfound = true;

                //This condition will check if the word is completed
                if (countercomplete === wordselected.length) {
                    
                    complete = true;
                    //will play a Winner sound
                    document.getElementById('winner-sound').play();
                    answertext.textContent = "Congrats! The answer is " + wordselected;
                    wins++
                    findimage();

                    //This will show a popup window with the correct answer guessed and a Image of the State
                    modal.style.display = "block";
                    imageanwser.src = states[stateimage];
                    captionText.textContent = wordselected;
                    initgame();

                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];

                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function () {
                        modal.style.display = "none";
                        
                    }
                }
            }
        }

        //This condition will fill the array with the wrong letters
        if (letterfound === false && complete === false) {
            remainingLetters--;
            wrongletter.push(userGuess.toUpperCase());

            //This condition will check if the user has remaining time to guess 
            if (remainingLetters === 0) {
                youlost = true;
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






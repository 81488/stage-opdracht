const numberContainer = document.querySelector(".number-container");
const randomCodeDisplay = document.querySelector("#code");
const enteredCodeDisplay = document.querySelector("#pressed");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const timeLeftDisplay = document.querySelector("#seconds");
const possibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomCode = "";
let secondsLeft = 60;
let timeLeftTimer;

const shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const resetGame = () => {
    numberContainer.innerHTML = "";
    randomCodeDisplay.innerHTML = "";
    enteredCodeDisplay.innerHTML = "";
    secondsLeft = 60;
    randomCode = "";
    startButton.disabled = false;
    timeLeftDisplay.innerHTML = 60;
    clearInterval(timeLeftTimer);
}

const newCodeEntry = value => {
    enteredCodeDisplay.innerHTML += value;
    console.log(value);

    if (enteredCodeDisplay.innerHTML == randomCode) {
        alert("You won in " + (60 - secondsLeft) + " seconds");
        resetGame();
    } else if (enteredCodeDisplay.innerHTML.length == randomCode.length) {
        resetCode();
    }

}

const resetCode = () => {
    enteredCodeDisplay.innerHTML = "";
}

const generateCode = () => {
    for (let i = 0; i < 5; i++)	{
        // Get a random value add it to the code and append it as a string
        randomCode += possibleNumbers[Math.floor(Math.random() * 9)] + "";
        console.log(Math.floor(Math.random() * 10) + "", randomCode);
    }

    // display random code
    randomCodeDisplay.innerHTML = randomCode;
}

const startGame = () => {
    generateCode();

    shuffle(possibleNumbers);

    // Generate the numbers for the numpad
    for (let i = 0; i < possibleNumbers.length; i++)	{
        let numberButton = document.createElement("button");
        // Fill with random value
        let numberText = document.createTextNode(possibleNumbers[i]);
        numberButton.appendChild(numberText);
        numberButton.setAttribute("class", "btn");
        // add event listener with the assigned random value
        numberButton.addEventListener("click", () => newCodeEntry(possibleNumbers[i]));
        numberContainer.appendChild(numberButton);
    }

    startButton.disabled = true;

    timeLeftTimer = setInterval(() => {
        secondsLeft--;
        timeLeftDisplay.innerHTML = secondsLeft;
    
        if (secondsLeft == 0) {
            alert("Your time ran out");
            resetGame();
        }
    }, 1000);
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetCode);
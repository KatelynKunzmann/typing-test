const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");

// Event listeners
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", accuracyCheck, false);
resetButton.addEventListener("click", reset, false);

var errors = 0;
var wordsList = [
    "Hello world!",
    "My cat Melody loves to watch the birds at the bird feeder.",
    "My girlfriend Simone is beautiful.",
    "Do not sit at the table yet.",
    "I looked for my toenail clippers today, but I only found a piece of bacon.",
    "Simone works from home.",
    "The shape of the desk was a circle.",
    "Barney was purple.",
    "A unicorn has horns and a pegasus has wings.",
    "Dinosaurs are right below your feet.",
    "Birds are dinosaurs.",
    "What did you eat today?",
    "The amusement park was marvelous!"
];

var randomNumSeed = Math.floor((Math.random() * 13));
document.querySelector("#random-text p").innerHTML = wordsList[randomNumSeed];
var randomText = document.querySelector("#random-text p").innerHTML;


function accuracyCheck() {
 
}

function start() {

}

function reset() {
    errors = 0;

    testArea.value = "";
    testWrapper.style.borderColor = "grey";

    randomNumSeed = Math.floor((Math.random() * 13));
    document.querySelector("#random-text p").innerHTML = wordsList[randomNumSeed];
    randomText = document.querySelector("#random-text p").innerHTML;
}


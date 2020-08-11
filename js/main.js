
/*----- constants -----*/
const buttons = {
    green: 0,
    red: 1,
    yellow: 2,
    blue: 3,
};

/*----- app's state (variables) -----*/
const sequences = {
    playerSequence: [],
    computerSequence: [],
};
let gameOver, ignoreClicks; 
// at some point maybe add a score, = playerSequence.length

/*----- cached element references -----*/
const buttonEls = {
    greenButton: document.getElementById('green_button'),
    redButton: document.getElementById('red_button'),
    yellowButton: document.getElementById('yellow_button'),
    blueButton: document.getElementById('blue_button'),
    startButton: document.getElementById('start_button') // I maybe don't need this buttpn; am I gonna be accessing it on the regular?
    
};

/*----- event listeners -----*/
document.querySelector('.board').addEventListener('click', handleClick);

/*----- functions -----*/

function  changeColor (val) {
    
};

function randomNum() {
 return Math.floor(Math.random()* 4);
};

function generateRandomSequence() {
   sequences.computerSequence.push(randomNum());
   
};

function handleClick(evt) {
    if(gameOver || ignoreClicks) {
        return; 
    } else if (evt.target === buttonEls.greenButton) {
        return sequences.playerSequence.push(0);
    } else if (evt.target === buttonEls.redButton) {
        return sequences.playerSequence.push(1);
    } else if (evt.target === buttonEls.yellowButton) {
        return sequences.playerSequence.push(2);
    } else if (evt.target === buttonEls.blueButton) {
        return sequences.playerSequence.push(3);
    };

};


function init() {
    generateRandomSequence();
};

function render() {
    console.log(sequences.computerSequence)[i];
};
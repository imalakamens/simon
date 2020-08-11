
/*----- constants -----*/
const buttons = {
    green: 0,
    red: 1,
    yellow: 2,
    blue: 3,
};

/*----- app's state (variables) -----*/
const sequences = {
    playerSequence: null,
    computerSequence: null,
};
let gameOver, ignoreClicks; 
// at some point maybe add a score, = playerSequence.length

/*----- cached element references -----*/
const buttonEls = {
    greenButton: document.querySelector('.green_button'),
    redButton: document.querySelector('.red_button'),
    yellowButton: document.querySelector('.yellow_button'),
    blueButton: document.querySelector('.blue_button'),
    startButton: document.querySelector('.start_button') // I maybe don't need this buttpn; am I gonna be accessing it on the regular?
    
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
    ignoreClicks = true;
    sequences.playerSequence = [];
    sequences.computerSequence = [];
    generateRandomSequence();
};

function render() {
    console.log(sequences.computerSequence)[i];
};
/* sketch out function order here */
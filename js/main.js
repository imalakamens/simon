// IN RESPONSE TO USER INTERACTION: UPDATE STATE, THEN CALL RENDER
/*----- constants -----*/
const buttons = { // do i need this?
    green: 0,
    red: 1,
    yellow: 2,
    blue: 3,
};
const sequences = {
    playerSequence: [],
    randomSequence: [],
};

/*----- app's state (variables) -----*/
let gameOver, ignoreClicks, interval; 
// at some point maybe add a score, = playerSequence.length

/*----- cached element references -----*/
const buttonEls = {
    greenButton: document.getElementById('green_button'),
    redButton: document.getElementById('red_button'),
    yellowButton: document.getElementById('yellow_button'),
    blueButton: document.getElementById('blue_button'),
    startButton: document.getElementById('start_button') // I maybe don't need this button; am I gonna be accessing it on the regular?
    
};

/*----- event listeners -----*/
document.querySelector('.board').addEventListener('click', handleClick);

/*----- functions -----*/

function randomNum() {
 return Math.floor(Math.random()* 4);
};

function generateSequence() {
   sequences.randomSequence.push(randomNum());
   
};

function handleClick(evt) {
    if(gameOver || ignoreClicks) {
        return; 
    } else if (evt.target === buttonEls.greenButton) {
        // buttonEls.greenButton.style.borderBottomColor='rgba(0, 183, 0, 1)';
          //this works to change color of button!
         sequences.playerSequence.push(0);
         isGameOver();
    } else if (evt.target === buttonEls.redButton) {
         sequences.playerSequence.push(1);
         isGameOver();
    } else if (evt.target === buttonEls.yellowButton) {
         sequences.playerSequence.push(2);
         isGameOver();
    } else if (evt.target === buttonEls.blueButton) {
         sequences.playerSequence.push(3);
         isGameOver();
    };

};


function init() {
    gameOver = false;
    ignoreClicks = true;
    sequences.playerSequence = [];
    sequences.randomSequence = [];
    render();
    playGame();
};

function playGame() {
    generateSequence();
    //then probably wait some amount of time
    ignoreClicks = false;
}

function isGameOver() {
    if(sequences.playerSequence !== sequences.randomSequence) return gameOver = true;
    else {
        console.log('game is not over, now what do we do?')
    }
};

function render() {
console.log('render')
};
/* sketch out function order here */

function turnLightOn(color) {
    if (color === 0) {
        for(let i=0; i<1000000; i++) {
            buttonEls.greenButton.style.borderBottomColor='rgba(0, 183, 0, 1)';
        };      
    };
};
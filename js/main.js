// IN RESPONSE TO USER INTERACTION: UPDATE STATE, THEN CALL RENDER
/*----- constants -----*/

const sequences = {
    playerSequence: [],
    randomSequence: [],
};

const boardLights = {
    g: 0,
    r: 1,
    y: 2,
    b: 3
}

const lightUp = {
    green: () => {
        turnLightsOff();
        buttonEls.greenButton.style.borderBottomColor='rgba(0, 183, 0, 1)';
        setTimeout(turnLightsOff, 300);
    },
    red: () => {
        turnLightsOff();
        buttonEls.redButton.style.borderBottomColor='rgba(226, 0, 0, 1)';
        setTimeout(turnLightsOff, 300);
    },
    yellow: () => {
        turnLightsOff();
        buttonEls.yellowButton.style.borderTopColor='rgba(255, 240, 157, 1)';
        setTimeout(turnLightsOff, 300);
    },
    blue: () => {
        turnLightsOff();
        buttonEls.blueButton.style.borderTopColor='rgba(80, 80, 255, 1)';
        setTimeout(turnLightsOff, 300);
    }
};
/*----- app's state (variables) -----*/
let counter = 0;
let gameOver, ignoreClicks; 
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
document.getElementById('green_button').addEventListener('click', lightUp.green);
document.getElementById('red_button').addEventListener('click', lightUp.red);
document.getElementById('yellow_button').addEventListener('click', lightUp.yellow);
document.getElementById('blue_button').addEventListener('click', lightUp.blue);
document.getElementById('start_button').addEventListener('click', init);
/*----- functions -----*/

function randomNum() {
    return Math.floor(Math.random()* 4);
};

function generateSequence() {
    ignoreClicks = false;
    sequences.randomSequence.push(randomNum());
    sequences.playerSequence = [];
    counter = 0;
    renderSeq();
};
function init() {
    gameOver = false;
    ignoreClicks = true;
    sequences.playerSequence = [];
    sequences.randomSequence = [];
    playGame();
    
};

function playGame() {
    generateSequence();
    ignoreClicks = false;
    console.log(sequences)
}

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

function isGameOver() {
    console.log('this is game over running')
    if(sequences.playerSequence[counter] == sequences.randomSequence[counter]) {
        gameOver = false;
        counter ++
    } else {
        gameOver = true;
    }
    if(counter==sequences.randomSequence.length) {
        generateSequence();
    }
console.log(gameOver)
    // if(sequences.playerSequence.toString() !== sequences.randomSequence.toString()) return gameOver = true;
   return gameOver;
};

function renderSeq() {
    let lightShow =sequences.randomSequence;
    console.log('is this lightshow?',lightShow)
//     for(let i=0; i<=lightShow.length; i++ ){
//         setInterval(() => lightUp.green, 2000*i )
//     }
};
/* sketch out function order here */

function turnLightsOff(){
    buttonEls.greenButton.style.borderBottomColor='rgba(0, 183, 0, 0.3)';
    buttonEls.redButton.style.borderBottomColor='rgba(226, 0, 0, .4)';
    buttonEls.yellowButton.style.borderTopColor='rgba(255, 240, 157, .5)';
    buttonEls.blueButton.style.borderTopColor='rgba(80, 80, 255, .5)';
};

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
        console.log('clicked green')
        turnLightsOff();
        buttonEls.greenButton.style.borderBottomColor='rgba(0, 183, 0, 1)';
    },
    red: () => {
        turnLightsOff();
        buttonEls.redButton.style.borderBottomColor='rgba(226, 0, 0, 1)';
    },
    yellow: () => {
        turnLightsOff();
        buttonEls.yellowButton.style.borderTopColor='rgba(255, 240, 157, 1)';
    },
    blue: () => {
        turnLightsOff();
        buttonEls.blueButton.style.borderTopColor='rgba(80, 80, 255, 1)';
    }
};
/*----- app's state (variables) -----*/
let counter = 0;
let gameOver, ignoreClicks, lightShow;
let delay = 500;
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
document.getElementById('green_button').addEventListener('mousedown', lightUp.green);
document.getElementById('green_button').addEventListener('mouseup', turnLightsOff);
document.getElementById('red_button').addEventListener('mousedown', lightUp.red);
document.getElementById('red_button').addEventListener('mouseup', turnLightsOff);
document.getElementById('yellow_button').addEventListener('mousedown', lightUp.yellow);
document.getElementById('yellow_button').addEventListener('mouseup', turnLightsOff);
document.getElementById('blue_button').addEventListener('mousedown', lightUp.blue);
document.getElementById('blue_button').addEventListener('mouseup', turnLightsOff);

// document.getElementById('green_button').addEventListener('faux-click', lightUp.green);
// document.getElementById('red_button').addEventListener('faux-click', lightUp.red);
// document.getElementById('yellow_button').addEventListener('faux-click', lightUp.yellow);
// document.getElementById('blue_button').addEventListener('faux-click', lightUp.blue);
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
    lightShow = undefined;
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

function clickSim() {
    const evt = new MouseEvent('mousedown', {
        view: window,
        bubbles: false,
        cancelable: true
    });
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
    console.log('game over checking...')
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
    delay = 500;
    lightShow = sequences.randomSequence;
    console.log(lightShow);
    lightShow.forEach(function (num) {
        console.log('this num', num)
        
        if(num == boardLights.g) {
            lightUp.green();
            delay*1.5
        }
        if(num == boardLights.r) {
            lightUp.red();
            delay*1.5
        }
        if(num == boardLights.y) {
            lightUp.yellow();
            delay*1.5
        }
        if(num == boardLights.b) {
            lightUp.blue();
            delay*1.5
        }
    
    });
};
/* sketch out function order here */

function turnLightsOff(){
    buttonEls.greenButton.style.borderBottomColor='rgba(0, 183, 0, 0.3)';
    buttonEls.redButton.style.borderBottomColor='rgba(226, 0, 0, .4)';
    buttonEls.yellowButton.style.borderTopColor='rgba(255, 240, 157, .5)';
    buttonEls.blueButton.style.borderTopColor='rgba(80, 80, 255, .5)';
};

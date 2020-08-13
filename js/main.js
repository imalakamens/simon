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
let gameOver, ignoreClicks, lightShow, score;

/*----- cached element references -----*/
const buttonEls = {
    greenButton: document.getElementById('green_button'),
    redButton: document.getElementById('red_button'),
    yellowButton: document.getElementById('yellow_button'),
    blueButton: document.getElementById('blue_button'),
};

const textEls = {
    score: document.getElementById('score_p'),
    message: document.getElementById('message')
}

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
document.getElementById('start_button').addEventListener('click', init);

/*----- functions -----*/
function timer(cb) {
    setInterval(cb, 400);
    clearInterval(setInterval);
}

function randomNum() {
    return Math.floor(Math.random()* 4);
};

function generateSequence() {
    ignoreClicks = false;
    sequences.randomSequence.push(randomNum());
    sequences.playerSequence = [];
    counter = 0;
    // lightShow = undefined;
    setTimeout(renderSeq, 200);
    clearInterval(renderSeq);
};

function init() {
    score = 0;
    textEls.score.innerText = '';
    textEls.message.innerText = '';
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
    if(sequences.playerSequence[counter] == sequences.randomSequence[counter]) {
        gameOver = false;
        counter ++
    } else {
        ignoreClicks=true;
        gameOver = true;
        textEls.message.innerText='GAME OVER';
    }
    if(counter==sequences.randomSequence.length) {
        generateSequence();
        score ++;
        textEls.score.innerText= score;
    }
   return gameOver;
};

function renderSeq() {

    console.log(score)
    turnLightsOff();
    // let timer = setInterval
    sequences.randomSequence.forEach(function (num) {
        console.log(`should light: ${num}`)
        if(num == boardLights.g) {
            lightUp.green();
            setTimeout(turnLightsOff, 500);
        }
        if(num == boardLights.r) {
            lightUp.red();
            setTimeout(turnLightsOff, 500)
        }
        if(num == boardLights.y) {
            lightUp.yellow();
            setTimeout(turnLightsOff, 500)
        }
        if(num == boardLights.b) {
            lightUp.blue();
            setTimeout(turnLightsOff, 500)
        }
    });
};
/*************  sketch out function order *****************************/

function turnLightsOff(){
    buttonEls.greenButton.style.borderBottomColor='rgba(0, 183, 0, 0.3)';
    buttonEls.redButton.style.borderBottomColor='rgba(226, 0, 0, .4)';
    buttonEls.yellowButton.style.borderTopColor='rgba(255, 240, 157, .5)';
    buttonEls.blueButton.style.borderTopColor='rgba(80, 80, 255, .5)';
};


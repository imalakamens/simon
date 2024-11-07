/*----- constants -----*/

const sequences = {
    playerSequence: [],
    randomSequence: [],
};

const boardLights = {
    g: 1,
    r: 2,
    y: 3,
    b: 4
}

const lightUp = {
    green: () => {
        buttonEls.greenButton.style.backgroundColor='rgba(0, 183, 0, 1)';
        setTimeout(() => {
            buttonEls.greenButton.style.backgroundColor='rgba(0, 183, 0, 0.5)';
        }, 500);
        let audio = document.getElementById('green_audio');
        audio.play();
    },
    red: () => {
        buttonEls.redButton.style.backgroundColor='rgba(226, 0, 0, 1)';
        setTimeout(() => {
            buttonEls.redButton.style.backgroundColor='rgba(226, 0, 0, 0.5)';
        }, 500);
        let audio = document.getElementById('red_audio');
        audio.play();
    },
    yellow: () => {
        buttonEls.yellowButton.style.backgroundColor='rgba(255, 240, 157, 1)';
        setTimeout(() => {
            buttonEls.yellowButton.style.backgroundColor='rgba(255, 240, 157, 0.5)';
        }, 500);
        let audio = document.getElementById('yellow_audio');
        audio.play();
    },
    blue: () => {
        buttonEls.blueButton.style.backgroundColor='rgba(80, 80, 255, 1)';
        setTimeout(() => {
            buttonEls.blueButton.style.backgroundColor='rgba(80, 80, 255, 0.5)';
        }, 500);
        let audio = document.getElementById('blue_audio');
        audio.play();
    }
};
/*----- app's state (variables) -----*/
let counter = 0;
let ignoreClicks = true;
let gameOver, score;

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
document.querySelector('.board').addEventListener('click', (e) => {
    if (ignoreClicks === false) {
        handleClick(e);
    }
});
document.getElementById('green_button').addEventListener('mousedown', () => {
    if (ignoreClicks === false){
        lightUp.green();
    }
});
// document.getElementById('green_button').addEventListener('mouseup', turnLightsOff);
document.getElementById('red_button').addEventListener('mousedown', () => {
    if (ignoreClicks === false){
        lightUp.red();
    }
});
// document.getElementById('red_button').addEventListener('mouseup', turnLightsOff);
document.getElementById('yellow_button').addEventListener('mousedown', () => {
    if (ignoreClicks === false){
        lightUp.yellow();
    }
});
// document.getElementById('yellow_button').addEventListener('mouseup', turnLightsOff);
document.getElementById('blue_button').addEventListener('mousedown', () => {
    if (ignoreClicks === false){
        lightUp.blue();
    }
});
// document.getElementById('blue_button').addEventListener('mouseup', turnLightsOff);
document.getElementById('start_button').addEventListener('click', init);

/*----- functions -----*/
function timer(cb) {
    setInterval(cb, 400);
    clearInterval(setInterval);
}

function randomNum() {
    return Math.floor(Math.random()* 4) + 1;
};

async function generateSequence() {
    sequences.randomSequence.push(randomNum());
    sequences.playerSequence = [];
    counter = 0;
    await renderSeq();
};

function init() {
    score = 0;
    textEls.score.innerText = '';
    textEls.message.innerText = '';
    gameOver = false;
    sequences.playerSequence = [];
    sequences.randomSequence = [];
    playGame();

};

async function playGame() {
    await generateSequence();
    // ignoreClicks = false;

}

function handleClick(evt) {
    if( ignoreClicks) {
        return; 
    } else if (evt.target === buttonEls.greenButton && ignoreClicks == false) {
         sequences.playerSequence.push(1);
         isGameOver();
    } else if (evt.target === buttonEls.redButton && ignoreClicks == false) {
         sequences.playerSequence.push(2);
         isGameOver();
    } else if (evt.target === buttonEls.yellowButton && ignoreClicks == false) {
         sequences.playerSequence.push(3);
         isGameOver();
    } else if (evt.target === buttonEls.blueButton && ignoreClicks == false) {
         sequences.playerSequence.push(4);
         isGameOver();
    };
};

function isGameOver() {
    if(sequences.playerSequence[counter] == sequences.randomSequence[counter]) {
        gameOver = false;
        counter ++
    } else {
        gameOver = true;
        textEls.message.innerText='!! GAME OVER !!';
    }
    if(counter==sequences.randomSequence.length) {
        generateSequence();
        score ++;
        textEls.score.innerText= score;
    }
   return gameOver;
};

async function renderSeq() {
    let counter2 = 0
    ignoreClicks = true;
    let lghtSeq = setInterval( () => {
            let num = sequences.randomSequence[counter2];
            console.log(`should light: ${num}`)
            if(num == boardLights.g) lightUp.green();
            if(num == boardLights.r) lightUp.red();
            if(num == boardLights.b) lightUp.blue();
            if(num == boardLights.y) lightUp.yellow();
            if(counter2 == sequences.randomSequence.length) {
                ignoreClicks = false;
                clearInterval(lghtSeq)
            }
            counter2++
        } ,1000);
    
};

function turnLightsOff(){
    buttonEls.greenButton.style.backgroundColor='rgba(0, 183, 0, 0.3)';
    buttonEls.redButton.style.backgroundColor='rgba(226, 0, 0, .4)';
    buttonEls.yellowButton.style.backgroundColor='rgba(255, 240, 157, .5)';
    buttonEls.blueButton.style.backgroundColor='rgba(80, 80, 255, .5)';
};
/*************  sketch out function order *****************************/


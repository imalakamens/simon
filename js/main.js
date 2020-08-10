/*----- constants -----*/
const sequences = {
    playerSequence: [],
    computerSequence: [],
}

/*----- app's state (variables) -----*/
const buttonLights = {
    green: null,
    red: null,
    yellow: null,
    blue: null,
    start: null,
}

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/
function randomGen() {
 return Math.floor(Math.random()* 4);
}

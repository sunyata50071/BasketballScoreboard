let pointsHome = 0
let timeoutsHome = 0
let foulsHome = 0
let pointsAway = 0
let timeoutsAway = 0
let foulsAway = 0
let quarter = 0
let scoreElH = document.getElementById("home-score-el")
let timeoutElH = document.getElementById("home-timeouts-el")
let foulElH = document.getElementById("home-fouls-el")
let scoreElA = document.getElementById("away-score-el")
let timeoutElA = document.getElementById("away-timeouts-el")
let foulElA = document.getElementById("away-fouls-el")
let period = document.getElementById("current-quarter")
let gameTime = document.getElementById("game-time")
let clockStart = document.getElementById("start-btn")
let stopTime = document.getElementById("stop-btn")
const btnStartEl = document.querySelector('[data-action="start"]');
const btnStopEl = document.querySelector('[data-action="stop"]');
const btnResetEl = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let shotClock = 720;
let interval;


function addOnePointHome() {
    pointsHome += 1
    scoreElH.textContent = pointsHome
}

function addTwoPointsHome() {
    pointsHome += 2
    scoreElH.textContent = pointsHome
}

function addThreePointsHome() {
    pointsHome += 3
    scoreElH.textContent = pointsHome
}

function addTimeOutHome() {
    if (timeoutsHome <= 6) {
        timeoutsHome += 1
        timeoutElH.textContent = timeoutsHome
    }

}

function addFoulHome() {
    foulsHome += 1
    foulElH.textContent = foulsHome
}

function addCurrentQuarter() {
    if (quarter < 4) {
    quarter += 1
    period.textContent = quarter
    }
}

const start = () => {
    clockRunning = true;
    interval = setInterval(incrementTimer, 1000)
}
  
const stop = () => {
    clockRunning = false;
    clearInterval(interval);
}
  
const reset = () => {
    minutes.innerText = '12';
    seconds.innerText = '00';
    clearInterval(interval);
    shotClock = 720;

}

const pad = (number) => {
    return (number < 10) ? "0" + number : number;
    
}

const incrementTimer = () => {
    if (shotClock >= 1) {
        shotClock--;
    }

const numMinutes = Math.floor(shotClock / 60);
const numSeconds = shotClock % 60;
    
minutes.innerText = pad(numMinutes);
seconds.innerText = pad(numSeconds);
}
  
btnStartEl.addEventListener('click', startTimer = () => {
    start();
});
  
btnStopEl.addEventListener('click', stopTimer = () => {
    stop();
});
  
btnResetEl.addEventListener('click', stopTimer = () => {
    reset();
});

function addOnePointAway() {
    pointsAway += 1
    scoreElA.textContent = pointsAway
}

function addTwoPointsAway() {
    pointsAway += 2
    scoreElA.textContent = pointsAway
}

function addThreePointsAway() {
    pointsAway += 3
    scoreElA.textContent = pointsAway
}

function addTimeOutAway() {
    if (timeoutsAway <= 6) {
        timeoutsAway += 1
        timeoutElA.textContent = timeoutsAway
    }

}

function addFoulAway() {
    foulsAway += 1
    foulElA.textContent = foulsAway
}

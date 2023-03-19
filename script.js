const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');


playButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);

let startTime;
let elapseTime = 0;
let timeInterval    


function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMs = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}:${formattedMs}`
}

function showButton(buttonKey) {
    const buttonToShow = buttonKey === 'play' ? playButton : pauseButton;
    const buttonToHide = buttonKey === 'play' ? pauseButton :playButton;
    buttonToShow.style.display = 'block'
    buttonToHide.style.display = 'none'
}

function print(txt) {
    document.getElementById('display').innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapseTime;
    timeInterval = setInterval(function printTime() {
        elapseTime = Date.now() - startTime;
        print(timeToString(elapseTime));
    }, 10);
    showButton('pause');
}

function pause() {
    clearInterval(timeInterval)
    showButton('play');
}

function reset() {
    clearInterval(timeInterval);
    print('00:00:00');
    elapseTime= 0;
    showButton('play');
}
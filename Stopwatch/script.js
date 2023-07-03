var ms = 0, s = 0, m = 0, h = 0
var timer

var display = document.querySelector('.timer-display')
var laps = document.querySelector('.laps')
function start() {
    if (!timer) {
        timer = setInterval(run, 10)
        // document.getElementById('startTimer').style.background = '#4ad2eb'
        // document.getElementById('pauseTimer').style.background = 'white'
        // document.getElementById('resetTimer').style.background = 'white'
        // document.getElementById('restartTimer').style.background = 'white'
        // document.getElementById('laps').style.background = 'white'
        // document.getElementById('resetLaps').style.background = 'white'
    }
}
function run() {
    display.innerHTML = getTimer()
    ms++
    if (ms == 100) {
        ms = 0
        s++
    }
    if (s == 60) {
        s = 0
        m++
    }
    if (m == 60) {
        m = 0;
        h++;
    }
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

function pause() {
    stopTimer()
    // document.getElementById('startTimer').style.background = 'white'
    // document.getElementById('pauseTimer').style.background = '#4ad2eb'
    // document.getElementById('resetTimer').style.background = 'white'
    // document.getElementById('restartTimer').style.background = 'white'
    // document.getElementById('laps').style.background = 'white'
    // document.getElementById('resetLaps').style.background = 'white'
}

function stopTimer() {
    clearInterval(timer)
    timer = false;
}
function reset() {
    stopTimer()
    ms = 0;
    s = 0;
    h = 0;
    m = 0;
    display.innerHTML = getTimer()
    // document.getElementById('startTimer').style.background = 'white'
    // document.getElementById('pauseTimer').style.background = 'white'
    // document.getElementById('resetTimer').style.background = '#4ad2eb'
    // document.getElementById('restartTimer').style.background = 'white'
    // document.getElementById('laps').style.background = 'white'
    // document.getElementById('resetLaps').style.background = 'white'
}

function restart() {
    if (timer) {
        reset()
        start()
        // document.getElementById('startTimer').style.background = 'white'
        // document.getElementById('pauseTimer').style.background = 'white'
        // document.getElementById('resetTimer').style.background = 'white'
        // document.getElementById('restartTimer').style.background = '#4ad2eb'
        // document.getElementById('laps').style.background = 'white'
        // document.getElementById('resetLaps').style.background = 'white'
    }
}

function lap() {
    if (timer) {
        var li = document.createElement('li')
        li.innerHTML = getTimer()
        laps.appendChild(li)
        li.style.background = "rgba(255, 255, 255, 0.13)";
        li.style.width = "50%"
        li.style.textAlign = "center"
        li.style.border = "1px solid black"
        // document.getElementById('startTimer').style.background = 'white'
        // document.getElementById('pauseTimer').style.background = 'white'
        // document.getElementById('resetTimer').style.background = 'white'
        // document.getElementById('restartTimer').style.background = 'white'
        // document.getElementById('laps').style.background = '#4ad2eb'
        // document.getElementById('resetLaps').style.background = 'white'
    }
}

function resetlaps() {
    laps.innerHTML = "";
    // document.getElementById('startTimer').style.background = 'white'
    // document.getElementById('pauseTimer').style.background = 'white'
    // document.getElementById('resetTimer').style.background = 'white'
    // document.getElementById('restartTimer').style.background = 'white'
    // document.getElementById('laps').style.background = 'white'
    // document.getElementById('resetLaps').style.background = '#4ad2eb'
}

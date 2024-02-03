const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const sec = document.getElementById("second")
const hr = document.getElementById("hour")
const min = document.getElementById("min");
let interval;

start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)

let seconds = 0;
let mins = 0;
let hours = 0;
let timerRunning = false;


function startTimer(){
    
    if(!timerRunning){

        interval = setInterval(()=>{
        seconds++;
        
        if (seconds > 59) {
            seconds = 0;
            mins++;

            if (mins > 59) {
                mins = 0;
                hours++;
            }
        }
        sec.innerHTML = padZero(seconds);
        min.innerHTML = padZero(mins);
        hr.innerHTML = padZero(hours);
        
    },1000)
    timerRunning = true;
}
        
}


function stopTimer() {
    clearInterval(interval)
    timerRunning = false;
}

function resetTimer(){
    	sec.innerHTML = "00"
        min.innerHTML = "00"
        hr.innerHTML = "00"
        seconds = 0;
        mins = 0;
        hours = 0;
        timerRunning = false;
        clearInterval(interval)
}


function padZero(value) {
    return value <= 9 ? "0" + value : value;
}
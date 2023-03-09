// function stopwatch(){
//     seconds++;
// if(seconds==60)
// seconds=0;
// minutes++;
// if(minutes==60)
// minutes=0;
// hours++;
// }
var msec = document.getElementById('msec')
var sec = document.getElementById('sec')
var min = document.getElementById('min')

var milisec = 0
var seconds = 0
var minutes = 0
var interval;
function started() {

     interval = setInterval(function () {
        milisec++
        msec.innerHTML = milisec
        if (milisec >= 100) {
            seconds++
            sec.innerHTML = seconds
            milisec = 0
        }
        else if (seconds >= 30) {
            minutes++
            min.innerHTML = minutes
            seconds = 0
        }
    }, 10)
}
document.getElementById('btn2')=true
function stoped(){
    clearInterval(interval)
    document.getElementById('btn1')=true
}
function reset(){
    clearInterval(interval)
    milisec= 0
    seconds= 0
    minutes= 0
    msec.innerHTML= milisec
    mininnerHTML=minutes
    sec.innerHTML=seconds


}
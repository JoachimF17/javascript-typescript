console.log('exo10.js');

var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var resetButton = document.getElementById('reset');
var running = false;
var hh = 0;
var mm = 0;
var ss = 0;
var run;

var chrono = () => 
{
    let div = document.getElementById("chrono");

    if(ss < 59)
    {
        ss++;
    }else
    {
        ss = 0;
        if(mm < 60)
        {
            mm++;
        }else
        {
            mm = 0;
            hh++;
        }
    }

    if(hh<10)
        div.innerText = '0'+hh+':';
    else
        div.innerText = hh+':';

    if(mm<10)
        div.innerText += '0'+mm+':';
    else
        div.innerText += mm+':';

    if(ss<10)
        div.innerText += '0'+ss;
    else
        div.innerText += ss;

}

var start = () => 
{
    if(!running)
    {
        run = setInterval(chrono, 1000);
        running = true;
    }
}

var pause = () => 
{
    if(running)
    {
        clearInterval(run);
        running = false;
    }
}

var reset = () =>
{
    if(!running)
    {
        let div = document.getElementById("chrono");

        div.innerText = '00:00:00';

        hh = 0;
        mm = 0;
        ss = 0;
    }
}

startButton.onclick = start;
pauseButton.onclick = pause;
resetButton.onclick = reset;
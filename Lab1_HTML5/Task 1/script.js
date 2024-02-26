let video = document.getElementById('vid');
let playPauseBtn = document.getElementById('play');
let stopBtn = document.getElementById('stop');
let volumeSlider = document.getElementById('volumeSlider');
let forwardBtn = document.getElementById('forward');
let nextBtn = document.getElementById('next');
let backwardBtn = document.getElementById('back');
let prevBtn = document.getElementById('prev');

let playSlider = document.getElementById('playSlider');
let playValue = document.getElementById('playValue');

let muteBtn = document.getElementById('mute');
let speedSlider = document.getElementById('speedSlider');
let speedValue = document.getElementById('speedValue');

//------------------------------------------ handling play button ----------------------------------------
playPauseBtn.addEventListener('click', function() 
{
    if (video.paused) {
        video.play();
        playPauseBtn.innerText = 'Pause';
    } else {
        video.pause();
        playPauseBtn.innerText = 'Play';
    }
});

//------------------------------------------ handling stop button -----------------------------------------

stopBtn.addEventListener('click', function() 
{
    video.pause();
    video.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

//---------------------------------------- handling back and forward buttons ----------------------------------


nextBtn.addEventListener('click', function() {
    video.currentTime += 4;
});

prevBtn.addEventListener('click', function() {
    video.currentTime -= 4; 
});

forwardBtn.addEventListener('click', function() {
    video.currentTime += 10;
});

backwardBtn.addEventListener('click', function() {
    video.currentTime -= 10; 
});

//---------------------------------------------- video time slider ---------------------------------------

video.addEventListener('timeupdate', function() 
{
    playSlider.value = (video.currentTime / video.duration) * 100;
    playValue.style.display = 'block';
    playValue.innerText = video.currentTime.toFixed(2);
});

playSlider.addEventListener('input', function() 
{
    video.currentTime = (playSlider.value / 100) * video.duration;
});


//------------------------------------------ handling volume slider ----------------------------------------

volumeSlider.addEventListener('input', function() 
{
    // console.log(video.volume);
    video.volume = volumeSlider.value;
});

//------------------------------------------ handling mute button ----------------------------------------

muteBtn.addEventListener('click', function() {
    if (video.muted) 
    {
        video.muted = false;
        muteBtn.innerText = 'Mute';
        volumeSlider.value = 1;
    } else {
        video.muted = true;
        muteBtn.innerText = 'Unmute';
        volumeSlider.value = 0;
    }
});

//------------------------------------------ handling speed slider ----------------------------------------

speedSlider.addEventListener('input', function() 
{
    video.playbackRate = speedSlider.value;
    speedValue.innerText = video.playbackRate;
});

//--------------------------------------------------------------------------------------------------------




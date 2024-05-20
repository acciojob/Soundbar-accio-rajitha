//your JS code here. If required.
let audio = new Audio();

function playSound(soundFile) {
audio.src = soundFile;
audio.play();
}

function stopSound() {
audio.pause();
audio.currentTime = 0;
} 
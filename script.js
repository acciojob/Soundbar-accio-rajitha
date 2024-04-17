//your JS code here. If required.
let audio = null;

function playSound(soundFile) {
  // Stop any currently playing sound
  stopSound();

  // Create new audio element
  audio = new Audio(`sounds/${soundFile}`);
  
  // Play the audio
  audio.play();
}

function stopSound() {
  // If audio is currently playing, stop it
  if (audio !== null) {
    audio.pause();
    audio.currentTime = 0;
  }
}

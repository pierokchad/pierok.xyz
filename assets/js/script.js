const audio = document.getElementById('background-audio');
const button = document.getElementById('mute-button');

audio.volume = 0.005;

function toggleMute() {
    audio.muted = !audio.muted;
    button.innerText = audio.muted ? '[unmute]' : '[mute]';
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

const audio = document.getElementById("audio");
const prev = document.getElementById("prev");
const pause = document.getElementById("pause");
const play = document.getElementById("play");
const again = document.getElementById("again");
const next = document.getElementById("next");
const slider = document.getElementById("progress");
const time = document.getElementById("time");

play.addEventListener("click", function() {
    audio.play();
})

pause.addEventListener("click", function() {
    audio.pause();
})

next.addEventListener("click", function() {
    audio.currentTime = ( audio.currentTime + 10 > audio.duration ) ? audio.duration : audio.currentTime + 10;
})

prev.addEventListener("click", function() {
    audio.currentTime = ( audio.currentTime - 10 < 0) ? 0 : audio.currentTime - 10;
})

again.addEventListener("click", function() {
    audio.currentTime = 0;
})

audio.addEventListener('timeupdate', () => {
    time.innerText = formatTime(audio.currentTime);
    slider.max = audio.duration;
    slider.value = audio.currentTime;
});

slider.addEventListener('input', () => {
    audio.currentTime = slider.value;
});

function formatTime(seconds) {
    seconds = Math.floor(seconds); // убираем дроби
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const m = mins < 10 ? "0" + mins : mins;
    const s = secs < 10 ? "0" + secs : secs;

    return `${m}:${s}`;
}

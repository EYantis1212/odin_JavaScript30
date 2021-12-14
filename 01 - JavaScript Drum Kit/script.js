window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"`);
    const key = document.querySelector(`.key[data-key="${e.key}"`);
    if (!audio) return; // Stop function if key is pressed that has no audio attached
    audio.currentTime = 0; // Resets audio to allow quick repetition
    audio.play();
    key.classList.add("playing");
});
window.addEventListener("keyup", function (e) {
    const key = document.querySelector(`.key[data-key="${e.key}"`);
    key.classList.remove("playing");
});
// (`audio[data-key="${e.key}"]`);

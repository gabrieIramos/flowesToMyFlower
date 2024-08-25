
function Load() {
    var button = document.getElementById('Init');
    button.style.display = 'none';
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        var music = document.getElementById("myAudio");
        console.log(music);
        music.currentTime = 50;
        music.play();
        music.volume = 0.2;
        clearTimeout(c);
    }, 1000);
};
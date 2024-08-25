onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
    var music = document.getElementById("myAudio");
    music.volume = 0.2;
    music.currentTime = 50;
    music.play();

    
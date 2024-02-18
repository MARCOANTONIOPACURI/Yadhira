onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  var audioPlayer = document.getElementById('audioPlayer');

  // Oculta el reproductor de audio
  audioPlayer.style.display = 'none';

  // Reproduce el audio automáticamente
  audioPlayer.play();

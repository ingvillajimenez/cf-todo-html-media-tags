document.getElementById("playPause").addEventListener("click", function () {
  var video = document.getElementById("myVideo");
  if (video.paused) {
    video.play();
    this.textContent = "Pause";
  } else {
    video.pause();
    this.textContent = "Play";
  }
});

document.getElementById("mute").addEventListener("click", function () {
  var video = document.getElementById("myVideo");
  video.muted = !video.muted;
  this.textContent = video.muted ? "Unmute" : "Mute";
});

document.getElementById("volumeControl").addEventListener("input", function () {
  var video = document.getElementById("myVideo");
  video.volume = this.value;
});

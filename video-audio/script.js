const video = document.querySelector("video");

function play() {
  video.play();
}

function pause() {
  video.pause();
  video.currentTime = 0;
}

const playButton = document.querySelector("#playButton");

playButton.addEventListener("click", function (event) {
  play();
});

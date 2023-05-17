const audioPlayer = document.getElementById('audioPlayer');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');
const progressBar = document.getElementById('progressBar');
const trackList = document.querySelectorAll('.track');

let progressInterval;

btnPlay.addEventListener('click', playAudio);
btnPause.addEventListener('click', pauseAudio);
btnStop.addEventListener('click', stopAudio);
audioPlayer.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', setAudioProgress);
trackList.forEach(track => {
  track.addEventListener('click', loadTrack);
});

function playAudio() {
  audioPlayer.play();
  btnPlay.style.display = 'none';
  btnPause.style.display = 'inline-block';
  progressInterval = setInterval(updateProgressBar, 1000);
}

function pauseAudio() {
  audioPlayer.pause();
  btnPause.style.display = 'none';
  btnPlay.style.display = 'inline-block';
  clearInterval(progressInterval);
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  btnPause.style.display = 'none';
  btnPlay.style.display = 'inline-block';
  clearInterval(progressInterval);
  progressBar.style.width = '0%';
}

function updateProgressBar() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  const progressPercentage = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

function setAudioProgress(event) {
  const totalWidth = this.offsetWidth;
  const clickWidth = event.offsetX;
  const duration = audioPlayer.duration;
  audioPlayer.currentTime = (clickWidth / totalWidth) * duration;
}

function loadTrack(event) {
  event.preventDefault();
  const trackSrc = this.getAttribute('data-src');
  audioPlayer.src = trackSrc;
  stopAudio();
  playAudio();
}

// ตัวอย่างการใช้งาน JavaScript
const playButtons = document.querySelectorAll('.play-btn');
playButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    audioPlayer.src = this.dataset.src;
    audioPlayer.play();
  });
});

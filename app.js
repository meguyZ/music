const audioPlayer = document.getElementById("audioPlayer");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");
const progressBar = document.getElementById("progressBar");
const tracks = document.querySelectorAll(".track");

let isPlaying = false;
let progressInterval;

function playAudio() {
    audioPlayer.play();
    isPlaying = true;
    btnPlay.style.display = "none";
    btnPause.style.display = "inline-block";
    progressInterval = setInterval(updateProgressBar, 1000);
}

function pauseAudio() {
    audioPlayer.pause();
    isPlaying = false;
    btnPause.style.display = "none";
    btnPlay.style.display = "inline-block";
    clearInterval(progressInterval);
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaying = false;
    btnPause.style.display = "none";
    btnPlay.style.display = "inline-block";
    clearInterval(progressInterval);
    progressBar.style.width = "0%";
}

function updateProgressBar() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressPercentage = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

btnPlay.addEventListener("click", () => {
    playAudio();
});

btnPause.addEventListener("click", () => {
    pauseAudio();
});

btnStop.addEventListener("click", () => {
    stopAudio();
});

tracks.forEach((track) => {
    track.addEventListener("click", () => {
        const trackSource = track.getAttribute("data-src");
        audioPlayer.src = trackSource;
        stopAudio();
        playAudio();
    });
});
// Get HTML elements
const audioPlayer = document.getElementById('audioPlayer');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');
const progressBar = document.getElementById('progressBar');
const progressBarTrack = document.getElementById('progressBarTrack');
const trackList = document.querySelectorAll('.track');

// Add event listeners
btnPlay.addEventListener('click', playAudio);
btnPause.addEventListener('click', pauseAudio);
btnStop.addEventListener('click', stopAudio);
audioPlayer.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', setAudioProgress);
trackList.forEach(track => {
  track.addEventListener('click', loadTrack);
});

// Define functions
function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  progressBar.style.width = '0%';
}

function updateProgressBar() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  progressBar.style.width = `${(currentTime / duration) * 100}%`;
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
  audioPlayer.load();
  audioPlayer.play();
}

// Initialize audio player
audioPlayer.load();
<!-- ตัวอย่างการใช้งาน JavaScript -->
<script>
    // เลือกทุกปุ่ม Play และเพิ่มอีเวนต์คลิก
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // หาตัวเล่นเพลง
            const audioPlayer = document.getElementById('audioPlayer');
            // อัปเดต URL ของไฟล์เพลงที่จะเล่น
            audioPlayer.src = this.dataset.src;
            // เล่นเพลง
            audioPlayer.play();
        });
    });
</script>
var audio = document.getElementById("audioPlayer");
audio.pause();
audio.currentTime = 0;

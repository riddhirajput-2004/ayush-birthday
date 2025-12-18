document.addEventListener("DOMContentLoaded", function () {

  // MUSIC
  const musicBtn = document.getElementById("musicBtn");
  const music = new Audio("music/palpal.mpeg");
  music.loop = true;

  if (musicBtn) {
    musicBtn.addEventListener("click", () => {
      if (music.paused) {
        music.play();
        musicBtn.innerText = "⏸️";
      } else {
        music.pause();
        musicBtn.innerText = "🎵";
      }
    });
  }

  // LOVE LETTERS
  const loveBtn = document.getElementById("loveBtn");
  if (loveBtn) {
    loveBtn.addEventListener("click", () => {
      window.location.href = "love-letters.html";
    });
  }

  // MEMORY LANE
  const memoryBtn = document.getElementById("memoryBtn");
  if (memoryBtn) {
    memoryBtn.addEventListener("click", () => {
      window.location.href = "memory-lane.html";
    });
  }

});

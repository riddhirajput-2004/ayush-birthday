// Music Toggle
const music = document.getElementById("bgMusic");

function toggleMusic(){
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}

// Auto floating hearts (extra)
const heartContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = Math.random() > 0.5 ? "💜" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.position = "absolute";
  heart.style.bottom = "-10px";
  heart.style.fontSize = "20px";
  heart.style.animation = "float 6s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 800);

// Soft welcome effect
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".card").style.boxShadow =
      "0 20px 50px rgba(160,120,255,0.4)";
  }, 800);
};
// Confetti blast
function confettiBlast(){
  for(let i=0;i<80;i++){
    const conf = document.createElement("div");
    conf.innerHTML = "🎉";
    conf.style.position = "fixed";
    conf.style.left = Math.random()*100 + "vw";
    conf.style.top = "-20px";
    conf.style.fontSize = "20px";
    conf.style.animation = "confettiFall 3s linear";
    document.body.appendChild(conf);

    setTimeout(()=>conf.remove(),3000);
  }
}

window.addEventListener("load", confettiBlast);

// Birthday countdown to Dec 21
const countdownText = document.getElementById("countdownText");
const birthday = new Date("Dec 21, 2025 00:00:00").getTime();

function updateCountdown(){
  const now = new Date().getTime();
  const diff = birthday - now;

  if(diff<=0){
    countdownText.innerHTML = "🎉 जन्मदिन मुबारक हो Ayush! 💜";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60))/(1000*60));
  const seconds = Math.floor((diff % (1000*60))/1000);

  countdownText.innerHTML = 🥳 ${days} दिन ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड बाकी 💜;
}

const countdownInterval = setInterval(updateCountdown,1000);
updateCountdown();
// Auto-typed love letter
const letter = "Ayush 💜 tum meri zindagi ka sabse pyara hissa ho… 🥹";
let index = 0;
const typedLetter = document.getElementById("typedLetter");

function typeLetter(){
  if(index < letter.length){
    typedLetter.innerHTML += letter.charAt(index);
    index++;
    setTimeout(typeLetter,70);
  }
}
window.addEventListener("load", typeLetter);
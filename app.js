const moods = ["😴 안정", "🙂 보통", "🔥 상승"];

function generate() {
  const seed = Math.floor(Math.random() * 3);
  const result = moods[seed];

  document.getElementById("result").innerText =
    "오늘의 상태: " + result;

  if (navigator.vibrate) navigator.vibrate(30);
}

// PWA install
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById("installBtn");
  btn.style.display = "inline-block";

  btn.onclick = async () => {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    btn.style.display = "none";
  };
});
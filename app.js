const oracleBtn = document.getElementById("oracleBtn");
const oracleCard = document.getElementById("oracleCard");
const cardName = document.getElementById("cardName");
const oracleMessage = document.getElementById("oracleMessage");
const rarityBox = document.getElementById("rarity");

/* SOUND */
const clickSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
);

/* ORACLE DATA */
const oracles = [
  { name: "VOID", message: "침묵 속에서 새로운 문이 열린다.", rarity: "COMMON" },
  { name: "SIGNAL", message: "반복되는 우연은 신호다.", rarity: "COMMON" },
  { name: "ECLIPSE", message: "숨겨진 진실이 드러난다.", rarity: "RARE" },
  { name: "CHAOS", message: "혼란은 재구성이다.", rarity: "RARE" },
  { name: "MIRROR", message: "당신은 당신을 마주한다.", rarity: "RARE" },
  { name: "OMEGA SEED", message: "선택은 이미 끝났다.", rarity: "LEGENDARY" }
];

/* TYPE EFFECT */
function typeText(el, text, speed = 35) {
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* MATRIX FIXED (PC + DPR + SMOOTH) */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  const dpr = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resize();
window.addEventListener("resize", resize);

const letters = "NEONORACLE01<>[]{}#$%&";
const fontSize = 16;

let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {

  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {

    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

/* CLICK EVENT */
oracleBtn.addEventListener("click", () => {

  clickSound.currentTime = 0;
  clickSound.play();

  document.body.classList.add("glitch");
  setTimeout(() => document.body.classList.remove("glitch"), 200);

  oracleCard.classList.remove("hidden");

  cardName.textContent = "ANALYZING...";
  oracleMessage.textContent = "SCANNING FUTURE STREAM...";
  rarityBox.textContent = "";

  setTimeout(() => {

    const data = oracles[Math.floor(Math.random() * oracles.length)];

    cardName.textContent = data.name;
    rarityBox.textContent = "RARITY: " + data.rarity;

    if (data.rarity === "LEGENDARY") {
      rarityBox.style.color = "#ff00ff";
      cardName.style.color = "#ff00ff";
    } else if (data.rarity === "RARE") {
      rarityBox.style.color = "#00ffff";
      cardName.style.color = "#00ffff";
    } else {
      rarityBox.style.color = "#888";
      cardName.style.color = "#0ff";
    }

    typeText(oracleMessage, data.message);

  }, 1200);

});
const oracleBtn = document.getElementById("oracleBtn");
const oracleCard = document.getElementById("oracleCard");
const cardName = document.getElementById("cardName");
const oracleMessage = document.getElementById("oracleMessage");
const rarityBox = document.getElementById("rarity");
const energyEl = document.getElementById("energy");

const clickSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");

let energy = parseInt(localStorage.getItem("energy") || "0");
let corruption = parseInt(localStorage.getItem("corruption") || "0");

const oracles = [
  { name: "VOID CORE", message: "존재하지 않는 것에서 모든 것이 시작된다.", rarity: "COMMON" },
  { name: "SIGNAL LOOP", message: "반복은 미래의 언어다.", rarity: "COMMON" },
  { name: "ECLIPSE MEMORY", message: "숨겨진 기억이 현실을 재구성한다.", rarity: "RARE" },
  { name: "CHAOS ENGINE", message: "혼돈은 가장 정밀한 시스템이다.", rarity: "RARE" },
  { name: "MIRROR GOD", message: "당신은 관찰되는 순간 변화한다.", rarity: "RARE" },
  { name: "OMEGA SEED", message: "이 선택은 이미 모든 시간을 결정했다.", rarity: "LEGENDARY" }
];

/* TYPE EFFECT */
function typeText(el, text, speed = 30) {
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* MATRIX BACKGROUND */
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
  ctx.fillStyle = "rgba(0,0,0,0.07)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.98) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 30);

/* ENERGY SYSTEM */
function updateEnergy() {
  energy += 8;

  if (energy > 100) energy = 100;

  localStorage.setItem("energy", energy);
  energyEl.textContent = energy;

  if (energy === 100) {
    oracleMessage.textContent = "FULL ORACLE POWER ACTIVATED";
    cardName.textContent = "SYSTEM UNLOCKED";
    cardName.style.color = "#ff00ff";
  }
}

/* CORRUPTION SYSTEM */
function updateCorruption() {
  corruption += 10;

  if (corruption >= 100) {
    oracleMessage.textContent = "SYSTEM OVERFLOW... REALITY IS UNSTABLE.";
    document.body.style.background = "#110011";
    corruption = 0;
  }

  localStorage.setItem("corruption", corruption);
}

/* INITIAL UI */
energyEl.textContent = energy;

/* CLICK EVENT */
oracleBtn.addEventListener("click", () => {

  clickSound.currentTime = 0;
  clickSound.play();

  document.body.classList.add("glitch");
  setTimeout(() => document.body.classList.remove("glitch"), 200);

  updateEnergy();
  updateCorruption();

  oracleCard.classList.remove("hidden");

  cardName.textContent = "ANALYZING REALITY...";
  oracleMessage.textContent = "SCANNING DIMENSIONAL SIGNAL...";

  setTimeout(() => {

    const data = oracles[Math.floor(Math.random() * oracles.length)];

    cardName.textContent = data.name;
    rarityBox.textContent = "RARITY: " + data.rarity;

    if (data.rarity === "LEGENDARY") {
      rarityBox.style.color = "#ff00ff";
      cardName.style.color = "#ff00ff";

      document.body.style.animation = "glitch 0.3s";
      setTimeout(() => document.body.style.animation = "", 300);

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
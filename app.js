const oracleBtn = document.getElementById("oracleBtn");
const oracleCard = document.getElementById("oracleCard");
const cardName = document.getElementById("cardName");
const oracleMessage = document.getElementById("oracleMessage");
const rarityBox = document.getElementById("rarity");
const energyEl = document.getElementById("energy");

const clickSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");

let gameEnded = false;

/* ✔ 최초 방문 초기화 (중요) */
if (!localStorage.getItem("init")) {
  localStorage.setItem("energy", "0");
  localStorage.setItem("corruption", "0");
  localStorage.setItem("init", "true");
}

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
function typeText(el, text, speed = 25) {
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* MATRIX */
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

/* SAVE */
function save() {
  localStorage.setItem("energy", energy);
  localStorage.setItem("corruption", corruption);
}

/* RESET */
function resetGame() {
  localStorage.clear();
  location.reload();
}
window.resetGame = resetGame;

/* ENDING */
function showEnding(text) {
  gameEnded = true;

  oracleCard.classList.remove("hidden");

  cardName.textContent = "END OF SYSTEM";
  oracleMessage.textContent = text;

  rarityBox.textContent = "";

  document.body.style.background = "#000";
  document.body.style.color = "#ff00ff";

  oracleBtn.disabled = true;
}

/* UPDATE SYSTEM (BALANCED) */
function updateStats() {

  if (gameEnded) return;

  /* ✔ 훨씬 느린 성장 */
  energy += Math.floor(Math.random() * 3) + 1;      // 1~3
  corruption += Math.floor(Math.random() * 2);      // 0~1

  if (energy > 100) energy = 100;
  if (corruption > 100) corruption = 100;

  save();

  energyEl.textContent = energy;

  /* ✔ 엔딩 안정화 */
  if (energy >= 100) {
    showEnding("SYSTEM COMPLETE: ORACLE AWAKENED");
    return;
  }

  if (corruption >= 100) {
    showEnding("BAD ENDING: REALITY COLLAPSED");
    return;
  }
}

/* CLICK */
oracleBtn.addEventListener("click", () => {

  if (gameEnded) return;

  clickSound.currentTime = 0;
  clickSound.play();

  document.body.classList.add("glitch");
  setTimeout(() => document.body.classList.remove("glitch"), 200);

  updateStats();

  if (gameEnded) return;

  oracleCard.classList.remove("hidden");

  cardName.textContent = "PROCESSING...";
  oracleMessage.textContent = "ACCESSING SIGNAL...";

  setTimeout(() => {

    const data = oracles[Math.floor(Math.random() * oracles.length)];

    cardName.textContent = data.name;
    rarityBox.textContent = "RARITY: " + data.rarity;

    if (data.rarity === "LEGENDARY") {
      cardName.style.color = "#ff00ff";
      rarityBox.style.color = "#ff00ff";
    } else if (data.rarity === "RARE") {
      cardName.style.color = "#00ffff";
      rarityBox.style.color = "#00ffff";
    } else {
      cardName.style.color = "#0ff";
      rarityBox.style.color = "#888";
    }

    typeText(oracleMessage, data.message);

  }, 1000);

});
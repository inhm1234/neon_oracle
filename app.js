const oracleBtn = document.getElementById("oracleBtn");
const oracleCard = document.getElementById("oracleCard");
const cardName = document.getElementById("cardName");
const oracleMessage = document.getElementById("oracleMessage");
const rarityBox = document.getElementById("rarity");
const energyEl = document.getElementById("energy");
const corruptionEl = document.getElementById("corruption");
const statusText = document.getElementById("statusText");
const cardCode = document.getElementById("cardCode");
const hiddenMessage = document.getElementById("hiddenMessage");
const systemLog = document.getElementById("systemLog");
const screenFlash = document.getElementById("screenFlash");
const legendaryGate = document.getElementById("legendaryGate");
const legendaryGateTitle = document.getElementById("legendaryGateTitle");
const legendaryGateText = document.getElementById("legendaryGateText");

const clickSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");

let gameEnded = false;
let busy = false;
let typingInterval = null;
let audioContext = null;

legendaryGate.classList.add("hidden");
legendaryGate.classList.remove("show");
legendaryGate.style.display = "none";

if (!localStorage.getItem("init")) {
  localStorage.setItem("energy", "0");
  localStorage.setItem("corruption", "0");
  localStorage.setItem("init", "true");
}

let energy = Number(localStorage.getItem("energy") || 0);
let corruption = Number(localStorage.getItem("corruption") || 0);

function syncUI() {
  energyEl.textContent = energy;
  corruptionEl.textContent = corruption;
}

function saveState() {
  localStorage.setItem("energy", energy);
  localStorage.setItem("corruption", corruption);
  syncUI();
}

const oracles = [
  {
    name: "VOID CORE",
    message: "존재하지 않는 것에서 모든 것이 시작된다.",
    rarity: "COMMON",
    symbol: "∅",
    keyword: "EMPTY SIGNAL"
  },
  {
    name: "SIGNAL LOOP",
    message: "반복은 미래의 언어다.",
    rarity: "COMMON",
    symbol: "⌁",
    keyword: "REPEATED SIGNAL"
  },
  {
    name: "ECLIPSE MEMORY",
    message: "숨겨진 기억이 현실을 재구성한다.",
    rarity: "RARE",
    symbol: "◐",
    keyword: "HIDDEN MEMORY"
  },
  {
    name: "CHAOS ENGINE",
    message: "혼돈은 가장 정밀한 시스템이다.",
    rarity: "RARE",
    symbol: "✦",
    keyword: "CHAOS PATTERN"
  },
  {
    name: "MIRROR GOD",
    message: "당신은 관찰되는 순간 변화한다.",
    rarity: "RARE",
    symbol: "◇",
    keyword: "MIRROR OBSERVER"
  },
  {
    name: "OMEGA SEED",
    message: "이 선택은 이미 모든 시간을 결정했다.",
    rarity: "LEGENDARY",
    symbol: "Ω",
    keyword: "OMEGA PROTOCOL"
  }
];

const scanTexts = [
  "ANALYZING REALITY LAYER...",
  "SCANNING MEMORY SIGNAL...",
  "DECODING ORACLE PATTERN...",
  "CONNECTING HIDDEN TIMELINE...",
  "CHECKING NEON FREQUENCY..."
];

const messageAddons = [
  "지금 필요한 것은 완벽한 확신이 아니라 다음 버튼을 누르는 용기다.",
  "작은 신호를 무시하지 않으면, 흐름은 예상보다 빠르게 바뀐다.",
  "결과보다 중요한 것은 지금 감지한 방향을 놓치지 않는 것이다.",
  "혼란은 실패가 아니라 아직 정렬되지 않은 데이터다.",
  "이미 알고 있었지만 미뤄둔 선택이 다시 화면 위로 떠오른다."
];

const legendaryHiddenMessages = [
  "HIDDEN MESSAGE: 끝이라고 생각한 지점에 첫 번째 씨앗이 남아 있다.",
  "HIDDEN MESSAGE: 오라클은 당신이 망설인 선택을 가장 강한 신호로 기록했다.",
  "HIDDEN MESSAGE: OMEGA SEED는 실패한 경로에서만 발아한다.",
  "HIDDEN MESSAGE: 반복해서 떠오르는 생각은 오류가 아니라 좌표다.",
  "HIDDEN MESSAGE: 이 신호는 우연이 아니다. 다음 입력을 시작하라."
];

const legendaryGateMessages = [
  "OMEGA CHANNEL OPEN / REALITY OVERRIDE ACCEPTED",
  "DEEP ORACLE CORE RESPONDING / HIDDEN PROPHECY UNLOCKED",
  "LEGENDARY TIMELINE BREACH / SEED SIGNAL CONFIRMED",
  "SYSTEM WARNING / IMPOSSIBLE RESULT DETECTED"
];

const systemLogs = [
  "SIGNAL STABLE",
  "REALITY NOISE DETECTED",
  "MEMORY ECHO FOUND",
  "TIMELINE RESPONSE ACCEPTED",
  "ORACLE CORE SYNCHRONIZED"
];

function typeText(el, text, speed = 25) {
  clearTyping();

  el.textContent = "";
  let i = 0;

  typingInterval = setInterval(() => {
    el.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearTyping();
    }
  }, speed);
}

function clearTyping() {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createCode(data) {
  const rarityKey = data.rarity[0];
  const number = Math.floor(1000 + Math.random() * 9000);
  return `#${rarityKey}-${number}`;
}

function drawOracle() {
  const roll = Math.random() * 100;

  let targetRarity = "COMMON";

  if (roll >= 88) {
    targetRarity = "LEGENDARY";
  } else if (roll >= 55) {
    targetRarity = "RARE";
  }

  const pool = oracles.filter((item) => item.rarity === targetRarity);
  return randomItem(pool);
}

function buildMessage(data) {
  const addon = randomItem(messageAddons);

  if (data.rarity === "LEGENDARY") {
    return `${data.message} 오라클의 심층 회로가 열렸고, 숨겨진 예언이 현재 세계선에 직접 연결되었다. ${addon}`;
  }

  if (data.rarity === "RARE") {
    return `${data.message} 일반 신호보다 강한 왜곡이 감지되었다. ${addon}`;
  }

  return `${data.message} ${addon}`;
}

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playTone(frequency, duration, volume, type = "sine", delay = 0) {
  try {
    const ctx = getAudioContext();

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + delay);

    gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + delay + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(ctx.currentTime + delay);
    oscillator.stop(ctx.currentTime + delay + duration + 0.05);
  } catch (error) {
    console.log("Audio blocked");
  }
}

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});

  playTone(620, 0.08, 0.05, "square", 0);
  playTone(920, 0.1, 0.04, "sine", 0.06);
}

function playLegendarySound() {
  playTone(130, 0.48, 0.18, "sawtooth", 0);
  playTone(260, 0.42, 0.14, "triangle", 0.05);
  playTone(520, 0.35, 0.1, "sine", 0.13);
  playTone(1040, 0.3, 0.08, "square", 0.22);
  playTone(1560, 0.26, 0.06, "sine", 0.32);
}

function flashScreen() {
  screenFlash.classList.remove("flash");
  void screenFlash.offsetWidth;
  screenFlash.classList.add("flash");

  setTimeout(() => {
    screenFlash.classList.remove("flash");
  }, 950);
}

function openLegendaryGate(data) {
  legendaryGateTitle.textContent = "ORACLE BREACH";
  legendaryGateText.textContent = randomItem(legendaryGateMessages);

  legendaryGate.classList.remove("hidden");
  legendaryGate.classList.add("show");
  legendaryGate.style.display = "flex";
}

function closeLegendaryGate() {
  legendaryGate.classList.add("hidden");
  legendaryGate.classList.remove("show");
  legendaryGate.style.display = "none";
}

function triggerLegendaryEvent(data, hiddenText) {
  playLegendarySound();

  document.body.classList.add("legendary-mode", "deep-glitch");

  openLegendaryGate(data);

  flashScreen();

  setTimeout(() => {
    document.body.classList.remove("deep-glitch");
  }, 700);

  setTimeout(() => {
    document.body.classList.remove("legendary-mode");
    closeLegendaryGate();
    legendaryGateText.textContent = hiddenText;
  }, 2500);
}

function updateStats() {
  if (gameEnded) return;

  energy += Math.floor(Math.random() * 2) + 1;
  corruption += Math.floor(Math.random() * 2);

  if (energy > 100) energy = 100;
  if (corruption > 100) corruption = 100;

  saveState();

  if (energy >= 100) {
    showEnding("SYSTEM COMPLETE: ORACLE AWAKENED");
    return;
  }

  if (corruption >= 100) {
    showEnding("BAD ENDING: REALITY COLLAPSED");
    return;
  }
}

function showEnding(text) {
  gameEnded = true;
  busy = false;

  clearTyping();
  closeLegendaryGate();

  oracleCard.className = "oracle-card legendary";
  oracleCard.classList.remove("hidden");

  cardName.textContent = "END OF SYSTEM";
  rarityBox.textContent = "";
  cardCode.textContent = "#END-0000";
  oracleMessage.textContent = text;
  hiddenMessage.textContent = "THE ORACLE HAS CLOSED THIS REALITY.";
  systemLog.textContent = "FINAL LOG: CONNECTION TERMINATED";

  statusText.textContent = "SYSTEM LOCKED";

  document.body.classList.add("legendary-mode");
  document.body.style.background = "#000";
  document.body.style.color = "#ff00ff";

  oracleBtn.disabled = true;
}

async function activateOracle() {
  if (gameEnded || busy) return;

  busy = true;
  oracleBtn.disabled = true;

  clearTyping();
  closeLegendaryGate();

  playClickSound();

  document.body.classList.add("glitch", "scanning");
  statusText.textContent = "ANALYZING...";

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 220);

  oracleCard.classList.remove("hidden");
  oracleCard.className = "oracle-card";

  cardName.textContent = "PROCESSING...";
  rarityBox.textContent = "RARITY: UNKNOWN";
  cardCode.textContent = "#----";
  oracleMessage.textContent = "ACCESSING SIGNAL...";
  hiddenMessage.textContent = "";
  systemLog.textContent = randomItem(scanTexts);

  await wait(500);
  statusText.textContent = randomItem(scanTexts);

  await wait(450);
  updateStats();

  if (gameEnded) return;

  await wait(450);

  const data = drawOracle();
  const finalMessage = buildMessage(data);
  const code = createCode(data);
  const hiddenText = data.rarity === "LEGENDARY" ? randomItem(legendaryHiddenMessages) : "";

  if (data.rarity === "LEGENDARY") {
    statusText.textContent = "LEGENDARY SIGNAL DETECTED";
    triggerLegendaryEvent(data, hiddenText);
    await wait(900);
  } else if (data.rarity === "RARE") {
    flashScreen();
    statusText.textContent = "RARE SIGNAL DETECTED";
    await wait(300);
  } else {
    statusText.textContent = "SIGNAL LOCKED";
  }

  oracleCard.className = `oracle-card ${data.rarity.toLowerCase()}`;
  oracleCard.classList.remove("hidden");

  cardName.textContent = `${data.symbol} ${data.name}`;
  rarityBox.textContent = `RARITY: ${data.rarity}`;
  cardCode.textContent = code;
  hiddenMessage.textContent = hiddenText;

  systemLog.textContent = `SYSTEM LOG: ${randomItem(systemLogs)} / ${data.keyword} / ENERGY ${energy}% / CORRUPTION ${corruption}%`;

  if (data.rarity === "LEGENDARY") {
    typeText(oracleMessage, finalMessage, 18);
  } else {
    typeText(oracleMessage, finalMessage, 25);
  }

  await wait(900);

  document.body.classList.remove("scanning");

  if (data.rarity === "LEGENDARY") {
    statusText.textContent = "OMEGA RESULT LOCKED";
  } else {
    statusText.textContent = "RESULT LOCKED";
  }

  oracleBtn.disabled = false;
  busy = false;
}

oracleBtn.addEventListener("click", activateOracle);

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "NEONORACLE01<>[]{}#$%&VOIDCHAOSMIRROROMEGASEED";
const fontSize = 16;

let columns = 0;
let drops = [];

function resize() {
  const dpr = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  columns = Math.floor(window.innerWidth / fontSize);
  drops = Array(columns).fill(1);
}

resize();
window.addEventListener("resize", resize);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.07)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  const legendaryMode = document.body.classList.contains("legendary-mode");

  ctx.fillStyle = legendaryMode ? "#ffd84d" : "#00ffff";
  ctx.font = fontSize + "px monospace";
  ctx.shadowBlur = legendaryMode ? 16 : 8;
  ctx.shadowColor = legendaryMode ? "#ff00ff" : "#00ffff";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.98) {
      drops[i] = 0;
    }

    drops[i] += legendaryMode ? 1.7 : 1;
  }

  requestAnimationFrame(drawMatrix);
}

drawMatrix();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service_worker.js?v=64").catch(() => {});
  });
}

syncUI();
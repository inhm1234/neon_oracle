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
    name: "고요한 공백",
    message: "아직 채워지지 않은 자리가 오늘의 가능성이 됩니다.",
    rarity: "COMMON",
    symbol: "∅",
    keyword: "EMPTY SIGNAL"
  },
  {
    name: "반복되는 신호",
    message: "자꾸 반복해서 떠오르는 생각 안에 작은 힌트가 있습니다.",
    rarity: "COMMON",
    symbol: "⌁",
    keyword: "REPEATED SIGNAL"
  },
  {
    name: "가려진 기억",
    message: "잊고 있던 경험 하나가 지금의 선택을 조용히 도와줍니다.",
    rarity: "RARE",
    symbol: "◐",
    keyword: "HIDDEN MEMORY"
  },
  {
    name: "혼돈의 흐름",
    message: "정리되지 않은 상황 속에서도 방향은 천천히 만들어지고 있습니다.",
    rarity: "RARE",
    symbol: "✦",
    keyword: "CHAOS PATTERN"
  },
  {
    name: "거울의 시선",
    message: "오늘의 답은 바깥보다 당신의 반응 안에서 더 선명하게 보입니다.",
    rarity: "RARE",
    symbol: "◇",
    keyword: "MIRROR OBSERVER"
  },
  {
    name: "오메가 씨앗",
    message: "끝이라고 생각한 곳에서 새로운 시작의 씨앗이 깨어납니다.",
    rarity: "LEGENDARY",
    symbol: "Ω",
    keyword: "OMEGA PROTOCOL"
  }
];

const scanTexts = [
  "오늘의 운세 신호를 읽는 중...",
  "마음의 흐름을 조용히 분석하는 중...",
  "작은 가능성을 정렬하는 중...",
  "숨겨진 선택지를 확인하는 중...",
  "오늘의 방향을 해석하는 중..."
];

const messageAddons = [
  "지금은 완벽한 확신보다 작은 시작이 더 잘 맞는 날입니다.",
  "너무 멀리 보려 하기보다, 오늘 할 수 있는 한 가지에 집중해보세요.",
  "작은 신호를 무시하지 않으면 흐름은 생각보다 부드럽게 바뀔 수 있습니다.",
  "불안한 마음이 있어도 천천히 정리하면 방향은 다시 보입니다.",
  "이미 알고 있었지만 미뤄둔 선택이 오늘 다시 떠오를 수 있습니다."
];

const legendaryHiddenMessages = [
  "숨겨진 메시지: 끝이라고 생각한 지점에 첫 번째 씨앗이 남아 있습니다.",
  "숨겨진 메시지: 망설였던 선택이 오히려 가장 강한 신호일 수 있습니다.",
  "숨겨진 메시지: 오메가 씨앗은 실패한 경로에서도 조용히 자랍니다.",
  "숨겨진 메시지: 반복해서 떠오르는 생각은 단순한 우연이 아닐 수 있습니다.",
  "숨겨진 메시지: 오늘은 결과보다 다시 시작하는 마음이 더 중요합니다."
];

const legendaryGateMessages = [
  "특별 운세 채널 연결 중",
  "깊은 오라클 신호 응답 중",
  "희귀한 가능성의 흐름 감지",
  "오늘의 숨겨진 메시지 해석 중"
];

const systemLogs = [
  "SIGNAL STABLE",
  "SOFT NOISE DETECTED",
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
    return `${data.message} 오늘은 평소보다 깊은 신호가 열렸습니다. 오래 미뤄둔 마음이나 선택지를 조용히 다시 바라봐도 좋은 흐름입니다. ${addon}`;
  }

  if (data.rarity === "RARE") {
    return `${data.message} 평소보다 조금 더 강한 변화의 흐름이 감지됩니다. ${addon}`;
  }

  return `${data.message} ${addon}`;
}

function getRarityKorean(rarity) {
  if (rarity === "LEGENDARY") return "특별";
  if (rarity === "RARE") return "희귀";
  return "일반";
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
  clickSound.volume = 0.22;
  clickSound.play().catch(() => {});

  playTone(520, 0.08, 0.025, "sine", 0);
  playTone(760, 0.12, 0.02, "triangle", 0.07);
}

function playLegendarySound() {
  playTone(180, 0.42, 0.08, "triangle", 0);
  playTone(360, 0.36, 0.06, "sine", 0.08);
  playTone(720, 0.3, 0.045, "triangle", 0.18);
  playTone(1080, 0.28, 0.035, "sine", 0.3);
}

function flashScreen() {
  screenFlash.classList.remove("flash");
  void screenFlash.offsetWidth;
  screenFlash.classList.add("flash");

  setTimeout(() => {
    screenFlash.classList.remove("flash");
  }, 950);
}

function openLegendaryGate() {
  legendaryGateTitle.textContent = "특별한 신호";
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

function triggerLegendaryEvent() {
  playLegendarySound();

  document.body.classList.add("legendary-mode", "deep-glitch");

  openLegendaryGate();

  flashScreen();

  setTimeout(() => {
    document.body.classList.remove("deep-glitch");
  }, 620);

  setTimeout(() => {
    document.body.classList.remove("legendary-mode");
    closeLegendaryGate();
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
    showEnding("운세 에너지가 가득 찼습니다. 오늘의 오라클이 완전히 깨어났습니다.");
    return;
  }

  if (corruption >= 100) {
    showEnding("현실 노이즈가 가득 찼습니다. 오늘은 잠시 쉬어가는 흐름이 좋겠습니다.");
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

  cardName.textContent = "오늘의 흐름 종료";
  rarityBox.textContent = "";
  cardCode.textContent = "#END-0000";
  oracleMessage.textContent = text;
  hiddenMessage.textContent = "오늘의 운세 채널이 조용히 닫혔습니다.";
  systemLog.textContent = "FINAL LOG: CONNECTION CLOSED";

  statusText.textContent = "오늘의 해석 완료";

  document.body.classList.add("legendary-mode");

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
  statusText.textContent = "분석 중...";

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 220);

  oracleCard.classList.remove("hidden");
  oracleCard.className = "oracle-card";

  cardName.textContent = "운세 신호 확인 중...";
  rarityBox.textContent = "등급: 확인 중";
  cardCode.textContent = "#----";
  oracleMessage.textContent = "오늘의 흐름을 불러오는 중입니다...";
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
    statusText.textContent = "특별한 신호 감지";
    triggerLegendaryEvent();
    await wait(900);
  } else if (data.rarity === "RARE") {
    flashScreen();
    statusText.textContent = "희귀 신호 감지";
    await wait(300);
  } else {
    statusText.textContent = "운세 신호 확인";
  }

  oracleCard.className = `oracle-card ${data.rarity.toLowerCase()}`;
  oracleCard.classList.remove("hidden");

  cardName.textContent = `${data.symbol} ${data.name}`;
  rarityBox.textContent = `등급: ${getRarityKorean(data.rarity)}`;
  cardCode.textContent = code;
  hiddenMessage.textContent = hiddenText;

  systemLog.textContent = `SYSTEM LOG: ${randomItem(systemLogs)} / ${data.keyword} / ENERGY ${energy}% / NOISE ${corruption}%`;

  if (data.rarity === "LEGENDARY") {
    typeText(oracleMessage, finalMessage, 20);
  } else {
    typeText(oracleMessage, finalMessage, 28);
  }

  await wait(900);

  document.body.classList.remove("scanning");

  if (data.rarity === "LEGENDARY") {
    statusText.textContent = "특별 운세 해석 완료";
  } else {
    statusText.textContent = "오늘의 운세 해석 완료";
  }

  oracleBtn.disabled = false;
  busy = false;
}

oracleBtn.addEventListener("click", activateOracle);

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "운세오늘신호행운흐름선택NEONORACLE01";
const fontSize = 17;

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
  ctx.fillStyle = "rgba(4, 8, 18, 0.13)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  const legendaryMode = document.body.classList.contains("legendary-mode");

  ctx.fillStyle = legendaryMode ? "rgba(255, 225, 132, 0.55)" : "rgba(142, 245, 255, 0.45)";
  ctx.font = fontSize + "px monospace";
  ctx.shadowBlur = legendaryMode ? 10 : 6;
  ctx.shadowColor = legendaryMode ? "rgba(255, 225, 132, 0.42)" : "rgba(142, 245, 255, 0.35)";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.982) {
      drops[i] = 0;
    }

    drops[i] += legendaryMode ? 1.15 : 0.75;
  }

  requestAnimationFrame(drawMatrix);
}

drawMatrix();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service_worker.js?v=65").catch(() => {});
  });
}

syncUI();
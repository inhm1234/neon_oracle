const form = document.getElementById("fortuneForm");
const analyzeBtn = document.getElementById("analyzeBtn");

const userNameEl = document.getElementById("userName");
const genderEl = document.getElementById("gender");
const birthDateEl = document.getElementById("birthDate");
const birthTimeEl = document.getElementById("birthTime");

const statusText = document.getElementById("statusText");
const resultCard = document.getElementById("resultCard");

const analysisCode = document.getElementById("analysisCode");
const completeRate = document.getElementById("completeRate");
const resultTitle = document.getElementById("resultTitle");
const baseInfo = document.getElementById("baseInfo");

const totalFortune = document.getElementById("totalFortune");
const moneyFortune = document.getElementById("moneyFortune");
const loveFortune = document.getElementById("loveFortune");
const workFortune = document.getElementById("workFortune");
const healthFortune = document.getElementById("healthFortune");
const cautionFortune = document.getElementById("cautionFortune");
const luckyItems = document.getElementById("luckyItems");
const finalAdvice = document.getElementById("finalAdvice");

const stems = [
  ["갑", "wood"], ["을", "wood"], ["병", "fire"], ["정", "fire"], ["무", "earth"],
  ["기", "earth"], ["경", "metal"], ["신", "metal"], ["임", "water"], ["계", "water"]
];

const branches = [
  ["자", "쥐", "water", "23:00~00:59"],
  ["축", "소", "earth", "01:00~02:59"],
  ["인", "호랑이", "wood", "03:00~04:59"],
  ["묘", "토끼", "wood", "05:00~06:59"],
  ["진", "용", "earth", "07:00~08:59"],
  ["사", "뱀", "fire", "09:00~10:59"],
  ["오", "말", "fire", "11:00~12:59"],
  ["미", "양", "earth", "13:00~14:59"],
  ["신", "원숭이", "metal", "15:00~16:59"],
  ["유", "닭", "metal", "17:00~18:59"],
  ["술", "개", "earth", "19:00~20:59"],
  ["해", "돼지", "water", "21:00~22:59"]
];

const timeIndex = {
  ja: 0, chuk: 1, in: 2, myo: 3, jin: 4, sa: 5,
  oh: 6, mi: 7, shin: 8, yu: 9, sul: 10, hae: 11
};

const elementName = {
  wood: "목(木)",
  fire: "화(火)",
  earth: "토(土)",
  metal: "금(金)",
  water: "수(水)"
};

const luckyData = {
  wood: ["초록색", "동쪽", "성장"],
  fire: ["붉은색", "남쪽", "표현"],
  earth: ["노란색", "중앙", "정리"],
  metal: ["흰색", "서쪽", "결정"],
  water: ["검은색", "북쪽", "흐름"]
};

const generates = {
  wood: "fire",
  fire: "earth",
  earth: "metal",
  metal: "water",
  water: "wood"
};

const controls = {
  wood: "earth",
  earth: "water",
  water: "fire",
  fire: "metal",
  metal: "wood"
};

const fortuneText = {
  support: {
    total: "오늘은 주변의 흐름이 비교적 부드럽게 받쳐주는 날입니다. 혼자 모든 것을 해결하려 하기보다 도움을 받아들이면 일이 수월해질 수 있습니다.",
    money: "재물운은 안정적인 편입니다. 큰 욕심보다 계획한 지출을 지키는 쪽이 유리합니다.",
    love: "관계운은 부드럽습니다. 먼저 다가가기보다 상대의 반응을 살피며 천천히 대화하면 좋습니다.",
    work: "일운은 협력에 강합니다. 주변과 의견을 맞추면 생각보다 빠르게 정리될 수 있습니다.",
    health: "컨디션은 무난하지만 과신은 금물입니다. 수면과 식사 리듬을 지키는 것이 좋습니다.",
    caution: "편안한 흐름에 방심하면 작은 실수가 생길 수 있습니다. 마지막 확인을 잊지 마세요.",
    advice: "오늘은 도움을 거절하기보다 적절히 받아들이는 태도가 운을 살립니다."
  },
  output: {
    total: "오늘은 생각을 밖으로 꺼내고 표현할수록 운이 살아나는 날입니다. 말, 글, 행동으로 분명하게 드러내는 것이 좋습니다.",
    money: "아이디어나 능력을 활용해 금전 흐름을 만들기 좋은 날입니다. 다만 즉흥적인 지출은 줄이는 편이 좋습니다.",
    love: "표현운이 살아납니다. 마음을 숨기기보다 부드럽게 말하면 관계가 편해질 수 있습니다.",
    work: "기획, 발표, 정리, 제안에 좋은 흐름입니다. 머릿속에 있던 것을 밖으로 꺼내보세요.",
    health: "활동량이 늘 수 있는 날입니다. 가벼운 움직임은 좋지만 과한 일정은 피하세요.",
    caution: "말이 빨라지거나 감정이 앞서기 쉽습니다. 중요한 말은 한 번 더 정리하고 전달하세요.",
    advice: "오늘은 완벽한 결과보다 표현하고 시작하는 힘이 더 중요합니다."
  },
  control: {
    total: "오늘은 현실적인 문제를 정리하고 주도권을 잡기 좋은 흐름입니다. 다만 강하게 밀어붙이기보다 차분한 판단이 필요합니다.",
    money: "재물운은 관리와 판단이 중요합니다. 수입보다 새는 돈을 막는 데서 운이 생깁니다.",
    love: "관계에서는 주도권보다 배려가 중요합니다. 내 기준만 앞세우면 상대가 부담을 느낄 수 있습니다.",
    work: "일운은 강한 편입니다. 정리, 협상, 결정, 책임 있는 업무에서 능력을 발휘할 수 있습니다.",
    health: "긴장감이 올라갈 수 있습니다. 목, 어깨, 소화 쪽 컨디션을 살펴보세요.",
    caution: "내가 맞다는 확신이 강해질 수 있습니다. 중요한 결정일수록 다른 관점도 확인하세요.",
    advice: "오늘은 힘을 쓰되, 힘 조절을 아는 사람이 좋은 결과를 얻습니다."
  },
  pressure: {
    total: "오늘은 책임감이나 부담이 조금 크게 느껴질 수 있습니다. 서두르기보다 우선순위를 정하면 흐름이 안정됩니다.",
    money: "재물운은 보수적으로 보는 것이 좋습니다. 큰 지출이나 성급한 결정은 하루 더 생각해보세요.",
    love: "관계에서는 예민함이 올라올 수 있습니다. 상대의 말에 바로 반응하기보다 한 박자 쉬어가는 것이 좋습니다.",
    work: "일운은 압박이 있지만 성장의 기회도 있습니다. 어려운 일을 작은 단위로 나누어 처리하세요.",
    health: "피로가 쌓이기 쉬운 날입니다. 수면, 식사, 스트레스 관리에 신경 쓰는 것이 좋습니다.",
    caution: "조급함이 판단을 흐릴 수 있습니다. 오늘은 빠른 결정보다 안전한 선택이 유리합니다.",
    advice: "오늘은 속도를 줄일수록 오히려 실수를 줄일 수 있습니다."
  },
  balance: {
    total: "오늘은 큰 변화보다 균형을 잡는 데 좋은 흐름입니다. 현재 상태를 정돈하면 안정감이 살아납니다.",
    money: "재물운은 평이하지만 안정적입니다. 큰 이익보다 새는 돈을 막는 쪽에서 운이 따릅니다.",
    love: "관계운은 무난합니다. 특별한 사건보다 일상적인 배려가 더 크게 작용합니다.",
    work: "일운은 정리와 루틴에 강합니다. 반복 업무, 확인 작업, 일정 정리에 좋은 흐름입니다.",
    health: "컨디션은 안정적이나 생활 리듬에 따라 쉽게 달라질 수 있습니다. 식사와 수면 시간을 지켜보세요.",
    caution: "안정적인 날일수록 미루는 습관이 생길 수 있습니다. 작은 일 하나는 오늘 안에 끝내는 것이 좋습니다.",
    advice: "오늘은 기본을 지키는 것이 가장 강한 운입니다."
  }
};

function mod(value, size) {
  return ((value % size) + size) % size;
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return { year, month, day };
}

function getYearInfo(year) {
  const stem = stems[mod(year - 4, 10)];
  const branch = branches[mod(year - 4, 12)];

  return {
    ganji: stem[0] + branch[0],
    animal: branch[1],
    stemElement: stem[1],
    branchElement: branch[2]
  };
}

function getTimeInfo(key) {
  if (key === "unknown") return null;

  const branch = branches[timeIndex[key]];

  return {
    name: branch[0],
    animal: branch[1],
    element: branch[2],
    range: branch[3]
  };
}

function getMonthElement(month) {
  if (month === 3 || month === 4) return "wood";
  if (month === 5 || month === 6) return "fire";
  if (month === 7 || month === 8) return "earth";
  if (month === 9 || month === 10) return "metal";
  return "water";
}

function getTodayElement() {
  const today = new Date();
  const base = new Date(1900, 0, 1);
  const diff = Math.floor((today - base) / 86400000);
  const stem = stems[mod(diff + 6, 10)];

  return stem[1];
}

function getMainElement(yearElement, monthElement, timeElement) {
  const score = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0
  };

  score[yearElement] += 2;
  score[monthElement] += 2;

  if (timeElement) {
    score[timeElement] += 1;
  }

  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
}

function getRelation(myElement, todayElement) {
  if (myElement === todayElement) return "balance";
  if (generates[todayElement] === myElement) return "support";
  if (generates[myElement] === todayElement) return "output";
  if (controls[myElement] === todayElement) return "control";
  if (controls[todayElement] === myElement) return "pressure";
  return "balance";
}

function getHash(text) {
  let hash = 0;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function makeResult(profile) {
  const yearInfo = getYearInfo(profile.year);
  const monthElement = getMonthElement(profile.month);
  const timeInfo = getTimeInfo(profile.time);
  const timeElement = timeInfo ? timeInfo.element : null;
  const mainElement = getMainElement(yearInfo.stemElement, monthElement, timeElement);
  const todayElement = getTodayElement();
  const relation = getRelation(mainElement, todayElement);
  const text = fortuneText[relation];

  const seed = getHash(`${profile.date}-${profile.time}-${new Date().toDateString()}`);
  const lucky = luckyData[mainElement];
  const luckyNumber = String((seed % 9) + 1);

  return {
    title: profile.name ? `${profile.name}님의 오늘 운세` : "오늘의 운세 분석 결과",
    code: `#${yearInfo.ganji}-${seed % 10000}`,
    complete: timeInfo ? "94%" : "82%",
    base: [
      ["출생 간지", yearInfo.ganji],
      ["띠", `${yearInfo.animal}띠`],
      ["중심 오행", elementName[mainElement]],
      ["태어난 시간", timeInfo ? `${timeInfo.name}시 ${timeInfo.range}` : "시간 모름"]
    ],
    fortunes: text,
    lucky: [
      ["행운 색", lucky[0]],
      ["좋은 방향", lucky[1]],
      ["행운 숫자", luckyNumber],
      ["키워드", lucky[2]]
    ]
  };
}

function renderChips(items) {
  return items.map(([label, value]) => `
    <div class="info-chip">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderLucky(items) {
  return items.map(([label, value]) => `
    <div class="lucky-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderResult(result) {
  analysisCode.textContent = result.code;
  completeRate.textContent = result.complete;
  resultTitle.textContent = result.title;

  baseInfo.innerHTML = renderChips(result.base);

  totalFortune.textContent = result.fortunes.total;
  moneyFortune.textContent = result.fortunes.money;
  loveFortune.textContent = result.fortunes.love;
  workFortune.textContent = result.fortunes.work;
  healthFortune.textContent = result.fortunes.health;
  cautionFortune.textContent = result.fortunes.caution;

  luckyItems.innerHTML = renderLucky(result.lucky);
  finalAdvice.textContent = result.fortunes.advice;

  resultCard.classList.remove("hidden");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function analyzeFortune(event) {
  event.preventDefault();

  if (!birthDateEl.value) {
    statusText.textContent = "생년월일을 입력해주세요.";
    return;
  }

  const date = parseDate(birthDateEl.value);

  const profile = {
    name: userNameEl.value.trim(),
    gender: genderEl.value,
    date: birthDateEl.value,
    year: date.year,
    month: date.month,
    day: date.day,
    time: birthTimeEl.value
  };

  analyzeBtn.disabled = true;
  resultCard.classList.add("hidden");
  document.body.classList.add("scanning");

  statusText.textContent = "출생 정보를 읽는 중...";
  await wait(450);

  statusText.textContent = "천간·지지 흐름을 계산하는 중...";
  await wait(550);

  statusText.textContent = "오늘의 오행 균형을 분석하는 중...";
  await wait(550);

  statusText.textContent = "AI 운세 리포트를 생성하는 중...";
  await wait(450);

  const result = makeResult(profile);
  renderResult(result);

  statusText.textContent = "오늘의 운세 분석이 완료되었습니다.";
  document.body.classList.remove("scanning");
  analyzeBtn.disabled = false;
}

form.addEventListener("submit", analyzeFortune);

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "운세사주오행천간지지오늘흐름AIORACLE01";
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

function drawMatrix() {
  ctx.fillStyle = "rgba(4, 8, 18, 0.13)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "rgba(142, 245, 255, 0.42)";
  ctx.font = fontSize + "px monospace";
  ctx.shadowBlur = 6;
  ctx.shadowColor = "rgba(142, 245, 255, 0.3)";

  for (let i = 0; i < drops.length; i += 1) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.982) {
      drops[i] = 0;
    }

    drops[i] += 0.72;
  }

  requestAnimationFrame(drawMatrix);
}

function clearOldCachesAndWorkers() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  }

  if ("caches" in window) {
    caches.keys().then((keys) => {
      keys.forEach((key) => caches.delete(key));
    });
  }
}

resize();
drawMatrix();
clearOldCachesAndWorkers();

window.addEventListener("resize", resize);
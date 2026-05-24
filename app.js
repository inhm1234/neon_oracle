const form = document.getElementById("fortuneForm");
const analyzeBtn = document.getElementById("analyzeBtn");

const userNameEl = document.getElementById("userName");
const genderEl = document.getElementById("gender");
const calendarTypeEl = document.getElementById("calendarType");
const birthYearEl = document.getElementById("birthYear");
const birthMonthEl = document.getElementById("birthMonth");
const birthDayEl = document.getElementById("birthDay");
const birthTimeEl = document.getElementById("birthTime");

const statusText = document.getElementById("statusText");
const resultCard = document.getElementById("resultCard");

const analysisCode = document.getElementById("analysisCode");
const confidenceText = document.getElementById("confidenceText");
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

const PROFILE_KEY = "fortune_code_profile_v70";

const stems = [
  { name: "갑", element: "wood", yinYang: "양" },
  { name: "을", element: "wood", yinYang: "음" },
  { name: "병", element: "fire", yinYang: "양" },
  { name: "정", element: "fire", yinYang: "음" },
  { name: "무", element: "earth", yinYang: "양" },
  { name: "기", element: "earth", yinYang: "음" },
  { name: "경", element: "metal", yinYang: "양" },
  { name: "신", element: "metal", yinYang: "음" },
  { name: "임", element: "water", yinYang: "양" },
  { name: "계", element: "water", yinYang: "음" }
];

const branches = [
  { key: "ja", name: "자", animal: "쥐", element: "water", time: "23:00~00:59" },
  { key: "chuk", name: "축", animal: "소", element: "earth", time: "01:00~02:59" },
  { key: "in", name: "인", animal: "호랑이", element: "wood", time: "03:00~04:59" },
  { key: "myo", name: "묘", animal: "토끼", element: "wood", time: "05:00~06:59" },
  { key: "jin", name: "진", animal: "용", element: "earth", time: "07:00~08:59" },
  { key: "sa", name: "사", animal: "뱀", element: "fire", time: "09:00~10:59" },
  { key: "oh", name: "오", animal: "말", element: "fire", time: "11:00~12:59" },
  { key: "mi", name: "미", animal: "양", element: "earth", time: "13:00~14:59" },
  { key: "shin", name: "신", animal: "원숭이", element: "metal", time: "15:00~16:59" },
  { key: "yu", name: "유", animal: "닭", element: "metal", time: "17:00~18:59" },
  { key: "sul", name: "술", animal: "개", element: "earth", time: "19:00~20:59" },
  { key: "hae", name: "해", animal: "돼지", element: "water", time: "21:00~22:59" }
];

const elementNames = {
  wood: "목",
  fire: "화",
  earth: "토",
  metal: "금",
  water: "수"
};

const elementLabels = {
  wood: "목(木)",
  fire: "화(火)",
  earth: "토(土)",
  metal: "금(金)",
  water: "수(水)"
};

const elementColors = {
  wood: "초록색",
  fire: "붉은색",
  earth: "노란색",
  metal: "흰색",
  water: "검은색"
};

const elementDirections = {
  wood: "동쪽",
  fire: "남쪽",
  earth: "중앙",
  metal: "서쪽",
  water: "북쪽"
};

const elementKeywords = {
  wood: ["성장", "시작", "관계", "확장"],
  fire: ["표현", "열정", "인정", "활력"],
  earth: ["안정", "정리", "현실감", "균형"],
  metal: ["결정", "원칙", "정돈", "집중"],
  water: ["흐름", "지혜", "휴식", "관찰"]
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

const fortuneTexts = {
  support: {
    total: [
      "오늘은 외부의 흐름이 당신을 도와주는 쪽으로 움직입니다. 무리하게 밀어붙이기보다 이미 열린 기회를 차분히 받아들이는 것이 좋습니다.",
      "주변의 도움이나 우연한 제안이 긍정적인 방향으로 이어질 수 있습니다. 혼자 판단하기보다 믿을 만한 사람의 의견을 참고해보세요."
    ],
    money: [
      "재물운은 안정적인 편입니다. 큰 욕심보다 이미 계획한 지출과 수입의 균형을 지키는 것이 유리합니다.",
      "작은 이익이나 혜택을 챙기기 좋은 날입니다. 다만 충동 구매보다는 필요한 곳에 쓰는 소비가 좋습니다."
    ],
    love: [
      "관계운은 부드럽습니다. 먼저 다가가기보다 상대의 반응을 살피며 천천히 말을 건네면 좋은 흐름이 만들어집니다.",
      "가까운 사람과의 대화에서 마음이 풀릴 수 있습니다. 표현은 짧아도 진심을 담는 것이 중요합니다."
    ],
    work: [
      "일운은 협력에 강합니다. 혼자 해결하기 어려웠던 문제도 주변 도움을 받으면 생각보다 쉽게 풀릴 수 있습니다.",
      "오늘은 새로운 일을 벌이기보다 진행 중인 일을 안정적으로 마무리하는 데 유리합니다."
    ],
    health: [
      "몸의 흐름은 비교적 안정적입니다. 다만 좋은 컨디션을 믿고 무리하기보다는 생활 리듬을 지키는 것이 좋습니다.",
      "휴식과 수분 보충이 운을 안정시키는 데 도움이 됩니다. 몸을 따뜻하게 관리해보세요."
    ],
    caution: [
      "도움이 들어오는 날이지만, 모든 제안을 다 받아들일 필요는 없습니다. 선택의 기준은 분명히 두는 것이 좋습니다.",
      "편안한 흐름에 방심하면 작은 실수가 생길 수 있습니다. 마지막 확인을 잊지 마세요."
    ]
  },
  output: {
    total: [
      "오늘은 생각을 밖으로 꺼내고 표현할수록 운이 살아나는 날입니다. 말, 글, 행동으로 분명하게 드러내는 것이 좋습니다.",
      "가만히 있기보다 작은 행동을 시작할 때 흐름이 열립니다. 다만 속도보다 방향을 먼저 확인하세요."
    ],
    money: [
      "아이디어나 능력을 활용해 금전 흐름을 만들기 좋은 날입니다. 즉흥적인 투자는 피하고, 작은 수익 구조를 점검해보세요.",
      "소비가 늘기 쉬운 흐름입니다. 기분에 따른 지출보다 목적이 분명한 지출이 좋습니다."
    ],
    love: [
      "표현운이 살아납니다. 마음을 숨기기보다 부드럽게 말하면 관계가 한 단계 편해질 수 있습니다.",
      "상대에게 기대만 하기보다 먼저 따뜻한 신호를 보내면 분위기가 좋아질 수 있습니다."
    ],
    work: [
      "기획, 발표, 정리, 제안에 좋은 흐름입니다. 머릿속에 있던 것을 문서나 말로 정리해보세요.",
      "오늘은 결과물을 보여주는 데 유리합니다. 완벽하지 않아도 초안을 꺼내는 것이 도움이 됩니다."
    ],
    health: [
      "활동량이 늘 수 있는 날입니다. 가벼운 움직임은 좋지만 과한 일정은 피하는 편이 좋습니다.",
      "신경을 많이 쓰면 쉽게 피로가 쌓일 수 있습니다. 중간중간 호흡을 고르는 시간이 필요합니다."
    ],
    caution: [
      "말이 빨라지거나 감정이 앞서기 쉽습니다. 중요한 말은 한 번 더 정리하고 전달하세요.",
      "하고 싶은 것이 많아지는 날이지만, 한 번에 다 처리하려 하면 집중력이 흐트러질 수 있습니다."
    ]
  },
  control: {
    total: [
      "오늘은 주도권을 잡고 정리할 수 있는 흐름입니다. 다만 강하게 밀어붙이기보다 차분한 판단이 더 좋은 결과를 만듭니다.",
      "현실적인 문제를 다루기에 좋은 날입니다. 미뤄둔 일이나 결정해야 할 문제를 하나씩 정리해보세요."
    ],
    money: [
      "재물운은 관리와 판단이 중요합니다. 수입보다 지출 관리에서 더 큰 운이 생길 수 있습니다.",
      "금전 문제를 정리하기 좋은 날입니다. 계약, 결제, 정산은 꼼꼼히 확인하는 것이 좋습니다."
    ],
    love: [
      "관계에서는 주도권보다 배려가 중요합니다. 내 기준만 앞세우면 상대가 부담을 느낄 수 있습니다.",
      "솔직함은 좋지만 단정적인 말투는 피하는 편이 좋습니다. 부드럽게 조율하는 태도가 유리합니다."
    ],
    work: [
      "일운은 강한 편입니다. 정리, 협상, 결정, 책임 있는 업무에서 능력을 발휘할 수 있습니다.",
      "현실적인 성과를 만들기 좋은 날입니다. 다만 주변과 속도를 맞추는 것이 중요합니다."
    ],
    health: [
      "긴장감이 올라갈 수 있습니다. 어깨, 목, 소화 쪽 컨디션을 살피는 것이 좋습니다.",
      "해야 할 일이 많아도 몸의 신호를 무시하지 마세요. 짧은 휴식이 오히려 효율을 높입니다."
    ],
    caution: [
      "내가 맞다는 확신이 강해질 수 있습니다. 중요한 결정일수록 다른 관점도 한 번 확인하세요.",
      "무리해서 통제하려 하면 피로가 커질 수 있습니다. 오늘은 힘 조절이 필요합니다."
    ]
  },
  pressure: {
    total: [
      "오늘은 책임감이나 부담이 조금 크게 느껴질 수 있습니다. 서두르기보다 우선순위를 정하면 흐름이 안정됩니다.",
      "외부의 요구가 많아질 수 있는 날입니다. 모든 것을 완벽히 해내려 하기보다 중요한 것부터 처리하세요."
    ],
    money: [
      "재물운은 보수적으로 보는 것이 좋습니다. 큰 지출이나 성급한 결정은 하루 정도 더 생각해보세요.",
      "돈과 관련된 약속은 꼼꼼히 확인해야 합니다. 작은 누락이 나중에 부담이 될 수 있습니다."
    ],
    love: [
      "관계에서는 예민함이 올라올 수 있습니다. 상대의 말에 바로 반응하기보다 한 박자 쉬어가는 것이 좋습니다.",
      "오해가 생기기 쉬운 흐름입니다. 짧은 메시지보다 차분한 대화가 도움이 됩니다."
    ],
    work: [
      "일운은 압박이 있지만 성장의 기회도 있습니다. 어려운 일을 피하기보다 작은 단위로 나누어 처리하세요.",
      "상사, 고객, 동료의 요구가 많아질 수 있습니다. 기록과 확인이 오늘의 방패가 됩니다."
    ],
    health: [
      "피로가 쌓이기 쉬운 날입니다. 수면, 식사, 스트레스 관리에 신경 쓰는 것이 좋습니다.",
      "몸이 무겁게 느껴진다면 무리한 운동보다 가벼운 스트레칭이 더 잘 맞습니다."
    ],
    caution: [
      "조급함이 판단을 흐릴 수 있습니다. 오늘은 빠른 결정보다 안전한 선택이 더 유리합니다.",
      "남의 기준에 너무 끌려가면 피로가 커집니다. 가능한 범위와 어려운 범위를 분명히 나누세요."
    ]
  },
  balance: {
    total: [
      "오늘은 큰 변화보다 균형을 잡는 데 좋은 흐름입니다. 무리하게 새로 시작하기보다 현재 상태를 정돈해보세요.",
      "전체 운은 안정적입니다. 익숙한 일에서 성과가 나기 쉬우며, 차분한 태도가 운을 더 좋게 만듭니다."
    ],
    money: [
      "재물운은 평이하지만 안정적입니다. 큰 이익보다 새는 돈을 막는 쪽에서 운이 따릅니다.",
      "계획적인 소비에 좋은 날입니다. 필요한 것과 갖고 싶은 것을 구분하면 만족도가 높아집니다."
    ],
    love: [
      "관계운은 무난합니다. 특별한 사건보다 일상적인 배려가 더 크게 작용합니다.",
      "가까운 사람에게 편안한 태도를 보이면 관계가 안정됩니다. 억지로 분위기를 만들 필요는 없습니다."
    ],
    work: [
      "일운은 정리와 루틴에 강합니다. 반복 업무, 확인 작업, 일정 정리에 좋은 흐름입니다.",
      "큰 승부보다 기본기를 지키는 것이 성과로 이어집니다. 오늘은 실수 없는 진행이 중요합니다."
    ],
    health: [
      "컨디션은 안정적이나 생활 리듬에 따라 쉽게 달라질 수 있습니다. 식사와 수면 시간을 지켜보세요.",
      "몸을 무리하게 쓰기보다 가볍게 움직이며 균형을 맞추는 것이 좋습니다."
    ],
    caution: [
      "안정적인 날일수록 미루는 습관이 생길 수 있습니다. 작은 일 하나는 오늘 안에 끝내는 것이 좋습니다.",
      "익숙함에 기대면 변화의 신호를 놓칠 수 있습니다. 주변의 작은 변화를 살펴보세요."
    ]
  },
  neutral: {
    total: [
      "오늘은 여러 기운이 섞여 있어 선택에 따라 흐름이 달라질 수 있습니다. 한 가지 기준을 정하고 움직이면 운이 안정됩니다.",
      "뚜렷한 상승이나 하락보다 조정의 흐름이 강합니다. 서두르지 않고 상황을 읽는 태도가 필요합니다."
    ],
    money: [
      "재물운은 중간 흐름입니다. 큰 기대보다 현실적인 계산이 중요합니다.",
      "작은 지출이 쌓이기 쉬우니 오늘은 결제 전 한 번 더 생각하는 습관이 도움이 됩니다."
    ],
    love: [
      "관계에서는 애매한 태도가 오해를 만들 수 있습니다. 필요한 말은 부드럽지만 분명하게 전하세요.",
      "상대의 반응을 너무 해석하려 하기보다 직접 확인하는 편이 좋습니다."
    ],
    work: [
      "일운은 준비한 만큼 결과가 나오는 흐름입니다. 갑작스러운 변수를 대비해 여유 시간을 남겨두세요.",
      "계획 수정이 필요할 수 있습니다. 바뀐 상황에 유연하게 대응하는 것이 중요합니다."
    ],
    health: [
      "컨디션은 기복이 있을 수 있습니다. 몸의 반응을 살피며 무리한 일정은 줄이는 편이 좋습니다.",
      "가벼운 피로가 쌓일 수 있으니 물, 수면, 스트레칭을 챙겨보세요."
    ],
    caution: [
      "오늘은 애매하게 넘긴 일이 나중에 다시 돌아올 수 있습니다. 확인할 것은 바로 확인하세요.",
      "기분에 따라 판단이 흔들릴 수 있습니다. 중요한 선택은 기록하거나 시간을 두고 결정하세요."
    ]
  }
};

const finalAdvicePool = {
  wood: [
    "오늘은 작게라도 시작하는 사람이 흐름을 가져갑니다.",
    "성급한 결론보다 성장할 여지를 남기는 선택이 좋습니다."
  ],
  fire: [
    "오늘은 표현하되 과열되지 않는 균형이 중요합니다.",
    "마음의 온도는 높게, 말의 속도는 천천히 가져가세요."
  ],
  earth: [
    "오늘은 정리하고 다지는 일에서 운이 살아납니다.",
    "흔들릴수록 기본으로 돌아가면 답이 보입니다."
  ],
  metal: [
    "오늘은 기준을 세우고 깔끔하게 결정하는 것이 좋습니다.",
    "불필요한 것을 덜어낼수록 중요한 것이 선명해집니다."
  ],
  water: [
    "오늘은 흐름을 거스르기보다 조용히 읽는 쪽이 유리합니다.",
    "잠시 멈춰 생각하는 시간이 오히려 빠른 길이 될 수 있습니다."
  ]
};

function fillDays() {
  birthDayEl.innerHTML = '<option value="">일 선택</option>';

  for (let day = 1; day <= 31; day += 1) {
    const option = document.createElement("option");
    option.value = String(day);
    option.textContent = `${day}일`;
    birthDayEl.appendChild(option);
  }
}

function saveProfile() {
  const profile = {
    name: userNameEl.value,
    gender: genderEl.value,
    calendarType: calendarTypeEl.value,
    year: birthYearEl.value,
    month: birthMonthEl.value,
    day: birthDayEl.value,
    time: birthTimeEl.value
  };

  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

function loadProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem(PROFILE_KEY));

    if (!profile) return;

    userNameEl.value = profile.name || "";
    genderEl.value = profile.gender || "none";
    calendarTypeEl.value = profile.calendarType || "solar";
    birthYearEl.value = profile.year || "";
    birthMonthEl.value = profile.month || "";
    birthDayEl.value = profile.day || "";
    birthTimeEl.value = profile.time || "unknown";
  } catch (error) {
    localStorage.removeItem(PROFILE_KEY);
  }
}

function normalizeMod(value, mod) {
  return ((value % mod) + mod) % mod;
}

function getYearGanji(year) {
  const stem = stems[normalizeMod(year - 4, 10)];
  const branch = branches[normalizeMod(year - 4, 12)];

  return {
    stem,
    branch,
    text: `${stem.name}${branch.name}`,
    animal: branch.animal
  };
}

function getSeasonElement(month) {
  if ([3, 4].includes(month)) return "wood";
  if ([5, 6].includes(month)) return "fire";
  if ([7, 8].includes(month)) return "earth";
  if ([9, 10].includes(month)) return "metal";
  if ([11, 12, 1, 2].includes(month)) return "water";
  return "earth";
}

function getTimeInfo(key) {
  if (key === "unknown") return null;
  return branches.find((branch) => branch.key === key) || null;
}

function getTodayGanji() {
  const today = new Date();
  const start = new Date(1900, 0, 1);
  const diff = Math.floor((today - start) / 86400000);

  const stem = stems[normalizeMod(diff + 6, 10)];
  const branch = branches[normalizeMod(diff, 12)];

  return {
    date: today,
    stem,
    branch,
    text: `${stem.name}${branch.name}`,
    element: stem.element
  };
}

function getRelation(personalElement, todayElement) {
  if (personalElement === todayElement) return "balance";
  if (generates[todayElement] === personalElement) return "support";
  if (generates[personalElement] === todayElement) return "output";
  if (controls[personalElement] === todayElement) return "control";
  if (controls[todayElement] === personalElement) return "pressure";
  return "neutral";
}

function getDominantElement(yearElement, monthElement, timeElement) {
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

function hashString(text) {
  let hash = 0;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function pick(list, seed, offset = 0) {
  return list[(seed + offset) % list.length];
}

function validateDate(year, month, day) {
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function getCompleteness(timeInfo, calendarType) {
  let score = 82;

  if (timeInfo) score += 12;
  if (calendarType === "solar") score += 4;

  return Math.min(score, 98);
}

function getCalendarLabel(type) {
  if (type === "lunar") return "음력 입력";
  return "양력 입력";
}

function buildFortune(profile) {
  const yearGanji = getYearGanji(profile.year);
  const monthElement = getSeasonElement(profile.month);
  const timeInfo = getTimeInfo(profile.time);
  const timeElement = timeInfo ? timeInfo.element : null;
  const todayGanji = getTodayGanji();

  const personalElement = getDominantElement(
    yearGanji.stem.element,
    monthElement,
    timeElement
  );

  const relation = getRelation(personalElement, todayGanji.element);

  const seedText = [
    profile.name || "guest",
    profile.gender,
    profile.calendarType,
    profile.year,
    profile.month,
    profile.day,
    profile.time,
    todayGanji.date.toDateString()
  ].join("-");

  const seed = hashString(seedText);
  const relationTexts = fortuneTexts[relation] || fortuneTexts.neutral;

  const luckyNumber = ((seed % 9) + 1).toString();
  const luckyKeyword = pick(elementKeywords[personalElement], seed, 1);
  const luckyColor = elementColors[personalElement];
  const luckyDirection = elementDirections[todayGanji.element];

  let lunarNote = "";

  if (profile.calendarType === "lunar") {
    lunarNote = " 음력 선택값은 입력된 생일 정보를 기준으로 참고 반영했으며, 정밀한 양력 변환 만세력은 적용하지 않았습니다.";
  }

  const timeNote = timeInfo
    ? `${timeInfo.name}시(${timeInfo.time})`
    : "시간 모름";

  const nameText = profile.name ? `${profile.name}님의` : "오늘의";

  return {
    title: `${nameText} 운세 분석 결과`,
    analysisCode: `#${yearGanji.text}-${todayGanji.text}-${seed % 10000}`,
    confidence: getCompleteness(timeInfo, profile.calendarType),
    base: [
      { label: "출생 간지", value: yearGanji.text },
      { label: "띠", value: `${yearGanji.animal}띠` },
      { label: "중심 오행", value: elementLabels[personalElement] },
      { label: "태어난 시간", value: timeNote }
    ],
    total: pick(relationTexts.total, seed, 1) + lunarNote,
    money: pick(relationTexts.money, seed, 2),
    love: pick(relationTexts.love, seed, 3),
    work: pick(relationTexts.work, seed, 4),
    health: pick(relationTexts.health, seed, 5),
    caution: pick(relationTexts.caution, seed, 6),
    lucky: [
      { label: "행운 색", value: luckyColor },
      { label: "행운 숫자", value: luckyNumber },
      { label: "좋은 방향", value: luckyDirection },
      { label: "키워드", value: luckyKeyword }
    ],
    advice: pick(finalAdvicePool[personalElement], seed, 7),
    todayText: todayGanji.text,
    todayElement: todayGanji.element
  };
}

function renderBaseInfo(items) {
  baseInfo.innerHTML = items.map((item) => {
    return `
      <div class="info-chip">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `;
  }).join("");
}

function renderLuckyItems(items) {
  luckyItems.innerHTML = items.map((item) => {
    return `
      <div class="lucky-item">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `;
  }).join("");
}

function renderResult(result) {
  analysisCode.textContent = result.analysisCode;
  confidenceText.textContent = `${result.confidence}%`;
  resultTitle.textContent = result.title;

  renderBaseInfo(result.base);

  totalFortune.textContent = result.total;
  moneyFortune.textContent = result.money;
  loveFortune.textContent = result.love;
  workFortune.textContent = result.work;
  healthFortune.textContent = result.health;
  cautionFortune.textContent = result.caution;

  renderLuckyItems(result.lucky);

  finalAdvice.textContent = result.advice;

  resultCard.classList.remove("hidden");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function analyzeFortune(event) {
  event.preventDefault();

  const profile = {
    name: userNameEl.value.trim(),
    gender: genderEl.value,
    calendarType: calendarTypeEl.value,
    year: Number(birthYearEl.value),
    month: Number(birthMonthEl.value),
    day: Number(birthDayEl.value),
    time: birthTimeEl.value
  };

  if (!profile.year || !profile.month || !profile.day) {
    statusText.textContent = "생년월일을 모두 입력해주세요.";
    return;
  }

  if (!validateDate(profile.year, profile.month, profile.day)) {
    statusText.textContent = "존재하지 않는 날짜입니다. 생년월일을 다시 확인해주세요.";
    return;
  }

  saveProfile();

  analyzeBtn.disabled = true;
  resultCard.classList.add("hidden");

  document.body.classList.add("scanning");
  statusText.textContent = "출생 정보를 읽는 중...";

  await wait(500);
  statusText.textContent = "천간·지지 흐름을 계산하는 중...";

  await wait(600);
  statusText.textContent = "오늘의 오행 균형을 분석하는 중...";

  await wait(600);
  statusText.textContent = "AI 오라클 운세 리포트를 생성하는 중...";

  await wait(500);

  const result = buildFortune(profile);
  renderResult(result);

  statusText.textContent = "오늘의 운세 분석이 완료되었습니다.";
  document.body.classList.remove("scanning");

  analyzeBtn.disabled = false;
}

form.addEventListener("submit", analyzeFortune);

fillDays();
loadProfile();

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

resize();
window.addEventListener("resize", resize);

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

drawMatrix();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service_worker.js?v=70").catch(() => {});
  });
}
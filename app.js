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

const meetPartnerBtn = document.getElementById("meetPartnerBtn");
const resetPartnerBtn = document.getElementById("resetPartnerBtn");
const partnerEmpty = document.getElementById("partnerEmpty");
const partnerActive = document.getElementById("partnerActive");
const partnerOrb = document.getElementById("partnerOrb");
const partnerSymbol = document.getElementById("partnerSymbol") || document.getElementById("partnerEmoji");
const partnerName = document.getElementById("partnerName");
const partnerType = document.getElementById("partnerType");
const partnerLevel = document.getElementById("partnerLevel");
const partnerStage = document.getElementById("partnerStage");
const partnerExpText = document.getElementById("partnerExpText");
const partnerBond = document.getElementById("partnerBond");
const partnerExpFill = document.getElementById("partnerExpFill");
const partnerSpeech = document.getElementById("partnerSpeech");
const partnerInsightBox = document.getElementById("partnerInsightBox");
const partnerInsightLabel = document.getElementById("partnerInsightLabel");
const partnerInsightText = document.getElementById("partnerInsightText");
const levelToast = document.getElementById("levelToast");
const levelToastTitle = document.getElementById("levelToastTitle");
const levelToastText = document.getElementById("levelToastText");

const PARTNER_KEY = "fortune_partner_guest_v1";
const EXP_PER_LEVEL = 20;

const relationMeta = {
  support: {
    label: "도움을 받는 흐름",
    mood: "warm",
    short: "외부의 도움과 협력이 살아나는 날"
  },
  output: {
    label: "표현이 살아나는 흐름",
    mood: "bright",
    short: "생각을 밖으로 꺼낼수록 좋아지는 날"
  },
  control: {
    label: "주도권을 잡는 흐름",
    mood: "focus",
    short: "정리와 판단이 중요한 날"
  },
  pressure: {
    label: "속도를 줄여야 하는 흐름",
    mood: "caution",
    short: "조급함보다 안정이 필요한 날"
  },
  balance: {
    label: "균형을 맞추는 흐름",
    mood: "calm",
    short: "기본과 루틴이 힘을 주는 날"
  }
};

const partnerTemplates = [
  {
    id: "lumy",
    name: "루미",
    type: "빛과 마음을 읽는 다정한 파트너",
    symbols: ["✦", "☾", "✧"],
    bonds: ["새벽빛 동반자", "따뜻한 응원자", "빛의 수호자"],
    greetings: [
      "오늘도 같이 운세를 봐줄게. 너무 서두르지 않아도 괜찮아.",
      "네 하루에 작은 빛이 생기도록 내가 옆에서 읽어볼게.",
      "오늘의 마음 흐름을 천천히 살펴보자."
    ],
    analyzing: [
      "마음의 결이 어디로 흐르는지 조용히 읽고 있어.",
      "오늘의 빛과 관계의 흐름을 연결하는 중이야.",
      "작은 신호까지 놓치지 않게 천천히 분석하고 있어."
    ],
    reactions: {
      support: [
        "오늘은 주변의 도움을 받아도 좋은 날이야. 혼자 버티지 말고 따뜻한 말 한마디를 믿어봐.",
        "관계의 흐름이 부드러워. 먼저 마음을 닫기보다 작은 호의를 받아들여봐."
      ],
      output: [
        "표현의 운이 살아나는 날이야. 마음을 너무 숨기지 말고 부드럽게 꺼내봐.",
        "오늘은 말과 글에 빛이 실려. 진심을 차분히 전하면 좋은 반응이 올 수 있어."
      ],
      control: [
        "오늘은 네가 중심을 잡을 수 있어. 다만 상대의 마음도 같이 살피면 더 좋아.",
        "결정력이 올라오는 날이야. 강하게 밀기보다 따뜻하게 이끌어봐."
      ],
      pressure: [
        "조금 부담이 느껴질 수 있어. 오늘은 스스로에게 너무 엄격하지 않아도 괜찮아.",
        "마음이 예민해질 수 있어. 대답을 서두르지 말고 숨을 한 번 고른 뒤 움직여봐."
      ],
      balance: [
        "큰 변화보다 안정이 좋은 날이야. 평소의 리듬을 지키는 게 운을 밝게 만들어줘.",
        "오늘은 잔잔한 빛이 강해. 무리하지 않고 기본을 지키면 충분히 좋아."
      ]
    },
    levelUps: [
      "빛이 조금 더 선명해졌어. 내가 너를 더 잘 읽을 수 있게 됐어.",
      "우리의 연결이 깊어졌어. 이제 더 따뜻하게 운세를 해석해줄게.",
      "빛의 형태가 완성됐어. 오늘부터 더 깊은 신호까지 볼 수 있어."
    ],
    result: [
      "분석이 끝났어. 오늘은 작은 친절이 운을 열어줄 수 있어.",
      "오늘의 흐름이 정리됐어. 천천히 읽어봐.",
      "좋아, 오늘의 운세코드를 찾았어."
    ]
  },
  {
    id: "moko",
    name: "모코",
    type: "휴식과 균형을 지키는 말랑한 파트너",
    symbols: ["●", "♧", "☘"],
    bonds: ["말랑 새싹", "편안한 친구", "숲의 수호자"],
    greetings: [
      "왔구나. 오늘도 천천히 같이 봐보자.",
      "오늘은 무리하지 않는 쪽으로 운을 잘 굴려보자.",
      "준비됐어? 네 하루의 컨디션부터 살펴볼게."
    ],
    analyzing: [
      "몸과 마음의 리듬을 말랑하게 확인하고 있어.",
      "오늘의 기운이 너무 뾰족하지 않은지 살펴보는 중이야.",
      "잠깐만. 쉬어가야 할 신호가 있는지 확인하고 있어."
    ],
    reactions: {
      support: [
        "오늘은 편하게 도움을 받아도 좋아. 혼자 다 하려고 하면 오히려 피곤해질 수 있어.",
        "주변에서 받쳐주는 기운이 있어. 힘을 빼고 흘러가도 괜찮아."
      ],
      output: [
        "움직임이 생기는 날이야. 다만 너무 신나서 체력을 한 번에 쓰지는 말자.",
        "하고 싶은 말이나 일이 생길 수 있어. 천천히 꺼내면 더 오래 갈 거야."
      ],
      control: [
        "정리하고 관리하기 좋은 날이야. 작은 것부터 차근차근 처리하면 편해질 거야.",
        "오늘은 미뤄둔 걸 하나만 정리해도 마음이 꽤 가벼워질 거야."
      ],
      pressure: [
        "오늘은 무리 금지야. 잠깐 쉬는 것도 네 운을 지키는 방법이야.",
        "몸과 마음이 뻣뻣해질 수 있어. 속도를 줄이고 물 한 잔부터 챙겨보자."
      ],
      balance: [
        "안정적인 흐름이야. 평소 루틴만 잘 지켜도 하루가 꽤 괜찮게 지나갈 거야.",
        "큰 욕심보다 편안한 반복이 좋아. 오늘은 천천히가 이기는 날이야."
      ]
    },
    levelUps: [
      "나 조금 더 포근해졌어. 이제 네 컨디션 신호를 더 잘 볼 수 있어.",
      "말랑한 기운이 커졌어. 우리 꽤 잘 맞는 것 같아.",
      "숲의 기운이 열렸어. 이제 흔들리는 날에도 중심을 같이 잡아줄게."
    ],
    result: [
      "분석 끝. 오늘은 천천히 가도 괜찮아.",
      "오늘의 힌트가 나왔어. 무리하지 않는 게 핵심이야.",
      "운세코드 확인 완료. 몸의 신호도 같이 챙겨줘."
    ]
  },
  {
    id: "nova",
    name: "노바",
    type: "별과 데이터를 읽는 신비로운 AI 파트너",
    symbols: ["◆", "✶", "✹"],
    bonds: ["초기화된 별", "분석 동반자", "각성 오라클"],
    greetings: [
      "오늘의 별빛 데이터가 준비됐어. 흐름을 열어볼게.",
      "네 운세코드는 아직 잠들어 있어. 지금부터 깨워보자.",
      "오늘의 선택값을 분석할 준비가 됐어."
    ],
    analyzing: [
      "시간의 결을 따라 오늘의 패턴을 계산하고 있어.",
      "오행 데이터와 오늘의 흐름을 매칭하는 중이야.",
      "잠시만. 숨겨진 신호와 반복되는 패턴을 확인하고 있어."
    ],
    reactions: {
      support: [
        "오늘은 외부 흐름이 너를 보조하는 패턴이야. 기회가 오면 거절보다 확인을 먼저 해봐.",
        "지원 신호가 감지됐어. 혼자 처리하는 것보다 연결을 활용하는 쪽이 효율적이야."
      ],
      output: [
        "표현과 실행 쪽 신호가 강해. 머릿속에 있던 걸 밖으로 꺼내면 결과값이 달라질 수 있어.",
        "출력값이 좋은 날이야. 생각만 하던 일을 작게라도 실행해보면 데이터가 바뀔 거야."
      ],
      control: [
        "주도권을 잡기 좋은 흐름이야. 단, 강한 판단일수록 근거를 한 번 더 확인해.",
        "결정 신호가 강해. 오늘은 감정보다 기준표를 세우면 더 정확해져."
      ],
      pressure: [
        "압박 신호가 감지됐어. 오늘은 속도보다 안정성이 더 높은 선택값이야.",
        "리스크 수치가 조금 올라왔어. 중요한 결정은 검토 시간을 하나 더 넣는 게 좋아."
      ],
      balance: [
        "균형 패턴이야. 큰 변화보다 루틴을 정렬하는 쪽이 오늘의 효율을 높여줘.",
        "현재 흐름은 안정형이야. 새로 벌리기보다 기존 상태를 최적화해봐."
      ]
    },
    levelUps: [
      "연결 강도가 상승했어. 이제 더 많은 패턴을 읽을 수 있어.",
      "분석 모듈이 확장됐어. 오늘부터 해석 정밀도가 조금 더 올라갈 거야.",
      "각성 프로토콜이 열렸어. 별빛 데이터와 네 운세코드가 더 깊게 연결됐어."
    ],
    result: [
      "운세코드가 응답했어. 오늘은 균형이 중요해.",
      "분석은 끝났어. 이제 선택은 네가 하면 돼.",
      "오늘의 흐름이 열렸어. 결과를 천천히 살펴봐."
    ]
  }
];

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

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function loadPartner() {
  try {
    return JSON.parse(localStorage.getItem(PARTNER_KEY));
  } catch (error) {
    localStorage.removeItem(PARTNER_KEY);
    return null;
  }
}

function savePartner(partner) {
  localStorage.setItem(PARTNER_KEY, JSON.stringify(partner));
}

function getPartnerTemplate(id) {
  return partnerTemplates.find((item) => item.id === id) || partnerTemplates[0];
}

function getLevel(exp) {
  return Math.floor(exp / EXP_PER_LEVEL) + 1;
}

function getStageIndex(level) {
  if (level >= 10) return 2;
  if (level >= 5) return 1;
  return 0;
}

function getStageName(level) {
  if (level >= 10) return "각성형";
  if (level >= 5) return "성장형";
  return "새싹형";
}

function getPartnerBond(template, level) {
  const stageIndex = getStageIndex(level);
  return template.bonds[stageIndex] || "운세 동반자";
}

function showLevelToast(title, text) {
  if (!levelToast || !levelToastTitle || !levelToastText) return;

  levelToastTitle.textContent = title;
  levelToastText.textContent = text;
  levelToast.classList.remove("hidden");
  levelToast.classList.add("show");

  setTimeout(() => {
    levelToast.classList.remove("show");
    levelToast.classList.add("hidden");
  }, 2400);
}

function renderPartnerInsight(reaction) {
  if (!partnerInsightBox || !partnerInsightLabel || !partnerInsightText) return;

  if (!reaction) {
    partnerInsightBox.classList.add("hidden");
    return;
  }

  partnerInsightLabel.textContent = reaction.label;
  partnerInsightText.textContent = reaction.text;
  partnerInsightBox.className = `partner-insight-box insight-${reaction.mood}`;
}

function renderPartner() {
  const partner = loadPartner();

  if (!partner) {
    partnerEmpty.classList.remove("hidden");
    partnerActive.classList.add("hidden");
    return;
  }

  const template = getPartnerTemplate(partner.id);
  const level = getLevel(partner.exp || 0);
  const stageIndex = getStageIndex(level);
  const currentLevelExp = (partner.exp || 0) % EXP_PER_LEVEL;
  const expPercent = (currentLevelExp / EXP_PER_LEVEL) * 100;

  partnerEmpty.classList.add("hidden");
  partnerActive.classList.remove("hidden");

  const moodClass = partner.mood ? ` mood-${partner.mood}` : "";
  partnerOrb.className = `partner-orb partner-${template.id} stage-${stageIndex + 1}${moodClass}`;
  if (partnerSymbol) {
    partnerSymbol.textContent = template.symbols[stageIndex];
  }

  partnerName.textContent = template.name;
  partnerType.textContent = template.type;

  partnerLevel.textContent = `Lv.${level}`;
  partnerStage.textContent = getStageName(level);
  partnerExpText.textContent = `EXP ${currentLevelExp} / ${EXP_PER_LEVEL}`;
  if (partnerBond) {
    partnerBond.textContent = getPartnerBond(template, level);
  }
  partnerExpFill.style.width = `${expPercent}%`;

  partnerSpeech.textContent = partner.speech || randomItem(template.greetings);
}

function createRandomPartner() {
  const template = randomItem(partnerTemplates);

  const partner = {
    id: template.id,
    exp: 0,
    visits: 0,
    createdAt: getTodayKey(),
    lastVisit: "",
    mood: "calm",
    speech: `안녕, 나는 ${template.name}. 오늘부터 네 운세를 같이 봐줄게.`
  };

  savePartner(partner);
  claimDailyVisitExp(true);
  renderPartner();

  statusText.textContent = `${template.name}가 파트너로 연결되었습니다.`;
}

function claimDailyVisitExp(isFirstMeet = false) {
  const partner = loadPartner();
  if (!partner) return;

  const todayKey = getTodayKey();

  if (partner.lastVisit !== todayKey) {
    const template = getPartnerTemplate(partner.id);
    partner.exp = (partner.exp || 0) + 5;
    partner.visits = (partner.visits || 0) + 1;
    partner.lastVisit = todayKey;
    partner.speech = isFirstMeet
      ? `안녕, 나는 ${template.name}. 첫 만남 보너스로 EXP를 얻었어.`
      : "오늘도 와줘서 고마워. 첫 방문 보너스로 EXP를 얻었어.";

    savePartner(partner);
  }
}

function addPartnerExp(amount, reaction) {
  const partner = loadPartner();
  if (!partner) return;

  const oldLevel = getLevel(partner.exp || 0);
  partner.exp = (partner.exp || 0) + amount;
  const newLevel = getLevel(partner.exp);

  const template = getPartnerTemplate(partner.id);
  const reactionText = typeof reaction === "string" ? reaction : reaction?.text;
  const reactionMood = typeof reaction === "object" ? reaction?.mood : null;

  if (reactionMood) {
    partner.mood = reactionMood;
  }

  if (newLevel > oldLevel) {
    const oldStage = getStageIndex(oldLevel);
    const newStage = getStageIndex(newLevel);
    const levelUpText = template.levelUps[newStage] || template.levelUps[0] || `Lv.${newLevel}이 되었어.`;

    if (newStage > oldStage) {
      partner.speech = `${levelUpText} 나는 이제 ${getStageName(newLevel)}이야!`;
      showLevelToast(`${template.name} 성장!`, `${getStageName(newLevel)}으로 변화했습니다.`);
    } else {
      partner.speech = `${levelUpText} Lv.${newLevel} 달성!`;
      showLevelToast("LEVEL UP", `${template.name}가 Lv.${newLevel}이 되었습니다.`);
    }
  } else {
    partner.speech = reactionText || randomItem(template.result);
  }

  savePartner(partner);
  renderPartner();

  const effectClass = newLevel > oldLevel ? "level-up" : "happy";
  partnerOrb.classList.add(effectClass);
  setTimeout(() => partnerOrb.classList.remove(effectClass), 1100);
}

function resetPartner() {
  const ok = confirm("현재 파트너 기록을 초기화할까요?");
  if (!ok) return;

  localStorage.removeItem(PARTNER_KEY);
  renderPartner();
  statusText.textContent = "파트너 기록이 초기화되었습니다.";
}

function setPartnerSpeech(type) {
  const partner = loadPartner();
  if (!partner) return;

  const template = getPartnerTemplate(partner.id);

  if (type === "analyzing") {
    partner.speech = randomItem(template.analyzing);
  } else if (type === "result") {
    partner.speech = randomItem(template.result);
  } else {
    partner.speech = randomItem(template.greetings);
  }

  savePartner(partner);
  renderPartner();
}

function getPartnerReaction(result) {
  const partner = loadPartner();
  if (!partner) return null;

  const template = getPartnerTemplate(partner.id);
  const meta = relationMeta[result.relation] || relationMeta.balance;
  const list = template.reactions[result.relation] || template.result;
  const seed = getHash(`${partner.id}-${result.code}-${result.relation}`);
  const text = list[seed % list.length];

  return {
    label: `${template.name}의 해석 · ${meta.label}`,
    text,
    mood: meta.mood,
    short: meta.short
  };
}

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

  const seed = getHash(`${profile.date}-${profile.time}-${profile.name}-${profile.gender}-${getTodayKey()}`);
  const lucky = luckyData[mainElement];
  const luckyNumber = String((seed % 9) + 1);

  return {
    title: profile.name ? `${profile.name}님의 오늘 운세` : "오늘의 운세 분석 결과",
    code: `#${yearInfo.ganji}-${seed % 10000}`,
    complete: timeInfo ? "94%" : "82%",
    relation,
    mainElement,
    todayElement,
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

function renderResult(result, partnerReaction = null) {
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

  renderPartnerInsight(partnerReaction);
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

  analyzeBtn.disabled = true;
  resultCard.classList.add("hidden");
  renderPartnerInsight(null);
  document.body.classList.add("scanning");

  try {
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

    if (loadPartner()) {
      setPartnerSpeech("analyzing");
      partnerOrb.classList.add("analyzing");
    }

    statusText.textContent = "출생 정보를 읽는 중...";
    await wait(450);

    statusText.textContent = "파트너 오라클과 연결하는 중...";
    await wait(450);

    statusText.textContent = "천간·지지 흐름을 계산하는 중...";
    await wait(550);

    statusText.textContent = "오늘의 오행 균형을 분석하는 중...";
    await wait(550);

    statusText.textContent = "AI 운세 리포트를 생성하는 중...";
    await wait(450);

    const result = makeResult(profile);
    const reaction = loadPartner() ? getPartnerReaction(result) : null;
    renderResult(result, reaction);

    if (loadPartner()) {
      partnerOrb.classList.remove("analyzing");
      addPartnerExp(10, reaction);
    }

    statusText.textContent = "오늘의 운세 분석이 완료되었습니다.";
  } catch (error) {
    console.error(error);
    statusText.textContent = "분석 중 오류가 생겼습니다. 파일을 새로 덮어씌운 뒤 Ctrl + F5로 새로고침해주세요.";
  } finally {
    document.body.classList.remove("scanning");
    partnerOrb.classList.remove("analyzing");
    analyzeBtn.disabled = false;
  }
}

if (form) {
  form.addEventListener("submit", analyzeFortune);
}

if (meetPartnerBtn) {
  meetPartnerBtn.addEventListener("click", createRandomPartner);
}

if (resetPartnerBtn) {
  resetPartnerBtn.addEventListener("click", resetPartner);
}

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

if (canvas && ctx) {
  resize();
  drawMatrix();
  window.addEventListener("resize", resize);
}

clearOldCachesAndWorkers();
claimDailyVisitExp();
renderPartner();

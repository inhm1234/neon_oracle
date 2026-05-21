const oracleBtn = document.getElementById("oracleBtn");

const oracleCard = document.getElementById("oracleCard");

const cardName = document.getElementById("cardName");

const oracleMessage = document.getElementById("oracleMessage");

const clickSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
);

const oracles = [
  {
    name: "VOID",
    message: "침묵 속에서 새로운 문이 열린다. 서두르지 말고 흐름을 관찰하라."
  },
  {
    name: "ECLIPSE",
    message: "가려진 진실이 드러난다. 관계의 변화가 시작된다."
  },
  {
    name: "SIGNAL",
    message: "반복되는 우연은 신호다. 오늘의 숫자와 단어를 기억하라."
  },
  {
    name: "CHAOS",
    message: "혼란은 재배치다. 예상 밖의 선택이 길을 연다."
  },
  {
    name: "MIRROR",
    message: "두려움은 욕망의 반사다. 감정을 피하지 마라."
  }
];

function typeText(element, text, speed = 35) {
  element.textContent = "";

  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

oracleBtn.addEventListener("click", () => {

  clickSound.currentTime = 0;
  clickSound.play();

  document.body.classList.add("glitch");

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 200);

  oracleCard.classList.remove("hidden");

  cardName.textContent = "ANALYZING SIGNAL...";
  oracleMessage.textContent = "SCANNING FUTURE STREAM...";

  setTimeout(() => {

    const random =
      oracles[Math.floor(Math.random() * oracles.length)];

    cardName.textContent = random.name;

    typeText(oracleMessage, random.message);

  }, 1200);

});
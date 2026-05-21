const oracleBtn = document.getElementById("oracleBtn");

const oracleCard = document.getElementById("oracleCard");

const cardName = document.getElementById("cardName");

const oracleMessage = document.getElementById("oracleMessage");

const oracles = [

  {
    name: "VOID",
    message:
      "침묵 속에서 새로운 문이 열린다. 오늘은 서두르지 말고 흐름을 관찰하라."
  },

  {
    name: "ECLIPSE",
    message:
      "가려진 진실이 곧 모습을 드러낸다. 오래된 관계에 변화가 찾아온다."
  },

  {
    name: "SIGNAL",
    message:
      "우연처럼 보이는 반복은 신호다. 오늘 마주치는 숫자와 단어를 기억하라."
  },

  {
    name: "CHAOS",
    message:
      "혼란은 파괴가 아니라 재배치다. 예상 밖의 선택이 새로운 길을 만든다."
  },

  {
    name: "MIRROR",
    message:
      "당신이 두려워하는 것은 사실 가장 원하는 것이다. 감정을 피하지 마라."
  }

];

oracleBtn.addEventListener("click", () => {

  const random =
    oracles[Math.floor(Math.random() * oracles.length)];

  cardName.textContent = random.name;

  oracleMessage.textContent = random.message;

  oracleCard.classList.remove("hidden");

  oracleCard.classList.remove("oracle-card");

  void oracleCard.offsetWidth;

  oracleCard.classList.add("oracle-card");

});
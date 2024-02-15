const playNow = getElementById("play_now");
const playAgain = getElementById("play_again");
let score = 0;
let life = 5;
function randomAlphaBet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetSplits = alphabets.split("");
  const indexCreate = Math.floor(Math.random() * 25);
  return alphabetSplits[indexCreate];
}
function highLightKey(id) {
  const key = getElementById(id);
  addClassList(key, "bg-violet-700");
}
function removeHightLightKey(id) {
  const key = getElementById(id);
  removeClassList(key, "bg-violet-700");
}
function gameOn() {
  const getRandomAlphabet = randomAlphaBet();
  const characterDisplay = getElementById("character_display");
  setInnerText(characterDisplay, getRandomAlphabet.toUpperCase());
  highLightKey(getRandomAlphabet);
}

playNow.addEventListener("click", () => {
  const homeScreen = getElementById("home");
  addClassList(homeScreen, "hidden");
  const playGroundScreen = getElementById("play_ground");
  removeClassList(playGroundScreen, "hidden");
  const initialLife = getElementById("life-score");
  initialLife.innerText = life;
  // game on going function
  gameOn();
});

document.addEventListener("keyup", function (e) {
  const userPressedKey = e.key;
  const displayKey = getElementById("character_display");
  const rightExpectedKey = displayKey.innerText.toLowerCase();
  if (userPressedKey === rightExpectedKey) {
    gameOn();
    removeHightLightKey(rightExpectedKey);
    score++;
    const scoreDisplay = getElementById("score-display");
    setInnerText(scoreDisplay, score);
  } else {
    life--;
    const lifeScore = getElementById("life-score");
    setInnerText(lifeScore, life);
    if (life === 0) {
      const playGroundScreen = getElementById("play_ground");
      addClassList(playGroundScreen, "hidden");
      const scoreScreen = getElementById("score-screen");
      removeClassList(scoreScreen, "hidden");
      const totalScore = getElementById("total_score");
      setInnerText(totalScore, score);
    }
  }
});

playAgain.addEventListener("click", () => {
  const scoreScreen = getElementById("score-screen");
  addClassList(scoreScreen, "hidden");
  const playGroundScreen = getElementById("play_ground");
  removeClassList(playGroundScreen, "hidden");
  score = 0;
  life = 5;
  const scoreDisplay = getElementById("score-display");
  setInnerText(scoreDisplay, score);
  const lifeScore = getElementById("life-score");
  setInnerText(lifeScore, life);
});

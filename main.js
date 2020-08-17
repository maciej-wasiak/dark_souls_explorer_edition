const playButton = document.querySelector(".play-button");
const deathCounter = document.querySelector(".death-counter");
const victoryCounter = document.querySelector(".victory-counter");
const result = document.querySelector(".result");
let rng;
let deathQuantity = 0;
let victoryQuantity = 0;

playButton.addEventListener("click", function (event) {
  rng = Math.floor(Math.random() * 100 + 1);
  if (rng < 5) {
    result.innerHTML = "<p class='victory'>VICTORY ACHIEVED</p>";
    victoryQuantity += 1;
    victoryCounter.innerHTML = "Victory Count: " + victoryQuantity;
  } else {
    result.innerHTML = "<p class='death'>YOU DIED</p>";
    deathQuantity += 1;
    deathCounter.innerHTML = "Death Count: " + deathQuantity;
  }
});

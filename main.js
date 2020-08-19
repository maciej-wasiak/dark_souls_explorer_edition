const playButton = document.querySelector(".play-button");
const deathCounter = document.querySelector(".death-counter");
const victoryCounter = document.querySelector(".victory-counter");
const result = document.querySelector(".result");
let rng;

if (localStorage.getItem('deathCounter') == null) {
  localStorage.setItem('deathCounter', 0)
}
if (localStorage.getItem('victoryCounter') == null) {
  localStorage.setItem('victoryCounter', 0)
}

let deathQuantity = parseFloat(localStorage.getItem('deathCounter'));
let victoryQuantity = parseFloat(localStorage.getItem('victoryCounter'));

playButton.addEventListener("click", function (event) {
  rng = Math.floor(Math.random() * 100 + 1);
  if (rng < 5) {
    result.innerHTML = "<p class='victory'>VICTORY ACHIEVED</p>";
    victoryQuantity += 1;
    localStorage.setItem('victoryCounter', victoryQuantity)
    victoryCounter.innerHTML = "Victory Count: " + victoryQuantity;
  } else {
    result.innerHTML = "<p class='death'>YOU DIED</p>";
    deathQuantity += 1;
    localStorage.setItem('deathCounter', deathQuantity)
    deathCounter.innerHTML = "Death Count: " + deathQuantity;
  }
});

const playButton = document.querySelector(".play-button");
const deathCounter = document.querySelector(".death-counter");
const victoryCounter = document.querySelector(".victory-counter");
const result = document.querySelector(".result");
let rng;

if (localStorage.getItem('deathCounter') == null) {
  localStorage.setItem('deathCounter', 0)
} else {
  deathCounter.innerHTML = "Deaths: " + parseFloat(localStorage.getItem('deathCounter'));
}
if (localStorage.getItem('victoryCounter') == null) {
  localStorage.setItem('victoryCounter', 0)
} else {
  victoryCounter.innerHTML = "Victories: " + parseFloat(localStorage.getItem('victoryCounter'));
}

let deathQuantity = parseFloat(localStorage.getItem('deathCounter'));
let victoryQuantity = parseFloat(localStorage.getItem('victoryCounter'));

playButton.addEventListener("click", function (event) {
  document.querySelector('.result').style.background = 
    'linear-gradient(transparent,black, rgba(0, 0, 0, 0.9), black, transparent)';
  rng = Math.floor(Math.random() * 100 + 1);
  if (rng < 5) {
    result.innerHTML = "<p class='victory'>VICTORY ACHIEVED</p>";
    victoryQuantity += 1;
    localStorage.setItem('victoryCounter', victoryQuantity)
    victoryCounter.innerHTML = "Victories: " + victoryQuantity;
  } else {
    result.innerHTML = "<p class='death'>YOU DIED</p>";
    deathQuantity += 1;
    localStorage.setItem('deathCounter', deathQuantity)
    deathCounter.innerHTML = "Deaths: " + deathQuantity;
  }
});

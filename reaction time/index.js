const sectionChange = document.querySelector(".section");
const button = document.querySelector("button");
let startTime = null;
let reactionTime = null;

button.addEventListener("click", () => {
  sectionChange.style.backgroundColor = "red";
  sectionChange.innerHTML = `<div class="text"> wait for green</div>`;
  setTimeout(() => {
    sectionChange.style.backgroundColor = "green";
    sectionChange.innerHTML = `<div class="text">Click quickly as you can</div>`;
    startTime = Date.now;
  }, (Math.floor(Math.random() * 3) + 1) * 1000);
});
sectionChange.addEventListener("clik", () => {
  if (startTime === null) return;
  if (reactionTime !== null) return;
  reactionTime = Date.now() - startTime;
  sectionChange.innerHTML = reactionTime;
});

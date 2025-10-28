const sectionChange = document.querySelector(".section");
const button = document.querySelector("button");
const clickContinue = document.querySelector(".text-small");

let startTime = null;
let reactionTime = null;

button.addEventListener("click", () => {
  sectionChange.style.backgroundColor = "red";
  sectionChange.innerHTML = `<div class="text"> wait for green</div>`;
  setTimeout(() => {
    sectionChange.style.backgroundColor = "green";
    sectionChange.innerHTML = `<div class="text">Click quickly as you can</div>`;
    startTime = Date.now();
  }, (Math.floor(Math.random() * 3) + 1) * 1000);
});

sectionChange.addEventListener("click", () => {
  if (startTime === null) return;
  if (reactionTime !== null) return;
  console.log(Date.now(), startTime);
  reactionTime = Date.now() - startTime;
  sectionChange.style.backgroundColor = "blue";
  sectionChange.innerHTML = `
    <div class="text"> 
      <img src="./n7cnecfpglc9e5bmku03o93pg2.png" width="70" height="70" /> 
      <p>Your Reaction Time</p>
      <p>${reactionTime} ms</p>
      <button class="text-small">Click to continue</button>
    </div>
  `;

  const resetBtn = document.querySelector(".text-small");

  resetBtn.addEventListener("click", () => {
    sectionChange.innerHTML = ` `;
  });
});

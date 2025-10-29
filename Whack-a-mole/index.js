const startBtn = document.querySelector("button");
const moles = document.querySelectorAll(".mole");
const scoreBox = document.querySelector(".score");
let score = 0;
startBtn.addEventListener("click", () => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    console.log(randomIndex);
    mole.style.top = "35%";
    setTimeout(() => {
      mole.style.top = "100%";
    }, 1000);
  }, 2000);
});
moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    score++;
    render();
  });
});
const render = () => {
  scoreBox.textContent = `Score:${score}`;
};

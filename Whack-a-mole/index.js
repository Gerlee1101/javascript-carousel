const startBtn = document.querySelector("button");
const moles = document.querySelectorAll(".mole");
const scoreBox = document.querySelector(".score");
let score = 0;
let isClicked = false;
let moleCliked = false;
startBtn.addEventListener("click", () => {
  if (isClicked) {
    return;
  }
  isClicked = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    console.log(randomIndex);
    moleCliked = false;
    mole.style.top = "35%";
    setTimeout(() => {
      mole.style.top = "100%";
    }, 2000);
  }, 2000);
});
moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    if (moleCliked) return;
    moleCliked = true;
    score++;
    render();
  });
});
const render = () => {
  scoreBox.textContent = `Score:${score}`;
};

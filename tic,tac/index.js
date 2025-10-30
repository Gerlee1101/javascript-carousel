const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector(".resetButton");
let turn = "X";
let isClicked = false;
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.textContent = turn;
    turn = turn === "X" ? "O" : "X";
  });
});

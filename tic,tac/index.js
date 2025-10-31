const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#resetButton");
let text = document.querySelector(".text-box");
let win = document.querySelector("p");
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turn = "X";
let gameOver = false;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameOver) return;
    if (cell.textContent !== "") return;
    cell.textContent = turn;
    text.style.top = "30px";
    winText();

    if (cell === "X" || "O") {
      turn = turn === "X" ? "O" : "X";
      render();
    }
  });
});

const render = () => {
  cells.forEach((cell) => {
    text.textContent = `Turn: ${turn}`;
  });
};

resetBtn.addEventListener("click", () => {
  cells.forEach((cell) => (cell.textContent = ""));
  document.querySelector("p").textContent = "";
  text.textContent = `Turn: X`;
  gameOver = false;
  turn = "X";
});

function winText() {
  winner.forEach((array) => {
    const [a, b, c] = array;
    if (
      cells[a].textContent === turn &&
      cells[b].textContent === turn &&
      cells[c].textContent === turn
    ) {
      win.textContent = cells[a].textContent + `:` + "Wins";
      text.textContent = "";
      text.style.display = none;
      gameOver = true;
    }
  });
}

const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#resetButton");
let text=document.querySelector(".text-box");

let turn = "X";
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if(cell.textContent!=="")
      return;
 cell.textContent = turn;
 text.style.top="30px"
 render();
    if(cell==="X"||"0"){
          turn = turn === "X" ? "O" : "X";
          render();
    }
  });
});
const render = () => {
  cells.forEach((cell)=>{
text.textContent=`Turn: ${turn}`;
});
}
resetBtn.addEventListener("click", ()=>{
cells.forEach(cell=>(cell.textContent=""));
});

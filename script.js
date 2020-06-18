const container = document.getElementById("container");
const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.resetBtn');

function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', e => e.target.style.backgroundColor = "black");
    grid.appendChild(cell).className = "grid-item";
  };
};

function addBtn(){
  let button = document.createElement("button");
  button.innerText = "reset";
  resetBtn.appendChild(button).className = "button-item";
}

makeRows(16, 16);
addBtn();


const container = document.getElementById("container");
const grid = document.querySelector('.grid');
const resetButton = document.querySelector(".resetBtn");


function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', e => e.target.style.backgroundColor = "black");
    grid.appendChild(cell).className = "grid-item";
  };
};


resetButton.addEventListener('click', reset());

function reset(){
  container.querySelectorAll('.cell').forEach(cell => cell.remove());
}

makeRows(32, 32);


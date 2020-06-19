const container = document.getElementById("container");
const grid = document.querySelector('.grid');

function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', e => e.target.style.backgroundColor = "black");
    grid.appendChild(cell).className = "grid-item";
  };
};

function reset(){
  let squares = window.prompt("How many squares?");
}

const resetButton = document.querySelector(".resetBtn");
resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    makeRows(16,16);
});



makeRows(16, 16);


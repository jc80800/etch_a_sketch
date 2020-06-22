const container = document.getElementById("container");
const grid = document.querySelector('.grid');
const resetButton = document.querySelector(".resetBtn");
const RGB = document.querySelector('.randomRGB');
const shade = document.querySelector('.shade');

function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', e => e.target.style.backgroundColor = "black");
    cell.classList.add('cell');
    grid.appendChild(cell).className = "grid-item";
  };
};

function reset(){
  let grid = document.querySelector('.grid');
  while (grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
}


resetButton.addEventListener('click', () => {
  reset();
  let square = window.prompt("How many squares? (keep within range of 16 - 64");
  makeRows(square, square);
});


makeRows(16, 16);


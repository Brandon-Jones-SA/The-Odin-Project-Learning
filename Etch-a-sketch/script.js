let board = document.querySelector('.board');
let inputValue = document.querySelector('.numberOfSquares');
let submitButton = document.querySelector('.changeSize');
let num;
let normal = document.querySelector('.normal');
let random = document.querySelector('.randomColor');
let darker = document.querySelector('.darkerColor');
let darkNum = 255;
changeBoard(16);

submitButton.addEventListener('click', function () {
  let divs = board.querySelectorAll('div');
  divs.forEach(function (div) {
    board.removeChild(div);
    num = inputValue.value;
    changeBoard(num);
    inputValue.value = '';
    // inputValue.value = '';
  });
});
//select the board and define the table
function changeBoard(num) {
  darkNum = 255;
  board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  //populate the div with squares
  for (let i = 0; i < num * num; i++) {
    let squares = document.createElement('div');
    squares.style.border = '1px solid black';
    board.appendChild(squares);
  }
  normalColor();
  normal.addEventListener('click', normalColor);
  random.addEventListener('click', randomColor);
  darker.addEventListener('click', darkerColor);
}

//listen for the hover event
function normalColor() {
  let squares = board.querySelectorAll('div');
  squares.forEach(function (div) {
    div.addEventListener('mouseover', function () {
      this.style.backgroundColor = 'grey';
    });
  });
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  return color;
}

function randomColor() {
  let squares = board.querySelectorAll('div');
  squares.forEach(function (div) {
    div.addEventListener('mouseover', function () {
      this.style.backgroundColor = generateRandomColor();
    });
  });
}

function darkerColor() {
  let squares = board.querySelectorAll('div');
  squares.forEach(function (div) {
    div.addEventListener('mouseover', function () {
      if (darkNum > 0) {
        darkNum--;
      }
      const bgCol = `rgb(${darkNum},${darkNum},${darkNum})`;
      this.style.backgroundColor = bgCol;
    });
  });
}

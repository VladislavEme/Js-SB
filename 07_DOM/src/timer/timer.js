let input = document.querySelector('.input');
let button = document.querySelector('.button');
let div = document.querySelector('.div');

let currentNumber = 0;
let timer;

function startTimer() {
  div.textContent = --currentNumber;
  if (currentNumber <= 0) clearInterval(timer);
}

function onClick() {
  clearInterval(timer);
  currentNumber = input.value;
  div.textContent = currentNumber;
  timer = setInterval(startTimer, 1000);
}

button.addEventListener('click', onClick);

//npm run test:unit timer.test

let input = document.createElement('input');
let h2 = document.createElement('h2');

document.body.appendChild(input);
document.body.appendChild(h2);

let timeout;

input.addEventListener('input', function () {
  clearTimeout(timeout);
  timeout = setTimeout(addtext, 800);
});

function addtext() {
  h2.textContent = input.value;
}

//npm run test:unit delay.test

const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');
const counterEl = document.querySelector('#counter');

let counter = 0;
counterEl.textContent = counter;

function decCount(e) {
   counter--;
   counterEl.textContent = counter;
}
decBtn.addEventListener('click', decCount);

//////////////////////////

function incCount(e) {
   counter++;
   counterEl.textContent = counter;
}
incBtn.addEventListener('click', incCount);

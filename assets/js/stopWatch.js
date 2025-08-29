`use strict`;

//start запустити мс

//reset скинути мс

//stop зупинити мс

let time = 0; // в миллисекундах
let intervalId = null;

const timeEl = document.querySelector('.time');
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll('.btn-container > button');

// Обновление отображаемого времени
function updateTime(ms) {
   const minutes = Math.floor(ms / 60000);
   const seconds = Math.floor((ms % 60000) / 1000);
   const milliseconds = ms % 1000;

   // Форматируем числа с ведущими нулями
   const minStr = String(minutes).padStart(2, '0');
   const secStr = String(seconds).padStart(2, '0');
   const msStr = String(milliseconds).padStart(3, '0');

   timeEl.textContent = `${minStr}:${secStr}:${msStr}`;
}

// Старт
function startBtnH() {
   if (!intervalId) {
      intervalId = setInterval(() => {
         time += 10; // Увеличиваем на 10 миллисекунд
         updateTime(time);
      }, 10);
   }
}

startBtn.onclick = startBtnH;

// Стоп
function stopBtnH() {
   clearInterval(intervalId);
   intervalId = null;
}

stopBtn.onclick = stopBtnH;

// Сброс
function resetBtnH() {
   clearInterval(intervalId);
   intervalId = null;
   time = 0;
   updateTime(time);
}

resetBtn.onclick = resetBtnH;

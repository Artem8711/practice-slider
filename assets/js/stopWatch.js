`use strict`;

//start запустити мс

//reset скинути мс

//stop зупинити мс

let time = 0;
let intervalId = null;

const timeEl = document.querySelector('.time');
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll('.btn-container > button');

function startBtnH() {
   function tick() {
      time++;
      updateTime(time);
   }
   if (!intervalId) {
      intervalId = setInterval(tick, 10);
   }
}

startBtn.onclick = startBtnH;
///////////////////////

function stopBtnH() {
   clearInterval(intervalId);
   intervalId = null;
}

stopBtn.onclick = stopBtnH;

function resetBtnH() {
   time = 0;
   updateTime(time);
}

resetBtn.onclick = resetBtnH;

///////////////////////////////////////////////////////////////////

const updateTime = function (time) {
   timeEl.textContent = time;
};

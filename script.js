const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTime, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime += Date.now() - startTime;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = '00:00:00';
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

function updateTime() {
  const totalTime = elapsedTime + Date.now() - startTime;
  const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTime / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTime / 1000) % 60);
  const milliseconds = Math.floor((totalTime) % 1000);

  display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
}

// date to be reached
const newYears = '1 Jan 2022';

//define the elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  //difference between two time (it return milliseconds thats why we divide the totalSeconds by 1000 to turn it seconds)
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);
  console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);

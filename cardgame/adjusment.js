const cards = document.querySelectorAll('.card');
const reds = document.querySelectorAll('.red');
const blues = document.querySelectorAll('.blue');
const counter1 = document.querySelector('.counter_1');
const counter2 = document.querySelector('.counter_2');
let redList = [];
let blueList = [];
const notification = document.querySelector('.notification');
const alertTxt = document.querySelector('.alert');
const startBtn = document.querySelector('.start');
const backdrop = document.querySelector('.backdrop');
let check = false;

startBtn.addEventListener('click', () => {
  notification.style.display = 'none';
  backdrop.style.display = 'none';
  reds.forEach((red) => {
    red.classList = 'card red';
  });
  blues.forEach((blue) => {
    blue.classList = 'card blue';
  });
  redList = [];
  blueList = [];
  counter1.textContent = 0;
  counter2.textContent = 0;
  gamePlay();
});

function gamePlay() {
  if (check) {
    return;
  } else {
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        card.classList.toggle('isflipped');

        const control = card.classList.contains('isflipped');
        const teamControl = card.classList.contains('red');

        if (control) {
          const number = Math.floor(Math.random() * 13) + 1;
          const imp = card.querySelector('.implement');
          imp.innerHTML = number;

          if (teamControl) {
            redList.push(number);
            counter1.textContent = redList.reduce((total, num) => {
              return (total += num);
            }, 0);
          } else {
            blueList.push(number);
            counter2.textContent = blueList.reduce((total, num) => {
              return (total += num);
            }, 0);
          }
          if (counter1.textContent === '21') {
            setTimeout(function () {
              notification.style.display = 'flex';
              backdrop.style.display = 'flex';
              alertTxt.textContent = 'Player 1 Wins!';
              check = true;
            }, 250);
          } else if (counter2.textContent === '21') {
            setTimeout(function () {
              notification.style.display = 'flex';
              backdrop.style.display = 'flex';
              alertTxt.textContent = 'Player 2 Wins!';
              check = true;
            }, 250);
          }
        } else {
          const wasteNumber = parseInt(
            card.querySelector('.implement').textContent
          );

          if (teamControl) {
            const wasteIndex = redList.indexOf(wasteNumber);
            redList.splice(wasteIndex, 1);
            counter1.textContent = redList.reduce((total, num) => {
              return (total += num);
            }, 0);
          } else {
            const wasteIndex = blueList.indexOf(wasteNumber);
            blueList.splice(wasteIndex, 1);
            counter2.textContent = blueList.reduce((total, num) => {
              return (total += num);
            }, 0);
          }
          if (counter1.textContent === '21') {
            setTimeout(function () {
              notification.style.display = 'flex';
              backdrop.style.display = 'flex';
              alertTxt.textContent = 'Player 1 Wins!';
              check = true;
            }, 250);
          } else if (counter2.textContent === '21') {
            setTimeout(function () {
              notification.style.display = 'flex';
              backdrop.style.display = 'flex';

              alertTxt.textContent = 'Player 2 Wins!';
              check = true;
            }, 250);
          }
        }
      });
    });
  }
}

// Імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт бібліотек
import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const dateTimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let userSelectedDate;

// Функція для форматування чисел, додавання нулів на початок
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Функція для підрахунку значень таймера
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeDifference = userSelectedDate - currentTime;

  if (timeDifference <= 0) {
    // Таймер завершився
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  // Оновлюємо інтерфейс таймера
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}

function startCountdown() {
  // Запуск таймера
  setInterval(updateCountdown, 1000);
}

flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate.getTime() <= new Date().getTime()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.setAttribute('disabled', 'true');
    } else {
      startButton.removeAttribute('disabled');
    }
  },
});

startButton.addEventListener('click', () => {
  startCountdown();
});
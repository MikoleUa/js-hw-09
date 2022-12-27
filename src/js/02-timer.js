import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selectedTime;
let adInerval;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = getUNIXtimeFromSelectedDate(selectedDates[0]);
  },
};
const refs = {
  datetimeinput: document.querySelector('#datetime-picker'),
  buttonDateStart: document.querySelector('[data-start]'),
  spanDays: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};
const fpDate = new flatpickr(refs.datetimeinput, options);

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
function addLeadingZero(pad) {
  return pad.toString().padStart(2, '0');
}
function getUNIXtimeFromSelectedDate(date) {
  return Date.parse(date);
}
function getDiferenceCuretnDateSelectedDate(date) {
  return date - Date.now();
}
function onButtonStartTimer() {
  if (Date.now() > selectedTime) {
    alert('Select curretn date');
  } else {
    adInerval || (adInerval = setInterval(changeSpanContent, 1000));
  }
}
function changeSpanContent() {
  const difInTime = getDiferenceCuretnDateSelectedDate(selectedTime);
  const dateObj = convertMs(difInTime);
  refs.spanDays.textContent = addLeadingZero(dateObj.days);
  refs.spanHours.textContent = addLeadingZero(dateObj.hours);
  refs.spanMinutes.textContent = addLeadingZero(dateObj.minutes);
  refs.spanSeconds.textContent = addLeadingZero(dateObj.seconds);
}
refs.buttonDateStart.addEventListener('click', onButtonStartTimer);

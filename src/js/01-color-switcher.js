function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStartRef = document.querySelector('[data-start]');
const buttonStopRef = document.querySelector('[data-stop]');

buttonStartRef.addEventListener('click', onButtonStart);
buttonStopRef.addEventListener('click', onButtonStop);

let IdInterval;
function onButtonStart() {
  IdInterval || (IdInterval = setInterval(changeColor, 1000));
  (buttonStartRef.disabled = true) && (buttonStopRef.disabled = false);
}
function onButtonStop() {
  clearInterval(IdInterval);
  (buttonStopRef.disabled = true) && (buttonStartRef.disabled = false);
}
function changeColor() {
  document.body.style = `background: ${getRandomHexColor()}`;
}

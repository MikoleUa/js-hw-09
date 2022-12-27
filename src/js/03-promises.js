function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res(
          document.body.insertAdjacentHTML(
            'beforeend',
            `<span style ="display: block; background-color: yellow; width: 300px">✅ Fulfilled promise ${position} in ${delay}ms</span>`
          )
        );
      } else {
        rej(
          document.body.insertAdjacentHTML(
            'beforeend',
            `<span style ="display: block; background-color: grey; width: 300px">❌ Rejected promise ${position} in ${delay}ms</span>`
          )
        );
      }
    }, delay);
  })
    .then(res => {
      console.log(res);
    })
    .catch(rej => {
      console.log(rej);
    });
}

const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submitButton: document.querySelector('[type="submit"]'),
};
const { delay, step, amount, submitButton } = refs;

refs.submitButton.addEventListener('click', onsubmitButtonClick);

function onsubmitButtonClick(e) {
  e.preventDefault();
  mainFn();
  function mainFn(n = 1) {
    let count = n;
    let stepDelay = ~~delay.value + ~~step.value * count;

    if (Number(amount.value) < count) {
      return;
    }
    createPromise(count, stepDelay);
    mainFn((count += 1));
  }
}

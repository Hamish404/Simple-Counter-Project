const counter = document.querySelector('.counter');
const decButton = document.querySelector('.decButton');
const resButton = document.querySelector('.resButton');
const incButton = document.querySelector('.incButton');
const downButton = document.querySelector('.downButton');
const upButton = document.querySelector('.upButton');
let downIntervalId;
let upIntervalId;


decButton.addEventListener('click', (event) => {
  counter.innerText--;
  updateCounterStyle();
})

resButton.addEventListener('click', (event) => {
  clearInterval(downIntervalId);
  clearInterval(upIntervalId);
  counter.innerText = '0';
  updateCounterStyle();
})

incButton.addEventListener('click', (event) => {
  counter.innerText++;
  updateCounterStyle();
})

downButton.addEventListener('click', (event) => {
  clearInterval(downIntervalId);
  clearInterval(upIntervalId);
  downIntervalId = setInterval(downIntervalFunction, 500);
});

upButton.addEventListener('click', (event) => {
  clearInterval(downIntervalId);
  clearInterval(upIntervalId);
  upIntervalId = setInterval(upIntervalFunction, 500);
});

const downIntervalFunction = () => {
  counter.innerText--;
  updateCounterStyle();
}

const upIntervalFunction = () => {
  counter.innerText++;
  updateCounterStyle();
}

const updateCounterStyle = () => {
  if (counter.innerText > 0) {
    counter.classList.remove('redCounter');
    counter.classList.add('greenCounter');
  } else if (counter.innerText < 0) {
    counter.classList.remove('greenCounter');
    counter.classList.add('redCounter');
  } else {
    counter.classList.remove('greenCounter', 'redCounter');
  }
}

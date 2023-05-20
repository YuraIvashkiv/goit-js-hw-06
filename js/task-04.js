let counterValue = 0;
const counter = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action ="decrement"]');
const incrementBtn = document.querySelector('[data-action ="increment"]');
decrementBtn.addEventListener('click',  decrementEl);
incrementBtn.addEventListener('click', incrementEl);

function decrementEl() {
  counterValue -= 1;
  updateCounter();
};

function incrementEl() {
  counterValue += 1;
  updateCounter();
};
function updateCounter() {
  counter.textContent = counterValue;
}
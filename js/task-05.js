const inputEL = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEL.addEventListener('input', nameInput);

function nameInput() {
    const name = inputEL.value;
    if (name.trim() != '') {
        outputEl.textContent = name;
    } else {
        outputEl.textContent = 'Anonymous';
    }
}
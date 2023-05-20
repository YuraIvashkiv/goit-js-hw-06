const fontSizeEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

fontSizeEl.addEventListener('input', fontSizeChange);

function fontSizeChange() {
    const fontSize = fontSizeEl.value;
    spanEl.style.fontSize = `${fontSize}px`
}
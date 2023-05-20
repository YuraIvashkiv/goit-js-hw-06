const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', formElFunction);

function formElFunction(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {};

    for (let i = 0; i < form.elements.length; i + 1) {
        const element = form.elements[i];

        if (element.name) {
            formData[element.name] = element.value;
        }
    }
if (!isFormValid(formData)) {
    alert('Усі поля мають бути заповнені.');
    return;
}
     console.log(formData);
  form.reset();
}
function isFormValid(formData) {
  for (const key in formData) {
    if (formData[key] === '') {
      return false;
    }
  }
  return true;
}
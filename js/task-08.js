const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (!isFormValid(form)) {
    alert('Усі поля мають бути заповнені.');
    return;
  }

  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);
  form.reset();
}

function isFormValid(form) {
  return [...form.elements].every((element) => element.value !== '');
}

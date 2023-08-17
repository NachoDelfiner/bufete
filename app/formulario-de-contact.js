// LOGICA DE CIERRE DE FORMULARIO
var crossForm = document.querySelector("#cross-form");
crossForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});
// VERIFICACION DE CAMPOS DE FORMULARIO
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const errorMsj = document.querySelector("#errorMsj");
const errorMsj2 = document.querySelector("#errorMsj2");
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const verificacionNombre = () => {
  const valueNameInput = nameInput.value.trim();
  if (!valueNameInput === namePattern.test(valueNameInput)) {
    errorMsj.style.display = "block";
  } else {
    errorMsj.style.display = "none";
  }
};
nameInput.addEventListener("input", verificacionNombre);

const verificacionEmail = () => {
  const valueEmailInput = emailInput.value.trim();
  if (valueEmailInput !== "" && !emailPattern.test(valueEmailInput)) {
    errorMsj2.style.display = "block";
  } else {
    errorMsj2.style.display = "none";
  }
};
emailInput.addEventListener("blur", verificacionEmail);

const formContainer = document.querySelector("#formContainer");
const exitoMsj = document.querySelector("#exito");
const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
    mode: "no-cors",
  });
  if (response.ok) {
    e.preventDefault();
    this.reset();
    formContainer.style.display = "none";
    exitoMsj.style.display = "block";
  }
}

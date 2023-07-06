// VERIFICACION DE CAMPOS
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

// LO SIGUIENTE ES COMPROBAR SI LOS MENSAJES DE ERROR
// ESTAN ACTIVOS NO DEJAR ENVIAR EL FORMULARIO

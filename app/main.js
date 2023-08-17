// LOGICA DE ROTACION AUTOMATICA DEL CARROUSEL
document.addEventListener("DOMContentLoaded", function () {
  var carousel = new bootstrap.Carousel(
    document.querySelector("#carouselExample"),
    {
      interval: 4000,
      pause: false,
    }
  );

  carousel.cycle();
});

// LOGICA DE ROTACION AUTOMATICA DEL CARROUSEL DE LOS TESTIMONIOS
document.addEventListener("DOMContentLoaded", function () {
  var carousel = new bootstrap.Carousel(
    document.querySelector("#carouselExampleIndicators"),
    {
      interval: 6000,
      pause: false,
    }
  );

  carousel.cycle();
});

// LOGICA DE LOS NUMEROS DE ABOUT
const resultadosElementos = [
  document.getElementById("resultado1"),
  document.getElementById("resultado2"),
  document.getElementById("resultado3"),
  document.getElementById("resultado4"),
];

const numerosObjetivos = [95, 325, 86, 25];
const tiempoIntervalo = 20;
const simbolos = ["%", "", "+", "%"];

let contadores = [0, 0, 0, 0];
let intervalos = [null, null, null, null];
let numerosAlcanzados = [false, false, false, false];

function iniciarContador(indice) {
  if (numerosAlcanzados[indice]) {
    return;
  }

  if (!intervalos[indice]) {
    intervalos[indice] = setInterval(() => {
      contadores[indice]++;

      const simbolo = simbolos[indice];

      resultadosElementos[indice].textContent = contadores[indice] + simbolo;

      if (contadores[indice] === numerosObjetivos[indice]) {
        detenerContador(indice);
        numerosAlcanzados[indice] = true;
      }
    }, tiempoIntervalo);
  }
}

function detenerContador(indice) {
  clearInterval(intervalos[indice]);
  intervalos[indice] = null;
}

function estaEnVista(elemento) {
  const rect = elemento.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  for (let i = 0; i < resultadosElementos.length; i++) {
    if (estaEnVista(resultadosElementos[i])) {
      iniciarContador(i);
      resultadosElementos[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);

// LOGICA DE APERTURA DE FORMULARIO
var buttomOpenForm = document.querySelector("#buttom-open-form");
buttomOpenForm.addEventListener("click", () => {
  formContainer.style.display = "block";
});

// LOGICA DE CIERRE DE FORMULARIO
var crossForm = document.querySelector("#cross-form");
crossForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});

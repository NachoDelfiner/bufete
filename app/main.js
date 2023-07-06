// LOGICA DE ROTACION AUTOMATICA DEL CARROUSEL
document.addEventListener("DOMContentLoaded", function () {
  var carousel = new bootstrap.Carousel(
    document.querySelector("#carouselExample"),
    {
      interval: 6000,
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

const numerosObjetivos = [95, 425, 86, 25];
const tiempoIntervalo = 3000;
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
    }, tiempoIntervalo / numerosObjetivos[indice]);
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

// LOGICA CARROUSEL DE TESTIMONIOS

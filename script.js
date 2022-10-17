// Seteo las variables
const container = document.getElementById("container");

// Crea un grid dinamico tomando los valores de fila y columna
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows); // Valores para el grid dinamico
  container.style.setProperty("--grid-cols", cols); // Valores para el grid dinamico
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  hover();
}

function randomColor() {
  let letras = "012345679abcdef";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hover() {
  let items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `${randomColor()}`;
    });
  });
}

// Variables para el grid

let columnas = 16;
let filas = 16;

makeRows(filas, columnas);

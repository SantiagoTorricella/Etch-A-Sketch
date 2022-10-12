// Seteo las variables
const container = document.getElementById("container");


// Crea un grid dinamico tomando los valores de fila y columna
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows); // Valores para el grid dinamico
  container.style.setProperty('--grid-cols', cols); // Valores para el grid dinamico
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);





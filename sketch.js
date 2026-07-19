let tabla;
let sorteo = [];

function preload() {
  tabla = loadTable("tabla_palabras.csv", "csv");
}

function setup() {
  createCanvas(windowWidth, 500);
  textFont("monospace");

  // posiciones aleatorias para tus datos
  for (let i = 0; i < 100; i++) {
    sorteo.push(random(50, 750));
  }
}

function draw() {
  background(255, 255, 255);

  for (let i = 0; i < tabla.getRowCount(); i++) {
    let value = int(tabla.getString(i, 1));

    let x = sorteo[i] + sin(frameCount * 0.05 + i) * 20;
    let y = map(value, 50, 259, 0, 800) + cos(frameCount * 0.03 + i) * 20;
    let r = map(value, 50, 230, 30, 100);

    // círculos verdes
    fill(0, 255, 70, 120);
    noStroke();
    circle(x, y, r);

    // texto blanco
    fill(255, 220, 0);
    text(tabla.getString(i, 0), x, y);
  }
}

let tabla;
let sorteo = [];

function preload() {
  tabla = loadTable("tabla_palabras.csv", "csv");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(16);

  for (let i = 0; i < tabla.getRowCount(); i++) {
    sorteo.push(random(width));
  }
}

function draw() {
  background(0, 80);

  for (let i = 0; i < tabla.getRowCount(); i++) {

    let value = int(tabla.getString(i, 1));

    let x = sorteo[i] + sin(frameCount * 0.05 + i) * 10;
    let y = map(value, 50, 259, height, 0);

    fill(0, 255, 70, 150);
    noStroke();
    circle(x, y, 30);

    fill(255);
    text(tabla.getString(i, 0), x, y);
  }
}

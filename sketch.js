let tabla;
let sorteo = [];

// matrix
let cols = [];
let symbols = "01アイウエオカキクケコ";

function preload() {
  tabla = loadTable("tabla_palabras.csv", "csv");
}

function setup() {
  createCanvas(800, 800);

  textFont("monospace");
  textSize(18);

  // posiciones
  for (let i = 0; i < tabla.getRowCount(); i++) {
    sorteo.push(random(50, 750));
  }

  // columnas matrix
  for (let x = 0; x < width; x += 20) {
    cols.push(random(height));
  }
}

function draw() {

  // fondo transparente
  background(0, 80);

  // ===== MATRIX =====

  fill(0, 255, 70);

  for (let i = 0; i < cols.length; i++) {

    let char = symbols.charAt(floor(random(symbols.length)));

    text(char, i * 20, cols[i]);

    cols[i] += random(5, 15);

    if (cols[i] > height) {
      cols[i] = 0;
    }
  }

  // ===== TUS DATOS =====

  for (let i = 0; i < tabla.getRowCount(); i++) {

    let value = int(tabla.getString(i, 1));

    let x = sorteo[i] + sin(frameCount * 0.05 + i) * 20;

    let y =
      map(value, 50, 259, 0, 800) +
      cos(frameCount * 0.03 + i) * 20;

    let r = map(value, 50, 230, 30, 100);

    // círculo
    fill(0, 255, 70, 120);
    noStroke();
    circle(x, y, r);

    // texto
    fill(255);
    text(tabla.getString(i, 0), x, y);
  }
}

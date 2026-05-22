let tabla;
let sorteo = [];

// MATRIX VARIABLES
let streams = [];
let symbols = "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function preload() {
  tabla = loadTable("tabla_palabras.csv", "csv");
}

function setup() {
  createCanvas(800, 800);
  textFont("monospace");

  // posiciones aleatorias para tus datos
  for (let i = 0; i < 100; i++) {
    sorteo.push(random(50, 750));
  }

  // crear columnas matrix
  for (let x = 0; x < width; x += 20) {
    streams.push(new Stream(x));
  }
}

function draw() {

  // fondo negro semi-transparente
  background(0, 150);

  // ===== MATRIX BACKGROUND =====
  for (let s of streams) {
    s.update();
    s.render();
  }

  // ===== TU VISUALIZACIÓN =====
  for (let i = 0; i < tabla.getRowCount(); i++) {

    let value = int(tabla.getString(i, 1));

    let x = sorteo[i] + sin(frameCount * 0.05 + i) * 20;

    let y =
      map(value, 50, 259, 0, 800) +
      cos(frameCount * 0.03 + i) * 20;

    let r = map(value, 50, 230, 30, 100);

    // círculos verdes
    fill(0, 255, 70, 120);
    noStroke();
    circle(x, y, r);

    // texto blanco
    fill(255);
    text(tabla.getString(i, 0), x, y);
  }
}

// =========================
// MATRIX CLASS
// =========================

class Stream {
  constructor(x) {
    this.x = x;
    this.y = random(-1000, 0);
    this.speed = random(4, 10);
    this.length = random(5, 20);
  }

  update() {
    this.y += this.speed;

    if (this.y > height + 200) {
      this.y = random(-500, 0);
    }
  }

  render() {
    for (let i = 0; i < this.length; i++) {

      let char = random(symbols);

      fill(0, 255, 70, 150 - i * 7);

      text(char, this.x, this.y - i * 20);
    }
  }
}

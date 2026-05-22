let tabla;
let sorteo = [];
let streams = [];

function preload() {
  tabla = loadTable("tabla_palabras.csv", "csv");
}

function setup() {
  createCanvas(800, 800);
  textFont('monospace');
  textSize(20);

  // posiciones aleatorias para tus círculos
  for (let i = 0; i < 100; i++) {
    sorteo.push(random(50, 750));
  }

  // inicializar columnas Matrix
  let x = 0;
  for (let i = 0; i < width / 20; i++) {
    streams.push(new Stream(x, random(-1000, 0)));
    x += 20;
  }
}

function draw() {
  // fondo negro con transparencia para dejar rastro
  background(0, 150);

  // --- Fondo Matrix ---
  streams.forEach(stream => {
    stream.render();
  });

  // --- Visualización de palabras ---
  for (let i = 0; i < tabla.getRowCount(); i++) {
    let value = int(tabla.getString(i, 1));

    let x = sorteo[i] + sin(frameCount * 0.05 + i) * 20;
    let y = map(value, 50, 259, 0, 800) + cos(frameCount * 0.03 + i) * 20;
    let r = map(value, 50, 230, 30, 100);

    // círculos verdes semi-transparentes
    fill(0, 255, 70, 150);
    noStroke();
    circle(x, y, r);

    // etiquetas en blanco
    fill(255);
    text(tabla.getString(i, 0), x, y);
  }
}

// --- Clase para letras Matrix ---
class Stream {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(4, 12); // más rápido
    this.symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  render() {
    let char = this.symbols.charAt(floor(random(this.symbols.length)));
    fill(0, 255, 70);
    text(char, this.x, this.y);
    this.y += this.speed;

    if (this.y > height) {
      this.y = random(-200, 0);
    }
  }
}

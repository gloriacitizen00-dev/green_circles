let circles = [];
let tabla;

function preload() {
  // Asegúrate de que el archivo CSV esté en tu repo
  // y que tenga una columna llamada "Palabra"
  tabla = loadTable("tabla_palabras.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);

  // Crear un círculo por cada fila del CSV
  for (let i = 0; i < tabla.getRowCount(); i++) {
    let palabra = tabla.getString(i, "Palabra"); // usa el nombre real de tu columna
    circles.push(new FallingCircle(random(width), random(-500, 0), palabra));
  }
}

function draw() {
  background(0);

  for (let c of circles) {
    c.update();
    c.render();
  }
}

class FallingCircle {
  constructor(x, y, word) {
    this.x = x;
    this.y = y;
    this.speed = random(2, 6);
    this.size = random(40, 80);
    this.word = word;
  }

  update() {
    this.y += this.speed;
    if (this.y > height + this.size) {
      this.y = random(-200, 0); // reinicia arriba
    }
  }

  render() {
    fill(0, 255, 70, 180); // verde Matrix
    ellipse(this.x, this.y, this.size);
    fill(255);
    textSize(14);
    text(this.word, this.x, this.y);
  }
}

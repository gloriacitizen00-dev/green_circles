let tabla;
let sorteo = [];

function preload() {
  tabla = loadTable("tabla_palabras.csv", "csv");
}

function setup() {
 for (let i = 0; i < tabla.getRowCount(); i++) {
  sorteo.push(random(50, width - 50));
}
  textFont("monospace");

  // posiciones aleatorias para tus datos
for (let i = 0; i < tabla.getRowCount(); i++) {
  sorteo.push(random(50, width - 50));
}
}

function draw() {
  background(255, 255, 255);

  for (let i = 0; i < tabla.getRowCount(); i++) {
    let value = int(tabla.getString(i, 1));

    let x = sorteo[i] + sin(frameCount * 0.05 + i) * 20;
    let y = random(50,450); + cos(frameCount * 0.03 + i) * 20;
    let r = map(value, 50, 230, 20, 70);

    // círculos verdes
    fill(0, 255, 70, 120);
    noStroke();
    circle(x, y, r);

    
    // texto blanco de las palabras
    fill(255, 220, 0);
    textSize(map(value, 50, 259, 12, 28));
    textAlign(CENTER, CENTER);
    text(tabla.getString(i, 0), x, y);
  }
}

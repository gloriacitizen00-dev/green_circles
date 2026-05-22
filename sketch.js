let tabla
let tabla;
let sorteo = [];

function preload(){
function preload() {
  tabla = loadTable("tabla_palabras.csv", "csv");
}

function setup() {
  createCanvas(800, 800);
  background(0);
  
  for(let i = 0; i <100; i++){
      sorteo.push(random(50,750))
  }

   for(let i = 0; i <  100; i++){
     
      fill(255,50)
     circle(
       sorteo[i],
       map(tabla.getString(i,1),50,259,800,0),
       map(tabla.getString(i,1),50,230,30,100)
       )
         
    fill(255)
    text(
      tabla.getString(i,0),
      sorteo[i],
      map(tabla.getString(i,1),50,259,800,0))
    
  
   }
  textFont("monospace");

  // posiciones aleatorias para tus datos
  for (let i = 0; i < 100; i++) {
    sorteo.push(random(50, 750));
  }
}

function draw() {
  background(0); // black background
  background(0);

  for (let i = 0; i < tabla.getRowCount(); i++) {
    let value = int(tabla.getString(i,1));
    let value = int(tabla.getString(i, 1));

    // Positions with some movement
    let x = sorteo[i] + sin(frameCount * 0.05 + i) * 20;
    let y = map(value, 50, 259, 0, 800) + cos(frameCount * 0.03 + i) * 20;
    let r = map(value, 50, 230, 30, 100);

    // Matrix green circles
    fill(0, 255, 70, 150); // semi-transparent green
    // círculos verdes
    fill(0, 255, 70, 120);
    noStroke();
    circle(x, y, r);

    // White text labels
    // texto blanco
    fill(255);
    text(tabla.getString(i,0), x, y);
    text(tabla.getString(i, 0), x, y);
  }
}

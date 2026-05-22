let streams = [];
let symbols = "アァカサタナハマヤャラワ0123456789";

function setup() {
  createCanvas(800, 800);

  background(0);

  textSize(20);
  textFont("monospace");

  for (let x = 0; x < width; x += 20) {
    streams.push({
      x: x,
      y: random(-800, 0),
      speed: random(4, 10)
    });
  }
}

function draw() {

  background(0, 90);

  fill(0, 255, 70);

  for (let s of streams) {

    let char = symbols[floor(random(symbols.length))];

    text(char, s.x, s.y);

    s.y += s.speed;

    if (s.y > height) {
      s.y = random(-200, 0);
    }
  }
}

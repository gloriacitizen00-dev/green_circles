let streams = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  textSize(20);

  // columnas Matrix
  let x = 0;
  for (let i = 0; i < width / 20; i++) {
    streams.push(new Stream(x, random(-1000, 0)));
    x += 20;
  }
}

function draw() {
  background(0, 150); // negro con transparencia para dejar rastro

  streams.forEach(stream => {
    stream.render();
  });
}

class Stream {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(4, 12);
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

let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);

  // crear círculos iniciales
  for (let i = 0; i < 50; i++) {
    circles.push(new FallingCircle(random(width), random(-500, 0)));
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
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(2, 6);
    this.size = random(20, 50);
    this.word = "Palabra"; // aquí puedes poner tu texto del CSV
  }

  update() {
    this.y += this.speed;
    if (this.y > height + this.size) {
      this.y = random(-200, 0); // reinicia arriba
    }
  }

  render() {
    fill(0, 255, 70, 180);
    ellipse(this.x, this.y, this.size);
    fill(255);
    textSize(14);
    text(this.word, this.x, this.y);
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(0);

  textSize(32);

  fill(0,255,70);
}

function draw() {

  background(0);

  text(
    "MATRIX TEST",
    width/2 - 100,
    height/2
  );

  circle(mouseX, mouseY, 50);
}

  for (let s of streams) {

    let char = symbols[floor(random(symbols.length))];

    text(char, s.x, s.y);

    s.y += s.speed;

    if (s.y > height) {
      s.y = random(-200, 0);
    }
  }
}

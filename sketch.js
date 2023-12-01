function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  translate(150, 350);
  stroke(50);
  strokeWeight(80);
  line(0, -35, 0, -65); // Body
  noStroke();
  fill(400);
  ellipse(-17.5, -65, 35, 35); // Left eye dome
  ellipse(17.5, -65, 35, 35); // Right eye dome
  arc(0, -65, 70, 70, 0, PI); // Chin
  fill(10);
  ellipse(-14, -65, 8, 8); // Left eye
  ellipse(14, -65, 8, 8); // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
}

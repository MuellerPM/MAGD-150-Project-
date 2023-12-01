var x1 = -10;
var x2 = 10;
var x3 = 35;
var x4 = 18;
var x5 = 30;

function setup() {
  createCanvas(400, 400);
  noStroke();
 }

function draw() {
  background(0);
  x1 += 0.7;
  x2 += 0.7;
  x3 += 0.7;
  x4 += 0.7;
  x5 += 0.7;
  arc(x1, 20, 20, 20, 0.52, 5.76);
  arc(x2, 40, 20, 20, 0.52, 5.76);
  arc(x3, 60, 20, 20, 0.52, 5.76);
  arc(x4, 80, 20, 20, 0.52, 5.76);
  arc(x5, 100, 20, 20, 0.52, 5.76);
  fill(350);
}
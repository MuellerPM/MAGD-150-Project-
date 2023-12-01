var img1;
var img2;

function preload() {
  img1 = loadImage("turkey.jpg.png");
  img2 = loadImage("turkey_food.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(img1, -120, 0);
  image(img1, 130, 0, 240, 120);
  image(img2, 300, 0, 240, 120);
}

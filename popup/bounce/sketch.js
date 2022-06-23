var x = 0;
var speed = 3

function setup() {
  createCanvas(200, 200);
}

function draw() {
  console.log(frameCount);
  background(0);
  stroke(225);
  strokeWeight(4);
  noFill();
  ellipse(x, height / 2, 100, 100);


  if (x > width) {
    print("off");
    speed = -3;
  }

  else if (x < 0) {
    speed = 3;
  }

  x += speed;


}
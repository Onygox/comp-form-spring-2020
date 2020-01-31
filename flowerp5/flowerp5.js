function setup() {
  createCanvas(800, 800);
  background(80, 80, 80);
  
  //use this to get the same result I got when i ran it
  //randomSeed(34);
  
  //for loop that generates purely random flowers
  //for(int i = 0; i < random(10, 100); i++) {
  //  flower(random(100,700), random(100,700), random(10,75), random(255), random(255), random(255));
  //}
  
  //for loop that generates flowers with size based on a gaussian curve (plus 20 to make them more visible)
  for(let i = 0; i < random(10, 100); i++) {
    flower(random(100,700), random(100,700), randomGaussian()+20, random(255), random(255), random(255));
  }
}

function flower(x, y, r, red, green, blue) {
  fill(red, green, blue);
  ellipse(x, y+(r/2), r, r);
  ellipse(x-(r/2), y, r, r);
  ellipse(x+(r/2), y, r, r);
  ellipse(x, y-(r/2), r, r);
}

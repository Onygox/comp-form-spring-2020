void setup() {
  size(800, 800);
  background(80, 80, 80);
  
  //use this to get the same result I got when i ran it
  //randomSeed(34);
  
  //for loop that generates purely random flowers
  //for(int i = 0; i < random(10, 100); i++) {
  //  flower(random(100,700), random(100,700), random(10,75), random(255), random(255), random(255));
  //}
  
  //for loop that generates flowers with high bias in size 
  //for(int i = 0; i < random(10, 100); i++) {
  //  flower(random(100,700), random(100,700), max(random(10, 75), random(10, 75)), random(255), random(255), random(255));
  //}
  
  ////for loop that generates flowers with high bias in size, x and y location, and rgb values 
  //for(int i = 0; i < random(10, 100); i++) {
  //  flower(max(random(100,700), random(100,700)),
  //         max(random(100,700), random(100,700)),
  //         max(random(10, 75), random(10, 75)),
  //         max(random(255),random(255)),
  //         max(random(255), random(255)),
  //         max(random(255), random(255)));
  //}
  
  //for loop that generates flowers with low bias in size, x and y location, and rgb values 
  for(int i = 0; i < random(10, 100); i++) {
    flower(min(random(100,700), random(100,700)),
           min(random(100,700), random(100,700)),
           min(random(10, 75), random(10, 75)),
           min(random(255),random(255)),
           min(random(255), random(255)),
           min(random(255), random(255)));
  }
}

void flower(float x, float y, float r, float red, float green, float blue) {
  fill(red, green, blue);
  ellipse(x, y+(r/2), r, r);
  ellipse(x-(r/2), y, r, r);
  ellipse(x+(r/2), y, r, r);
  ellipse(x, y-(r/2), r, r);
}

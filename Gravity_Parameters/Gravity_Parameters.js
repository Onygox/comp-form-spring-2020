// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
// code adapted from https://editor.p5js.org/dansakamoto/sketches/S1J_MEXYm

var yVal; 
var accel; 
var velocity; 
var mass; 


function setup() {
  createCanvas(650, 500);
  
  createP('Gravity');
  gravity_slider = createSlider(1, 50, 6);
  createP('Mass');
  mass_slider = createSlider(25, 175, 100);
  
  yVal = 0;  
  velocity = 0; 
  mass = 100; 
  
  // accel = mass * gravity_slider.value(); 
}

function draw() {
  
  background(127);
  fill(255,255,255);
  
  textSize(24);
  text("Click to re-simulate", 10, 25);
  
  mass = mass_slider.value();
  accel = mass * gravity_slider.value() * 0.001; 
  
  velocity += accel; 
  yVal += velocity;
  ellipse(width/2, yVal, mass, mass); 
  
  if (yVal > height - mass/2) {
    // A little dampening when hitting the bottom
    velocity *= map(gravity_slider.value(),1,50,-0.75,-0.25);
    yVal = height - mass/2;
  }
}


function mousePressed() {
  yVal = 0;  
  velocity = 0; 
}

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var x = 150;
var y = 150;
var size = 30;
var xSpeed = 0;
var ySpeed = 0;

function setup() {
  createCanvas(350, 350);
  noStroke();
  
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  createP('Color');
  color_picker = createInput("#FFFFFF", "color");
  createP('Size');
  size_slider = createSlider(10, 50, 30);
  createP('X Speed');
  xspeed_slider = createSlider(-5, 5, 0);
  createP('Y Speed');
  yspeed_slider = createSlider(-5, 5, 0);
  is_rect = createCheckbox("Circle / Square", false);
  
}

function draw() {
  background(220);
  
  fill(color_picker.value());
  if (is_rect.checked()) {
    rect(x, y, size_slider.value(), size_slider.value());
  } else {
    ellipse(x, y, size_slider.value(), size_slider.value());
  }
  
  //move according to speeds
  x += xspeed_slider.value();
  y += yspeed_slider.value();
  
  //circle if around if it leaves the canvas
  if (x - (size_slider.value()/2) > width) {
     x = 0 - (size_slider.value()/2);
  }
  if (x < 0 - (size_slider.value()/2)) {
     x = width + (size_slider.value()/2); 
  }
  if (y > height + (size_slider.value()/2)) {
     y = 0 - (size_slider.value()/2); 
  }
  if (y < 0 - (size_slider.value()/2)) {
    y = height + (size_slider.value()/2);
  }
}

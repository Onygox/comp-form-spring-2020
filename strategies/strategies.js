// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var x, y;
var size_slider;
var x_slider;
var y_slider;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(6);
  x = 200;
  fill(0);
  noStroke();

  createP('Max Circle Size (High bias)');
  size_slider = createSlider(15, 50, 30);
  createP('Constrain Circle X Values (Middle bias)');
  x_slider = createSlider(0, 150, 75);
  createP('Constrain Circle Y Values (Low bias)');
  y_slider = createSlider(150, height, 150);

  generate();

}

function generate() {
  background(220);
  for (var i = 0; i < width; i += random() * 10) {
    y = noise(i);
    y = map(y, 0, 1, 0, height);
    fill(i, y, 100);
    //console.log(y);
    rect(i, y, 10, y);
  }
  for (var j = 0; j < random(15, 25); j++) {
    var ex = (random(x_slider.value(), width - x_slider.value()) + 
              random(x_slider.value(), width - x_slider.value())) / 2;
    var why = min(random(y_slider.value()), random(height));
    var size = max(random(15), random(size_slider.value()));
    fill(0);
    ellipse(ex, why, size, size);
  }
  text("Click to generate", 24, 24)
}

function mousePressed() {
  generate();
}

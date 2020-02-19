// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var rotate_slider, move_slider, size_slider, color_picker, xoff;
var rotation;

function setup() {
  createCanvas(670, 480);
  var xoff = 0.0;

  fill(100);
  noStroke();
  rectMode(CENTER);

  createP('Rotation');
  rotate_slider = createSlider(0, TWO_PI, 0);

  createP('Movement');
  move_slider = createSlider(0, random(15), 2);

  createP('Size');
  size_slider = createSlider(10, 100, 50);

  createP('Red');
  red_slider = createSlider(0, 1, 0);

  createP('Green');
  green_slider = createSlider(0, 1, 0);

  createP('Blue');
  blue_slider = createSlider(0, 1, 0);

  is_square = createCheckbox("Square", false);

  is_animated = createCheckbox("Animated", false);

  rotation = 0;

  frameRate(6);
}


function draw() {
  background(red_slider.value() * 255,
    green_slider.value() * 255,
    blue_slider.value() * 255);

  if (is_animated.checked()) {
    rotation += 1;
  } else {
    rotation = rotate_slider.value();
  }
  var pos_y = height * .5;
  var size = size_slider.value();
  var xoff = move_slider.value();

  for (var j = 0; j < 7; j += 1) {
    for (var i = 0; i < 10; i += 1) {
      stroke(128, 150);
      rotate(PI / (rotation % PI));

      if (is_square.checked()) {
        strokeWeight(size / 2);
        rect(61 * i + 60 + xoff, 60 * j + 60 + xoff, size, size);
      } else {
        strokeWeight(size);
        beginShape(POINTS);
        vertex(61 * i + 55, 60 * j + 60);
        endShape(CLOSE);
        fill(255, 240);
        noStroke();
        ellipse(61 * i + 60 + xoff, 60 * j + 60 + xoff, size, size);
      }
    }
  }
}

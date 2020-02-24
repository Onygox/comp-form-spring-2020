// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var amplitude_slider;
var time_slider;
var offsetX_slider;
var offsetY_slider;

var startX = 50;
var startY = 250;
var endX = 450;
var endY = 50;

var t = 0;

var circles = 0;

function setup() {
    createCanvas(500, 300);
  
    ellipseMode(CENTER);
    createP('Amplitude');
    amplitude_slider = createSlider(-50, 50, 0);
    createP('Time Speed');
    time_slider = createSlider(0, 100, 50);
    createP('Offset X');
    offsetX_slider = createSlider(0, 100, 50);
  createP('Offset Y');
    offsetY_slider = createSlider(0, 100, 50);
    
}


function draw() {
    background(150);
    fill(0);
    textSize(18);
    text("Click to add circles: " + circles, 16, 16);

    var amplitude = amplitude_slider.value() / 100;
    var timeStep = time_slider.value() / 1000;

    t += timeStep;
    noiseDetail(1, .5);

    fill(255);
    noStroke();
    for (i = 0; i < circles; i += 1) {
        var x = lerp(startX, endX, i/100);
        var y = lerp(startY, endY, i/100);
        var offsetX = noise(i/100 * t) * amplitude * offsetX_slider.value();
        var offsetY = noise(i/100 * t, 100) * amplitude * offsetY_slider.value();
        var r = map(x, startX, endX, 0, 255);
        var b = map(y, startY, endY, 0, 255);
        fill(r, noise(i), b);
    
        ellipse(x + offsetX, y + offsetY, 10, 10);
    }

}

  function mousePressed() {
   circles++; 
  }

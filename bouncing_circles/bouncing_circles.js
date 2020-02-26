// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var circle_slider;
var circles = [];

function setup() {
  createCanvas(400, 400);
  
  noStroke();
  textSize(24);
  
  createP('Circles');
  circle_slider = createSlider(1, 20, 1);
  circles.push(new circle());
  //console.log(circles.length);
}

function draw() {
  background(220);
  fill(0);
  text("Click to update", 24,24);
  text("Circles: " + circles.length, 25, 375);
  
  for(var i = 0; i < circles.length; i++) {
    //ellipse(0, 0, 10, 10); 
    circles[i].display();
    circles[i].move();
  }
}

function mousePressed() {
  
  circles.length = 0;
  for(var i = 0; i < circle_slider.value(); i++) {
    circles.push(new circle());
  }
  
}

class circle {
  
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.s = random(10, 30);
    this.xspeed = random(-3,3);
    this.yspeed = random(-3,3);
  }
  
  display() {
    var r = map(noise(this.x), 0, 1, 0, 255);
    var g = map(noise(this.y), 0, 1, 0, 255);
    var b = map(noise(this.s), 0, 1, 0, 255);
    fill(r, g, b);
    ellipse(this.x,this.y,this.s,this.s);
  }
  
  move() {
    this.x+=this.xspeed;
    this.y+=this.yspeed;
    if (this.x+this.s/2>=width || this.x-this.s/2<=0) {
        this.xspeed*=-1;
        }
    if (this.y+this.s/2>=height || this.y-this.s/2<=0) {
        this.yspeed*=-1;
        }
  }
}

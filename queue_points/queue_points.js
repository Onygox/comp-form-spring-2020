// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var queue = [];
var texts = [];
var x = 0;
var y = 0;
var speed = 2;
var xdir = 1;
var ydir = 1;
// var moveToX = 0;
// var moveToY = 0;
var which = 0;

function setup() {
  createCanvas(400, 400);
  queue.push([200, 200]);
  texts.push("200, 200");
  //textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  background(220);
  text("Click to add queue points", 16, 16);

  x += xdir * speed;
  y += ydir * speed;

  if (x > queue[which][0] + 1) {
    xdir = -1;
  } else if (x < queue[which][0] - 1) {
    xdir = 1;
  } else {
    addToWhich();
  }

  if (y > queue[which][1] + 1) {
    ydir = -1;
  } else if (y < queue[which][1] - 1) {
    ydir = 1;
  } else {
    addToWhich();
  }

  ellipse(x, y, 10, 10);
  for(var i = 0; i < texts.size; i++) {
    for(var j = 0; j < queue.size; j++) {
      fill(0);
      text(texts[i],queue[j][0],queue[j][1]);
    }
  }
  //console.log(texts);
}

function addToWhich() {
  if (which >= queue.length - 1) {
    which = 0;
  } else {
    which++;
  }
}

function mousePressed() {
  // moveToX = mouseX;
  // moveToY = mouseY;
  queue.push([mouseX, mouseY]);
  texts.push(mouseX + ", " + mouseY);
  //console.log(queue[0][1]);
}

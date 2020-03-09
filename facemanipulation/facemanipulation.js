// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var faceimg;
var fillcolor;

function preload() {
 faceimg = loadImage("face.jpg"); 
}

function setup() {
  createCanvas(400, 400);
  faceimg.loadPixels();
  noSmooth();
  noStroke();
  ellipseMode(CENTER);
  for(let i = 0; i < faceimg.width; i++) {
   for (let j = 0; j < faceimg.height; j++) {
     fillcolor = faceimg.get(i,j);
     fill(fillcolor);
     
     //scary nightmare fuel
     // ellipse(i*(width/faceimg.width),j*(height/faceimg.height), 255-lightness(fillcolor)/5, 255-lightness(fillcolor)/5);
     
     //lines up and down
     ellipse(i*(width/faceimg.width),j*(height/faceimg.height), lightness(fillcolor)/5, 255-lightness(fillcolor)/5);
   }
  }
}

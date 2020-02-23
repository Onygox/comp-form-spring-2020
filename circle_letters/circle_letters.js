// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

const points = [];

function setup() {
  createCanvas(400, 400);
  background(50);
  
  textAlign(CENTER, CENTER);
  
  for(let i = 0; i < 100; i++) {
    points.push({
        x: (random(width) + random(width)) / 2,
        y: (random(height) + random(height)) / 2,
        s: random(5,20)
      });
  }

  noStroke();
  
  for(let i = 0; i < points.length; i++) {
    const p = points[i];
    let r = 0;
    if (random() > .6) {
     r = 255; 
    }
    let g = 0;
    if (random() > .6) {
     g = 255; 
    }
    let b = 255;
    if (random() > .6) {
     b = 0; 
    }
    //avoid getting all black or all white
    if (r == 255 && b == 255 && g == 255) {
     r = 0; 
    } else if (r == 0 && b == 0 && g == 0) {
      g = 255;
    }
    
       fill(r,g,b);
       ellipse(p.x,p.y,p.s,p.s);
  }
}

function keyPressed() {
  let rand = Math.floor(random(points.length));
  let k = key;
  textSize(points[rand].s);
  fill(0);
  text(k, points[rand].x,points[rand].y);
}

let vec1 = [];
let vec2 = [];

let lineloc = [];

function setup() {
  createCanvas(400, 400);
  background(random(150,250), random(200, 255), random(0,100));
  
  noStroke();
  
  //starting point
  vec1.push(random(10,width/4));
  vec1.push(random(height-10));
  ellipse(vec1[0], vec1[1], 5);
  
  lineloc.push(vec1[0]);
  lineloc.push(vec1[1]);

  //ending point - X marks the spot
  vec2.push(random(width*3/4,width-10));
  vec2.push(random(height-10));
  stroke(255,0,0);
  strokeWeight(4);
  line(vec2[0]-10, vec2[1]+10, vec2[0]+10, vec2[1]-10);
  line(vec2[0]-10, vec2[1]-10, vec2[0]+10, vec2[1]+10);
  
  stroke(0);
  strokeWeight(2);
  //if the line leading to the X hasn't arrived yet, change its X and/or Y values by some noisy value
  while(lineloc[0] < vec2[0] - 5 ||
        lineloc[0] > vec2[0] + 5 ||
        lineloc[1] > vec2[1] + 5 ||
        lineloc[1] < vec2[1] - 5) {
    
    let newlineloc = lineloc;
    
    if (newlineloc[0] < vec2[0] - 5) {
      newlineloc[0] += noise(50);
    }
    
    if (newlineloc[0] > vec2[0] + 5) {
      newlineloc[0] -= noise(50);
    }
    
    if (newlineloc[1] > vec2[1] + 5) {
       newlineloc[1] -= noise(50); 
    }
    
    if (newlineloc[1] < vec2[1] - 5) {
       newlineloc[1] += noise(50); 
    }
    
    if (random() > .5) {
      newlineloc[0]+=noise(500);
    } else {
      newlineloc[0]-=noise(500); 
    }
    
    if (random() > .5) {
      newlineloc[1]+=noise(500);
    } else {
      newlineloc[1]-=noise(500); 
    }
    
    line(lineloc[0],lineloc[1],newlineloc[0],newlineloc[1]);
    lineloc[0] = newlineloc[0];
    lineloc[1] = newlineloc[1];
  }
  
}

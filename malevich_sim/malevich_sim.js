function setup() {
  createCanvas(512, 512);
  background(220);
  
  let startx = min(random()*100,random()*100);
  let starty = min(random()*100,random()*100);
  let startwidth = random()*100;
  let startheight = random()*200;
  
  rvalues = [255, 128, 0]
  gvalues = [255, 128, 0]
  bvalues = [255, 128, 0]
  
  for(let i = 0; i < random(50,100); i++) {
    
    fill(rvalues[Math.round(random(1,3))], gvalues[Math.round(random(1,3))], bvalues[Math.round(random(1,3))])
    
    rect(startx, starty, startwidth, startheight);
   
    if (random() > .5) {
      
      startx+=(startwidth+random()*100);
      startwidth+=(random(-100,100));
      
    } else {
      
      starty+=(startheight+random()*100);
      startheight+=(random(-100,100));
      
    }
    
    if (startx > width) {
       startx = 0; 
    }
    if (starty > height) {
     starty = 0; 
    }
    
    rotate(random()*100)
    
  }
  
}

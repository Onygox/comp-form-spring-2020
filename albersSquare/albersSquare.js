class albersSquare {
 
  constructor(tempx, tempy, tempw) {
    this.x = tempx;
    this.y = tempy;
    this.w = tempw;
  }
  
  display() {
    
    let c_array = ['r','w','y','g','l'];
    var rotated = random();
    
    //background
    if (c_array[Math.round(random(0, c_array.length))] == 'w'){
      fill(255);
    } else if (c_array[Math.round(random(0, c_array.length))] == 'g'){
      fill(101, 131, 141);
    } else {
      fill(0);
    }
    rect(this.x,this.y,this.w,this.w);
    
    //middle column
    if(c_array[Math.round(random(0, c_array.length))] == 'r') {
    fill(115,18,26);
    } else if (c_array[Math.round(random(0, c_array.length))] == 'y'){
      fill(248,222,41);
    } else {
      fill(101, 131, 141);
    }
    //randomly rotate it
    if (rotated > .5) {
      rect(this.x+(this.w/3), this.y, this.w/3, this.w);
    } else {
      rect(this.x, this.y+(this.w/3), this.w, this.w/3);
    }
    
    //top sideways lines
    if(c_array[Math.round(random(0, c_array.length))] == 'r') {
    fill(115,18,26);
    }else if (c_array[Math.round(random(0, c_array.length))] == 'y'){
      fill(248,222,41);
    } else{
      fill(101, 131, 141);
    }
    
    if (rotated > .5) {
      rect(this.x, (this.y+(this.w/10)*2),this.w,this.w/10);
      rect(this.x, (this.y+(this.w/10)*4), this.w, this.w/10);
    } else {
      rect(this.x+(this.w/10)*2, this.y,this.w/10,this.w);
      rect(this.x+(this.w/10)*4, this.y, this.w/10, this.w);
    }
    
    //bottom sideways lines
    if(c_array[Math.round(random(0, c_array.length))] == 'r') {
    fill(115,18,26);
    } else if (c_array[Math.round(random(0, c_array.length))] == 'w'){
      fill(255);
    } else if (c_array[Math.round(random(0, c_array.length))] == 'y'){
      fill(248,222,41);
    } else if (c_array[Math.round(random(0, c_array.length))] == 'g'){
      fill(101, 131, 141);
    }else if (c_array[Math.round(random(0, c_array.length))] == 'b'){
      fill(0);
    }
    if (rotated > .5) {
    rect(this.x, (this.y+(this.w/10)*6),this.w, this.w/10);
    rect(this.x, (this.y+(this.w/10)*8),this.w, this.w/10);
    } else {
      rect(this.x+(this.w/10)*6, (this.y),this.w/10, this.w);
    rect(this.x+(this.w/10)*8, (this.y),this.w/10, this.w);
    }
  }
  
}

let alist = [];

function setup() {
  createCanvas(512, 512);
  
  for(let i = 0; i < width; i+=(width/10)) {
     for (let j = 0; j < height; j+=(height/10)) {
       alist.push(new albersSquare(i, j, width/10));
     }
  }
  
  for(let i = 0; i < alist.length; i++) {
     alist[i].display(); 
  }
  
}

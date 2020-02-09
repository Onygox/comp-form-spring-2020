let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let r = 0;
let x = 6;
let y = 36;

function setup() {
  createCanvas(360, 360);
  frameRate(6);
  // for (c in alphabet) {
  //   console.log(alphabet[c]);
  // }
  textSize(36);
  rect(1,1,358,358)
}

function draw() {
  
  text(alphabet[r], x, y);
  
  r = noise(frameCount);
  r = int(map(r, 0, 1, 0, 26));
  if (r >= alphabet.length - 1) {
    r = 0;
  }
  
  if (x < width) {
    x+=36; 
  } else {
    y+=36;
    x = 6; 
  }
  if (y > height-36) {
    y = 36; 
  }
  
}

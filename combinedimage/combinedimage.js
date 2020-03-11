
var animalimg, doomimg, mixedimg;
var doomcolors = [];
var animalcolors = [];

function preload() {
  animalimg = loadImage("animalcrossing.jpg");
  doomimg = loadImage("doometernal.jpg");
}

function setup() {
  createCanvas(500, 280);
  
  mixedimg = createImage(50, 28);
  
  noSmooth();
  
  // image(animalimg, 0, 0, width, height);
  // image(doomimg, 0, 0, width, height);
  
  for(let x = 0; x < animalimg.width; x++) {
    for(let y = 0; y < animalimg.height; y++) {
      var c = animalimg.get(x,y);
      c = [red(c), green(c), blue(c), 127];
      animalcolors.push(c);
      animalimg.set(x,y,c);
      animalimg.updatePixels();
    }
  }
  
    for(let x = 0; x < doomimg.width; x++) {
    for(let y = 0; y < doomimg.height; y++) {
      var d = doomimg.get(x,y);
      d = [red(d), green(d), blue(d), 127];
      doomcolors.push(d);
      //console.log(d);
      doomimg.set(x,y,d);
      doomimg.updatePixels();
    }
  }
  
  for(let x = 0; x < mixedimg.width; x++) {
    for(let y = 0; y < mixedimg.height; y++) {
      // var d = doomimg.get(x,y);
      // d = [red(d), green(d), blue(d), 127];
      // console.log(d);
      var m = [red(doomcolors[x%50 + y%28]) + red(animalcolors[x%50 + y%28]),
              blue(doomcolors[x%50 + y%28]) + blue(animalcolors[x%50 + y%28]), green(doomcolors[x%50 + y%28]) + green(animalcolors[x%50 + y%28]), 255]
      mixedimg.set(x,y,m);
      mixedimg.updatePixels();
    }
  }
  
  // image(animalimg, 0, 0, width, height);
  // image(doomimg, 0, 0, width, height);
  image(mixedimg, 0, 0, width, height);
  
}

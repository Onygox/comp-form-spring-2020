// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var offset, r, g, b;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);

    img = createImage(15, 15);
    img.loadPixels();
  
    offset = random();
    r = random(100);
    g = random(100);
    b = random(100);

    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
          if(random() > .8) {
            if (r > 127) {
              r-=random(100);
            } else {
              r+=random(100); 
            }
            if (g > 40) {
              g-=random(100);
            } else {
              g+=random(100); 
            }
            if (b > 200) {
              b-=random(100);
            } else {
              b+=random(100); 
            }
            img.set(i,j,color(r,g,b,255));
            img.set(i+1,j+1,color(r,g,b,255));
            img.set(i+2,j+1,color(r,g,b,255));
            img.set(i+3,j,color(r,g,b,255));
            img.set(i,j+1,color(r+100,g+100,b+100,255));
            img.set(i+1,j+2,color(r+100,g+100,b+100,255));
            img.set(i+2,j+2,color(r+100,g+100,b+100,255));
            img.set(i+3,j+1,color(r+100,g+100,b+100,255));
            offset+=0.2;
          } else {
            //img.set(i,j,color(255));
            offset-=0.5; 
          }
      }
    }

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
    noLoop();

}

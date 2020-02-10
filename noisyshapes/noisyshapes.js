let r = 255;
let g = 255;
let b = 255;
let back = 0;
let n = 8;

function setup() {
    createCanvas(512, 512);
    ellipseMode(CENTER);
}


function draw() {
  
    back = noise(millis()*0.00175);
    background((back*100)%67, back*67, back*100);

    for (let y = 8; y < height; y += 16) {
        for (let x = 8; x < width; x += 16) {
          
            r = noise(x, y, millis()*0.001);
            r = map(r, 0, 1, 0, 255);
          
            g = noise(dist(300, 300, x, y) * 0.03);
            g = map(g, 0, 1, 0, 255);
          
            b = noise(millis()*0.0025);
            b = map(b, 0, 1, 0, 255);
          
            n = noise(x * 0.002 + millis() * 0.001, y);
            //n = noise(x * 0.002 + millis() * 0.001, y * 0.002);
            //n = noise(dist(300, 300, x, y) * 0.03, millis() * 0.001);
            n = noise(x * 0.003, y * 0.003, millis() * 0.001);

            let diameter = n * 16;
            let rand = random();
            stroke(r,g,b);
            strokeWeight(diameter);
            line(x, y, x+diameter, y+diameter);
        }
    }
}

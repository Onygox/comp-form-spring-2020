// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js
var contents = "";

let strokeSli;
let lengthSli;

function setup() {
  createCanvas(480 * 0.97, 168 * 2);

  background(0);
  frameRate(5);

  createP('TEXT SIZE');
  lengthSli = createSlider(30, 100, 30);

  createP('STROKE WEIGHT');
  startSli = createSlider(8, 24, 12);


  createP('Type to add words!');

}

function draw() {
  
  for (x = 0; x < width; x = x + 15) {
    for (y = 0; y < height; y = y + 15) {

      index = (x + y * width) * 2;

      stroke(128);
      fill(255);

    }
  }

  let lengthslid = lengthSli.value();
  let startslid = startSli.value();

  strokeWeight(startslid * Math.random() / 2);

    for (let i = 0; i < contents.length; i++) {
      for (let j = 0; j < contents.length; j++) {
        fill(0);
        rect(i * 18, j * 18, 12, 12);
      }
    }

  fill(255);
  textSize(lengthslid);
  text(contents, 50, 100, width, height);

}

function keyTyped() {
  contents += key;
  background(map(unchar(key), 97, 122, 0, 255), map(noise(unchar(key) * frameCount), 0, 1, 0, 255), map(unchar(key), 97, 122, 0, 255) * frameCount % 6);
}

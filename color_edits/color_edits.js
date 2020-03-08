// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
//require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.dom.js

var aurora;
var colors = [];
var gen_img;
var r_slider;
var g_slider;
var b_slider;

function preload() {
  aurora = loadImage("aurora.jpg"); 
  gen_img = createImage(100,100);
  gen_img.loadPixels();
}

function setup() {
    createCanvas(500, 500);
  
    createP("Red Cutoff");
    r_slider = createSlider(0,255,127);
    createP("Green Cutoff");
    g_slider = createSlider(0,255,127);
    createP("Blue Cutoff");
    b_slider = createSlider(0,255,127);
    
    background(0);
    noSmooth();
  
  for (let i = 0; i < aurora.height; i++) {
    for (let j = 0; j < aurora.height; j++) {
      let in_color = aurora.get(i,j);
      let r = red(in_color);
      let g = green(in_color);
      let b = blue(in_color);
      let out_r = 0;
      let out_g = 0;
      let out_b = 0;
      if (r > 127) {
       out_r+=127; 
      } else {
        out_r+=255; 
      }
      if (g > 127) {
        out_g+=127; 
      } else {
        out_g+=255; 
      }
      if (b > 127) {
       out_b+=127; 
      } else {
        out_b+=255; 
      }
      let out_color = color(out_r,out_g,out_b,255);
      gen_img.set(i, j, out_color);
      gen_img.updatePixels();
    }
  }  
  image(gen_img, 0, 0, width, height);
  
}

function mousePressed() {
    for (let i = 0; i < aurora.height; i++) {
    for (let j = 0; j < aurora.height; j++) {
      let in_color = aurora.get(i,j);
      let r = red(in_color);
      let g = green(in_color);
      let b = blue(in_color);
      let out_r = 0;
      let out_g = 0;
      let out_b = 0;
      if (r > r_slider.value()) {
       out_r+=127; 
      } else {
        out_r+=255; 
      }
      if (g > g_slider.value()) {
        out_g+=127; 
      } else {
        out_g+=255; 
      }
      if (b > b_slider.value()) {
       out_b+=127; 
      }
      let out_color = color(out_r,out_g,out_b,255);
      gen_img.set(i, j, out_color);
      gen_img.updatePixels();
    }
  }
  image(gen_img, 0, 0, width, height);
}

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
start = 1;
let audio;
let sfx1
let sfx2

function preload(){
  img1 = loadImage("Assets/Image1.jpg")
  img2 = loadImage("Assets/Image2.jpg")
  img3 = loadImage("Assets/Image3.jpg")
  img4 = loadImage("Assets/Image4.jpg")
  img5 = loadImage("Assets/Image5.jpg")
  img6 = loadImage("Assets/Image6.jpg")
  img7 = loadImage("Assets/Image7.jpg")
  img8 = loadImage("Assets/Image8.jpg")
  img9 = loadImage("Assets/Image9.jpg")
  img10 = loadImage("Assets/Image10.jpg")
  audio = loadSound("Assets/Enjoy.mp3")
}

function setup() {
  createCanvas(1134/2, 2016/2);
  audio.play()
}

function draw() {
  if (start == 1) {
    image(img1,0,0,1134/2, 2016/2)
  } else if (start == 2) {
    image(img2,0,0,1134/2, 2016/2)
  } else if (start == 3) {
    image(img3,0,0,1134/2, 2016/2)
  } else if (start == 4) {
    image(img4,0,0,1134/2, 2016/2)
  } else if (start == 5) {
    image(img5,0,0,1134/2, 2016/2)
  } else if (start == 6) {
    image(img6,0,0,1134/2, 2016/2)
  } else if (start == 7) {
    image(img7,0,0,1134/2, 2016/2)
  } else if (start == 8) {
    image(img8,0,0,1134/2, 2016/2)
  } else if (start == 9) {
    image(img9,0,0,1134/2, 2016/2)
  } else if (start == 10) {
    image(img10,0,0,1134/2, 2016/2)
  }
}  


function mouseClicked() {
  if (start == 10){
    start = 1
  } else {
    start = start + 1
  }
}

let BG_Music;
let RNG_Music;
let BGImage1;
let BGImage2;
let BGImage3;
let BGImage4;
let BGImage5;
let BGImage6;
let BGImage7;
let BGImage8;
let RingImg;
let SSonicSprite;
let seconds = 0;
let m = 0;
let s = 0;
let TS = 0;
let RingCount = 100;
let TCount = 0;
let SonicX = 0;
let SonicY = 192;
let RingX = 192;
let RingY = 256;
let ScoreCount = 0;
//let RingX = [512, 512, 512, 512, 512, 512, 512, 512, 512, 512];
//let RingY = [random(0, 475), random(0, 475), random(0, 475), random(0, 475), random(0, 475), random(0, 475), random(0, 475), random(0, 475), random(0, 475), random(0, 475)];



function preload(){
  BG_Music = loadSound('Audio/DDZ_S3.mp3')
  BGImage1 = loadImage('ImageAssets/BG1.png')
  BGImage2 = loadImage('ImageAssets/BG2.png')
  BGImage3 = loadImage('ImageAssets/BG3.png')
  BGImage4 = loadImage('ImageAssets/BG4.png')
  BGImage5 = loadImage('ImageAssets/BG5.png')
  BGImage6 = loadImage('ImageAssets/BG6.png')
  BGImage7 = loadImage('ImageAssets/BG7.png')
  BGImage8 = loadImage('ImageAssets/BG8.png')
  RingImg = loadImage('ImageAssets/Ringimg.png')
  SSonicSprite = loadImage('ImageAssets/SuperSonicSprite.png')
  RNG_Music = loadSound('Audio/S1_B5.wav')
}


function setup(){
  frameRate(120);
	createCanvas(512, 384);
  BG_Music.play();
  //fill(0,120,200)
  //rect(0,(384-176),1000,(384-176))
  //fill()
}

function draw(){
  image(BGImage1,0,0)
  image(BGImage2,0,176)
  image(BGImage3,0,184)
  image(BGImage4,0,192)
  image(BGImage5,0,200)
  image(BGImage6,0,216)
  image(BGImage7,0,240)
  image(BGImage8,0,288)
  image(SSonicSprite,SonicX,SonicY)
  fill(255,255,255)
  textSize(25)
  fill(175,175,0)
  text('SCORE', 10, 30)
  text('TIME', 10, 60)
  text('RINGS', 10, 90)
  fill(255,255,255)
  text(int(ScoreCount), 110, 30)
  image(RingImg,RingX, RingY)
  timer();
  rings();
  keyPressed();
  ScoreRings(); 
  /*
  //Debugging
  text('Sonic X&Y: ('+ SonicX +"," + SonicY + ")", 0, 200)
  text("Ring co-ordinate(" + RingX + "," + RingY + ")", 0, 150)
  //Hitbox setup
  rect(SonicX,SonicY,37,36)
  */
 

  if (RingCount == 0) {
    fill(0,0,0)
    rect(0,0,512,384)
    fill(255,255,255)
    text("GAME OVER",170, 200)
    text("Final Score: " + int(ScoreCount),170, 230)
  }
}

function timer(){
  //Setting up seconds and minutes
  s = int(millis() / 1000);
  s = s - (TS*60)
  if (s > 59){
    TS = TS + 1
  }
  m = int(millis() / 60000);

  //Display format
  if (m >= 10 && s >= 10){
    text(int(m) + ":" + s, 80, 60)
  } else if (m >= 10 && s < 10){
    text(int(m) + ":" + "0" + s, 80, 60)
  } else if (m < 10 && s >= 10){
    text("0" + int(m) + ":" + s, 80, 60)
  } else {
    text("0" + int(m) + ":" + "0" + s, 80, 60)
  }
}
 
//Ring deduction each second
function rings(){
  if (millis() >= 999 + TCount){
    if (RingCount > 0) {
      RingCount = RingCount - 1
    } else {
      RingCount = 0
    }
    TCount = millis();
  }
  text(int(RingCount), 100, 90)
}

//Character control
function keyPressed() {
  if (keyIsDown(LEFT_ARROW) === true) {
    if (SonicX <= 0) {
      SonicX = 0
    } else{
      SonicX -= 1;
    }
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    if (SonicX >= 475) {
      SonicX = 475
    } else{
      SonicX += 1;
    }
  }

  if (keyIsDown(UP_ARROW) === true) {
    if (SonicY <= 0) {
      SonicY = 0
    } else{
      SonicY -= 1;
    }
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    if (SonicY >= 348) {
      SonicY = 348
    } else{
      SonicY += 1;
    }
  }
  
}

function ScoreRings(){
  if (SonicX >= RingX - (37/2) && SonicX <= RingX + (37/2) && SonicY >= RingY - 18 && SonicY <= RingY + 18 ) {
    RingCount = RingCount + 1
    ScoreCount = ScoreCount + 100
    RingX = int(random(0, 335));
    RingY = int(random(0, 320));
    RNG_Music.play();
  } 
}

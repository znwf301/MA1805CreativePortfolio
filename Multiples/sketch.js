let select = 0;
let shape = 0;
let rgb = [0,0,0]
let button = 0;
let rectorent = 0

function setup() {
  createCanvas(1500, 920);
  frameRate(1200);
}

function draw() {
  //Setup Paint (P5JS background)
  // Blue part
  noStroke();
  fill(0,86,229)
  rect(0,68,5,920)
  rect(1495,68,5,920)
  rect(0,915,1500,5)
  rect(0,0,windowWidth,68)
  stroke(255,255,255)
  strokeWeight(2)
  square(1350,15,40,4)
  square(1400,15,40,4)
  square(1410,25,20)
  fill(255,255,255)
  textSize(30)
  noStroke()
  text("🎨  Untitled - Paint (P5.JS Edition)", 25,40)

  //X button (no function)
  stroke(255,255,255)
  fill(217,101,59)
  square(1450,15,40,4)
  fill(255,255,255)
  textSize(30)
  text("X", 1460,45)
  
  
  //Tanned area
  noStroke()
  fill(235,233,216)
  rect(5,68,130,846)
  rect(5,68,1490,46)
  rect(5,755,1490,160)
  fill(255,255,255)
  rect(1410,25,20,5)
  rect(1360,40,20,5)
  textSize(30)
  noStroke()
  fill(0)
  text("File", 30,100)
  text("Edit", 100,100)
  text("View", 170,100)
  text("Image", 250,100)
  text("Colors", 350,100)
  text("Help", 460,100)
  fill(172,168,163)
  rect(5,112,1490,2)
  rect(5,755,1490,2)
  rect(5,600,130,2)
  rect(5,630,130,2)
  rect(5,855,1490,2)
  rect(5,860,1490,2)
  //Grey shaddow effect
  fill(255,255,255)
  square(135,114,5)
  square(135,750,5)
  fill(128,127,121)
  rect(140,114,1355,5)
  rect(140,750,1355,5)
  rect(135,119,5,632)

  //Coloured Squares
  ///Black
  fill(0)
  square(135,780,30)
  fill(255)
  text("1", 140,805)
  ///Grey
  fill(131,129,129)
  square(170,780,30)
  fill(255)
  text("2", 175,805)
  ///Wine Red
  fill(127,1,6)
  square(205,780,30)
  fill(255)
  text("3", 210,805)
  ///Swamp yellow
  fill(125,131,5)
  square(240,780,30)
  fill(255)
  text("4", 245,805)
  ///Grass green
  fill(5,127,9)
  square(275,780,30)
  fill(255)
  text("5", 280,805)
  ///Dark cyan
  fill(3,128,131)
  square(310,780,30)
  fill(255)
  text("6", 315,805)
  ///DB
  fill(2,0,133)
  square(345,780,30)
  fill(255)
  text("7", 350,805)
  ///DP
  fill(131,0,126)
  square(380,780,30)
  fill(255)
  text("8", 385,805)
  ///WS
  fill(127,130,69)
  square(415,780,30)
  fill(255)
  text("9", 420,805)
  ///Swamp
  fill(6,64, 60)
  square(450,780,30)
  fill(255)
  text("0", 455,805)
  ///LB
  fill(7,129,250)
  square(485,780,30)
  fill(255)
  text("Q", 489,805)
  ///Navy
  fill(0,66,131)
  square(520,780,30)
  fill(255)
  text("W", 521,805)
  ///Ourple (My funny way of saying purple)
  fill(126,2,249)
  square(555,780,30)
  fill(255)
  text("E", 560,805)
  ///Brown
  fill(129,68,2)
  square(590,780,30)
  fill(255)
  text("R", 595,805)
  
  //Row 2
  ///White
  fill(255)
  square(135,815,30)
  fill(0)
  text("T", 140,840)
  ///Grey2
  fill(194,192,190)
  square(170,815,30)
  fill(255)
  text("Y", 175,840)
  ///Red
  fill(255,1,3)
  square(205,815,30)
  fill(255)
  text("U", 210,840)
  ///yellow
  fill(253,254,15)
  square(240,815,30)
  fill(0)
  text("I", 250,840)
  ///green
  fill(1,252,8)
  square(275,815,30)
  fill(255)
  text("O", 280,840)
  ///cyan
  fill(0,255,250)
  square(310,815,30)
  fill(255)
  text("P", 315,840)
  ///DB2
  fill(4,1,246)
  square(345,815,30)
  fill(255)
  text("A", 350,840)
  ///P
  fill(250,5,249)
  square(380,815,30)
  fill(255)
  text("S", 385,840)
  ///CREAM
  fill(251,253,142)
  square(415,815,30)
  fill(255)
  text("D", 420,840)
  ///LG
  fill(3,251, 131)
  square(450,815,30)
  fill(255)
  text("F", 455,840)
  ///light blue true
  fill(140,252,248)
  square(485,815,30)
  fill(255)
  text("G", 489,840)
  ///Lilac
  fill(127,129,250)
  square(520,815,30)
  fill(255)
  text("H", 521,840)
  ///Hot pink
  fill(250,1,135)
  square(555,815,30)
  fill(255)
  text("J", 560,840)
  ///orange
  fill(249,128,65)
  square(590,815,30)
  fill(255)
  text("K", 595,840)  

  //Current Color + Shape text
  fill(0)
  textSize(15)
  text("Current Colour", 10,780)
  text("Current shape", 20,620)  
  text("Square - Z", 35,220)
  text("Rectangle - X", 25,315) 
  text("Circle - C", 35,425)
  text("Triangle - V", 35,555)
  textSize(30)
  text("Press ESC to clear the canvas", 35,900)  
  
  //Shape Display
  stroke(0)
  fill(255)
  square(30,130,75)
  rect(20, 250,100,50)
  ellipse(70, 375,75)
  triangle(30, 540, 70, 460, 110, 540)

  noStroke()
  if (mouseIsPressed) {
    button = 1
  } else {
    button = 0
  }
  if(select == 0){
    rgb = [0];
  } else if(select == 1){
    rgb = [131,129,129]
  } else if(select == 2){
    rgb = [127,1,6]
  } else if(select == 3){
    rgb = [125,131,5]
  } else if(select == 4){
    rgb = [5,127,9]
  } else if(select == 5){
    rgb = [3,128,131]
  } else if(select == 6){
    rgb = [2,0,133]
  } else if(select == 7){
    rgb = [131,0,126]
  } else if(select == 8){
    rgb = [127,130,69]
  } else if(select == 9){
    rgb = [6,64, 60]
  } else if(select == 10){
    rgb = [7,129,250]
  } else if(select == 11){
    rgb = [0,66,131]
  } else if(select == 12){
    rgb = [126,2,249]
  } else if(select == 13){
    rgb = [129,68,2]
  } else if(select == 14){
    rgb = [255]
  } else if(select == 15){
    rgb = [194,192,190]
  } else if(select == 16){
    rgb = [255,1,3]
  } else if(select == 17){
    rgb = [253,254,15]
  } else if(select == 18){
    rgb = [1,252,8]
  } else if(select == 19){
    rgb = [0,255,250]
  } else if(select == 20){
    rgb = [4,1,246]
  } else if(select == 21){
    rgb = [250,5,249]
  } else if(select == 22){
    rgb = [251,253,142]
  } else if(select == 23){
    rgb = [3,251, 131]
  } else if(select == 24){
    rgb = [140,252,248]
  } else if(select == 25){
    rgb = [127,129,250]
  } else if(select == 26){
    rgb = [250,1,135]
  } else if(select == 27){
    rgb = [249,128,65]
  } 

  if (button > 0) {
      fill(rgb)
    if (shape == 0) {
      square(mouseX, mouseY, 10)
    } else if(shape == 1) {
      if (rectorent == 0){
        rect(mouseX, mouseY, 10,20)
      } else if (rectorent == 1){
        rect(mouseX, mouseY, 20,10)
      }
    } else if(shape == 2) {
      circle(mouseX, mouseY, 10)
    }  else if(shape == 3) {
      triangle(mouseX-20, mouseY-20,mouseX+20, mouseY-20,mouseX, mouseY+20)
    }
  
  } 
  fill(rgb)
  square(30, 790, 60)
  fill(0)
  if (shape == 0) {
    square(35, 660, 50)
  } else if(shape == 1) {
    if (rectorent == 0){
      rect(35, 660, 50,75)
    } else if (rectorent == 1) {
      rect(35, 660, 75,50)
    }
  } else if(shape == 2) {
    circle(60, 690, 50)
  }  else if(shape == 3) {
    triangle(60, 690,80, 640,100, 690)
  }

  if (keyIsPressed === true) {
    if (keyCode === 27) {
    fill(255)
    rect(140, 119, 1355,631)
  }
}
}


function keyPressed(){
  //Setting colour of shape
   if (key === '1') {
    select = 0;
   } else if (key === '2') {
    select = 1;
   } else if (key === '3') {
    select = 2;
   } else if (key === '4') {
    select = 3;
   } else if (key === '5') {
    select = 4;
   } else if (key === '6') {
    select = 5;
   } else if (key === '7') {
    select = 6;
   } else if (key === '8') {
    select = 7;
   } else if (key === '9') {
    select = 8;
   } else if (key === '0') {
    select = 9;
   } else if (key === 'q') {
    select = 10;
   } else if (key === 'w') {
    select = 11;
   } else if (key === 'e') {
    select = 12;
   } else if (key === 'r') {
    select = 13;
   } else if (key === 't') {
    select = 14;
   } else if (key === 'y') {
    select = 15;
   } else if (key === 'u') {
    select = 16;
   } else if (key === 'i') {
    select = 17;
   } else if (key === 'o') {
    select = 18;
   } else if (key === 'p') {
    select = 19;
   } else if (key === 'a') {
    select = 20;
   } else if (key === 's') {
    select = 21;
   } else if (key === 'd') {
    select = 22;
   } else if (key === 'f') {
    select = 23;
   } else if (key === 'g') {
    select = 24;
   } else if (key === 'h') {
    select = 25;
   } else if (key === 'j') {
    select = 26;
   } else if (key === 'k') {
    select = 27;
   }
   //Shape choosing
   if (key === 'z'){
      shape = 0
   } else if( key === 'x'){
    shape = 1
    if (rectorent == 0) {
      rectorent = 1
    } else if (rectorent == 1){
      rectorent = 0
    }
   } else if( key === 'c'){
    shape = 2
   } else if( key === 'v'){
    shape = 3
   }
}

let i = 0;
let BG_Music;
let BG_Image;

// List of characters for radiation effect 
const RadEffectText = ". / |. | ' ;";
const textArray = RadEffectText.split(" "); // Convert the text into an an array (list) of words. 
textSize(20)
function preload(){
  BG_Music = loadSound('Assets/GeigerCounterHigh.mp3')
  BG_Image = loadImage('Assets/SlotinAccidentDemon.png')
}

function setup(){
  BG_Music.loop()
	createCanvas(1140, 839);
  image(BG_Image,0,0);
  frameRate(10000000);
}

function draw(){
  let x = random(width)
  let y = random(height);

  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(255);
    stroke(100);
    console.log(i);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    //Ensures the characters aren't permamenet to keep the effect going
    i=0; 
    image(BG_Image,0,0) 
  }

}
function setup() {
  createCanvas(800, 400);
}

function draw() {
  fill(160,0,0)
  noStroke();
  square(400,0,400);
  fill(22,80,160)
  stroke(0,0,0)
  circle(600, 200, 375)
  fill(255,255,0)
  circle(600, 200, 290)
  fill(22,80,160)
  circle(600, 200, 205)
  fill(255,255,0)
  circle(600, 200, 115)
  fill(22,80,160)
  circle(600, 200, 40)
  fill(255,255,255)
  noStroke()
  square(0,0,400)
  fill(255,255,255)
  stroke(0,0,0)
  circle(200,200,375,375)
  fill(20,20,20)
  arc(200,200,375,375,0, 3.1415805641)
  fill(30,30,30)
  circle(200,200,250,250)
  fill(20,20,20)
  circle(200,200,200,200)
  fill(255,255,255)
  arc(200,200,200,200,0, 3.1415805641)
  noStroke()
  triangle(180,200,220,200,200,180)
  noStroke()
  fill(30,30,30)
  triangle(180,200,220,200,200,220)
  noLoop()
}
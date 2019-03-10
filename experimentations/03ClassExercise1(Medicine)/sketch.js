//MEDICINE
//atttmpt to crete a circle that continually trickles down in front of a pulsating background

var x=0;
var y=0;
var y1=75;
var y2=303;
var y3=266;
var y4=488;
var value=0;

function setup() {
  createCanvas(1900, 500);
}

function draw() {
  background(255,value,255);
  //set speed
  fr = 40;
  frameRate(fr);
  //circles
  ellipse(100,y,50,50);
  ellipse(475,y1,50,50);
  ellipse(950,y2,50,50);
  ellipse(1425,y3,50,50);
  ellipse(1800,y4,50,50);
  fill('pink');
  stroke(255);
  //if conditions to create pulsating background
  value = value + 5;
  if(value>255){
  value = 100;
  }
  //if conditions to create descending ellipses that repeat
  if(y>height){
    y=0;
  }
  y=y+3;
  //if conditions for setting the circles in different positions
  if(y1>height){
    y1=0;
  }
  y1=y1+3;
  //
  if(y2>height){
    y2=0;
  }
  y2=y2+3;
  //
  if(y3>height){
    y3=0;
  }
  y3=y3+3;
  //
  if(y4>height){
    y4=0;
  }
  y4=y4+3;
  //
}

var x;
var y;
var speed1=7;
var speed2=3;

function setup() {
  createCanvas(1900, 500);
  background('red');
  x=475;
  y=250;
}

function draw() {
  //circle, slow down rate of motion
  ellipse(x,y,50,50);
  stroke(0);
  fill(255);
  //fr = 30;
  //frameRate(fr);
  //if conditions to create zigzag motions
  if(y>height){
    speed1=-7;
  }
  if(y<0){
    speed1=7;
  }
  if(x>width){
    speed2=-3;
  }
  if(x<0){
    speed2=3;
  }
  y=y+speed1;
  x=x+speed2;
}

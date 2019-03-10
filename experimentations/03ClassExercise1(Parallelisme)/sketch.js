var x;
var y;
var speedY=1;
var speedX=1;
var value=0;

function setup() {
  createCanvas(1000,1000);
  background('#cc9900');
  x=0;
  y=0;
  ellipse(x,y,50,50)
  fill('#cc9900');
  stroke(255);
}

function draw() {
  //var circleSize=random(50)
  //set speed
  fr = 8;
  frameRate(fr);
  //sphere
  fill('#cc9900');
  stroke(255);
  ellipse(x,y,random(50),random(50));
  fill(255);
  stroke('#cc9900');
  ellipse(y,x,random(50),random(50));
  //if conditions ofr pulsating background
  value = value + 5;
  if(value>255){
  value = 100;
  }
  //if conditions for parallel circles
  x=x+25*speedX;
  y=y+50*speedY;
  if(y>height){
    speedY=-1;
  }
  if(y<0){
    speedY=1;
  }
  if(x>width){
    speedX=-1;
  }
  if(x<0){
    speedX=1;
  }
}


var img1, angle1, speed1;
var img2, angle2, speed2;
var angle3, speed3, lineSize;
var angle4, speed4, lineSize2;

//---
function preload(){
  img1=loadImage("data/landscape1.png");
  img2=loadImage("data/landscape2.png");
}
//---
function setup() {
  //1.classic setup functions
createCanvas(500,500);
background(255);

//2. declare variables
angle1=30;
speed1=7/10;
angle2=30;
speed2=5;
angle3=45;
speed3=2;
lineSize=120;
angle4=45;
speed4=4;
lineSize2=10;
}
//---
function draw() {
  background(255);
//1. loading an image
//(which image? whereX?, whereY?, width?, height?)
  placeImage1();
  placeImage2();
  drawAClock();
  drawAClock2();
}

function placeImage1(){
  push();
  angle1+=speed1;
  translate(250,250);
  rotate(radians(angle1));
  image(img1,-250,-250,500,500);
  pop();//isolates code
}

function placeImage2(){
  push();
  angle2-=speed2;
  translate(250,250);
  rotate(radians(angle2));
  tint(255,0,0);
  image(img2,-250,-250,500,500);
  pop();
}

function drawAClock(){
  push();
  angle3+=speed3;
  stroke(255);
  translate(250,250);
  rotate(radians(angle3));
  line(0,0,0,lineSize);
  fill(255);
  ellipse(0,0,5,5);
  ellipse(0,lineSize,5,5);
  pop();
}

function drawAClock2(){
  push();
  angle4+=speed4;
  stroke(255);
  translate(250,250);
  rotate(radians(angle4));
  line(0,0,0,lineSize2);
  fill(255);
  ellipse(0,0,5,5);
  ellipse(0,lineSize2,5,5);
  pop();
}

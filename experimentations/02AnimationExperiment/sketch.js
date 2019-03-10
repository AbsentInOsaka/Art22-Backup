//
//this is an experiment on animation and free movement
//
var x;
var y;

function setup(){
  //1.initial settings
  createCanvas(500, 500);
  background(0, 255, 255);
  //2. starting point
  x = 250;
  y = 100;
}

function draw(){

//1. setting up the position
  x = x + 5;
  y = y + 1;

//2. condition. move the circle back to the left
  if( x > 500 ){
    x = 0;
  }

  if( y > 500 ){
    y = 0;
  }


//3. draw the circle
  ellipse(x, y, 100, 100);
  stroke(255);
  //fill('#ff731c');
  fill(255, mouseX, 255);
}

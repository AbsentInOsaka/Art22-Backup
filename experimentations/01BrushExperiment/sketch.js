// Brush Experiment #1
//v1 getting started
//
//-------------
function setup(){
  createCanvas( 500, 500);
  background('#fae')
}

//-------------

function draw(){

  var circleSize=random(17);
  fill('#fae');
  stroke(255);
  ellipse( mouseX, mouseY, circleSize, circleSize);
}

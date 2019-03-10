//Getting Colors
//Code will grab colors form images
//Colors from Peter Greenwood: https://www.instagram.com/petergreenwooduk/?hl=en

//Vaiables
var img1;

//--------------

function preload(){
  img1 = loadImage("data/kraftwerk.jpg");
}

//----------------------

function setup() {
  //canvas
  createCanvas(500,500);
  background(200);
  //image data
  img1.loadPixels();
}

//-------------------

function draw() {
  //pick random point
  var x = floor(random(width));
  var y = floor(random(height));

  //color operation
  //fill(random(255),random(255),random(255));
  var desiredColor = img1.get(x,y);
  //map (value, min, max, minMappedOutput, maxMappedOutput)
  //map (value, 0, 1, 0, 255)
  var pointSize = map(mouseX, 0, width, 0.25, 100);

  //shapes
  noStroke();
  fill(desiredColor);
  ellipse(x,y,pointSize,pointSize);
}

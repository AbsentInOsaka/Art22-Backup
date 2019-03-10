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
  //declare var
  var rowY = height/2;
  var totalColumns = 9;
  var currentColumn = 0;
  //var pointSize = 55.5;
  //var pointSize = 500/9;
  //var pointSize = 500/totalColumns;
  var pointSize = width/totalColumns;

  //repetition

  while(currentColumn < totalColumns){
    rowX=pointSize*currentColumn;
    ellipse(rowX,rowY,pointSize,pointSize);
    //currentColumn = currentColumn + 1;
    //currentColumn += 1;
    currentColumn++
  }

  //color operations

}

//simple while Recreation
// - - - - - -  --  - - -- - - -

var totalCircles;
var img1;
var y=0;

// - - - - - ---- - - - - -

function preload(){
	img1=loadImage("data/kraftwerk.jpg");
}

//- - - - - - -- - - - - - -

function setup() {
  createCanvas(500,500);
  background(200);
  img1.loadPixels();
}

//--------------------- - - - --

function draw() {
//speed
var fr=10;
frameRate(fr);

	//basic calculations
	var circleSize=width/totalCircles;
  var currentCircle=0;
  y = y + 30; //motion y axis

//multiply the circles across x axis
	while(//how many times?
			currentCircle<totalCircles) {
		//where in x?
	  var x=circleSize*currentCircle;
    stroke(0); //draw the circles
    var desiredColor=getColor(x,y);
    fill(desiredColor);
    ellipse(x,y,circleSize,circleSize);
    currentCircle++;
  }


  if(y>height){
      y=0;
      totalCircles=random(10,20);
  }

	//variable
	//var totalCircles=random(20);


		/*
		background(0,0,255);
		circleSize=map(mouseX,0,width,2,500)
		totalCircles=floor(map(mouseY,0,height,2,30))
		*/
}

function getColor(colorX,colorY){
	var obtainColor=img1.get(floor(colorX),floor(colorY));
	return obtainColor;
}

/* Class assignment

1. animate the row from top to bottom
2. change the cirlce size every time we hit a cycle

EXTRA CREDIT

1. over time, the images reach a cycle, it'll load data from the other image (Use if)
*/

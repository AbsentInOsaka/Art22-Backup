//simple while
// - - - - - -  --  - - -- - - -

var totalCircles=15;
var img1;

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

	//basic calculations
	var y=height/2;
	y=mouseY;
	var circleSize=width/totalCircles;

	/*
	background(0,0,255);
	circleSize=map(mouseX,0,width,2,500)
	totalCircles=floor(map(mouseY,0,height,2,30))
	*/

	//draw the cricles
	var currentCircle=0;
	while(//how many times? 
			currentCircle<totalCircles){
		//where in x?
	x=circleSize*currentCircle
	noStroke();
	var desiredColor=getColor(x,y);
	fill(desiredColor);
  	ellipse(x,y,circleSize,circleSize);
  	currentCircle++
  }
}

function getColor(colorX,colorY){
	var obtainColor=img1.get(floor(colorX),floor(colorY));
	return obtainColor;
}
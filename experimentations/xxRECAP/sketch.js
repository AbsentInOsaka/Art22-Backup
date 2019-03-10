//
var x;
var y;
var speedX,speedY;
var directionX,directionY;

//does the same: var x,y;

//---
//1. do setup once at the beginning
function setup(){
	createCanvas(500,500);
	//black: background(0);
	//white: background(255);
	background(0);
	
	//
	x=width/2;
	y=height/2;
	speedX=1;
	speedY=3;
	directionY=1;
	directionX=1;
}

//---
//2. this function loops
function draw(){
	ellipse(x,y/45,50,50);
	line(x,y,x,random(height));
	if(random(5)>2){
		background(255,random(255),0));
	}
	//center: (width/2,height/2,...)
	
	//calculate position
	x=x+speedX*directionX;
	y=y+speedY*directionY;
	
	//does the same: x+=speedX;
	
	//if conditions
	if(y>height){
		directionY=-1;
	}
	if(y<0){
		directionY=1;
	}
	if(x>width){
		directionX=-1;
	}
	if(x<0){
		directionX=1;
	}
}
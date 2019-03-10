//array pracice 2: particle system

//variables
var totalP = 1;
var canvas;

//main array system
var x = [];
var y = [];
var speedX = [];
var speedY = [];
var directionX = [];
var directionY = [];

function setup(){
	//1. canvas
	canvas = createCanvas(500,500);
	canvas.position(0,0);
	canvas.style('z-index','-99');

	//2. initialize array system
for( var i=0 ; i<totalP ; i++){
	x[i] = width/2;
	y[i] = height/2;
	speedX[i] = random (1,5);
	speedY[i] = random (1,10);
	directionX[i] = 1;
	directionY[i] = 1;
	}
}

function draw(){
	//background('#90ee90'); //light green
	//background('pink');
	background('#ADD8E6'); //light blue

	for( var i=0 ; i < totalP ; i++){
	//1. pos
	x[i] += speedX[i] * directionX[i];
	y[i] += speedY[i] * directionY[i];

	//2. bounce
	/*if( x > width){
		directionX = -1
	}*/
	if( x[i] > width) directionX[i] = -1;
	if( x[i] < 0) directionX[i] = 1;
	if( y[i] > width) directionY[i] = -1;
	if( y[i] < 0) directionY[i] = 1;


	//draw
	stroke(255);
	fill(0,0,0,0);
	ellipse(x[i],y[i],30,30);
	}
}

//- - - - - - - -
function mouseReleased(){
	append (x, mouseX);
	append (y, mouseY);
	append (speedX, random(8));
	append (speedY, random(16));
	append (directionX, 1);
	append (directionY, 1);
	//increase total particles
	totalP++;
}

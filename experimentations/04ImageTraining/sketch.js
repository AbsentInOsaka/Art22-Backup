//IMAGE LOADING PIECE for SFMoMA
//v1.0

var img1; //my images
var angle1, speed1; //rotation related variables

//---
function preload(){
	//1. load the images
	img1=loadImage("data/landscape1.png");
	angle1=45;
	speed1=3;
}

//----
function setup(){
	//1. initial canvas op
	createCanvas(500,500);
}
//----
function draw(){
	//place background here to erase shadows
	background(221,157,176);
	
	//img1 convert radians to create rotation
	angle1+=speed1;
	translate(250,250);
	rotate(radians(angle1));
	//does the same: image(img1,-width/2,-height/2,500,500);
	image(img1,-250,-250,500,500);
}
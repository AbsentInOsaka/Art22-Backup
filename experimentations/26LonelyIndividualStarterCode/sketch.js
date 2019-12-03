// - - - - - - - - - - - - - - - - - - - - - - -- \\
// - - - - - - - GRIDS EVERYWHERE - - - - - \\
// - - - - - - - - - - - - - - - - - - - - - - -- \\
// Art 22 - - A lonely individual attempting his best
// by Juan Manuel Escalante

//alt using Svefn g englar by Sigur Ros


// Switches
var tolerance = 75;
var population = 15;
var speedPMin = 0.2;
var speedPMax = 3;
var sizeI = 5;
var noiseIX = 0.025;
var noiseIY = 0.005;
// - - -  Main Individual
var xI, yI, variationIX, variationIY;
// - - -  Population
var xP = [];
var yP = [];
var speedsP = [];
// - - - Sound variables
var song; // song file
var connections; // Connections true/false
var reverb;

// - - - - - - - - - - - - - - - - - - - - - - -- - -PRELOAD
function preload(){
	// We load our song
	 // song = loadSound('data/margaretBourkeWhite.mp3');
	 song = loadSound('data/Svefn-g-englar.mp3');

}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ SETUP

function setup(){

	// 1. Classic Canvas Operations
	canvas = createCanvas(450,450);
	canvas.position(0, 0);
	canvas.style('z-index', '-99');
	canvas.style('margin-left', '250px');
	canvas.style('margin-top', '250px');

	// 2. Start grid & PopulateArrays
	startPopulation();

	// 3. Start our individual's variables xI, yI, varIX, varIY, connections
	xI = 0;
	yI = 0;
	variationIX = 0.0;
	variationIY = 0.0;

	// 4. We start the sound
	song.loop();
	connections = false;
	reverb = new p5.Reverb();
	reverb.process(song, 20, .2 );//add rverb to music
	reverb.amp(4);//turn up the vol

}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ DRAW

function draw(){
	//
	background(238,238,238);
	//
	showPopulation();
	//
	showIndividual();
}
// - - - - - - - - - - - - -- -

function showIndividual(){
	// 1. We calculate it's position
	variationIX += noiseIX;
	xI = noise(variationIX)*width;

	variationIY += noiseIY;
	yI = noise(variationIY)*height;

	// 2. We draw
	stroke(50);
	strokeWeight(random(3));
	line(xI-sizeI, yI-sizeI, xI+sizeI, yI+sizeI);
	line(xI+sizeI, yI-sizeI, xI-sizeI, yI+sizeI);

	// 3. We check the connections
	checkConnections();

	// 4. Check sound
	checkSound();
}

// - - - - - - - - - - - - -- -


function startPopulation(){
	for (var i = 0; i<population ; i++){
		xP[i] = random(width);
		yP[i] = 0;
		speedsP[i] = random(speedPMin, speedPMax);
	}

}


// - - - - - - - - - - - - - - -

function showPopulation(){
	for (var i = 0; i<population ; i++){
		//1. position
			yP[i] += speedsP[i];
			//make it come back
			if(yP[i]>height){
				yP[i] = 0;
				xP[i] = random(width);
			}

		//2. draw
		noStroke();
		var sizeP = random(1,5);
		fill(20);
		ellipse(xP[i],yP[i], sizeP,sizeP);

	}

}

// - - - - - - - - - - - - - - -
function checkConnections(){
	connections = false;

	for(var i=0; i < population; i++){
		if(dist(xP[i],yP[i],xI,yI)<tolerance){
			strokeWeight(random(1));
			stroke(0,0,0,random(150));
			line(xP[i],yP[i],xI,yI);
			//setup switch to on
			connections = true;
		}
	}
}

// - - - - - - -
function checkSound(){
	// 1. Volume
	if(connections){
		//will execute if conneciton is true
		song.amp(1);
	}else{
		//will execute if conneciton is false
		song.amp(0);
	}

	// 2. PlayBack Speed
	var playBackSpeed = map(yI, 0, height, 0, 4);
	playBackSpeed = constrain(playBackSpeed, 0.1, 2);
	song.rate(playBackSpeed);
}

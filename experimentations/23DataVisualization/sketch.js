// - - - - - - - - - - - - - - - - - - - - - - -- \\
// - - - - - - - COMFORT Data Visual- - - - - \\
// - - - - - - - - - - - - - - - - - - - - - - -- \\

// Art 22 - - A personal visualization of COMFORT over the years

var maxCircleSize = 15;
var timerDuration = 23;
var canvas;
var dataSet;
var table, totalRows;
// Arrays
var year = [];
var level = [];
var x = [];
var circleCurrentSize = [];
var circleFinalSize = [];
var circleVisible = [];
// Slideshow variables
var currentCircle = -1;
var timer = 0;

// SOUND VARIABLES
var maxFreq = 500;
var minFreq = 80;
var noteDuration = 1;
var osc; //oscillator
var noteTimer = 0;

// - - - - - - - - - - - - - - - - - - - - - - -- \\ PRELOAD

function preload(){
	// 1. We load the dataSet
	dataSet = loadTable("data/Comfort.csv", 'csv', 'header');


}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ SETUP

function setup(){

	// 1. Classic Canvas Operations
	canvas = createCanvas(1000,450);
	canvas.position(0, 0);
	canvas.style('z-index', '-99');

	// 2. Reading the data
	totalRows = dataSet.getRowCount();
	print(">> Total Rows: "+totalRows);
	print(">> Total Columns: "+dataSet.getColumnCount());
	print(">> Year for position [0] is "+dataSet.getString(0,0));
	print(">> Level for position [0] is "+dataSet.getString(0,1));
	print("_-_-_-");
	print(">> Year for last item ["+(totalRows-1)+"] is "+dataSet.getString((totalRows-1),0));


 	// 3. Populate Arrays
	populateArrays();

 	// 4. Start sound
	startSound();

}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ DRAW

function draw(){
	// canvas
	background('#eeeeee');

	// A. Slideshow
	slideShow();

	// B. Show circles
	showCircles();

	// C. Sound operations
	monitoringSound();

}

// - - - - - - - - - - - - - - -

function populateArrays(){
	// We go one by one filling the data
	for( var i=0; i < totalRows; i++){
		//data arrays
		year[i] = dataSet.getString(i,0);
		level[i] = dataSet.getString(i,1);
		//
		x[i] = map(i, 0, totalRows, 10, width-10);
		//
		circleCurrentSize[i] = 0.0;
		circleFinalSize[i] = map(level[i], 0, 1, 0, maxCircleSize);
		circleVisible[i] = false; //boolean
	}
}


// - - - - - - - - - - - - - - -

function showCircles(){
	// We go ONE BY ONE
	for( var i = 0; i < totalRows; i++) {

		// 1 Circle Visible?
			if(circleVisible[i]){
			// 2 What is the size?
			var interval = circleFinalSize[i] - circleCurrentSize[i];
			circleCurrentSize[i] += interval/11 //11 is the friction
			// 3 We draw the circle
			fill(0,0,0,200);
			noStroke();
			ellipse(x[i], height/2, circleCurrentSize[i], circleCurrentSize[i]);

			// 4 Text
			fill(255);
			textAlign(CENTER);
			var yearSize = map(int(level[i]), 0, 10, 5, 15);
			textSize(yearSize);
			text(year[i], x[i], height/2);
			}

	}
}

// - - - - - - - - - - - - - -

function slideShow(){

	// A Ask if timer is zero
	if(timer == 0){
		// A1 We increase the current Circle
		currentCircle++;
		// A2 We check that it doesn't go beyond the Array's limits
		if(currentCircle == totalRows){
			currentCircle = 0;
			resetCircleSizes();
		}
		// A3 New Timer! WE turn it on! We Set the current size to 0!
		timer = timerDuration;
		circleVisible[currentCircle] = true;

		// A4 We execute a note
		var desiredNote = map(level[currentCircle], 0, 10, minFreq, maxFreq);
		playNote(desiredNote, noteDuration);

	}else{
		// B If timer is not zero, then we decrease it
		timer -= 1;
	}
}
// - - - - - - - - - - - - - -
function resetCircleSizes(){
	// ONE BY ONE RESETING CIRCLE SIZE!
	for(var i=0 ; i < totalRows ; i++){
		circleVisible[i] = false;
		circleCurrentSize[i] = 0;
	}

}
// - - - - - - - - - - -- - - -
function startSound(){
	// 1 New Oscillator
	osc = new p5.TriOsc();

	// 2 We start it
	osc.start();
	osc.freq(0);

	// 3 Zero volume
	osc.amp(0.5);

}
// - - - - - - - - - - - - --
function monitoringSound(){

	// We fade the note if the noteTimer is Up!
	if(noteTimer < 0.1){
		//turn it off or lower it
		osc.fade(0, 2);
	}else{
		//keep decreasing timer
		noteTimer -= 0.1;
	}

}

// - - - - - - - - - - - - - -
function playNote(nFreq, duration){
	// 1 We set the new Frequency
	osc.freq(nFreq);

	// 2 We fade in the volume
	osc.amp(0.5);

	// 3 We set the noteTimer
	noteTimer = duration;

}
// - - - - - - - - -- - - - - -


function keyTyped(){
	// 3 Different timer Durations
	if(key == '0') timerDuration = 100;
	if(key == '1') timerDuration = 23;
	if(key == '2') timerDuration = 3;

}

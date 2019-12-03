// - - - - - - - - - - - - - - - - - - - - - - -- \\
// - - - - - - - GRIDS EVERYWHERE - - - - - \\
// - - - - - - - - - - - - - - - - - - - - - - -- \\
// Art 22 - - A study on grids.
//
//variables
var cellSize = 40;
var columns;
var rows;
var totalCells;
var speedMin = 5;
var speedMax = 10;
//Array var
var x = [];
var y = [];
var speeds = [];
var angle = [];
var sizes = [];

// - - - - - - - - - - - - - - - - - - - - - - -- \\ SETUP

function setup(){

	// 1. Classic Canvas Operations
	canvas = createCanvas(1000,450);
	canvas.style('z-index', '-99');
	canvas.parent('sketch-holder');

	// 2. Start grid & PopulateArrays
	startGrid();
	populateArrays();


}

// - - - - - - - - - - - - - - - - - - - - - - -- \\ DRAW

function draw(){
	// -
	if(random(100) > 90) background(50);
	if(random(100) > 90) icing();

	// -
	showGrid();

	// -
	if(random(100) > 95) resetBackground();


}
// - - - - - - - - - - - - -- -
function startGrid(){
	//1. calculations
	columns = floor(width/cellSize);
	rows = floor(height/cellSize);
	totalCells = columns*rows;

	//2. feedback
	print(">>GRID SYSTEM STARTED");
	print(">Total columns for this code: "+columns);
	print(">Total rows for this code: "+rows);
	print("Total cells: "+totalCells);

}

// - - - - - - - - - - - - - - -

function populateArrays(){
	//1. create temporary arrays
	var xT = [];
	var yT = [];
	var speedsT = [];
	var angleT = [];
	var sizesT = [];

	//2.
	print("Array population started.");

	var counter = 0;

	for(var i=0; i < rows; i++){
		var yThis = i*cellSize;

		for(var j = 0; j < columns; j++){
			var xThis = j*cellSize;

			xT[counter] = xThis;
			yT[counter] = yThis;

			speedsT[counter] = random(speedMin,speedMax);
			angleT[counter] = 0;
			sizesT[counter] = random(cellSize);
			counter++;//after finishing one array, counter will increase

		}
	}

	//3. make the arrays the same
 x = xT
 y = yT
 speeds = speedsT
 angle = angleT
 sizes = sizesT
 print(">>Array population finished, all good!");

}


// - - - - - - - - - - - - - - -
function checkAngles(){

}

// - - - - - - - - - - - - - -

function showGrid(){
	for(var i = 0; i < totalCells; i++){
		push();
		//rotation
		angle[i] += speeds[i];
		translate(x[i],y[i]);
		rotate(radians(angle[i]));

		//center
		stroke(66,176,244);
		fill(255,255,255);
		ellipse(0,0,3,3);

		//rotatign line
		stroke(66,176,244,random(178));
		line(0,0,sizes[i],0);

		//outer ellipse
		noFill();
		stroke(244,188,66,random(100));
		ellipse(0,0,cellSize,cellSize);
		pop();
	}

}
// - - - - - - - - - - -
function resetBackground(){
	//
	cellSize = floor(random(30,80));
	startGrid();
	populateArrays();

}
// - - - - - - - - - - - - - - -
function icing(){
	noStroke();
	fill(50,50,50,20);
	rect(0,0,width,height);
}

// - - - - - - - - -- - - - - -


function keyTyped(){


}

// - - - - - - - - - - - -
// - - -Sound pectrum experimentation
// - - Using Yoko kanno's "Be Human"
// Example taken from: https://p5js.org/reference/#/p5.FFT

var sound, fft;
var y;

// - - - - - - - - - -
function preload(){
	// 1. We load the soundfile
	sound = loadSound("data/BeHuman.mp3");

}

// - - - - - - - - - -

function setup(){
	// 1. Canvas Operations
	createCanvas(1000, 500);
	background('#eeeeee');

	// 2. We play the sound
	sound.setVolume(0.5);
	sound.play();
	// We initialize An fft object, to analyze the sound audio
	fft = new p5.FFT();

	// 3. The height
	y = height/2;

}

// - - - - - - - - -
function draw(){

	background('#eeeeee');

	// 1. We update the FFT
	var spectrum = fft.analyze();
	var waveform = fft.waveform();

	// - - - WAVE FORM

	noFill();
	beginShape();
	stroke(0,0,0, 140);
	for(var i = 0; i < waveform.length; i++){
		var xWave = map(i, 0, waveform.length, 0, width);
		var yWave = map(waveform[i], -1, 1, 0, height);
		vertex(xWave, yWave);
	}
	endShape();



}

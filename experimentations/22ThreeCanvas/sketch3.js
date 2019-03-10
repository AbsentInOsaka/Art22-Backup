//three canvas sketch
//Inspired byt he song "Be Human" by Yoko Kanno
//TO DO LIST:
/*- canvas 1: radial soundwave. make text appear inside the shape as person crolls down page.
- canvas 2: circuit snakes, small points followed by lines that leave a
trail that fill up the entire screen. The trails change direction randomly.
- Canvas 3: Make a trail of tears fall all across the screen.
- Extras:
  ~ Have trail of tears appear as soon as person finishes scrolling down
  ~ Have circuits react to each other, and change course so they don't collide
  ~ Have all shapes, except the radial soundwave be colored only during the chorus.
  Else have them be random colors
  ~analyze the spectrum of the song and set values to different things*/

  /*Uses codes from:
    ~ Juan Manuel, 22ThreeCanvas; 18HowSmallAThoughtWAVE
    ~ Daniel shiffman, The Coding Train; 17.9: Sound Visualization: Graphing Amplitude - p5.js Sound Tutorial;
    17.10: Sound Visualization: Radial Graph - p5.js Sound Tutorial*/


var song;

function preload (){
  song = loadSound("data/BeHuman.mp3");
}

function setup (){
  song.setVolume(1);
  song.play();
}

//- - - - - -  - - -
//CANVAS 1
//- - - - - -  - - -
var sA = function( sketch ) {
  //1.Variables
  var volhistory = [];
  var y;
  var analyzer;
  var fft;

  sketch.windowResized = function() {
  sketch.resizeCanvas(windowWidth, windowHeight);
};

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '2');
    sketch.angleMode(DEGREES);
    sketch.angleMode(RADIANS);
    analyzer = new p5.Amplitude();
    fft = new p5.FFT();
  };

  //3.Draw
  sketch.draw = function(){
    sketch.background('black');

    var vol = analyzer.getLevel();
    var alpha = vol*1000;
    volhistory.push(vol);
    sketch.stroke(255,255,255,alpha);
    sketch.noFill();

    sketch.translate(windowWidth/2, windowHeight/2);
    //bigger circle
    sketch.beginShape();
    for (var i = 0 ; i < 360 ; i++){
      var r = map(volhistory[i], 0, 1, 100, 1000);
      var x = r * cos(i);
      var y = r * sin(i);
      sketch.vertex(x, y);
    }
    sketch.endShape();

    sketch.fill(255,255,255,alpha);
    sketch.ellipse(0,0, windowWidth/4,windowHeight/4);

    //smaller circle
    sketch.stroke(0);
    sketch.beginShape();
    for (var i = 0 ; i < 360 ; i++){
      var r = map(volhistory[i], 0, 1, 10, 100);
      var x = r * cos(i);
      var y = r * sin(i);
      sketch.vertex(x, y);
    }
    sketch.endShape();

    if (volhistory.length > 360) {
      volhistory.splice(0, 1);
    }

  };

};

var mySketchA = new p5(sA, 'positionA');

//- - - - - -  - - -
//CANVAS 1b
//- - - - - -  - - -
/*var sA2 = function( sketch ) {
  //1.Variables
  var volhistory = [];
  var y;
  var analyzer;
  var fft;

  sketch.windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
  };

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth,windowHeight);
    canvas.style('z-index', '-98');
    sketch.angleMode(DEGREES);
    sketch.angleMode(RADIANS);
    analyzer = new p5.Amplitude();
    fft = new p5.FFT();
    var x = random(0,windowWidth);
    var y = random(0,windowHeight);
  };

  //3.Draw
  sketch.draw = function(){

    var vol = analyzer.getLevel();
    volhistory.push(vol);
    sketch.stroke(255);
    sketch.noFill();

    sketch.translate(x, y);
    //smaller circle
    sketch.beginShape();
    for (var i = 0 ; i < 360 ; i++){
      var r = map(volhistory[i], 0, 1, 10, 100);
      var x = r * cos(i);
      var y = r * sin(i);
      sketch.vertex(x, y);
    }
    sketch.endShape();

    if (volhistory.length > 360) {
      volhistory.splice(0, 1);
    }

  };

};

var mySketchA2 = new p5(sA2, 'positionA2');*/

//- - - - - -  - - -
//CANVAS 2a
//- - - - - -  - - -
var sBa = function( sketch ) {
  //1.Variables
  var y;
  var fft;

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth/4,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','3');

    fft = new p5.FFT();

    y = windowHeight/2
  };

  //3.Draw
  sketch.draw = function(){
    sketch.background(0);

    var spectrum = fft.analyze();
    var waveform = fft.waveform();

    sketch.noFill();
    sketch.beginShape();
    sketch.stroke(255);
    for (var i=0 ; i < waveform.length ; i++){
      var xWave = sketch.map(i, 0, waveform.length, 0, windowWidth);
      var yWave = sketch.map(waveform[i], -1, 1, 0, windowHeight);
      sketch.vertex(xWave, yWave);
    }
    sketch.endShape();

  };

};

var mySketchBa = new p5(sBa, 'positionBa');

//- - - - - -  - - -
//CANVAS 2b
//- - - - - -  - - -
var sBb = function( sketch ) {
  //1.Variables
  var y;
  var fft;

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','3');

    fft = new p5.FFT();

    y = windowHeight/2
  };

  //3.Draw
  sketch.draw = function(){
    sketch.background(0);

    var spectrum = fft.analyze();
    var waveform = fft.waveform();

    sketch.noFill();
    sketch.beginShape();
    sketch.stroke(255);
    for (var i=0 ; i < waveform.length ; i++){
      var xWave = map(i, 0, waveform.length, 0, windowWidth);
      var yWave = map(waveform[i], -1, 1, 0, windowHeight);
      sketch.vertex(xWave, yWave);
    }
    sketch.endShape();

  };

};

var mySketchBb = new p5(sBb, 'positionBb');

//- - - - - -  - - -
//CANVAS 2c
//- - - - - -  - - -
var sBc = function( sketch ) {
  //1.Variables
  var y;
  var fft;

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','3');

    fft = new p5.FFT();

    y = windowHeight/2
  };

  //3.Draw
  sketch.draw = function(){
    sketch.background(0);

    var spectrum = fft.analyze();
    var waveform = fft.waveform();

    sketch.noFill();
    sketch.beginShape();
    sketch.stroke(255);
    for (var i=0 ; i < waveform.length ; i++){
      var xWave = map(i, 0, waveform.length, 0, windowWidth);
      var yWave = map(waveform[i], -1, 1, 0, windowHeight);
      sketch.vertex(xWave, yWave);
    }
    sketch.endShape();

  };

};

var mySketchBc = new p5(sBc, 'positionBc');

//- - - - - -  - - -
//CANVAS 2d
//- - - - - -  - - -
var sBd = function( sketch ) {
  //1.Variables
  var y;
  var fft;

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','3');

    fft = new p5.FFT();

    y = windowHeight/2
  };

  //3.Draw
  sketch.draw = function(){
    sketch.background(0);

    var spectrum = fft.analyze();
    var waveform = fft.waveform();

    sketch.noFill();
    sketch.beginShape();
    sketch.stroke(255);
    for (var i=0 ; i < waveform.length ; i++){
      var xWave = map(i, 0, waveform.length, 0, windowWidth);
      var yWave = map(waveform[i], -1, 1, 0, windowHeight);
      sketch.vertex(xWave, yWave);
    }
    sketch.endShape();

  };

};

var mySketchBd = new p5(sBd, 'positionBd');

//- - - - - -  - - -
//CANVAS 2e
//- - - - - -  - - -
var sBe = function( sketch ) {
  //1.Variables
  var y;
  var fft;

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','3');

    fft = new p5.FFT();

    y = windowHeight/2
  };

  //3.Draw
  sketch.draw = function(){
    sketch.background(0);

    var spectrum = fft.analyze();
    var waveform = fft.waveform();

    sketch.noFill();
    sketch.beginShape();
    sketch.stroke(255);
    for (var i=0 ; i < waveform.length ; i++){
      var xWave = map(i, 0, waveform.length, 0, windowWidth);
      var yWave = map(waveform[i], -1, 1, 0, windowHeight);
      sketch.vertex(xWave, yWave);
    }
    sketch.endShape();

  };

};

var mySketchBe = new p5(sBe, 'positionBe');

//- - - - - -  - - -
//CANVAS 2f
//- - - - - -  - - -
var sBf = function( sketch ) {
  //1.Variables
  var y;
  var fft;

  //2.Setup
  sketch.setup = function(){
    var canvas = sketch.createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','3');

    fft = new p5.FFT();

    y = windowHeight/2
  };

  //3.Draw
  sketch.draw = function(){
    sketch.background(0);

    var spectrum = fft.analyze();
    var waveform = fft.waveform();

    sketch.noFill();
    sketch.beginShape();
    sketch.stroke(255);
    for (var i=0 ; i < waveform.length ; i++){
      var xWave = map(i, 0, waveform.length, 0, windowWidth);
      var yWave = map(waveform[i], -1, 1, 0, windowHeight);
      sketch.vertex(xWave, yWave);
    }
    sketch.endShape();

  };

};

var mySketchBf = new p5(sBf, 'positionBf');

//- - - - - -  - - -
//CANVAS 3
//- - - - - -  - - -
var sC = function( sketch ) {
  //1.Variables

  //2.Setup
  sketch.setup = function(){

  };

  //3.Draw
  sketch.draw = function(){

  };

};

var mySketchC = new p5(sC, 'positionC');

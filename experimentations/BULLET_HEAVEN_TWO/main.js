/** BULLET_HEAVEN_TWO v1

CREDITS
  Song: "fantasy" by DyE

DESCRIPTION
- Unlike the first one this game will feature a circular field.
- The overall theme will be of Space
- The concept remains the same, to avoid as many "bullets" as possible.

CHANGES
- Scoreboard, so that visitors can input the score they got.
- Nicer looking player GUI

**/

//variables
var canvas;
var song, analyzer, fft;
var volhistory = [];
var x, y;
var starLights = [];
var ampInc1 = 0;
var ampInc2 = 25;

function preload(){
  song = loadSound("data/DyeFantasy.mp3");
}

//---------------------------------------------------------------------------------------------------

function setup(){
  //canvas
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('sketch-holder');
  canvas.style('z-index','-99');
  canvas.position(0,0)

  //sound
  analyzer = new p5.Amplitude();
  fft = new p5.FFT();
  song.setVolume(1);
  song.play();

  //Starlights setup
  var totalS = 20;
  for (var i=0; i<totalS; i++){
    starLights.push(new lights());
  }

}

//---------------------------------------------------------------------------------------------------

function draw(){
  //setups
  var amp = analyzer.getLevel();

  //canvas
  background(61,0,141);

  // Background A
  for (var i=0; i<starLights.length; i++){
    starLights[i].display();
  }

  // Background B
push();
  angleMode(DEGREES);
  angleMode(RADIANS);

  var vol = analyzer.getLevel();
  var alpha = vol*250;
  volhistory.push(vol);
  stroke(255,255,255,alpha);
noFill();

translate(windowWidth/2, windowHeight/2);
//bigger circle
beginShape();
for (var i = 0 ; i < 360 ; i++){
  var r = map(volhistory[i], 0, 1, 100, 1000);
  var x = r * cos(i);
  var y = r * sin(i);
  vertex(x, y);
}
endShape();

if (volhistory.length > 360) {
  volhistory.splice(0, 1);
}
pop();

// Background C
push();
var fr = 30;
frameRate(fr);
angleMode(DEGREES);

var vol = analyzer.getLevel();
var alpha = vol*1000;
volhistory.push(vol);
stroke(255,255,255,alpha);
noFill();

translate(windowWidth/2, windowHeight/2);
//bigger circle
beginShape();
for (var i = 0 ; i < 360 ; i++){
var r = map(volhistory[i], 0, 1, 100, 1100);
var x = r * cos(i);
var y = r * sin(i);
vertex(x, y);
}
endShape();

if (volhistory.length > 360) {
volhistory.splice(0, 1);
}
pop();

//Foreground
push();
var strokeGirth = 5 + amp*15;
  fill(26,0,60);
  stroke(255);
  strokeWeight(strokeGirth);
  // strokeWeight(*match to volume*)
  ellipse(windowWidth/2,windowHeight/2,800,800);
pop();

}

//---------------------------------------------------------------------------------------------------

function lights(){
  this.x = random(0,windowWidth);
  this.y = random(0,windowHeight);

  this.display = function(){
    var amp = analyzer.getLevel();
    ampInc1 += .25;
    ampInc2 += .25;
    if (ampInc1>25){
      this.x = random(0,windowWidth);
      this.y = random(0,windowHeight);
      ampInc1 = 0;
    }
    if (ampInc2>50){
      this.x = random(0,windowWidth);
      this.y = random(0,windowHeight);
      ampInc2 = 25;
    }
    var randomColorA = random(255);
    var randomColorB = random(255);
    var randomColorC = random(255);
    stroke(randomColorA,randomColorB,randomColorC,random(255));
    line(this.x,this.y,this.x,this.y+amp*ampInc2);
    line(this.x,this.y,this.x,this.y-amp*ampInc2);
    line(this.x,this.y,this.x+amp*ampInc1,this.y);
    line(this.x,this.y,this.x-amp*ampInc1,this.y);
    noStroke();
    fill(randomColorA,randomColorB,randomColorC,random(255));
    ellipse(this.x,this.y,floor(amp*ampInc1-2),floor(amp*ampInc1-2));
  };
}

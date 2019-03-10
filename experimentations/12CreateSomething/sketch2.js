//Staralfur visualizer//
//Inspired by the song Staralfur by Sigur Ros//
//makes use of the song mentioned above//

//variables
//var totalS = 30;
var song;
var y;
var x=0;
var risingStars = [];
var fft;

function preload(){
  song = loadSound("data/staralfur.mp3");
}

function setup(){
  var canvas=createCanvas(1000,500);
  canvas.style('display','block');

  //makes canvas moveable
  canvas.parent('sketch-holder');

  song.setVolume(1);
  song.play();
  fft = new p5.FFT();
  analyzer = new p5.Amplitude();

  //array system x position
  var totalS = 30;
  for (var i=0 ; i<totalS ; i++){
    risingStars.push(new rise());

  y = 200;
  }
}

function draw(){
  background('black');

  var amp = analyzer.getLevel();
  var spectrum = fft.analyze();

  for(var i = 0; i < spectrum.length; i++){
    var h = map(spectrum[i], 0, 255, 0, 255);
    var x = map(i, 0, spectrum.length, 0, width);
    var alpha = amp*2000;
    stroke(80,255,51,alpha);
    line(x, y+h, x, y+h);
    line(y+h, x, y+h, x);
    stroke(51,211,255,alpha);
    line(x, y-h, x, y-h);
    line(y-h, x, y-h, x);
  }

  translate(500,500);
  for ( var i=0 ; i<risingStars.length ; i++){
    risingStars[i].move();
    risingStars[i].display();
  }
}

function rise() {
  this.x = 0;
  this.y = 0;

  this.move = function(){
    var amp = analyzer.getLevel();
    var speedY = amp*5;
    this.y -= speedY;
    if (this.y<-180){
      this.y=random(30,300);
      this.x=random(-500,width);
    }
  };

  this.display = function(){
    var amp = analyzer.getLevel();
    var alpha = amp*2000;
    stroke(255,255,255,alpha);
    line(this.x,this.y,this.x,this.y+amp*150);
    line(this.x,this.y,this.x+amp*100,this.y);
    line(this.x,this.y,this.x-amp*100,this.y);
    noStroke();
    fill(255,255,255);
    ellipse(this.x,this.y,floor(amp*100),floor(amp*100));
  };
}

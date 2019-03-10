//YKK inspired projct that reflects its idea of calmness
/*Moonlight scene where there are shining streetlights in a submerged city.
Code will attempt to have flashing white lights in the water ,as well as have
a current that matches the color of the picture. It can be syncrhonized to
the music which will be taken from the osundtrack*/

//var img1;
var song;
var seaLights = [];
var canvas;
var x = 0;
var y = 0;

function preload() {
  	img1=loadImage("data/scenec.png");
    song=loadSound("data/music.mp3");
}

function setup() {
  //canvas + images
  canvas = createCanvas(1018,734);
  //canvas.position(0,250);
  //canvas.style('z-index','-99');

  //image(img1,0,0);

  //music
  song.setVolume(1);
  song.play();
  fft= new p5.FFT();
  analyzer= new p5.Amplitude();

  //Sea Lights array setup
  var totalS = 10;
  for (var i=0 ; i<totalS ; i++){
    seaLights.push(new lights());

  //stop lag plz
  /*var fr = 20;
  frameRate(fr);*/
  }
}

function draw() {
  tint(71,118,192);
  background(img1,255);

  var amp = analyzer.getLevel();
  var spectrum = fft.analyze();

  for (var i=0 ; i<seaLights.length ; i++){
    //seaLights[i].pop();
    seaLights[i].display();
  }

  //soundwaves
  for(var i = 0; i < spectrum.length; i++){
    var h = map(spectrum[i], 0, 255, 0, 255);
    var x = map(i, 0, spectrum.length, 0, width);
    var alpha = amp*2000;
    stroke(0,0,255,alpha);
    line(x, y+h+10+250, x, y+h+10+250);
    line(x, y+h+20+250, x, y+h+20+250);
    line(x, y+h+30+250, x, y+h+30+250);
    line(x, y+h+40+250, x, y+h+40+250);
  }
  //window.setInterval(update,1);
}

function lights(){
  this.x = random(0,720);
  this.y = random(250,450);

  this.display = function(){
    var amp = analyzer.getLevel();
    var alpha = 255;
    alpha -= 5
    stroke(255,alpha);
    line(this.x,this.y,this.x,this.y+amp*25);
    line(this.x,this.y,this.x,this.y-amp*25);
    line(this.x,this.y,this.x+amp*10,this.y);
    line(this.x,this.y,this.x-amp*10,this.y);
    noStroke();
    fill(255);
    ellipse(this.x,this.y,floor(amp*10),floor(amp*10));
  };
}

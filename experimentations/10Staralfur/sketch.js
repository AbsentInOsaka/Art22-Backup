//Sound Training
//Staralfur by Sigur Ros

//variables
var y;
var song;
var fft;


function preload(){
  song = loadSound("data/staralfur.mp3");
}

//- - - -- - - -- - - -

function setup(){
  //1. canvas
  createCanvas(1000,500);
  background('#e6f5ff');

  //2. play the sound
  song.setVolume(0.5);
  song.play();
  fft = new p5.FFT();

  //3. height
  y = height/2;
}

// - - -- - - -- - - --

function draw(){
//background('#e6f5ff');

  //1. update FFT
  var spectrum = fft.analyze();

  //2. create spectrum
  for(var i = 0; i < spectrum.length; i++){
    //2a. calculate height
    var h = map(spectrum[i], 0, 255, 0, 80);
    //2b. calculate x pos
    var x = map(i, 0, spectrum.length, 0, width);

    //2c. we draw
    stroke(0, 0, 0, 20);
    /*line(x, y, x, y+h);
    line(x, y, x, y-h);*/
    if (h > 0.1) {
      line(x, y-h, x, y-h);
    }
  }

  //3. change y pos
  y += 0.1;
  if (y>height){
    y=height/4;
  }

}

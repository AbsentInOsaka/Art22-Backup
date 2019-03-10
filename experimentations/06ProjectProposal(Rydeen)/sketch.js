//Subways v.1
//Project, have the canvas split by two rectangles, each of which moves outside of the cnavas at different intervals. Meanwhile, 2 different shapes change at random intervals. When thse shapes become a specific shape, then the rectangles will shift.
//Song: Rydeen by Yellow Magic Orchestra

//set variables
//var value

//Load the music

function preload(){
    song = loadSound('assets/rydeen.mp3');
    img1=loadImage('assets/pianotop.png');
    img2=loadImage('assets/pianobottom.png');
}

//---------------------------

//create canvas as a base

function setup(){
    createCanvas(500,500);
    //setup song
    song.setVolume(0.6);
    song.play();
    // create amp
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
    //particle randomizer

}

//-----------------------------

//ativate all of the functions

function draw(){
    background(0);
    particles1();
    particles2();
    pianobottom();
    pianotop();
    soundShape();

}

//----------------------

//create the shapes

function particles1(){
  var amp=analyzer.getLevel();
  //shapes
  ellipse(500-random(amp*2500),500-random(amp*2500),6,6)
  ellipse(500-random(amp*2500),500-random(amp*2500),10,10)
  ellipse(500-random(amp*2500),500-random(amp*2500),4,4)
  ellipse(500-random(amp*2500),500-random(amp*2500),7,7)
  ellipse(500-random(amp*2500),500-random(amp*2500),9,9)
  fill(255);
}

//----------------------

function particles2(){
  var amp=analyzer.getLevel();
  //shapes
  ellipse(random(amp*2500),random(amp*2500),6,6)
  ellipse(random(amp*2500),random(amp*2500),10,10)
  ellipse(random(amp*2500),random(amp*2500),4,4)
  ellipse(random(amp*2500),random(amp*2500),7,7)
  ellipse(random(amp*2500),random(amp*2500),9,9)
  fill(255);
}

//draw the shape so that it moves with the sound of the music

function soundShape(){
  var amp=analyzer.getLevel();
  push();
  translate(0,0);
  fill(255);
  stroke(255);
  ellipse(width/2,height/2,10+amp*800,10+amp*800);
  pop();

}

//--------------------------------

//draw the pianos

function pianotop(){
    var amp=analyzer.getLevel();
    var speed1=amp*1000;
  push();
  translate(0+3*speed1,0);
  tint(255,random(amp*2500),255);
  image(img1,0,0,500,250);
  pop();

}

//-----------------------------------

function pianobottom(){
    var amp=analyzer.getLevel();
    var speed1=amp*1000;
  push();
  translate(0-3*speed1,250);
  tint(random(amp*2500),255,255);
  image(img2,0,0,500,250);
  pop();
}

//--------------------

//player

function mousePressed() {
  if ( song.isPlaying() ) {
    song.stop();
  } else {
    song.play();
  }
}

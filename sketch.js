//cozy homepage//
//1.play song//
//2.fireflies//
//3.have changing songs//

var song,song2,song3;
var topLayer;
var bottomLayer;

function preload(){
    song = loadSound("data/lofi/");
    song2 = loadSound("data/lofi/");
    song3 = loadSound("data/lofi/");
}

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  song.setVolume(1);
  song.play();
}

function fireflies(){

}

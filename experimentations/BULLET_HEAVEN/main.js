//BULLET HEAVEN V1

//Coding inspired by The Coding Train
//Videos:
//~ Coding Challenge #67: Pong!
//~ Coding Challenge #5: Space Invaders in JavaScript with p5.js

//sounds used
//music: Ryugujyu no Koibito by Miharu Koshi
//hurt sound fx: damage taken sound in Undertale by Tobyfox

//Background and boss design and concept by Carlos Luna

//STEPS GENERAL
/*
1. Create basic working game
2. stylize
3. sync to music
4. polish
*/

//gen variables
var canvas;
var timer;
var player;
var boss;
var bossArms = [];
var bossArmsAmount = 10;
var bullets = [];
var counter = 0;
var song, sound, analyzer, fft;
var img1,img2;
var bulletSpraySpeed;

function preload(){
  song = loadSound("data/RyugujyoNoKoibito.mp3");
  sound = loadSound("data/takingDamage.mp3")
  img1 = loadImage("data/background.png");
  img2 = loadImage("data/boss.png");
}

function setup(){
  //canvas op
  canvas = createCanvas(500,700);
  canvas.parent('sketch-holder');
  canvas.position(3, 110);

  //entities
  player = new player();
  timer = new timer(-5,0);
  boss = new boss(width/2,100);
  // bossArms = new bossArms();
  for (var i=0; i<bossArmsAmount; i++){
    bossArms[i] = new bossArms(i*(500/bossArmsAmount)+(500/bossArmsAmount)-25,noise(100,105));
  }

  //sound activate
  analyzer = new p5.Amplitude();
  fft = new p5.FFT();

  song.setVolume(1);
  song.play();

}

function draw(){
  //load custom background
  background(img1);
  // //load custom boss image
  // image(img2,width/2,100);
  //entities
  player.show(); //display
  player.move(); //movement
  timer.show(); //display
  timer.move(); //movement

  //bullet shooting
  bulletShoot();

  //counter for display
  if(song.isPlaying()){
  push();
    textSize(20);
    fill(255,0,0);
    text(counter, 450,690);
  pop();
  }else{
  push();
    textSize(60);
    fill(255,0,0);
    text('SCORE',width/2,height/2-50)
    text(counter,width/2,height/2);
  pop();
  }

  // bossArms.show();
  for(var i=0; i<bossArmsAmount; i++){
    bossArms[i].show();
    bossArms[i].move();
    bossArms[i].attacks(timer);

  //infinite scrolling left
    // for (var i=0; i<bossArmsAmount; i++){
    //   if (bossArms[i].offScreen()) bossArms[i].offScreenDel();
    // }
    //
    // for (var i=0; i<bossArmsAmount; i++){
    //   if (bossArms[i].toDelete) bossArms[i].splice(i, 1);
    // }
  }

  //bullet
  for (var i=0; i<bullets.length; i++){
    //bullet functions
    bullets[i].show();
    bullets[i].move();
    //bullet damage to player
    if(bullets[i].hits(player)){
      //make bullets dissappear
      bullets[i].absorb();
      //counter for damage
      console.log("DAMAGE");
      counter++;
      sound.play();
      sound.setVolume(1);
    }
    //make bullets dissappear after going off-screen
    if(bullets[i].x>width || bullets[i].x<0 || bullets[i].y>height || bullets[i].y<0) bullets[i].absorb();
  }

  //remove bullets after hit and off-screen
  for (var i=bullets.length-1; i>=0; i--){
    if (bullets[i].toDelete) bullets.splice(i, 1);
  }
}

//temp boss  and arms shooting
function keyPressed(){
  if (key === ' '){
    var bulletBoss = new Bullet(boss.x,boss.y);
    bullets.push(bulletBoss);

    for(var i=0; i<bossArmsAmount; i++){
      var bulletArms = new Bullet(bossArms[i].x,bossArms[i].y);
      bullets.push(bulletArms);
    }
  }
}

//bullet sound fusion functions
function bulletShoot(){
  //sound functions
  var amp = analyzer.getLevel();
  var spectrum = fft.analyze();

  //sound reaction boss
  var bossSize = 30+amp*500;
  boss.show(bossSize); //display
  boss.move(timer); //movement

  if (bossSize > 120){
    var bulletBoss = new Bullet(boss.x,boss.y);
    bullets.push(bulletBoss);
  }

  //sound reaction bossArms
  // var bulletBossArmsPos = map(bossArms.x,0,spectrum.length,0,500)
  if(song.isPlaying()){
    if(timer.y <= 6300) bulletSpraySpeed = 99;
    if(timer.y >= 6301) bulletSpraySpeed = 95;
    if(timer.x >= 1) bulletSpraySpeed = 90;
  }else{
    bulletSpraySpeed = 100;
  }

  if(random(100) > bulletSpraySpeed){
    for (var i=0; i<bossArmsAmount; i++){
      var bulletBossArms = new Bullet(bossArms[i].x,bossArms[i].y);
      bullets.push(bulletBossArms);
    }
  }
}

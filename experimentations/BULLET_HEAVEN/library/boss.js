//variables

//main
function boss(x,y){
  this.x = x;
  this.y = y;

  this.xDir = 0;
  this.xStart = 0;

  // //check timer
  // if(timer.y >= 700) this.xDir = -1;

  this.show = function(bossSize){
    // var amp = analyzer.getLevel();
    // var bossSize = 30+amp*500;
  push();
    fill(244, 65, 80);
    stroke(255);
    strokeWeight(random(5));
    rectMode(CENTER);
    ellipse(this.x,this.y,bossSize,bossSize);
    image(img2,this.x-30,this.y-30,img2.width*2,img2.height*2);
  pop();
  }

  this.move = function(timer){
    //check timer
    if(timer.y >= 6300) this.xStart = -1;

    //horizontal movement
    var leftBossReach = false;
    var rightBossReach = false;

    //set movement vertical
    if(this.x > width) rightBossReach = true;
    if(this.x < 0) leftBossReach = true;

    //check movement horizontal
    var bossSpeed1;
    var bossSpeed2;

    if(timer.y >= 6300){
      bossSpeed1 = 0;
      bossSpeed2 = 2;
    }

    if(timer.x >= 1){
      bossSpeed1 = -2;
      bossSpeed2 = 4;
    }

    if(rightBossReach) this.xDir = bossSpeed1;
    if(leftBossReach) this.xDir = bossSpeed2;

    this.x = this.x + this.xStart + this.xDir;
  }
}

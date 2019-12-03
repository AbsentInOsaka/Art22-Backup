//variables

//main
function bossArms(x,y) {
  this.x = x;
  this.y = y;
  // this.variation = variation;

  this.xDir = -1;
  this.yDir = 1;

//display
  this.show = function(){
  //draw
  push();
    fill(244, 65, 80);
    stroke(255);
    strokeWeight(random(3));
    ellipse(this.x,this.y,15,15)
  pop();

    // if(random(100)>50){
    //   ellipse(this.x +this.variation,this.y,10,10);
    // }else{
    //   ellipse(this.x,this.y,10,10);
    // }
  }

//movement
  this.move = function(){
    //vertical movement
    var bottomReach = false;
    var topReach = false;

    // //attack intervals
    // var attackArray = random(0,3000);

    //set movement vertical
    if(this.y > 125) bottomReach = true;
    if(this.y < 75) topReach = true;

    //check movement vertical
    if(bottomReach) this.yDir += -1;
    if(topReach) this.yDir += 1;

    this.y = this.y + this.yDir;
  }

  this.attacks = function(timer){
    //horizontal movement
    var leftReach = false;
    var rightReach = false;

    //attack variables
    var attackOne = false;
    var attackTwo = false;
    var attackThree = false;

    //attack operations
    if(timer.y <= 6300){
      attackOne = true;
    }
    if(timer.y >= 6301){
      attackTwo = true;
    }
    if(timer.x >= 1){
      attackThree = true;
    }

    //only do attacks once
    if(attackThree){
      attackOne = false;
      attackTwo = false;
    }
    if(attackTwo){
      attackOne = false;
      attackThree = false;
    }
    if(attackOne){
      attackTwo = false;
      attackThree = false;
    }

    //set movement horizontal and attacks
    if(attackOne){
      if(this.x < 0) leftReach = true;
      if(this.x > width) rightReach = true;
    }
    if(attackTwo){
      if(this.x < width) leftReach = true;
      if(this.x > width) rightReach = true;
    }
    if(attackThree){
      if(this.x < 0) leftReach = true;
      if(this.x > 0) rightReach = true;
    }

    //check movement horizontal
    if(leftReach) this.xDir += 0.5;
    if(rightReach) this.xDir += -0.5;

    this.x = this.x + this.xDir;
  }

//replicating bullets offScreen
  // this.offScreenDel = function(){
  //   this.toDelete = true;
  // }
  //
  // this.offScreen = function(){
  //   if (this.x<0){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}

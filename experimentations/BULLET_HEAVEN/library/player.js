//variables
var sizeP = 10;

//main
function player(){
  this.x = width/2;
  this.y = height;
  this.r = 10;

  this.show = function(){
    fill(68, 186, 255);
    // triangle(this.x-sizeP,this.y,this.x,this.y,this.x+sizeP,this.y);
    rect(this.x,this.y-20,this.r*2,this.r*2);
  }

  this.move = function(){
      //stop player going off-screen
      if(this.x>width) this.x += -4;
      if(this.x<0) this.x += 4;

      if(this.y<260) this.y += 4;
      if(this.y>height) this.y += -4;

      //player controlled movement variables
      var dirXLeft = -4;
      var dirXRight = 4;

      var dirYDown = 4;
      var dirYUp = -4;

      //player controllled movement
      if(keyIsDown(LEFT_ARROW)) this.x += dirXLeft;
      if(keyIsDown(RIGHT_ARROW)) this.x += dirXRight;
      if(keyIsDown(UP_ARROW)) this.y += dirYUp;
      if(keyIsDown(DOWN_ARROW)) this.y += dirYDown;

  }
}

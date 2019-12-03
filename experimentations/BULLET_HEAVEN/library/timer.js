//main
function timer(x,y){
  this.x = x
  this.y = y

  this.show = function(){
    fill(0,0,255);
    noStroke();
    ellipse(this.x,this.y,10,10);
  }

  this.move = function(){
    //horizontal movement
    if (this.y <= 12600){
      this.y += 1;
    }else if(this.y >= 12601){
      this.x += 1;
    }
  }
}

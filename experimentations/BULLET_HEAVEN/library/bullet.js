//variables

//main
function Bullet(x,y){
  this.x = x;
  this.y = y;
  this.r = 7;
  this.toDelete = false;

  this.show = function(){
    beginShape();
    noStroke();
    fill(255,0,0);
    ellipse(this.x,this.y,this.r,this.r*2);
    noStroke();
    fill(249,246,47);
    ellipse(this.x,this.y,this.r/2,this.r);
    endShape();
  }

  this.move = function(){
    this.y = this.y + 5;
  }

  this.absorb = function(){
    this.toDelete = true;
  }

  this.hits = function(player){
    var d = dist(this.x,this.y,player.x,player.y);
    if (d < this.r + player.r){
      return true;
    }else{
      return false;
    }
  }
}

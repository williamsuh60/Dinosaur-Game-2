function Tree() {
  
  this.sizeX = 40;
  this.sizeY = 80;
  this.x = width;
  this.y = height-105;
  this.speed = 4;
  
  this.hits = function(dino) {
    if(dino.x+dino.sizeX>this.x+25&&dino.x+dino.sizeX<this.x+this.sizeX-10){
      if(this.y-dino.y<this.sizeY-20){
        return true;
      }
    }
  }
  
  this.update = function() {
    this.x -= this.speed;
  }

  this.show = function() {
    image(treeIMG, this.x, this.y, this.sizeX, this.sizeY);
  }
  
}

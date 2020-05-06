function Tree() {
  
  this.sizeX = 75;
  this.sizeY = 100;
  this.x = width;
  this.y = height-120;
  this.speed = 4;
  
  /*
  this.hits = function(dino) {
    if(dino.x+100 == this.x){
      return true;
    }
  }
  */
  
  this.update = function() {
    this.x -= this.speed;
  }

  this.show = function() {
    image(treeIMG, this.x, this.y, this.sizeX, this.sizeY);
  }
  
}

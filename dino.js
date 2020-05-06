class Dino{
  constructor() {
    this.sizeX = 100;
    this.sizeY = 100;
    this.x = 50;
    this.y = height - 120;
    this.vy = 0;
    this.gravity = .5;
  }
  
  jump() {
    if(this.y == height-120){
      this.vy = -11;
    }
  }
  
  crouch() {
      this.vy=100;
      this.sizeX = 150;
      this.sizeY = 50;
      this.y = height-80;
  }
  
  uncrouch() {
    this.sizeX=100;
    this.sizeY=100;
    this.y = height-120;
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - 120);
    if(this.sizeY==50){
      this.y=height-80;
    }
  }

  show() {
    image(characterIMG, this.x, this.y, this.sizeX, this.sizeY);
  }
} 
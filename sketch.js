let dino;
let tree;
let characterIMG;
let obstacles = [];

function preload() {
  characterIMG = loadImage('Naruto-PNG-Photo.png');
  treeIMG = loadImage('tree.png');
}

function setup() {
  createCanvas(600,300);
  dino = new Dino();
  obstacle.push(new Tree());
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    dino.jump();
  } else if(keyCode === DOWN_ARROW){
    dino.crouch();
  }
}

function keyReleased() {
  if(keyCode === DOWN_ARROW){
    dino.uncrouch();
  }
}

function obstacleRandomizer() {
  //Math.floor(Math.random() * 3);
}

function draw() {
  background(179, 221, 255);
  dino.show();
  dino.move();
  
  if (frameCount % 100 == 0) {
    obstacles.push(new Tree());                  //add randomizer here
  }
  
  for(var i=0; i<obstacles.length; i++){
    obstacles[i].show();
    obstacles[i].update();
    
    /*
    if (obstacles[i].hits(dino)) {
      console.log("Ran Into Tree");
    }
    */

    //console.log("Tree:"+obstacles[i].y +", Dino:" + dino.y);
  }
  
  fill(82, 158, 54);
  rect(0, height-30, width, 30);
}
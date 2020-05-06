let dino;
let tree;
let characterIMG;
let trees = [];

function preload() {
  characterIMG = loadImage('New Piskel.png');
  treeIMG = loadImage('tree.png');
}

function setup() {
  createCanvas(600,300);
  dino = new Dino();
  trees.push(new Tree());
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    dino.jump();
  } else if(keyCode === DOWN_ARROW){
    dino.crouch();
  }
}

function draw() {
  background(179, 221, 255);
  dino.show();
  dino.move();
  
  if (frameCount % 100 == 0) {
    trees.push(new Tree());
  }
  
  collideRectRect(200,200,100,150,mouseX,mouseY,50,75);
  
  for(var i=0; i<trees.length; i++){
    trees[i].show();
    trees[i].update();
    
    /*
    if (trees[i].hits(dino)) {
      console.log("Ran into tree");
    }
    */
  }
  
  fill(82, 158, 54);
  rect(0, height-30, width, 30);
}
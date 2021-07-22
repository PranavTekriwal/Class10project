
var boat, boat_Animation, edges;
var seaImg, sea;

function preload(){

  boat_Animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200);
  sea.addImage("sea",seaImg);
  sea.velocityX = -4;
  sea.scale = 0.25;


  boat = createSprite(120,180,30,50);
  boat.addAnimation("bobbing", boat_Animation);
  boat.scale = 0.25;

}

function draw() {
  
  background("blue");
 
  console.log(sea.x);

  if(sea.x < 0) {

    sea.x = sea.width/8;

  }

  drawSprites();

}
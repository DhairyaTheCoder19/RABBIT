var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;


  var select_sprites = Math.round(random(1,2))

 
  
  if(select_sprites == 1) {
 }


 drawSprites();



 spawnApple();
 spawnLeaves();
  
 
    
   
    
   
}



function spawnApple() {
  //write code here to spawn the apple
   if (frameCount % 60 === 0) {
     apple = createSprite(600,100,40,10);
    apple.x = Math.round(random(10,60));
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 3;
    
     //assign lifetime to the variable
    apple.lifetime = 134;
   }
 

function spawnLeaves() {
  //write code here to spawn the leaves
   if (frameCount % 60 === 0) {
     leaves = createSprite(600,100,40,10);
    leaves.x = Math.round(random(10,60));
    leaves.addImage(leavesImg);
    leaves.scale = 0.07;
    leaves.velocityY = 3;
    
     //assign lifetime to the variable
    leaves.lifetime = 134;
   }
} } 
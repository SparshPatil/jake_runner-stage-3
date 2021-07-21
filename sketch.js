var bg,jake;
var trackImage,jakeImage;

function preload(){
trackImage=loadImage("track_img.png");
jakeImage=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png");
trainImg1=loadImage("train_1.png");
trainImg2=loadImage("train_2.png");
trainImg2=loadImage("train_3.png");
trainImg4=loadImage("train_4.png");


}


function setup(){

createCanvas(displayWidth,displayHeight-200);

//bg = createSprite(500, 500,20,30);
//bg.addImage("track",trackImage);
//bg.velocityY=1.4;
//bg.scale=1.4;

Jake = createSprite(displayWidth/2, 380,20,30);
Jake.addAnimation("jake1",jakeImage);
Jake.scale = 3.4;

invisibleG = createSprite(500, 600,1000,20);

trainsGroup= new Group();

}

function draw() {
 background(0);
   //console.log(bg.y);

  image(trackImage,10,0,displayWidth,displayHeight-200);


  /*if (bg.y>300) {
     bg.y=200;
   } */

  //camera.x=Jake.x;
  //camera.y=Jake.y;
if (keyDown("LEFT")) {
    Jake.x=Jake.x-2;
  }
    if (keyDown("RIGHT")) {
    Jake.x=Jake.x+2;
  }
   if (keyDown("space")) {
    Jake.velocityY=-5;
  }
  Jake.velocityY=Jake.velocityY+0.9;
 Jake.collide(invisibleG);

  spawnTrains();
  drawSprites();
}


function spawnTrains(){
  if (frameCount % 60 === 0){
    var train = createSprite(displayWidth/4,165,10,40);
    train.velocityY = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: train.addImage(trainImg1);
               break;
       case 2: train.addImage(trainImg2);
               break;
       case 3: train.addImage(trainImg3);
               break;
       case 4: train.addImage(trainImg4);
               break;
       
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     //train.scale = 0.5;
     //train.lifetime = 300;
    
    //add each obstacle to the group
     trainsGroup.add(train);
  }
 }
 

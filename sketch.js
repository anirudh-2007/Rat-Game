var PLAY=1;
var END=0;
var gameState=1;
var rat,r1,r2;
var bg;
var sword,sword_running;
var sword30,sword31,sword32;
var treasure,treasure_Image;
var d1;
var vo,youwon;





function preload(){
  r1=loadImage("rat-removebg-preview.png");
  r2=loadImage("rat2-removebg-preview.png");
  bg=loadImage("bacground.jpg");
  sword_running=loadAnimation("sword1.png","sword2.png","sword3.png","sword4.png");
  s1=loadImage("sword1.png");
  treasure_Image=loadImage("treasure36.png");
  d1=loadImage("de2.png");
  youwon=loadImage("You Won.jpg");

}



function setup() {
  createCanvas(1220,600);
  rat=createSprite(0,250,30,30);
  rat.addImage(r1);
  rat.scale=0.27;
  
  sword = createSprite(200,0,10,30);
  sword.addAnimation("running" ,sword_running);
  sword.scale=0.2;
 sword.velocityY=5;
  //sword.velocityX=Math.round(random(2,10));

  sword30 = createSprite(500,600,10,30);
  sword30.addAnimation("running" ,sword_running); 
  sword30.scale=0.2;
 sword30.velocityY=-5;
  //sword30.velocityX=Math.round(random(2,10));

  sword31 = createSprite(750,0,10,30);
  sword31.addAnimation("running" ,sword_running); 
  sword31.scale=0.2;
 sword31.velocityY=5;
  //sword31.velocityX=Math.round(random(2,10));

  sword32 = createSprite(1000,600,10,30);
  sword32.addAnimation("running" ,sword_running); 
  sword32.scale=0.2;
 sword32.velocityY=-5;
 // sword32.velocityX=Math.round(random(2,10));

treasure = createSprite(1150,300,30,30);
treasure.addImage(treasure_Image);
treasure.scale=0.3;
  
vo = createSprite(630,370);
vo.addImage(youwon);
vo.scale=2;
vo.visible=false;
  
}

function draw() {
  background(bg);




if(gameState===PLAY){
  rat.setCollider("circle",0,0,180);
  rat.debug=false;
  
  if(keyDown("right")){
    rat.x=rat.x+8;
    rat.addImage(r1);
    rat.scale=0.27;
  }
  
  if(keyDown("left")){
    rat.x=rat.x-8;
    rat.addImage(r2);
    rat.scale=0.27;
  }

  if(keyDown("up")){
    rat.y=rat.y-8;
  }

  if(keyDown("down")){
    rat.y=rat.y+8;
  }

  if(rat.isTouching(treasure)){
    sword.velocityY=0;
    sword.addImage(s1);
    sword30.velocityY=0;
    sword30.addImage(s1);
    sword31.velocityY=0;
    sword31.addImage(s1);
    sword32.velocityY=0;
    sword32.addImage(s1);
   vo.visible=true;
  }

  if(rat.isTouching(sword)||rat.isTouching(sword30)||rat.isTouching(sword31)||rat.isTouching(sword32)){
    gameState=END;
  }

}else if(gameState===END){
  sword.velocityY=0;
  sword.addImage(s1);
  sword30.velocityY=0;
  sword30.addImage(s1);
  sword31.velocityY=0;
  sword31.addImage(s1);
  sword32.velocityY=0;
  sword32.addImage(s1);

  rat.addImage(d1);


}

   edges=createEdgeSprites();
  sword.bounceOff(edges);
  sword30.bounceOff(edges);
  sword31.bounceOff(edges);
  sword32.bounceOff(edges);

  rat.collide(edges);
  
 

  
  drawSprites();
}
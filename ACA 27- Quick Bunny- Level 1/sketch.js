
var player;

function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  edge = createEdgeSprites()
  target = createSprite(550,40,40,40)
  player = createSprite(40,550,30,30)
  obs1 = createSprite(200,410,200,20)
  obs2 = createSprite(200,310,200,20)
  obs3 = createSprite(200,210,200,20)
  obs1.velocityX = 5
  obs2.velocityX = -10
  obs3.velocityX = -5
  }

function draw() {
  background("lime");  
  player.shapeColor="red";
  target.shapeColor="blue";
  obs1.shapeColor="brown";
  obs2.shapeColor="brown";
  obs3.shapeColor="brown";
  drawSprites();
  obs1.bounceOff(edge[1])
  obs1.bounceOff(edge[0])
  obs2.bounceOff(edge[0])
  obs2.bounceOff(edge[1])
  obs3.bounceOff(edge[0])
  obs3.bounceOff(edge[1])
  player.bounceOff(edge[0])
  player.bounceOff(edge[1])
  player.bounceOff(edge[2])
  player.bounceOff(edge[3]);
      if(keyDown("up")){
    player.y=player.y-4
    }
      if(keyDown("down")){
    player.y=player.y+4
    }
      if(keyDown("left")){
    player.x=player.x-4
    }
      if(keyDown("right")){
    player.x=player.x+4
    }
      if(player.isTouching(target)){
      text("YOU WIN",200,360);
      player.position(550,40);
    }
    if(player.isTouching(obs1)){
      text("YOU LOSE",200,360);
      player.position(550,40)
    }
    if(player.isTouching(obs2)){
      text("YOU LOSE",200,360);
      player.position(550,40)
      
    }
    if(player.isTouching(obs3)){
      text("YOU LOSE",200,360);
      player.position(550,40)
    }
}
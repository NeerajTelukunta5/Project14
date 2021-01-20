var PLAY= 1
var END= 0
var gameState= PLAY

var sword, fruit, monster, fruitGroup, enemyGroup, score, r, randomFruit, swordImg, fruit1, fruit2, fruit3, fruit4, monsterImg, gameOverImg

function preload(){
  
  swordImg= loadImage("sword.png")
  monsterImg= loadAnimation("alien1.png", "alien2.png")
  gameOverImg= loadImage("gameover.png")
  fruit1= loadImage("fruit1.png")
  fruit2= loadImage("fruit2.png")
  fruit3= loadImage("fruit3.png")
  fruit4= loadImage("fruit4.png")
 
}

function setup(){
  
  createCanvas(500,500)
  
  sword= createSprite(40,200,15,15)
  sword.addImage(swordImg)
  
  fruitGroup= createGroup()
  enemyGroup= createGroup()
}

function draw(){
  background("lightgreen")
  fruits()
  enemy()
  
  sword.x= World.mouseX
  sword.y= World.mouseY
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach()
    score= score+2
  }
else if(enemyGroup.isTouching(sword)){
  gameState= END
  fruitGroup.destroyEach()
  enemyGroup.destroyEach()
  fruitGroup.setVelocityXEach(0)
  enemyGroup.setVelocityXEach(0)
  
  sword.addImage(gameOverImg)
  
  sword.x= 200
  sword.y= 200
        }
  drawSprites()
  text("score="+score, 300, 100)
  
  
}
function enemy(){
  if(frameCount%200===0){
    monster= createSprite(400, 200)
    monster.addAnimation("moving", monsterImg)
    monster.y= Math.round(random(100, 300))
    monster.velocityX= -5
    monster.setLifetime= 50
    enemyGroup.add(monster)
  }
  
}
function fruits(){
  if(frameCount%60===0){
    fruit= createSprite(400, 200)
   fruit.scale= 0.3
   r= Math.round(random(100, 300))
    if(r== 1){
      fruit.addImage(fruit1)
    }
    else if(r== 2){
      fruit.addImage(fruit2)
    }
    else if(r== 3){
      fruit.addImage(fruit3)
    }
    else{
      fruit.addImage(fruit4)
    }
    fruit.velocityX= -5
    fruit.setLifetime= 50
    fruitGroup.add(fruit)
  }
}
var score=0
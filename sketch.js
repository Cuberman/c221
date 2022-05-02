var gun,gunImg, pig, pigImg
var sea, seaImg
var g ,gg
var kraxicorde,kraxicordeImg
var krakenG, gunG

function preload(){
pigImg = loadImage("silzous.webp")
seaImg = loadImage("sea.png")
gunImg = loadImage("BRUH.png")
kraxicorde = loadImage("kraxicorde.png")
}

function setup() {
createCanvas(1535,700)

sea = createSprite(width/2,height/2)
sea.addImage(seaImg)
sea.scale = 0.45

pig = createSprite(width-75,height/2) 
pig.addImage(pigImg)
pig.scale = 0.75

g = createSprite(width/2,height/1.65,1535,5)
g.visible = false

gg = createSprite(width/2,0,1535,5)
gg.visible = false

gunG = createGroup()
krakenG = createGroup()

}

function draw() {
background(0)
kraken()
sea.velocityX = 2.5
if(sea.x > 900){
sea.x = 600
}

pig.collide(g)
pig.bounceOff(gg)

if(keyDown("space")){
    pig.velocityY = -10
    
}
if(frameCount % 700 === 0){
 


    gun = createSprite(width/2,height/2)
    gun.addImage(gunImg)
    gun.velocityX = 2.5 
    gun.scale = 0.5 
    gunG.add(gun) 
}

if(pig.isTouching(gunG)){
    pig.remove()
    sea.remove()
    gunG.destroyEach()
    krakenG.destroyEach()
}



drawSprites() 
}

function kraken(){
    if(frameCount % 350 === 0){
      kraxicorde = createSprite(width/2,height/2) 
      kraxicorde.addImage(kraxicordeImg)
      kraxicorde.velocityX = 2.5
      krakenG.add(kraxicorde)

      
    }
}
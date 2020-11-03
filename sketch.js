var bullet,speed,weight;
var wall,thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)


bullet=createSprite(50,200,80,50);
bullet.velocityX=speed;
bullet.shapeColor="white"


wall=createSprite(1200,200,thickness,height/2);


//console.log(speed)

 
}

function draw() {
  background(0);

  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  
    
  
  drawSprites();
}
function hasCollided(lBullet,lWall){
bulletRightEdge=lBullet.x+lBullet.width
wallLeftEdge=lWall.x
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}

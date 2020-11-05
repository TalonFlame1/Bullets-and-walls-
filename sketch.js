var car,wall;
var speed, weight,thickness
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
 car = createSprite (50,200,50,50)
 wall = createSprite (1200,200,thickness,height/2)
 speed=random(223,321)
 weight=(30,520)
 car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
 
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocityX=0;
var damage=0.5 * weight* speed * speed/ (thickness*thickness* thickness);
if (damage>10)
{
 wall.shapeColor=color(255,0,0);
}
    
    if (damage<10)
    {
     wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
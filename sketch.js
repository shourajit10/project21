var wall ;
var bullet , speed , weight
var thickness;



function setup() {
  createCanvas(800,400);
  
  speed = random(55 , 90)
  weight = random(400 , 1500)
  thickness = random(22 , 83)

bullet=createSprite(50 , 200 , 50 , 5)
bullet.velocityX= speed;
bullet.shapeColor=color(255);

wall = createSprite(1200 , 200 ,thickness , height/2)
wall.shapeColor=color(80 , 80 , 80)



}

function draw() {
  background(0);  
  drawSprites();


//isTouching();
if(isTouching(wall)){
  wall.shapeColor="red"
}
else{
  wall.shapeColor="orange"
  
}
}



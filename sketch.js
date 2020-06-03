var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(20,80);

  wall = createSprite(1400,200,thickness,300);
  wall.shapeColor="white";

  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor="white";

  speed=random(223,321);
  weight=random(30,52);
}


function draw() {
  background(0);
  
  bullet.velocityX=speed;

  if(isTouching(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*speed*speed*weight)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }


  }

  
  
  drawSprites();

}
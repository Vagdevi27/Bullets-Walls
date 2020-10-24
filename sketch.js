var bullet, wall, thickness;
var speed, weight;
var damage = 0;

function setup() {
  createCanvas(1600,400);
  bullet =  createSprite(50, 200, 50, 5);

  speed = Math.round(random(30,52));
  weight = Math.round(random(223,321));
  bullet.velocityX = speed;
  bullet.shapeColor = "gold";
  
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "brown";
}

function draw() {
  background("lightblue");  
  drawSprites();
  
  if(HasCollided(bullet,wall)){


    bullet.velocityX = 0;
    damage = (0.5*weight*speed*speed )/(thickness*thickness*thickness);
    if(damage < 10){
      bullet.shapeColor = "green";
    }
    else {
      bullet.shapeColor = "red";
    }
  }

}

function HasCollided(lbullet, lwall){
  
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else{
    return false;
  }

}
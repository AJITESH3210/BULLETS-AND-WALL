var wall,thickness;
var bullet, speed,weight;
var bulletRightEdge, wallLeftEdge;
var lwall, lbullet;


function setup() {
 
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 50, 20);
  wall = createSprite(1200,200,thickness, height/2);
 
  wall.shapeColor = color(80,80,80);

  speed = random(233,321);
  weight = random(30,52);
  thickness = random(22,83);

  //bulletRightEdge = lbullet;
  //wallLeftEdge = lwall;

}

function draw() {
  background(0);  
  
  bullet.velocityX = speed;
   if (hasCollided (bullet,wall)){

      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);
      
      if (damage > 10 ){
          wall.shapeColor = color(255,0,0)
      }

      if (damage < 10){
        wall.shapeColor = color(0,255,0);
      }

   }

  drawSprites();
}

function hasCollided(lbullet,lwall) {
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge){
        return true
    }
   return false;
}
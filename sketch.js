var car ,wall,wall2,wall3,car2,car3;
var speed,speed2,speed3,weight;
function setup() {
createCanvas(1600,600);


speed = random(5,10);
weight = random(400,1500);
speed2 = random(2,20);
speed3 = random(3,25);


wall = createSprite(870,300,50,600);
wall.shapeColor = 0;

wall2 = createSprite(200,200,1290,50);
wall2.shapeColor = 0

wall3 = createSprite(200,400,1290,50);
wall3.shapeColor = 0

car = createSprite(50,100,50,50);
car.velocityX = speed;
car.shapeColor = 0;


car2 = createSprite(50,280,50,50);
car2.velocityX = speed2;
car2.shapeColor = "orange"

car3 = createSprite(50,490,50,50);
car3.velocityX = speed3;
car3.shapeColor = "lightblue";

}


function draw() {

  background("red");



  if(wall.x - car.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/500;
    
    if(deformation>290) {
      car.shapeColor = "green";
     
    }
    if(deformation<290 && deformation>190) {
      car.shapeColor = "yellow";
    }
    if(deformation<190) {
      car.shapeColor = "blue";
    }
  }
  
  
  
  if(wall.x - car2.x < car2.width/2 + wall.width/2) {
    car2.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/5000;
    
    if(deformation>290) {
      car2.shapeColor = "green";
     
    }
    if(deformation<290 && deformation>200) {
      car2.shapeColor = "yellow";
    }
    if(deformation<200) {
      car2.shapeColor = "blue";
    }
  }
  
  
  if(wall.x - car3.x < car3.width/2 + wall.width/2) {
    car3.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/2000;
    
    if(deformation>290) {
      car3.shapeColor = "green";
     
    }
    if(deformation<290 && deformation>200) {
     car3.shapeColor = "yellow";
    }
    if(deformation<200) {
      car3.shapeColor = "blue";
    }
  }
  drawSprites();
}



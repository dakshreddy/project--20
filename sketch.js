var car,car2,car3,car4,wall,wall2,wall3,wall4;

var speed,weight;


function setup() {
  createCanvas(800,400);
 car = createSprite(50, 50, 40, 20);
 car.shapeColor = 'white'
 car2 = createSprite(670, 150, 40, 20);
 car2.shapeColor = 'yellow'
 car3 = createSprite(670, 250, 40, 20);
 car3.shapeColor = 'red'
 car4 = createSprite(670, 350, 40, 20);
 car4.shapeColor = 'green'

 wall = createSprite(700,50,20,40);
 wall2 = createSprite(700,150,20,40);
 wall3 = createSprite(700,250,20,40);
 wall4 = createSprite(700,350,20,40);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0,0,0); 
  car.velocityX = speed;
 

  car.collide(wall)
  
deformation = 0.5*weight*speed*speed/2

if(wall.x-car.x < (car.width+wall.width)/2){

  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
}

  drawSprites();
}


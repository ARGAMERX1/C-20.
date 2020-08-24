var car1;

var bouncer1;

var speed;
var weight;

var deformation;

function setup(){
    createCanvas(1600,400);

car1 = createSprite(40,350,10,10);
bouncer1 = createSprite(25,350,8,60);



speed=random(55,90);
weight=random(400,1500); 
}



function draw(){
   background(220);
   
   
    car1.velocityX = speed;

   
edges = createEdgeSprites();

deformation  = 0.5*speed*speed/2250

if(car1.deformation >100){
car1.shapeColor = green;
}

if(car1.deformation > 100 || > 180 ){
car1.shapeColor = yellow;
}
if(car1.velocityX < 180){
    car1.shapeColor = red;
}






drawSprites();




}

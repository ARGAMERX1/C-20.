var bouncer1 ;
var bouncer2;
var bouncer3;
var ball1;
var ball2;
var ball3;


function setup() {
  createCanvas(800,400);

bouncer1 = createSprite(750,20,100,10);
ball1 = createSprite(780,30,10,10);


bouncer2 = createSprite(600,20,100,10);
ball2 = createSprite(600,30,10,10);

bouncer3 = createSprite(400,20,100,10);
ball3 = createSprite(400,30,10,10);

bouncer4 = createSprite(200,20,100,10);
ball4 = createSprite(200,30,10,10);


}

function draw() {
  background(255,255,255);  
  drawSprites();
ball1.velocityY=5
ball2.velocityY=5
ball3.velocityY=5
ball4.velocityY=5

edges = createEdgeSprites();
ball1.bounceOff(edges[0]);
ball1.bounceOff(edges[1]);
ball1.bounceOff(edges[2]);
ball1.bounceOff(edges[3]);
ball1.bounceOff(bouncer1)

ball2.bounceOff(edges[0]);
ball2.bounceOff(edges[1]);
ball2.bounceOff(edges[2]);
ball2.bounceOff(edges[3]);
ball2.bounceOff(bouncer2)

ball3.bounceOff(edges[0]);
ball3.bounceOff(edges[1]);
ball3.bounceOff(edges[2]);
ball3.bounceOff(edges[3]);
ball3.bounceOff(bouncer3)

ball4.bounceOff(edges[0]);
ball4.bounceOff(edges[1]);
ball4.bounceOff(edges[2]);
ball4.bounceOff(edges[3]);
ball4.bounceOff(bouncer4)



}
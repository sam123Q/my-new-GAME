var big, small;
var gameObject1, gameObject2, gameObject3, gameObject4;
var object1, object2
function setup() {
  createCanvas(800,400);
  big = createSprite(400, 200, 50, 50);
  small = createSprite(200, 200, 30, 30);
  big.shapeColor="green";
  small.shapeColor="green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor="green";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor="green";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor="green";

  big.velocityX=-5;
  small.velocityX=5;

}

function draw() {
  background(0); 
  console.log(big.x-small.x)
  /*big.x=World.mouseX;
  big.y=World.mouseY; */
 
  drawSprites();
 /* if(isTouching(gameObject2, big)){
    big.shapeColor="blue";
    gameObject2.shapeColor="blue";
  }
  else
  {
    big.shapeColor="green";
    small.shapeColor="green";
  }*/
  bounceOff(big, small);
}


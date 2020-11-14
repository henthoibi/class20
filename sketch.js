var fixedRect
var moveRect







function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  moveRect=createSprite(500, 200, 50, 50);
fixedRect.shapeColor="green"
moveRect.shapeColor="green"

}

function draw() {
  background(255,255,255);  
  moveRect.x=World.mouseX;
  moveRect.y=World.mouseY;
  if(fixedRect.x-moveRect.x<fixedRect.width/2+moveRect.width/2
    && moveRect.x-fixedRect.x<fixedRect.width/2+moveRect.width/2
     && fixedRect.y-moveRect.y<fixedRect.height/2+moveRect.height/2
      && moveRect.y-fixedRect.y<fixedRect.height/2+moveRect.width/2){
    fixedRect.shapeColor="red"
    moveRect.shapeColor="red"
  }
  else{
    fixedRect.shapeColor="green"
    moveRect.shapeColor="green"


    
  }
  drawSprites();
}
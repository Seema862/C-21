var fixedRec, movingRec;
var g1, g2, g3, g4;


function setup() {
  createCanvas(800,400);

fixedRec = createSprite(600,200,90,20);
fixedRec.shapeColor="red";
movingRec = createSprite(800,300,50,80);
movingRec.shapeColor= "red";
g1= createSprite(100,100,50,50);
g1.shapeColor = "red";
g2= createSprite(200,100,50,50);
g2.shapeColor = "red";
g3= createSprite(300,100,50,50);
g3.shapeColor = "red";
g4= createSprite(400,100,50,50);
g4.shapeColor = "red";


fixedRec.debug = true;
movingRec.debug= true;


}

function draw() {
  background("black");  
movingRec.x = World.mouseX;
movingRec.y = World.mouseY;


if(isTouching(movingRec,g2)){
  movingRec.shapeColor = "green";
  g2.shapeColor = "green";
}
else{
  movingRec.shapeColor = "blue";
  g2.shapeColor = "blue";
}
  drawSprites();
}

function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
  &&o2.x - o1.x < o2.width/2 + o1.width/2
  && o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y < o2.height/2 + o1.height/2){
   return true;
  }
  else
{
return false;
  }
}
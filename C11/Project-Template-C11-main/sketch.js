var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var drink, drinkImg;
var power, powerImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  drinkImg=loadImage("energyDrink.png")
  powerImg=loadImage("power.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

// Moving drink
drink=createSprite(Math.floor(Math.random() * 250) + 50,50)
drink.addImage(drinkImg)
drink.scale=0.2
drink.velocityY=5





//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;
leftBoundary.visible = true;
leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

//Funtion to remove the power image from the screen
function vanish(){
  power.visible=false
}

//function to make the boy go faster
function boost(){
  power.visible=true
  }
function draw() {
  background(0);
  path.velocityY = 4;


  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

if(path.y > 400 ){

path.y = height/4;
}

if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){
  path.y = height/2;}

//code to reset the drink

if(drink.y > 600 ){
  drink.y= -50
  drink.x= Math.floor(Math.random() * 250) + 50
}

if(boy.collide(drink)){
power=createSprite(200,200);
power.addImage(powerImg);
power.scale=0.5;
power.visible=false
setTimeout(boost, 100)
setTimeout(vanish,3000)
drink.y=-1000
}

  drawSprites();
}

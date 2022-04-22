const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world,ground;
var bgImg
var tower, towerImg;
var cannon
var angle;
var cannonballs=[]
/*  ARRAYS  */
//Array containing same data types
var arr1 = [1, 2, 3, 4, 5]

//Array containing multiple data types
var arr2 = ["Ara", 13, false];

//An array containing multiple arrays - a list of lists - 2D ARRAY
/*
    0     1       2
0:  1     2
1:  2     3
2:  3     "Ara"
3:  true  "xyz"   5

*/
var arr3 = [[1, 2], [2, 3], [3, "Ara"], [true, "xyz", 5]]
console.log(arr3);
console.log(arr3[3]);
console.log(arr3[3][1])
//Adding a new element
arr3.push("Srishti")
//Removing an element
arr3.pop();

function preload() {
 bgImg=loadImage("assets/background.gif")
 towerImg=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;
  cannon=new Cannon(180,110,130,100,angle);
  
  options={
    isStatic:true
  }
  tower=Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 
 
}

function draw() {

  image(bgImg, 0, 0, 1200, 600)

  Engine.update(engine);

  push()  //Add new properties
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310) 
  pop() //Remove the last added property

  rect(ground.position.x, ground.position.y,width*2,1);
  
   cannon.display()

  for(var i = 0; i < cannonballs.length; i++){
    showCannonballs(cannonballs[i])
  }


}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    cannonballs[cannonballs.length-1].shoot()
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonball=new CannonBall(cannon.x,cannon.y);
    cannonballs.push(cannonball)
  }
}

function showCannonballs(ball){
  if(ball){
    ball.display();
  }
}
//trajectory of an object
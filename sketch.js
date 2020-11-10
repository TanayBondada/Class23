var boxSide1, boxSide2, boxSide3;
var ground;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground = createSprite(800, 690);
	ground.collide(paper);

	paper = createSprite(Matter.Bodies.circle(200,680,3,options));

	boxSide1 = createSprite(300,650,20,100);
	boxSide1.shapeColor = color("red");

	boxSide2 = createSprite(400,650,200,20);
	boxSide2.shapeColor = color("red");
	
	boxSide3 = createSprite(500,650,20,100);
	boxSide3.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
   
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:-85})
}	
}
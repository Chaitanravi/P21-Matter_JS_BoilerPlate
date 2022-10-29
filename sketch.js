var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_option);
	World.add(world,ball);

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20)
  groundObj.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine)
 
}
function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:80,y:-80});
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var db;

function preload(){
	dustbinImg = loadImage('sprites/dustbin.png');
}

function setup() {
	var canvas = createCanvas(1400, 700);

	db = createSprite(1100,575,200,200);
	db.addImage(dustbinImg);
	db.scale = 0.9; 
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,665,70);

	dustbin1 = new Dustbin(1015,595,20,200);
	dustbin2 = new Dustbin(1182,595,20,200);
	dustbin3 = new Dustbin(1098,680,180,20);

	ground = new Ground(700,690,1400,10);
	
}


function draw() {
  background(200);
	Engine.update(engine);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



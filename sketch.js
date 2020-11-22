
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300, 300, 25);
	bob2 = new Bob(350, 300, 25);
	bob3 = new Bob(400, 300, 25);
	bob4 = new Bob(450, 300, 25);
	bob5 = new Bob(500, 300, 25);

	roof = new Roof(400, 100, 300, 20);

	rope1 = new Rope({x: 300, y: 110}, bob1.body);
	rope2 = new Rope({x: 350, y: 110}, bob2.body);
	rope3 = new Rope({x: 400, y: 110}, bob3.body);
	rope4 = new Rope({x: 450, y: 110}, bob4.body);
	rope5 = new Rope({x: 500, y: 110}, bob5.body);

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background("white")

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){

	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -200, y:0});
	}

}
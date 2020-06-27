const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1320, 650);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(660, 645, 1320, 10);
	paper = new Paper(70, 332, 5)
}


function draw() {
  rectMode(CENTER);
  background(0, 0, 0);
  
  ground.display();
  paper.display();

  console.log(mouseX);
  console.log(mouseY);
 
}

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint  = Matter.Constraint;

var engine,bodies,myWorld

function preload() {
//preload the images here

Background1=loadImage("images/GamingBackground.png")
Monster1=loadImage("images/Monster-01.png")
Monster2=loadImage("images/Monster-02.png")
Superhero1=loadImage("images/Superhero-01.png")
Superhero2=loadImage("images/Superhero-02.png")

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  myWorld = engine.world;

  ground = new Ground(1500,700,3000,20);
  hero = new Hero(200,100,400);
  fly = new Fly(hero.Body,{x:300,y:50})
  monster = new Monster(2500,100,200)
  block1 = new Block(1000,100,100,100)
  block2 = new Block(1100,100,100,100)
  block3 = new Block(1200,100,100,100)
  block4 = new Block(1300,100,100,100)
  block5 = new Block(1000,100,100,100)
  block6 = new Block(1100,100,100,100)
  block7 = new Block(1200,100,100,100)
  block8 = new Block(1300,100,100,100)
  block9 = new Block(1000,100,100,100)
  block10 = new Block(1100,100,100,100)
  block11 = new Block(1200,100,100,100)
  block12 = new Block(1300,100,100,100)
  


}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  hero.display();
  monster.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.Body,{x:mouseX , y:mouseY})
}

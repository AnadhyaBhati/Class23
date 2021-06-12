const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bat;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
  


   bat=new Box(435,300,100,50)
   ball=new Box(400,100,150,100)
   
   ground=new Ground(400,380,800,20)

}

function draw(){
    background(0);
    Engine.update(engine);

   
    ground.display()
    bat.display();
    ball.display()
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var score = 0;

var particles = [];
var plinkos = [];
var divisions = [];
function setup() {
  createCanvas(480,820);
  engine  = Engine.create()
  world = engine.world


  ground = new Ground(480,820,1000,10)
  for(var i = 75; i<= width; i = i+50){ plinkos.push(new Plinko(i,75)); } 
  for(var i = 50; i<= width-10; i = i+50){ plinkos.push(new Plinko(i, 175)); } 
  for(var i = 75; i<= width; i = i+50){ plinkos.push(new Plinko(i, 275)); } 
  for(var i = 50; i<= width-10; i = i+50){ plinkos.push(new Plinko(i,375)); }


}

function draw() {
  background(0,0,0);
  Engine.update(engine)  


  ground.display()

  for(var j = 0; j < particles.length; j++){ particles[j].display(); }
  for (var k = 0; k < divisions.length; k++) { divisions[k].display(); }
  for(var i = 0; i< plinkos.length; i++){ plinkos[i].display(); }
  for(var k = 0;k <= width; k = k+80){ divisions.push(new Divisions(k, height - 150, 10, 300)); }


  if(frameCount % 60 === 0 ){
     particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10)); 
  }

  drawSprites();
  text("50"+score,450,610)
  text("20"+score,330,610)
  text("10"+score,260,610)
  text("20"+score,130,610)
  text("50"+score,50,610)
  text("10"+score,200,610)

}

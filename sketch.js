const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle = [];
var plinko = [];
var division = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world; 
  ground = new Ground(240,790,480,10);
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  if(frameCount%10===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  } 
  for(var h = 0;h<particle.length;h++){
    particle[h].display();
  }
  for(var k = 0;k<=width;k = k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for(var j = 15;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var c = 40;c<=width;c=c+50){
    plinko.push(new Plinko(c,275));
  }
  for(var d = 15;d<=width-10;d=d+50){
    plinko.push(new Plinko(d,375));
  }
  for(var j = 0;j<plinko.length;j++){
    plinko[j].display();
  }
  for(var k = 0;k<division.length;k++){
    division[k].display();
}
}
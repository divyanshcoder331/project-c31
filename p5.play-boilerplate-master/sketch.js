var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var a = 0; a <=width; a = a + 80) {
     divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var i = 75; i <=width; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,75));
    }

    for (var i = 50; i <=width-10; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,175));
    }

     for (var i = 75; i <=width; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(0,255,255);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-200, width/2+200), 10,10));
     score++;
   }
 
  for (var i = 0; i < particles.length; i++) {
   
     particles[i].display();
   }
   for (var a = 0; a < divisions.length; a++) {
     
     divisions[a].display();
   }
}
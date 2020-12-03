var gameState = 1;
var play =1;
var end=0;

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var d;
var turn =0;
var particle;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 
  
 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

  
    
}
 


function draw() {
  background("black");
  textSize(20)
  fill(255)
 text("Score : "+score,20,30);

 text("500",25,500);
text("500",103,500);
text("500",181,500);
text("600",259,500);
text("600",340,500);
text("600",420,500);
text("900",500,500);
text("900",580,500);
text("900",662,500);
text("900",740,500);

for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
 
 
  if(gameState === "play"){
   
  }
  else if(gameState === "end"){
    textSize(40);
    fill("red");
    
    text("YOU LOSE",330,340);
  }

    
    }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  if(particle!= null){
  particle.display();

  if(particle.body.position.y > 670){
    if(particle.body.position.x <240){
      score = score+500;
      particle = null;
      if(turn>= 5){
        gameState= "end";
      }
    }
  }
  }

  if(particle!= null){
    particle.display();
  
    if(particle.body.position.y > 670){
      if(particle.body.position.x >241 && particle.body.position.x <480){
        score = score+600;
        particle = null;
        if(turn>= 5){
          gameState= "end";
        }
      }
    }
    }
  
    if(particle!= null){
      particle.display();
    
      if(particle.body.position.y > 670){
        if(particle.body.position.x >481 && particle.body.position.x<800){
          score = score+900;
          particle = null;
          if(turn>= 5){
            gameState= "end";
          }
        }
      }
      }

  Engine.update(engine);
  
   }
  
   


function mousePressed(){
 if(gameState!= end){
   turn++
   particle = new Particle(mouseX,10,10,10);
 }
}
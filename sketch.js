const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var chain, ball, building1,building2, building3, building4, building5, building6, building7, building8,building9, building10  ;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ball= new Ball(200, 50, 35);
    chain = new Chain(ball.body,{x:200, y:50});
    building1= new Building(700, 300, 50, 50);
    building2= new Building(700, 300, 50, 50);
    building3= new Building(700, 300, 50, 50);
    building4= new Building(650, 300, 50, 50);
    building5= new Building(700, 300, 50, 50);
    building6= new Building(650, 300, 50, 50);
    building7= new Building(650, 300, 50, 50);
    building8= new Building(650, 300, 50, 50);
    building9= new Building(500, 300, 50, 50);
    building10= new Building(500, 300, 50, 50);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
    ball.display();
    chain.display();  
    building1.display(); 
    building2.display();  
    building3.display(); 
    building4.display(); 
    building5.display(); 
    building6.display(); 
    building7.display();  
    building8.display(); 
    building9.display(); 
    building10.display(); 
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
   // chain.fly();
    
}


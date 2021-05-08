const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform;

var gameState = "onSling";
var ball,slingshot;
var score = 0;
var b1 ,b2, b3, b4, b5, b6 ,b7 ,b8 ,b9 ,b10;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(800,400,250,20);

   
    ball = new Ball(200,50,20);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:100});


    b1 = new Brick(770,390,60,20);
    b2 = new Brick(830,390,60,20);
    b3 = new Brick(800,370,60,20);

    b4 = new Brick(710,390,60,20);
    b5 = new Brick(890,390,60,20);

    b6 = new Brick(740,370,60,20);
    b7 = new Brick(860,370,60,20);

    b8 = new Brick(770,350,60,20);
    b9 = new Brick(830,350,60,20);
    b10 = new Brick(800,330,60,20);
}

function draw(){
    
        background("purple");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
   b1.display();
   b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    
    ball.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(ball.body);
    }
}



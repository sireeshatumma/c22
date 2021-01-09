
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object;

function setup() {
  createCanvas(400,400);
  sprite1=createSprite(200, 200, 50, 50);


  engine = Engine.create();
  world= engine.world;


  var option={
    isStatic:false,
    restitution:1
  }

object= Bodies.rectangle(300,100,50,50,option);

World.add(world, object);

console.log(object);


var groundOption={
  isStatic:true
}
ground= Bodies.rectangle(200,380,400,20,groundOption);
World.add(world, ground);


// position: {x: 300, y: 100}

// object.position.x, object.position.y

}

function draw() {
  background(0,255,255); 

  Engine.update(engine);
  
  drawSprites();
// text(mouseX+" , "+mouseY, mouseX+100,mouseY+10);
  rectMode(CENTER)
  rect(200, 200, 50, 50);

rect(object.position.x, object.position.y,50,50)
rect(ground.position.x, ground.position.y,400,20)
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rain;
var rainimg
var thunder;
var thunderimg1;
var thunderimg2;
var thunderimg3;
var thunderimg4;
function preload(){
    rainimg = loadImage("rain.png");
    thunderimg1 = loadImage("thunderbolt/1.png");
    thunderimg2 = loadImage("thunderbolt/2.png");
    thunderimg3 = loadImage("thunderbolt/3.png");
    thunderimg4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(500,500);
    
}

function draw(){
    background(0);
    
    if(frameCount%80===0){
        thunder = createSprite(random(0,400),50,10,10);
        var rand = Math.round(random(1,4));
        switch(rand){
          case 1:thunder.addImage("thunder",thunderimg1); 
          
          break;
          case 2:thunder.addImage("thunder",thunderimg2); 
          
          break;
          case 3:thunder.addImage("thunder",thunderimg3); 
         
          break;
          case 4:thunder.addImage("thunder",thunderimg4); 
          
          break;
          default:break;
        }
        thunder.scale = 0.7;
        thunder.lifetime = 5;
    }
        
        

        if(frameCount%1===0){
            rain = createSprite(random(0,500),-30,1,1);
            rain.velocityY= rain.velocityY +9.8;
            rain.addImage("rain",rainimg);
            rain.scale=0.1;
    
        }
    drawSprites();
    }



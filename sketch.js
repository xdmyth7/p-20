var canvas, bg;
var together;
var tom, tomImg1, tomImg2;
var jerry, jerryImg1, jerryImg2

function preload() {
  bg = loadImage("image/garden.png");
  tomImg1 = loadImage("image/cat1.png");
  tomImg2 = loadImage("image/cat2.png","image/cat3.png");
  tomImg3 = loadImage("image/cat4.png");
  jerryImg1 = loadImage("image/mouse1.png");
  jerryImg2 = loadImage("image/mouse2.png","image/mouse3.png");
  jerryImg3 = loadImage("image/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping", tomImg1)
    tom.scale = 0.15;
}

function draw() {

    background(bg);
    
    if(tom.x - jerry - x <(tom.width - jerry.width)/2){
       tom.velocityX = 0;
       tom.addAnimation("tomLastImage",tomImg3);
       tom.x = 300;
       tom.scale = 0.2;
       tom.changeAnimation("tomLastImage");
       jerry.addAnimation("jerryLastImage",jerryImg3);
       jerry.scale = 0.15;
       jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
     tom.velocityX = -5;
     tom.addAnimation("tomRunning",tomImg2);
     tom.changeAnimation("tomRunning");

     jerry.addAnimation("JerryTeasing",jerryImg2);
     jerry.frameDelay = 25;
     jerry.changeAnimation("jerryTeasing");
  }

}

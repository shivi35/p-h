var dog;
var dogimg;
var dog2;
var dog2img;
var Pgrass1
var Pbackground1;

function preload(){

  Pgrass1=loadImage("images/grass1.jpg")
  dogimg=loadImage("images/Husky.png")
  dog2img=loadImage("images/evil Husky.png")
  Pbackground1=loadImage("images/paradise1.jpg")
  
}

function setup() {

  createCanvas(800,400);

  button=new Button()
  
  dog = createSprite(300, 200, 50, 50);
  dog.addImage(dogimg)

  dog = createSprite(500, 300, 50, 50);
  dog.addImage(dog2img)
}

function draw() {
  background(Pgrass1);  
  button.display()
  drawSprites();
}
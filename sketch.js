var height,database


function preload(){
  Bg = loadImage("city.png")
  balloonImage = loadImage("Balloon.png")
  balloonImage1 = loadAnimation("Balloon.png","Balloon2.png","Balloon3.png")
}





function setup() {
  database = firebase.database()
  createCanvas(1500,700);
 balloon =  createSprite(400, 200, 50, 50);
 balloon.addImage(balloonImage)
 balloon.scale = 0.5
 var balloon1 = database.ref('balloon/height')
  balloon1.on("value",readHeight)
}

function draw() {
  background(Bg);
  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0)
    balloon.addAnimation("balloon",balloonImage1)

  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0)
    balloon.addAnimation("balloon",balloonImage1)

  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10)
    balloon.addAnimation("balloon",balloonImage1)
    balloon.scale = balloon.scale+0.005
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10)
    balloon.addAnimation("balloon",balloonImage1)
    balloon.scale = balloon.scale-0.005

  }
  drawSprites();
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x,
    'y': height.y + y
  })
}

function readHeight(data){
height= data.val()
balloon.x = height.x
balloon.y = height.y


}











var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload()
{
  //cargando animaciones
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png")
  pathImg = loadImage("path.png");
}


function setup()
{
  
  createCanvas(400,400);
  //creando sprite de path (camino) 
  path = createSprite(190, 200, 20, 20);
  path.addImage("ground", pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  //creando sprite de boy (niño)
  boy = createSprite(200, 275, 20, 20);
  //agregando animación para boy
  boy.addAnimation("running", boyImg);
  boy.scale = 0.5;
  
  //creando  left Boundary (límite izquierdo)
  leftBoundary = createSprite(-10,0,100,800);
  leftBoundary.visible = false;

  //creando right Boundary (límite derecho)
  rightBoundary = createSprite(400,0,100,800);
  rightBoundary.visible = false;
}

function draw()
{
  background("white");  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX
  //colisiones
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 )
  {
    path.y = height/2 + 50;
  }
  
  drawSprites();
}

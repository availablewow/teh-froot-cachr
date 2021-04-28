var mfb, triggerwalls, ctrlstation,
  myself, suprisedbull, cowfee, controlIMG, mfbIMG, cowfeeIMG, spawnIMG, riverIMG, roadImg, uphillIMG2, laneIMG, hmIMG, myselfIMG
var ground, prkshbhaiya, prkshbhaiyaIMG, suprisedbullIMGm, edges
var start = 0, play = 1, end = 10;
var gameState = start;
var play2 = 2 , play3 = 3 , play4 = 4 , play5 = 5 , play6 = 6 , play7 = 7 , play8 = 8 , play9 = 9
function preload() {
  //load all the images
  controlIMG = loadImage("game img/background imgs/control point.png");
  TitleIMG = loadImage("game img/Title screen.png");
  mfbwalking = loadAnimation("game img/pcs and npcs/mfb animations/pc1.png", "game img/pcs and npcs/mfb animations/pc2.png")

  spawnIMG = loadImage("game img/background imgs/spawnpoint.png");
  riverIMG = loadImage("game img/background imgs/river side.png");
  roadImg = loadImage("game img/background imgs/road.png");
  uphillIMG = loadImage("game img/background imgs/uphill.png");
  uphillIMG2 = loadImage("game img/background imgs/uphill control point.png");
  laneImg = loadImage("game img/background imgs/knsmrdni mrg.png");
  hmIMG = loadImage("game img/background imgs/hmm.png");
  mrkt = loadImage("game img/background imgs/randm mrkt i fnd n  da intrnt.png");

  cowfeeIMG = loadImage("game img/pcs and npcs/cowfee.png");
  myselfIMG = loadImage("game img/pcs and npcs/meself.png");
  prkshbhaiyaIMG = loadImage("game img/pcs and npcs/prkshbhaiya.png")
  suprisedbullIMG = loadImage("game img/pcs and npcs/sprsdbl.png")
  mfbIMG = loadAnimation("game img/pcs and npcs/mfb.png")
}

function setup() {
  //canvas
  createCanvas(displayWidth, displayHeight);
  mfb = createSprite(1000, 200);
  mfb.addAnimation("mfbIMG", mfbIMG);
  mfb.addAnimation("mfbwalking", mfbwalking);
  mfb.scale = 3
  cowfee = createSprite(200, 200);
  cowfee.addImage("cowfeeIMG", cowfeeIMG)
  myself = createSprite(200, 200);
  myself.addImage("myselfIMG", myselfIMG)
  prkshbhaiya = createSprite(200, 200);
  prkshbhaiya.addImage("prkshbhaiyaIMG", prkshbhaiyaIMG)
  suprisedbull = createSprite(200, 200);
  suprisedbull.addImage("suprisedbullIMG", suprisedbullIMG)

}

function draw() {

  edges = createEdgeSprites();

 
  if (gameState === start) {
    background(TitleIMG);

    mfb.destroy();
    cowfee.destroy()
    prkshbhaiya.destroy()
    suprisedbull.destroy()
    myself.destroy()

    var startButton = createButton("START ADVENTURE");
    startButton.position(width / 2, height / 2);
  


    startButton.mousePressed(() => {

      removeElements();
      frameCount = 0;
      setup();

      gameState = play;

    });

  }


  if (gameState === play) {
    //play the cutscene


    //all the sprites load

    background(spawnIMG);
    cowfee.destroy()
    prkshbhaiya.destroy()
    suprisedbull.destroy()
    myself.destroy()


    if (mfb.y > 1005 && gameState === play) {

      gameState = play2
      mfb.y = 786.00000000000003;
      mfb.x = 1182.5;
      background(riverIMG)
    }
    controlmfb()


  } if (gameState === play2) {
    background(riverIMG);
    controlmfb();
    var invisrailing
    invisrailing = createSprite(displayWidth/2,displayHeight/2+130,displayWidth,40);
    mfb.collide(invisrailing)
    invisrailing.visible = false;

    var inviswall;
    inviswall = createSprite(035,786.00000000000003,20,1000);

     //if (mfb.isTouching(inviswall)){
      // gameState === play7
     //}
    console.log(mfb.x);
   
  }
 if (gameState === play7) {
    background(laneImg);
    controlmfb();
  }/*if (gameState === play3) {
    background(uphillIMG);
    controlmfb();
  }if (gameState === play4) {
    background(uphillIMG2);
    controlmfb();
  }if (gameState === play5) {
    background(roadIMG);
    controlmfb();
  }if (gameState === play6) {
    background(mrkt);
    controlmfb();
  }if (gameState === play8) {
    background(controlIMG);
    controlmfb();
  }if (gameState === play9) {
    background(hmIMG);
    controlmfb();
  }*/

  drawSprites();

}

function controlmfb() {
  //walking of mfb
  if (keyWentDown("left") || keyDown("a")) {
    mfb.changeAnimation("mfbwalking", mfbwalking);
    mfb.x = mfb.x - 20;

  }
  if (keyWentUp("left") || keyWentUp("a")) {
    mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.x = mfb.x - 20;
  }

  if (keyWentDown("up") || keyDown("w")) {
    mfb.changeAnimation("mfbwalking", mfbwalking);
    mfb.y = mfb.y - 20;

  }
  if (keyWentUp("up") || keyWentUp("w")) {
    mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.y = mfb.y - 20;
  }

  if (keyWentDown("down") || keyDown("s")) {
    mfb.changeAnimation("mfbwalking", mfbwalking);
    mfb.y = mfb.y + 20;

  }
  if (keyWentUp("down") || keyWentUp("s")) {
    mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.y = mfb.y + 20;
  }
  if (keyWentDown("right") || keyDown("d")) {
    mfb.changeAnimation("mfbwalking", mfbwalking);
    mfb.x = mfb.x + 20;

  }
  if (keyWentUp("right") || keyWentUp("d")) {
    mfb.changeAnimation("mfbIMG", mfbIMG);
    mfb.x = mfb.x - 5;



  }
 
  mfb.collide(edges[0])
  mfb.collide(edges[1])
  mfb.collide(edges[2])
  
}
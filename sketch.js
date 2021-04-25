var you,enemy,enemy2,enemy3,enemy4;
var youImage;
var edges;
var enemyImage;
var enemy2Image;
var enemy3Image;
var enemy4Image;
var enemyGroup;
var backgroundImage;
var restartImage;
var restart;
var score = 0;
var PLAY = 1;
var END = 0;
var gameOver,gameOverImage;
var gameState = PLAY;



function preload(){
    youImage = loadImage("25091-1-spaceship-photo.png")
    enemyImage = loadImage("spaceship.png")
    enemy2Image = loadImage("spaceship-clipart-bitmap-13 (1).png");
    enemy3Image = loadImage("UFO 3.png");
    enemy4Image = loadImage("Spaceship enemy.png");
    backgroundImage = loadImage("space.jpeg");
    restartImage = loadImage("Restart.png");
    gameOverImage = loadImage("Gameover.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    you = createSprite(700,200,50,50);
    //you.shapeColor='red';
    you.addImage(youImage);
    you.scale = 0.15;
    enemy = createSprite(300,200,70,70);
    //enemy.shapeColor='blue';
    enemy.addImage(enemyImage);
    enemy.scale = 0.1;
    
    enemy2 = createSprite(100,200,70,70);
    enemy2.addImage(enemy2Image);
    enemy2.scale = 0.05;
    enemy3 = createSprite(10,200,70,70);
    enemy3.addImage(enemy3Image);
    enemy3.scale = 0.1;
    
    enemy4 = createSprite(900,200,70,70);
    enemy4.addImage(enemy4Image);
    enemy4.scale = 0.2;
    
    restart = createSprite(windowWidth/2,windowHeight/2,70,70);
    restart.addImage(restartImage);
    restart.scale = 0.1;

    gameOver = createSprite(windowWidth/2,windowHeight/2-150,70,70);
    gameOver.addImage(gameOverImage);
    gameOver.scale = 0.5;

    enemy.velocityX = 2
        enemy.velocityY = -8

        enemy2.velocityX = 6;
        enemy2.velocityY = 4;

        enemy3.velocityX = 10;
        enemy3.velocityY = -2;

        enemy4.velocityX = 17;
        enemy4.velocityY = -1;
    
    edges = createEdgeSprites();
}

function draw(){
    background(backgroundImage);

    restart.visible = false;

    gameOver.visible = false;

    //text("Score : "+score,800,30);
    if(gameState===PLAY){
        
        
        enemy.bounceOff(edges[0])
        enemy.bounceOff(edges[1])
        enemy.bounceOff(edges[2])
        enemy.bounceOff(edges[3])
    
        enemy2.bounceOff(edges[0])
        enemy2.bounceOff(edges[1])
        enemy2.bounceOff(edges[2])
        enemy2.bounceOff(edges[3])
    
        enemy3.bounceOff(edges[0])
        enemy3.bounceOff(edges[1])
        enemy3.bounceOff(edges[2])
        enemy3.bounceOff(edges[3])
    
        enemy4.bounceOff(edges[0])
        enemy4.bounceOff(edges[1])
        enemy4.bounceOff(edges[2])
        enemy4.bounceOff(edges[3])

        if(keyDown("UP_ARROW")){
            you.y-=8;
        }
    
        if(keyDown("DOWN_ARROW")){
            you.y+=8;
        }
    
        if(keyDown("LEFT_ARROW")){
            you.x-=8;
        }
    
        if(keyDown("RIGHT_ARROW")){
            you.x+=8;
        }

        if(enemy.isTouching(you)||enemy2.isTouching(you)||enemy3.isTouching(you)
     ||enemy4.isTouching(you)){
         //score=score+1;
        gameState = END;
         you.x = 100
         you.y = 100
     }
    }

    if(gameState===END){
        restart.visible = true;
        gameOver.visible = true;
        enemy.velocityX = 0;
        enemy.velocityY = 0;
        enemy2.velocityX = 0;
        enemy2.velocityY = 0;
        enemy3.velocityX = 0;
        enemy3.velocityY = 0;
        enemy4.velocityX = 0;
        enemy4.velocityY = 0;
        

        if(mousePressedOver(restart)){
            reset();
          }
    }
    


    you.collide(edges[0])
    you.collide(edges[1])
    you.collide(edges[2])
    you.collide(edges[3])
    
    
    drawSprites();
}

function reset(){
gameState = PLAY;

enemy.velocityX = 2
        enemy.velocityY = -8

        enemy2.velocityX = 6;
        enemy2.velocityY = 4;

        enemy3.velocityX = 10;
        enemy3.velocityY = -2;

        enemy4.velocityX = 17;
        enemy4.velocityY = -1;

}

/*function enemy(){
    
       if(World.frameCount%80===0){
        enemy = createSprite(400,200,20,20);
        enemy.scale=0.3;
        enemy.velocityX = 2;
        var rand = Math.round(ramdom(1,3));
        if(rand==1){
            enemy.addImage(enemyImage);
        }
        else if(rand==2){
            enemy2.addImage(enemy2Image);
        }
        else if(rand==3){
            enemy3.addImage(enemy3Image);
        }
        //enemyGroup.add(enemy);
    }*/

        
       
        





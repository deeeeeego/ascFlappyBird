let obstacles= [];
let obstacleAmt = 10;
let birdY = 250;
let birdX = 150;
let pleft, pright, ptop, pbot;
let eleft, eright, etop, ebot;
let win;
let frog;
let n = 600;
let gravity = 1.005;


function setup() {
    createCanvas(500, 500);
    noStroke();
    ellipseMode(CENTER);
    rectMode(CORNERS);
    for(let i = 0; i < obstacleAmt; i++){
        let bottom = new Obstacle(n, 500, random(300, 350));
        let top = new tObstacle(n, random(150, 200), 0);
        obstacles.push(bottom);
        obstacles.push(top);
        n = n + random(125, 170);
    }
}

function draw() {
    background(0, 100, 100);
    fill(255, 255, 0);
    ellipse(birdX, birdY, 40, 40)
    fill(0, 255, 0);
    birdY = birdY * gravity;

    pleft = birdX - 20;
    pright = birdX + 20;
    ptop = birdY - 20;
    pbot = birdY + 20;
       
  
   

    for(let i = 0; i < obstacles.length; i++){
        rect(obstacles[i].x, obstacles[i].y, obstacles[i].x + 30, obstacles[i].h);
        obstacles[i].x -= 2;

        eleft = obstacles[i].x;
        eright = obstacles[i].x+30;
        etop = obstacles[i].h;
        ebot = obstacles[i].y;


        if(pleft > eright || pright < eleft || ptop > ebot || pbot < etop){
        }
        else{
            win = false;

        } 
        
    }
    if(pleft > obstacles[obstacles.length-1].x+60){
        win = true;
    }

    if(win == false){
        background(0, 100, 100);
        textSize(25);
        text("YOU LOSE :(", 200,250);
        noLoop();
    }
    if(win == true){
        background(0, 100, 100);
        textSize(25);
        text("YOU WIN :)", 200,250);
        noLoop();

    }

}

class Obstacle {
    constructor(x, y, h) {
        this.h = h;
        this.y = y;

        this.x = x;
    }
 }
 class tObstacle {
    constructor(x, y, h) {
        this.h = h;
        this.y = y;

        this.x = x;
    }
 }



 function keyPressed(){
    if(keyIsDown(32)){ 
        jump();
    }
 }

 function jump(){
    let count = 1;


    while(count < 20){
        gravity = 1;
        birdY -= 3;
        gravity = 1.005;
        count++;
    }



 }
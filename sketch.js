let obstacles= [];
let birdY = 250;
let birdX = 150;
let pleft, pright, ptop, pbot;
let eleft, eright, etop, ebot;
let win;


function setup() {
    createCanvas(500, 500);
    ellipseMode(CENTER);
    rectMode(CORNERS);
    for(let i = 0; i < 5; i++){
        let temp = new Obstacle(random(500,2000), random(250,300));
        obstacles.push(temp);
    }
}

function draw() {
    background(0);
    fill(255,0,0);
    ellipse(birdX, birdY, 40, 40);

    birdY += 1;

    pleft = birdX-20;
    pright = birdX+20;
    ptop = birdY-20;
    pbot = birdY+20;
    birdY 

  
   

    for(let i = 0; i < obstacles.length; i++){
        rect(obstacles[i].x, 500, obstacles[i].x + 30, obstacles[i].h);
        obstacles[i].x -= 3;

        eleft = obstacles[i].x;
        eright = obstacles[i].x+30;
        etop = obstacles[i].h;
        ebot = 500;


        if(pleft > eright || pright < eleft || ptop > ebot || pbot < etop){
        }
        else{
            win = false;

        } 

    }
    if(win == false){
        background(0);
        textSize(25);
        text("YOU LOSE :(", 200,250)
    }
}

class Obstacle {
    constructor(x, h) {
        this.h = h;
        this.x = x;
    }
 }
 class tObstacle {
    constructor(x, h) {
        this.h = h;
        this.x = x;
    }
 }

 function keyPressed(){
    if(keyIsDown(32)){
        birdY -= 50;
    }
 }
 
 
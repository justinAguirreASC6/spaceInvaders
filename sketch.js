let x = 350;
let y = 550;
function setup(){
    createCanvas(700,700);
    background('black');

}
function draw(){
    if(keyIsDown(LEFT_ARROW)){
        x -= 2
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += 2
    }
    //
    if (keyIsDown(ENTER)){
        let ammo = new Bullet(x,y,25,25);
        ammo.shoot();
    }
    clear();
    fill('white');
   let ship = rect(x,y,50,50);
    fill('green');
    let alien = rect(300,200,100,100);
    fill('red');
}
class Bullet{
    constructor(x,y,w,h){
        this.x = x ;
        this.y = y ;
        this.w = w;
        this.h = h;
    }

    shoot(){
       rect(this.x,this.y,this.w,this.h);
    }
    
    velocity(){
        this.y -= 10;
    }
}

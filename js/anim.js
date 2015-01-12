var shape = new Array(15);
var shapeObject = new Array();
var shape_x = [0, 10, 90, 450, 200, 150, 560, 40, 340, 0, 600, 700, 250, 360, 570];
var shape_x_speed = [1, 2, 3, 3, 3, 2, 1, 1, 3, 2, 2, 4, 1, 1, 2];

var shape_y = [50, 100, 150, 400, 300, 250, 200, 160, 480, 140, 189, 90, 360, 289, 450];
var shape_y_speed = [3, 2, 3, 3, 3, 2, 1, 1, 3, 2, 2, 4, 1, 1, 2];

shape[0] = document.getElementById('hex1');
shape[1] = document.getElementById('hex2');
shape[2] = document.getElementById('hex3');
shape[3] = document.getElementById('hex4');
shape[4] = document.getElementById('hex5');
shape[5] = document.getElementById('hex6');
shape[6] = document.getElementById('hex7');
shape[7] = document.getElementById('hex8');
shape[8] = document.getElementById('hex9');
shape[9] = document.getElementById('hex10');
shape[10] = document.getElementById('hex11');
shape[11] = document.getElementById('hex12');
shape[12] = document.getElementById('hex13');
shape[13] = document.getElementById('hex14');
shape[14] = document.getElementById('hex15');


document.body.style.overflow = "hidden";
var canvas  = document.getElementById("myCanvas");
var WIDTH = $('body').innerWidth();
var HEIGHT = $(window).height();
// canvas.width = WIDTH;
// canvas.height = HEIGHT;
// var context = canvas.getContext("2d");



var buff = document.getElementById("buffer");
buff.width = WIDTH;
buff.height = HEIGHT;
var buffCon = buff.getContext("2d");
// var buffCon2 = buff.getContext("2d");

var overCan = document.getElementById("topCan");
overCan.width = WIDTH;
overCan.height = HEIGHT;
var overCont = overCan.getContext("2d");

// var filt = document.getElementById("filt");
// filt.width = WIDTH;
// filt.height = HEIGHT;


var count = 0;
TO_RADIANS = Math.PI/180; 
var sense = -1;
    	
reqAnimFrame = window.mozRequestAnimationFrame    ||
       window.webkitRequestAnimationFrame ||
       window.msRequestAnimationFrame     ||
       window.oRequestAnimationFrame
      ;
//*********************************************************************

function Sprite(ob, x, y, speedx, speedy, angle, angularSpeed){
    this.image = ob
    this.x0 = x;
    this.y0 = y;
    this.speedx = speedx;
    this.speedy = speedy;
    this.angle = angle;
    this.angSpeed = angularSpeed;
    this.sense = 1;
};

var s0 = new Sprite(shape[0], 0, 50, 3, 3, 0);
var s1 = new Sprite(shape[1], 1000, 100, 5, 5, 10);
var s2 = new Sprite(shape[2], 490, 200, 3, 3, 0);
var s3 = new Sprite(shape[3], 400, 250, 5, 5, 0);
var s4 = new Sprite(shape[4], 389, 150, 3, 3, 10);
var s5 = new Sprite(shape[5], 589, 100, 2, 2, 0);
var s6 = new Sprite(shape[6], 0, 50, 3, 3, 0);
var s7 = new Sprite(shape[7], 400, 250, 4, 4, 0);
// shapeObject.push(s0);
// shapeObject.push(s1);


Sprite.prototype.update = function(can){

    this.x0 += this.speedx;
    this.y0 += this.speedy;
    this.angle += 2;
    if(this.x0 <= 0 || this.x0 >= WIDTH - this.image.width){
        this.speedx = -1*this.speedx;
        this.sense = -this.sense;
    }

    if(this.y0 <= 0 || this.y0 >= HEIGHT - this.image.height){
        this.speedy = -1*this.speedy;
        this.sense = -this.sense;
    }

    can.save();
    can.translate(this.x0 + this.image.width/2, this.y0 + this.image.height/2);
    can.rotate(this.angle * TO_RADIANS);
    can.drawImage(this.image, -this.image.width/2, -this.image.height/2);
    can.restore();
}

function animate() {
    
	setInterval(k, 1000/30); 
}

function k(){
    buffCon.clearRect(0, 0, WIDTH, HEIGHT);
    overCont.clearRect(0, 0, WIDTH, HEIGHT);
    s0.update(buffCon);
    s1.update(buffCon);
    s2.update(buffCon);
    s3.update(overCont);
    s4.update(overCont);
    s5.update(overCont);
    s6.update(overCont);
    s7.update(overCont);

}

animate();
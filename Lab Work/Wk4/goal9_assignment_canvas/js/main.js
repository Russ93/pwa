(function() {
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width=document.body.clientWidth;
canvas.height=document.body.clientHeight;
var ctx = canvas.getContext("2d");
	down = 40;
	up = 38;
	left = 37;
	right = 39;

var ball = new Ball();
ball.x=320;
ball.y=240;

window.addEventListener("keydown", onDown);
window.addEventListener("keyup", onUp);

function onDown(e){
	console.log(e.keyCode);
	if((ball.x+ball.width/2)<canvas.width||(ball.x-ball.width/2)>0){
		if(e.keyCode==37){
			ball.vx=-5;
		}
		if(e.keyCode==39){
			ball.vx=5;
		}
	}
	if((ball.y-ball.height/2)<canvas.height||(ball.y-ball.height/2)>0){
		if(e.keyCode==38){
			ball.vy=-5;
		}
		if(e.keyCode==40){
			ball.vy=5;
		}
	}
}
function onUp(e){
	if(e.keyCode==40){
		ball.vy=0;
	}
	if(e.keyCode==38){
		ball.vy=0;
	}
	if(e.keyCode==37){	
		ball.vx=0;
	}
	if(e.keyCode==39){
		ball.vx=0;
	}
}
(function update(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// ball.x=mouse.x;
	// ball.y=mouse.y;
	ball.x+=ball.vx;
	ball.y+=ball.vy;
	ball.update(ctx);
	requestAnimationFrame(update);
	})();
})();
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
	console.log("bally:"+(ball.y+ball.radius));
	console.log("canvas:"+canvas.height);
	if(e.keyCode==40){
		if((ball.y+ball.radius)<canvas.height){
			ball.vy=5;
		}else{
			ball.vy=-5;
		}
	}
	if(e.keyCode==38){
		if((ball.y-ball.radius)>0){
			ball.vy=-5;
		}else{
			ball.vy=5;
		}
	}
	if(e.keyCode==39){
		if((ball.x+ball.radius)<canvas.width){
			ball.vx=5;
		}else{
			ball.vx=-5;
		}
	}
	if(e.keyCode==37){
		if((ball.x-ball.radius)>0){
			ball.vx=-5;
		}else{
			ball.vx=5;
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
	if((ball.y+ball.radius)>canvas.height){
		ball.vy=0;
	}
	ball.x+=ball.vx;
	ball.y+=ball.vy;
	ball.update(ctx);
	requestAnimationFrame(update);
})();
})();
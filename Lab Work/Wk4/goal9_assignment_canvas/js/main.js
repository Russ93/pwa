//canvas painter
console.log("start canvas painter main.js");

(function() {
	//========== Paint ==========\\
	var canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.width = 1400;
	canvas.height = 735;
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = '#333'; //set background color
	ctx.fillRect (0,0,1400,735);

	var mouse = utils.getMouse(canvas); //the getmouse function returns and object literal that has X and Y of the Mouse
	var draw = false; //boolean that holds that status of whether or not the mouse is being clicked	

	canvas.addEventListener("mousedown", onDraw);
	canvas.addEventListener("mouseup", onStopDraw);
	canvas.addEventListener("mouseout", onStopDraw);

//========== Bouncing Ball ==========\\
	var ball = new Ball();
	ball.x=320;
	ball.y=240;

	window.addEventListener("keydown", onDown);
	window.addEventListener("keyup", onUp);

	function onDown(e){
		if(e.keyCode==40){
			ball.vy=5;
		}
		if(e.keyCode==39){
			ball.vx=5;
		}
		if(e.keyCode==38){
			ball.vy=-5;
		}
		if(e.keyCode==37){
			ball.vx=-5;
		}


	}
	function onUp(e){
		if(e.keyCode==40){
			ball.vy=0;
		}
		if(e.keyCode==39){
			ball.vx=0;
		}
		if(e.keyCode==38){
			ball.vy=0;
		}
		if(e.keyCode==37){
			ball.vx=0;
		}

	}

	(function update(){
		//========== Bouncing Ball ==========\\
		ctx.clearRect(0,0,canvas.width,canvas.height);
		// ball.x=mouse.x;
		// ball.y=mouse.y;
		ball.x+=ball.vx;
		ball.y+=ball.vy;
		ball.update(ctx);

		if(ball.x < 0){
			ball.vx=1;
		}
		if(ball.x > canvas.width){
			ball.vx=-1;
		}
		if(ball.y < 0){
			ball.vy=1;
		}
		if(ball.y > canvas.height){
			ball.vy=-1;
		}

		requestAnimationFrame(update); //function thats runs 60 frames per second
	})();
})();
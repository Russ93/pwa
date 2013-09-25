(function(){
var canvas = document.createElement("canvas");

document.body.appendChild(canvas);
canvas.width=800;
canvas.height=600;
var ctx=canvas.getContext("2d");
var ratio=8000/canvas.width;
var blue="40C4F6";
var orange="FFA13A";

circle(blue,650,450,1458,"China","1,458");
circle(orange,200,200,1398,"India","1,398");
circle(orange,50,50,352,"USA","352");
circle(blue,90,90,273,"Indonesia","273")

function circle(color,x,y,diameter,text,num){
/*----------Circle Properties----------*/
	var size= diameter/ratio;
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.fillStyle=color;
	ctx.lineWidth= 1;
	ctx.arc(x,y,size,size,Math.PI*2);
	ctx.stroke();
	ctx.fill();
	
/*----------Text In the Bubble----------*/
	var fNum=36
	if(size<100){
		fNum=fNum/(ratio/2);
	}
	var castFNum = String(fNum+"px "+"Muli");
	ctx.beginPath();
	ctx.fillStyle="EFEFEF";
	ctx.font=castFNum;
	ctx.fillText(text,(x-size/2),y);
	
	ctx.beginPath();
	ctx.fillStyle="EFEFEF";
	ctx.font=castFNum;
	ctx.fillText(num,(x-size/2),y+fNum);
}

/*----------Materials----------

**----- Blue:	4A8CF7
**----- Orange:	FF8A3A

----------Graph----------
ctx.beginPath();
ctx.lineWidth=3;
ctx.strokeStyle="#000";
ctx.moveTo(canvas.width/2, 0);
ctx.lineTo(canvas.width/2,canvas.height);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=3;
ctx.strokeStyle="#000";
ctx.moveTo(0,canvas.height/2);
ctx.lineTo(canvas.width,canvas.height/2);
ctx.stroke();
----------Text----------
ctx.beginPath();
ctx.fillStyle="#000";
ctx.font="24px Avenir";
ctx.fillText("Hello World",100,100);

----------Image----------
var img = new Image();
img.src="images/img.jpg";
img.addEventListener("load", imageLoaded,false);
function imageLoaded(){
	ctx.drawImage(img,10,10,200,200);
	console.log("images is done loading");
}
*/
})();
/**
 * Created by Russell Schlup
 * Class: PWA
 * Goal: Goal_9
 * Date: September 19th, 2013
 **/
(function(){
/*----------Instantiate Canvas----------*/
var canvas=document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width=document.body.clientWidth;
canvas.height=document.body.clientHeight;
var ctx=canvas.getContext("2d");

/*----------Normals----------*/
var ratio=6000/canvas.height;
var blue="40C4F6";
var orange="FFA13A";

/*----------Background----------*/
ctx.beginPath();
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fillStyle="DDE";
ctx.fill();

/*----------Doc Text----------*/
ctx.fillStyle="#000";
ctx.font="24px Muli";
ctx.fillText("This is a graph on the worlds population",4000/ratio,1000/ratio);
ctx.fillText("In the MILLIONS",4000/ratio,1000/ratio+24);


/*----------Countries----------*/
circle(blue,650,450,1458,"China","1,458");
circle(orange,150,150,1398,"India","1,398");
circle(blue,300,250,352,"USA");
circle(orange,500,550,273,"Indonesia");
circle(blue,30,30,226,"Pakistan");
circle(orange,550,300,223,"Brazil");
circle(blue,200,310,208,"Nigeria");
circle(orange,480,450,198,"Bangladesh");
circle(blue,310,150,137,"Russia");
circle(orange,650,280,126,"Japan");


function circle(color,x,y,diameter,text,num){// Function which creates the circles
	var size=diameter/ratio;
	x*=10
	y*=10
	x=x/ratio;
	y=y/ratio;
	/*----------Circle Properties----------*/
	ctx.beginPath();
	ctx.strokeStyle=color;
	ctx.fillStyle=color;
	ctx.lineWidth= 1;
	ctx.arc(x,y,size,size,Math.PI*2);
	ctx.stroke();
	ctx.fill();
	
	/*----------Text In the Bubble----------*/
	var fSize=36;// orig size
	if(size<100){
		fSize=fSize/(ratio/2); //fits the size
		num=String(diameter); // changes num for redundancy
	}
	/*----------Country formatt----------*/
	var fCast=String(fSize+"px Muli");
	ctx.fillStyle="EFEFEF";
	ctx.font=fCast;
	ctx.textAlign="center"; 
	ctx.fillText(text,x,y);
	/*----------Number Formatt----------*/
	ctx.fillStyle="EFEFEF";
	ctx.font=fCast;
	ctx.textAlign="center"; 
	ctx.fillText(num,x,y+fSize);
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

----------Rect----------
ctx.rect(canvas.width/2,canvas.height/2,canvas.height/2,canvas.width/2);
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
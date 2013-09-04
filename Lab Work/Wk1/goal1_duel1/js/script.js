var p1Name = "Xandir Cruiz: ";
var p2Name = "Bob Thatcher: ";

var p1Health = 100;
var p2Health = 100;

var p1Dam = 20;
var p2Dam = 25;

var round = 0;
var rText = "";

while(p1Health>0&&p2Health>0){
	if(round=0){
		rText="Start";
	}else{
		rText="Round "+round;
	}
/* 	alert(p1Name+p1Health+" "+rText+" "+p2Name+p2Health); */
	if(p1Health>0){
		p1Health=p1Health-p2Dam;
	}else if(p2Health>0){
		p2Health=p2Health-p1Dam;
	}
	round++;
	console.log(p1Health);
	console.log(p2Health);
	console.log(round);
}
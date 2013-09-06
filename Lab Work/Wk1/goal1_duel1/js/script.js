/*
Russell Schlup
September 4th, 2013
Finished at: 4:08PM
*/
var p1Name = "Xandir Cruiz: ";
var p2Name = "Bob Thatcher: ";

var p1Hp = 100;
var p2Hp = 100;

var p1Dam = 20; /* Math.random()*(25) */
var p2Dam = 20; /* Math.random()*(20) */

var rnd = 1;
var message = "";

function fight(){
		message = p1Name+":"+p1Hp+"  *Start*  "+p2Name+":"+p1Hp;
		alert(message);
	for(var i=0; i<10; i++){
		var dmg1 = Math.round(Math.random()*(p1Dam));
		var dmg2 = Math.round(Math.random()*(p2Dam));
		
		if(p1Hp>0){
			p1Hp-=dmg2;
		}
		if(p2Hp>0){
			p2Hp-=dmg1;
		}
		var result = winnerCheck();

		if (result==="no winner"){
			message =p1Name+":"+p1Hp+"  Round "+rnd+" Over"+"  "+p2Name+":"+p2Hp;
			alert(message);
			rnd++;
		}else{
			alert(result);
			break;
		}
		console.log(p1Hp+","+ p2Hp);
	}// while loop
}

function winnerCheck(){
	var result= "no winner";
	if (p1Hp<1 && p2Hp<1){
		result = "It was a Tie";
	}else if(p1Hp<1){
		result =p2Name+" Won!"
	}else if (p2Hp<1){
		result = p1Name+" Won!"
	}
	return result;
}
fight();
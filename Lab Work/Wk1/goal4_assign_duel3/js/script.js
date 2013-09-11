/*
Russell Schlup
September 11th, 2013
Moment of Silence T-T
Finished at: 4:08PM
*/
// self-executing function

(function(){
var dom = {
		kabal: document.querySelector("#kabal p"),
		kratos: document.querySelector("#kratos p"),
		btn: document.querySelector(".buttonblue"),
		rndT: document.querySelector("h4#round")
};

var p1 = ["Kabal: ", 100, 25];
var p2 = ["Kratos: ", 100, 20];

var rnd = 0;

function starter(){
		dom.kabal.innerHTML = p1[0]+String(p1[1]);
		dom.kratos.innerHTML = p2[0]+String(p2[1]);
}
function fight(){
	var dmg1 = Math.round(Math.random()*(p1[2]));
	var dmg2 = Math.round(Math.random()*(p2[2]));
	
	if(p1[1]>0){
		p1[1]-=dmg2;
	}
	if(p2[1]>0){
		p2[1]-=dmg1;
	}
	var result = winnerCheck();
	if (result==="no winner"){
		starter();	
		rnd++;
		dom.rndT.innerHTML = "Round"+String(rnd);
	}else{
		dom.rndT.innerHTML = String(result);
	}
	if (result==!("no winner")){
		r();
	}
	console.log(result);
}// fight
function winnerCheck(){
	var result= "no winner";
	if (p1[1]<1 && p2[1]<1){
		result = "It was a Tie";
	}else if(p1[1]<1){
		result =p2[0]+" Won!"
	}else if (p2[1]<1){
		result = p1[0]+" Won!"
	}
	return result;
}// winner check
function r(){
	p1[1] = 100;
	p2[1] = 100;
	result= "no winner";
	starter();
}

dom.btn.addEventListener("click",fight,false);
starter();
})();
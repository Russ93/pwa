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

var p1 = ["Kabal: ", 100, 30];
var p2 = ["Kratos: ", 100, 30];

var rnd = 0;
function starter(){
	dom.kabal.innerHTML = p1[0]+String(p1[1]);
	dom.kratos.innerHTML = p2[0]+String(p2[1]);
}
function checker(){
	var result = winnerCheck();
	starter();
	if (result==="no winner"){
		rnd++;
	dom.rndT.innerHTML = "Round"+String(rnd);
	}else{
		dom.rndT.innerHTML = String(result);
	}
	if(rnd>11||p1[1]<1||p2[1]<1){
		winnerCheck();
		dom.btn.innerHTML = "Rematch!";
		r();
	}else{
		fight();
		dom.btn.innerHTML = "Fight!";
	}
}
function fight(){
	var dmg1 = Math.round(Math.random()*(p1[2]));
	var dmg2 = Math.round(Math.random()*(p2[2]));
	var result = winnerCheck();
	if(result=="no winner"){
		p1[1]-=dmg2;
	}
	if(result=="no winner"){
		p2[1]-=dmg1;
	}
	/*
if (result==="no winner"){
		rnd++;
		dom.rndT.innerHTML = "Round"+String(rnd);
	}else{
		dom.rndT.innerHTML = String(result);
	}
*/
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
	rnd = 0;
	starter();
}

dom.btn.addEventListener("click",checker,false);
starter();	
})();
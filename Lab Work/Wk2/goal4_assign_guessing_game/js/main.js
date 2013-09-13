/**
 * GUESSING GAME:
 *
 * Created By: Russell Benton
 * Date: September 12,2013
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
var ran = Math.round(Math.random()*(10-1)+1);
var diff = 0;
var rnd = 3;
var dom = {
	output: document.querySelector("#output"),
	input: document.querySelector("#input"),
	p: document.querySelector("p"),
	btn: document.querySelector("button")
}
function checker(){
	if(rnd>0){
		game();
	}else{
		dom.p.innerHTML = "Game Over man refresh the page";
		dom.btn.removeEventListener("click",checker,false);
	}
}

function game(){
	if(input.value==ran){
		dom.p.innerHTML = "You've got me your right";
	}else if(input.value>ran){
		rnd--;
		diff=input.value-ran;
	}else if(input.value<ran){
		rnd--;
		diff=ran-input.value;
	}else if(isNaN(input.value)){
		dom.p.innerHTML = "That's Not A Number";
	}
	
	if(input.value>ran||input.value<ran){
	var result = "Sorry man you were off by "+diff+" You have got "+rnd+" tries left";
	dom.p.innerHTML = String(result);
	}
}

dom.btn.addEventListener("click",checker,false);

})();
// conditional statements
var kidHeight = 40;
var rideHeight = 50;
var parentWith = false;

var text = "";

//if kid is taller than the rode height..
//comsole.log "yay you can ride!"
//otherwise
// console.log "no roller coaster for you"

if(kidHeight>=rideHeight||parentWith){
	text = "yay you can ride!";
}else{
	text = "no roller coaster for YOU";
}
console.log(text);

//-------------------- conditional statements 2 --------------------//
var steakTemp = 135;

if(steakTemp<=115){
	text ="Your steak is raw";
}else if(steakTemp<=120){
	text ="Your steak is Extra-rare";
}else if(steakTemp<=130){
	text ="Your steak is Rare";
}else if(steakTemp<=140){
	text ="Your steak is Medium-rare";
}else if(steakTemp<=150){
	text ="Your steak is Medium";
}else if(steakTemp<=155){
	text ="Your steak is Medium-well";
}else if(steakTemp<=212){
	text ="Your steak is Well-done";
}else if(steakTemp>=212){
	text ="Your steak is Over cooked";
}
console.log(text);

//-------------------- while loops --------------------//
var i = 0;
while(i<5){
	console.log(i);
	i++;
}
//-------------------- prompts and Alerts--------------------//
/* alert("This is an Alert. Hi"); */

/*
var yearBorn = prompt ("Type in the year you were born:");
var age = 2013 - yearBorn;
console.log(age);
*/

//-------------------- Basic Function --------------------//
function calcArea(height, width){
	var area = height*width;
	return area;
}

var a = calcArea(5, 6);

console.log(a);

//-------------------- Anonymous Function --------------------//
var calcForce = function(mass, acc){
	var force = mass *acc;
}
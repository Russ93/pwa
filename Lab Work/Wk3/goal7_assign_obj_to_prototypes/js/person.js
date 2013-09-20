/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
function Person(n){
	this.names=n;
	this.jobs=["animator","coder","technitian","pilot","mechanic"];
	this.actions=["dreaming","coding","studying","flying","nothing"];
}
Person.prototype.name=function(){
	var self=this;
	var names=[];
	Name();
		function Name(){
		for (i=0; i<3; i++){
			names.push(self.names[(~~(Math.random()*5))]);
		}
		col1();
	}
	function col1(){
		document.getElementById("r1c1").innerHTML=names[0];
		document.getElementById("r2c1").innerHTML=names[1];
		document.getElementById("r3c1").innerHTML=names[2];
	}
}
Person.prototype.job=function(){
	var self = this;
	var Jobs=[];
	Job();
	function Job(){
		for (i=0; i<3; i++){
			Jobs.push(self.jobs[(~~(Math.random()*5))]);
		}
		col2();
	}
	function col2(){
		document.getElementById("r1c2").innerHTML=Jobs[0];
		document.getElementById("r2c2").innerHTML=Jobs[1];
		document.getElementById("r3c2").innerHTML=Jobs[2];
	}
}
Person.prototype.action=function(){
	var self = this;
	var act=[];
	actionRandom();
		function actionRandom(){
		for (i=0; i<3; i++){
			act.push(self.actions[(~~(Math.random()*5))]);
		}
		col3();
	}
	function col3(){
		document.getElementById("r1c3").innerHTML=act[0];
		document.getElementById("r2c3").innerHTML=act[1];
		document.getElementById("r3c3").innerHTML=act[2];
	}
}
	window.Person=Person;
	// window.update=update;
})();
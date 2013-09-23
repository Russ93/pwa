/**
 * Created by Russell Schlup
 * Class: PWA
 * Goal: Goal7
 * Date: September 19th, 2013
 */
(function(){
function Person(n,f,a){
	this.names=n;
	this.jobs=f;
	this.actions=a;
}
Person.prototype.name=function(){
	var self=this;
	var names=[];
	name();
	function name(){
		for (i=0; i<3; i++){
			names.push(self.names[(~~(Math.random()*5))]);
		}
		col1();
	}
	function col1(){
		for (i=0; i<names.length; i++){
			document.getElementById(String("r"+(i+1)+"c1")).innerHTML=names[i];
		}//for loop
	}// collumn
}//.prototype.name
Person.prototype.job=function(){
	var self = this;
	var jobs=[];
	job();
	function job(){
		for (i=0; i<3; i++){
			jobs.push(self.jobs[(~~(Math.random()*5))]);
		}
		col2();
	}
	function col2(){
		for (j=0; j<jobs.length; j++){
			document.getElementById(String("r"+(j+1)+"c2")).innerHTML=jobs[j];
		}// for loop
	}// collumn2
}//.prototype.job
Person.prototype.action=function(){
	var self = this;
	var act=[];
	action();
		function action(){
		for (i=0; i<3; i++){
			act.push(self.actions[(~~(Math.random()*5))]);
		}
		col3();
	}//
	function col3(){
		for (j=0; j<act.length; j++){
			document.getElementById(String("r"+(j+1)+"c3")).innerHTML=act[j];
		}//forloop
	}//collumn 3
}//.prototype.action
	window.Person=Person;
	// window.update=update;
})();
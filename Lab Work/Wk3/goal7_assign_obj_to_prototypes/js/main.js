/**
 * Created by Russell Schlup
 * Class: PWA
 * Goal: Goal7
 * Date September 19th, 2013
 */
(function (){
var interval = setInterval(update, 1000/1);
var n = ["Jason", "Daniel", "Jose", "Gillian", "Victoria"];
var j =["animator","coder","technitian","pilot","mechanic"];
var a =["dreaming","coding","studying","flying","nothing"];
var p=new Person(n,j,a);

update()

function update(){
	p.name();
	p.job();
	p.action();
}
})();

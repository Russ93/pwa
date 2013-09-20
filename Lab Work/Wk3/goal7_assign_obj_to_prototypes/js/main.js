/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function (){
var interval = setInterval(update, 1000/2);
var names = ["Jason", "Daniel", "Jose", "Gillian", "Victoria"];
var p=new Person(names);

p.name();
p.job();
p.action();

function update(){
	p.name();
	p.job();
	p.action();
}
})();

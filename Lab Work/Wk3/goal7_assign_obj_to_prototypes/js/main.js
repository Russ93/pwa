/**
 * Created by Russell Schlup
 * Class: PWA
 * Goal: Goal7
 * Date September 19th, 2013
 */
(function (){
var interval = setInterval(update, 1000/1);
var names = ["Jason", "Daniel", "Jose", "Gillian", "Victoria"];
var p=new Person(names);

update()

function update(){
	p.name();
	p.job();
	p.action();
}
})();

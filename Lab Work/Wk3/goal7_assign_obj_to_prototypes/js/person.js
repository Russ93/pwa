/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){

function Person(n){
	this.name=n;
}// Dog
Dog.prototype.bark = function(){
	var self = this;
	openMouth();
	function openMouth(){
		console.log("I opened my mouth");
		chew();
	}
	function chew(){
		console.log(self.name, "Is chewing");
	}
}
window.Dog = Dog;
})();
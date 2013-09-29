/*
	* Russell Schlup
	* September 25, 2013
	* Mid Terms for PWA-1
*/
(function(){
var dom = {
	name: document.querySelector("#name p"),
	address: document.querySelector("#address p"),
	gpa: document.querySelector("#gpa p"),
	gpaAvg: document.querySelector("#gpaavg p"),
	date: document.querySelector("#date p"),
	btn: document.querySelector(".buttonred")
}
console.log("********** Below Shows The Original Objects **********");
var students = [new Student("James Bond","3300 University Winter Park Florida",[2.5, 3.5, 4.0]),];
var c = 0;
function checker(){
	if(c<students.length){
		students[c].avg();
		inst();
		adder();
	}else{
		dom.btn.innerHTML = "DONE!!!";
		dom.btn.removeEventListener("click",checker,false);
	}
}// checker
function adder(){
	var amt = 0;
	amt++;
	console.log("********** Below Shows The New Objects Added To The Original Object **********");
	var studentA =[
		new Student("Super Man","123 Test Dr. Winter Park Florida",[3.2, 4.0, 2.2]),
		new Student("Aqua Man","123 Test Dr. Winter Park Florida",[4.0, 4.0, 4.0]),
		new Student("Robin","123 Test Dr. Winter Park Florida",[4.0, 3.5, 3.0]),
		new Student("Spider Man","123 Forest Hills st. Queens New York",[2.0,1.5,3.0]),
		new Student("Yo Momma","30000 Mayonaise Dr. Winter Park Florida",[1.0, 1.5, 1.0])
	]
	if(amt<2){
		if(!(studentA[c-1]===undefined)){
			students.push(studentA[c-1]);	
		}
	}
}// adder
function Student(name,address,gpa){
	this.name= name;
	this.address= address;
	this.gpa= gpa;
	this.gpaAvg= 0;
}
function inst(){
	var d = new Date();
	dom.name.innerHTML = "Name: "+students[c].name;
	dom.address.innerHTML = "Address: "+students[c].address;
	dom.gpa.innerHTML = "GPA: "+students[c].gpa;
	dom.date.innerHTML = "Date: "+date(d);
	dom.gpaAvg.innerHTML = "Average GPA: "+students[c].gpaAvg;
	dom.btn.innerHTML = "Next";
	con();
	c++;
}// inst
function date(d){
	return (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
	
}// date
function con(){
	var d = new Date();
	console.log("Name: "+students[c].name);
	console.log("Address: "+students[c].address);
	console.log("GPA: "+students[c].gpa);
	console.log("Date: "+date(d));
	console.log("Average GPA: "+students[c].gpaAvg);
}// con
Student.prototype.avg=function(){
	var gpaAdd = 0;
	for(var i=0;i<students[c].gpa.length; i++){
		gpaAdd+=students[c].gpa[i];
	}
	gpaAdd/=students[c].gpa.length;
	var gpa = Math.round(gpaAdd*100)/100;
	students[c].gpaAvg = gpa;
}// avg

dom.btn.addEventListener("click",checker,false);
})();
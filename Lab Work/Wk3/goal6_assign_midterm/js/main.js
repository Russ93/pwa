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
function student(name,address,gpa){
	var stud={name: name, 
	address: address, 
	gpa: gpa,
	gpaAvg: 0}
	return stud;
}
var students = [
	student("James Bond","3300 University Winter Park Florida",[2.5, 3.5, 4.0]),
	student("Super Man","123 Test Dr. Winter Park Florida",[3.2, 4.0, 2.2])
	];
var c = 0;

function adder(){
	var amt = 0;
	amt++;
	if(students.length==3){
		console.log("********** Below Shows The New Objects Added To The Original Object **********");
	}
	var studentA =[
	student("Aqua Man","123 Test Dr. Winter Park Florida",[4.0, 4.0, 4.0]),
	student("Robin","123 Test Dr. Winter Park Florida",[4.0, 3.5, 3.0])];
	
	if(amt<2){
		students.push(studentA[c-1]);	
	}
}// adder
function checker(){
	if(students.length<6){
		avg();
		inst();
		adder();
	}else{
		dom.btn.innerHTML = "DONE!!!";
		dom.btn.removeEventListener("click",checker,false);
	}
}// checker
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
function avg(){
	var gpaAdd = 0;
	for(var i=0;i<students[c].gpa.length; i++){
		gpaAdd+=students[c].gpa[i];
	}
	gpaAdd/=students[c].gpa.length;
	var gpa = Math.round(gpaAdd*100)/100;
	students[c].gpaAvg = gpa;
}// avg
function date(d){
	return d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear();
	
}// date
function con(){
	var d = new Date();
	console.log("Name: "+students[c].name);
	console.log("Address: "+students[c].address);
	console.log("GPA: "+students[c].gpa);
	console.log("Date: "+d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear());
	console.log("Average GPA: "+students[c].gpaAvg);
}// con

dom.btn.addEventListener("click",checker,false);
})();
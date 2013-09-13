/*
Name: Russell Schlup
Date: September 13, 2013
*/

(function(){
var dom = {
	usr:document.querySelector("#f_username"),
	email:document.querySelector("#f_email"),
	phone:document.querySelector("#f_phone"),
	pwd:document.querySelector("#f_password"),
	ssn:document.querySelector("#f_ssn")
};

myform.onsubmit = function(e){

	validateField(dom.usr);
	validateField(dom.email);
	validateField(dom.phone);
	validateField(dom.pwd);
	validateField(dom.ssn);

	e.preventDefault();
	return false;
};
function validateField(inputName){
	if (inputName.name === 'f_username'){
		var pattern = /^([A-Z][a-z]+)\s([A-Z][a-zA-Z-]+)$/;
	}else if(inputName.name === 'f_email'){
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	}else if(inputName.name === 'f_phone'){
		var pattern = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
	}else if(inputName.name === 'f_password'){
		var pattern = /^[a-zA-Z]\w{3,14}$/;
	}else if(inputName.name === 'f_ssn'){
		var pattern = /^\d{3}-\d{2}-\d{4}$/; 
	}
	
	var pass = pattern.test(inputName.value);
	var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

	if (!pass || inputName.value.length < 2){
		errorMsg.style.display='block';
		inputName.style.backgroundColor = '#fee';
	} else if (pass && inputName.value.length > 5){
		errorMsg.style.display='none';
		inputName.style.backgroundColor = '#dfd';
	} else {
		errorMsg.style.display='none';
		inputName.style.backgroundColor = '#fff';
	};
	return false;
	};
})();  // end wrapper
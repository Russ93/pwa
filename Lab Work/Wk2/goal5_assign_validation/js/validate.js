/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
var pass = 'the RegEx .test statement is needed here';
var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;
var formData = {
	usr:document.querySelector("#f_username"),
	mail:document.querySelector("#f_email"),
	pwd:document.querySelector("#f_password"),
	phone:document.querySelector("f_phone"),
	ssn:document.querySelector("ssn")
}

function myform.onsubmit(e){
	//Below is one example of the validateField call with an argument.
	//You must dynamically retrieve the ID name from the DOM/HTML.

	validateField(formData.usr);  //id = is the form input field ID
	validateField(formData.mail);
	validateField(formData.pwd);
	validateField(formData.phone);
	validateField(formData.ssn);

	e.preventDefault();
	return false;
};

function validateField(inputName){

	if (inputName.name === 'id name goes here'){
		var pattern = /^([A-Z][a-z]*(\s))+[A-Z][a-z]*$/;
		//You will need to create an else-if statement for each input field id.  The
		//format will be similar to the above IF statement.
	};
	
	if (!pass || inputName.value.length < 2){
		errorMsg.style.display='block';
		inputName.style.backgroundColor = 'red';
	} else if (pass && inputName.value.length > 5){
		errorMsg.style.display='none';
		inputName.style.backgroundColor = 'green';
	} else {
		errorMsg.style.display='none';
		inputName.style.backgroundColor = 'white';
	};
};
})();  // end wrapper




/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
	var ran = Math.round(Math.random()*(10-1)+1);
	var dom = {
		output: document.querySelector("#output");
		input: document.querySelector("#input");
		btn: document.querySelector("button");
	}
	dom.btn.addEventListener("click",checker,false);
})();
/**
 * On page load function
 * @return {[NONE]}
 */
$(document).ready(function(){

	/**
	 * Initlise Slidesjs (a free open source javascript image slider)
	 * This function is called for every initlised slide
	 * @return {[NONE]}
	 */
	$(function(){
		// check to see if the slides element exists
		if ($("#slides").length){
			// bit of debug
			console.log("Found #slides Element")
			// initilise the plugin with the below settings
			$("#slides").slidesjs({
				width: 940,
				height: 600,
				navigation: false,
				play: {
					active: true,
					auto: true,
					interval: 4000,
				 	swap: true,
				  	pauseOnHover: true,
				  	restartDelay: 2500
				}
		  	});
		// if no slides element is found, print message and dont initilise
		} else {
			console.log("No #slides Element")
		}	
	});

	/**
	 * Initilises the jQuery validate pugin (a free open source plugin for form
	 * managment)
	 * @return {[NONE]}
	 */
	$(function(){
		// check that the form1 element exists
		if ($("#form1").length){
			// some personal debugging
			console.log("Found #form1 Element")
			// initlise the validate plugin with the below feilds as required
			// these settings related to the form1's names for the input
			// form in contact.html
			$("#form1").validate({
				rules: {
					"firstName": {
						required: true
					},  
					"lastName": {
						required: true
					},
					"userAddress": {
						required: true,
						email: true
					},
					"subject": {
						required: true
					},
					"usermessage": {
						required: true
					}
				}
			});
		// if it does not exist then, print message and move on
		} else {
			console.log("No #form1 Element")
		}
	});
	
	/**
	 * Function that changes the font family to comics sans, just cuz
	 * @return {[NONE]}
	 */
	$(".troll").click(function(){
		console.log("comics sans lol");
		$("body").css("font-family", "\'Comic Sans MS\'");
		$("h1").css("font-family", "\'Comic Sans MS\'");
		$("h2").css("font-family", "\'Comic Sans MS\'");
		$("h3").css("font-family", "\'Comic Sans MS\'");
		$("li").css("font-family", "\'Comic Sans MS\'");
		$("div#heading").css("font-family", "\'Comic Sans MS\'");
	});
});
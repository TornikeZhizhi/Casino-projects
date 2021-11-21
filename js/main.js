$(document).ready(function () {
	// body...





	$(document).click(function(argument) {
		
		$(".language_body").slideUp(250);
		$(".language_caret").removeClass("rotate");

	})


	$(".language_title").click(function(e){
		e.stopPropagation()
		$(".language_body").slideToggle(250);
		$(".language_caret").toggleClass("rotate");

	})

	$(".language_body").click(function(e){
		e.stopPropagation()

	})

})
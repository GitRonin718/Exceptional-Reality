$(document).ready(function(){
	////// MOBILE MENU /////

	$('a.menu-icon').click(function(){
		$('#menu-links').slideToggle();
	});

	////// FIX HIDDEN LINKS ON SCREEN RESIZE ////
	$(window).resize(function(){
		if ($(window).width() > 700){
			$('#menu-links').removeAttr('style');
		}
	});
});
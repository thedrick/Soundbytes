$(document).ready(function() {
	$("#main-content").css('margin-top', $(".header-carousel").height() + 'px');
});	

$(window).resize(function() {
	$("#main-content").css('margin-top', $(".header-carousel").height() + 'px');
});
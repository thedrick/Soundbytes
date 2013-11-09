$(document).ready(function() {
	$("#main-content").css('margin-top', $(".header-carousel").height() + 'px');
	$('.toggle-menu').jPushMenu();
});	

$(window).resize(function() {
	$("#main-content").css('margin-top', $(".header-carousel").height() + 'px');
});

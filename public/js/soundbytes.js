Parse.initialize("BQmvWMb7YW13061P4ve9qsgwcIE1jM5oVg1p6P7P", "vJtu9l4rHykKATckBgfaPY3uBGRSX4c2AEKoqa8w");

$(document).ready(function() {
	//$("#main-content").css('margin-top', $(".header-carousel").height() + 'px');
	$("#user-submit").click(function() {
		var Soundbyte = Parse.Object.extend("Bytes");
		var soundbyte = new Soundbyte();
		var values = $("#user-form").serializeArray();
		for (var i = 0; i < values.length; i++) {
			var val = values[i];
			soundbyte.set(val.name, val.value);
		}
		soundbyte.save();
	});
	$("#main-content").css('margin-top', $(".header-carousel").height() + 'px');
	$('.toggle-menu').jPushMenu();
});	

$(window).resize(function() {
	$("#main-content").css('margin-top', $(".header-carousel").height() + 'px');
});

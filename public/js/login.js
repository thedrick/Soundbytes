Parse.initialize("BQmvWMb7YW13061P4ve9qsgwcIE1jM5oVg1p6P7P", "vJtu9l4rHykKATckBgfaPY3uBGRSX4c2AEKoqa8w");

$(document).ready(function() {
	$("#login-form").hide();
	$("#user-form").hide();

	if (Parse.User.current()) {
		$("#login-form").remove();
		$("#user-form").show();
	} else {
		$("#login-form").show();
	}

	$("#login-button").click(function() {
		var username = $("#username-field").val();
		var password = $("#password-field").val();
		var user = new Parse.User();
		user.set("username", username);
		user.set("password", password);
		user.signUp(null, {
			success: function(user) {
    		// Hooray! Let them use the app now.
  			},
  			error: function(user, error) {
    		// Show the error message somewhere and let the user try again.
   			 alert("Error: " + error.code + " " + error.message);
 			}
		});
	});

	$("#user-submit").click(function() {
		$("#user-form").hide();
		$(".loading-div").html("Loading...");
		var Soundbyte = Parse.Object.extend("Bytes");
		var soundbyte = new Soundbyte();
		var values = $("#user-form").serializeArray();
		for (var i = 0; i < values.length; i++) {
			var val = values[i];
			soundbyte.set(val.name, val.value);
		}
		soundbyte.save();
		var user = Parse.User.current()
		user.set("soundbyte", soundbyte);
		user.save().then(function() {
			$(".loading-div").html("Success!");
		});
	});
});
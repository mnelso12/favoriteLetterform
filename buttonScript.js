"use strict";

$(document).ready( function() {
	console.log("bahhhhhhh");
	$("#analysis").css('visibility', 'hidden');
	
	$("#angleButton").click( function() {
		console.log("pressed!");
		
		if ($("#analysis").css('visibility') == 'visible') {
			$('#analysis').fadeTo(500, 0, function(){
				$('#analysis').css("visibility", "hidden");   
			});
			console.log("making it hidden");
		}
		else if ($("#analysis").css('visibility') == 'hidden') {
			$('#analysis').fadeTo(100, 1, function(){
				$('#analysis').css("visibility", "visible");
			});
			
			$("#analysis").fadeIn();
			console.log("making it visible");
		}
	});

});

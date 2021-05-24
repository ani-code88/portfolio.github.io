$(function() {

	'use strict';

	// Form

	var contactForm = function() {

		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
					waitText = 'Submitting...';

					$.ajax({   	
						type: "POST",
						url: "php/send-email.php",
						data: $(form).serialize(),

						beforeSend: function() { 
							$submit.css('display', 'block').text(waitText);
						},
						success: function(msg) {
							if (msg == 'OK') {
								$('#form-message-warning').hide();
								setTimeout(function(){
									$('#contactForm').fadeOut();
								}, 1000);
								setTimeout(function(){
									$('#form-message-success').fadeIn();   
								}, 1400);

							} else {
								$('#form-message-warning').html(msg);
								$('#form-message-warning').fadeIn();
								$submit.css('display', 'none');
							}
						},
						error: function() {
							$('#form-message-warning').html("Something went wrong. Please try again.");
							$('#form-message-warning').fadeIn();
							$submit.css('display', 'none');
						}
					});    		
				}
				
			} );
		}
	};
	contactForm();

	// ---------------------------------------------------------------
	// Change Background Color Of Top Bar on Scroll 
	// ---------------------------------------------------------------

	window.onscroll = function() {changeTopBarBg()};
	function changeTopBarBg() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			document.getElementById("top-logo-bar").classList.add("changeBgOnScroll");
		}
		else{
			document.getElementById("top-logo-bar").classList.remove("changeBgOnScroll");
		}
	}

	// ---------------------------------------------------------------
	// Expand Team On View More Button Click 
	// ---------------------------------------------------------------
	

});
function expandTeam(btn) {
		var rows = document.querySelectorAll(".team .row");
		// var viewBtn = document.getElementById()
		console.log(rows);
		console.log(btn.innerHTML);
		if(btn.innerHTML == "View More"){
			for (let i = 1; i < rows.length; i++) {
			rows[i].classList.remove("d-none");
			btn.innerHTML = "View Less";
		}
		}
		else{
			btn.innerHTML = "View More";
			for (let i = 1; i < rows.length; i++) {
			rows[i].classList.add("d-none");
			
		}
		
	}
}
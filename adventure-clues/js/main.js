$(document).ready(function() {
	


	/*
		Stars rating.
		Usage:
		1. Add attribute data-stars-rating to <ul>.
		2. Add attribute data-stars-rating-message='#some-id' to show message after star is selected
		3. If you need to log text somewhere - Add attribute data-stars-rating-log-to='#some-id'
		4. To add value to input add attribute data-stars-rating-input='#some-id'. it will set value there
	*/
	$('[data-stars-rating]').each(function() {
		
		// stars container
		var starsContainer = $(this);

		// each star
		var star = starsContainer.children();
		
		// message to show after star is selected
		var message = $( starsContainer.data('stars-rating-message') );
		
		// where to log value
		var logTo = $(starsContainer.data('stars-rating-log-to'));
		
		// input where to set value of selected stars
		var input = $( starsContainer.data('stars-rating-input') );

		
		// when click star - click for touch devices
		star.on('click', function() {

			// reset stars
			star.removeClass('active');

			// get index of it
			var index = $(this).index();
			var starsValue = index + 1;
			
			// go through each star until we reach clicked
			for (var i = 0; i <= index; i++) {
				
				star.eq(i).addClass('active');

			};
			
			// if we need to show messafe after star is selected
			if(message) {
				message.removeClass('hidden');
			};
			
			// log result to element if it's setted with data attribute
			if(logTo) {

				logTo.text(starsValue);

			};
			
			// set value to hidden input
			if(input) {
				input.val(starsValue);
			};
			
		});


		// hover for laptop/desktop
		star.on('mouseenter', function() {

			// reset stars
			star.removeClass('hovered');

			// get index of it
			var index = $(this).index();
			
			// go through each star until we reach hovered
			for (var i = 0; i <= index; i++) {
				star.eq(i).addClass('hovered');

			};
			
		}).on('mouseleave', function() {
			star.removeClass('hovered');
		});


	});













});
















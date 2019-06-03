
// $('.js-animation').hide();


$(document).ready(function() {



	/*
		Range Slider
		https://github.com/IonDen/ion.rangeSlider
		!!! SLIDER INIT SHOULD BE BEFORE ANIMATIONS !!!
	*/
	$('[data-range]').each(function() {

		// THIS SLIDER
		var slider = $(this);
		var logTo = slider.data('range-log-to'); // where to log results
		
		// INIT
		slider.ionRangeSlider({
			skin: 'round',

			min: 0,
			max: 1000000, // max 1 million

			step: 10000, // step 10K

			hide_min_max: true,

			onChange: function(data) {

				// IF LOG RESULTS TO SOME ELEMENT
				if(logTo) {
					
					// element where we insert result
					var logToElement = $(logTo); 

					// get value. Usee data.from because we use single slider
					var value = data.from; 
					
					// if value less then million
					if(value < 1000000) {
						
						// translate into thousands and add K letter
						var valueFormatted = value/1000 + 'K';
					
					} else {
						// if value more than million
						// translate into millions and add 'M+' letters
						var valueFormatted = value/1000000 + 'M+';
					}

					logToElement.text(valueFormatted);

				}

			}

		});
		


	});


	
	/*
		ANIMATIONS ON PAGE LOAD - TRANSITIONS BETWEEN PAGES
		Usage:
		To element you want to animate:
		1. Add class "js-animation". It will hide element with CSS.
		2. Add class with animation type. "js-animation--fade", "", "", "", 
	*/
	(function(){
		
		// First show body
		$('.js-animation--body-fade').addClass('active');
		
		// all animation elements which are hidden with CSS
		var allAnimationElements = $('.js-animation');

		// Show animation elements and body if page loads more than 5 seconds
		setTimeout( () => {

			allAnimationElements.show();
			
			$('.js-animation--body-fade').addClass('active');

		}, 5000); // 5000 miliseconds = 5 seconds

		

		// VARIANTS
		// ------------------------------------------

		// FADE
		$('.js-animation--fade').each(function() {
			
			// THIS animation element
			var element = $(this);

			element.fadeIn(1000);

		});

		// FADE IN DOWN CHILDREN ITEMS VERTICAL - PLAYERS ITEMS IN SEARCH-PLAYERS
		$('.js-animation--items').each(function() {
			
			// THIS parent
			var parent = $(this);

			// items to animate
			var item = parent.find('.js-media');

			// we will animate bottom margin. get it from CSS
			var itemMarginBottom = parseInt( item.css('margin-bottom') );

			// prepare before animation
			item.css({
				'margin-bottom': itemMarginBottom/2
			});
			
			// animate
			item.animate({
				'margin-bottom': itemMarginBottom
			}, 600)
			
			// fade in parent
		parent.fadeIn(1000);

		});

		

		// SLIDER
		$('.js-animation--slider').each(function() {
			
			// THIS animation element
			var element = $(this);
			var slider = element.find('.irs-line');
			
			// prepare before animation
			slider.css({
				'width': '0'
			});

			// animate
			slider.animate({
				'width': '100%'
			}, 600)

		slider.fadeIn(1000);

		});

		
		// FADE IN FROM RIGHT CHILDREN ITEMS - NEWS & PRESS ITEMS IN CONTACT PAGE
		$('.js-animation--items-from-right').each(function() {
			
			// THIS parent
			var parent = $(this);

			// items to animate
			var item = parent.find('.js-media');

			item.addClass('active');

		});


		// When click link to another page fade out body for smooth transition effect
		$('.js-link-animate-body').click( function(event) {
			
			// prevent default redirect
			event.preventDefault();
			
			// get link
			var link = $(this);

			// and href
			var href= link.attr('href');
			
			
			// fade out body
			$('.js-animation--body-fade').removeClass('active');
			
			// after timeout
			setTimeout(function() {
				// redirect
				window.location.href = href;
			}, 200);


		});




	})();
	
























});


$(document).ready(function() {



	/*
		Smooth scroll to anchor
	*/
	$('.js-smooth-scroll').click(function(event) {
		event.preventDefault();

		$("body, html").animate({
			scrollTop: $( $.attr(this, "href") ).offset().top
		}, 500);
	});






	/*
		Sticky Header
	*/
	(function() {

		var element = $('.js-fixed-header');

		// class for manipilations
		var class_ = "fixed";

		function fixedHeaderMain() {

			// current scroll
			var scroll = $(window).scrollTop();
			
			// compare them and play with class
			if (scroll > 0) {
				element.addClass(class_);

			} else {
				element.removeClass(class_);
			};
			
		}
		fixedHeaderMain();

		$(window).scroll(function(){
			
			fixedHeaderMain();

		});

	})();





	/*
		Parallax element
	*/
	function parallax() {

		$("[data-parallax]").each(function() {
			
			var element = $(this);
			var elementOffset = element.offset().top;
			var elementHeight = element.height();
			
			var windowHeight = $(window).height();

			var speedCoefficient = 6;


			function parallaxScroll() {
				var scrolled = $(window).scrollTop() + 1;

				// when element is to far from top speed became to big and it overlap on other elements. to prevent this we decrease speed
				if (elementOffset > 3000) {
					speedCoefficient = 8;
				};

				if(elementOffset > 5000) {
					speedCoefficient = 12;
				};

				if(elementOffset > 10000) {
					speedCoefficient = 16;
				};


				// value of translation/moving speed
				var translate = ((elementOffset - scrolled)/speedCoefficient);

				
				// start animation when element is in visible zone
				if(elementOffset <= scrolled + windowHeight && elementOffset >= scrolled - elementHeight) {
					
					element.css({
						'-webkit-transform': 'translate3d(0px, ' + translate + 'px, 0px)',
						'transform': 'translate3d(0px, ' + translate + 'px, 0px)'
					});

				};
			}
			parallaxScroll();

			$(window).scroll(function() {
				parallaxScroll();
			});

		});

	};
	parallax();

	// Re-calculate parallax on window resize
	$(window).resize(function() {
		parallax();
	});


	
	

	/*
		Fade in from top - hero phone and text
	*/
	$(".js-animate-from-top").each(function() {

		var element = $(this);
		var delay = 0;
		var delay = element.data("delay");

		setTimeout(function() {
			
			element.addClass("active");

		}, delay);

	});

	
	// Thank you modal demo
	$(".js-show-thank-you-modal").click(function() {

		$("#modal-android-waitlist").modal("hide");

		setTimeout(function() {
			$("#modal-success").modal("show");
		}, 400);

	});




	/*
		Toggle class of some element on click of other element
	*/
	$("[data-toggle-class]").click(function(event) {

		event.preventDefault();

		// if target is defined
		if ( $(this).data("target") ) {

			var targetIdOrClass = $(this).data("target");
			
		} else {
			// if target is not defined - set this as target
			var targetIdOrClass = $(this);

		};


		var target = $(targetIdOrClass);

		// console.log(target)

		var targetToggleClass = $(this).data("toggle-class");

		target.toggleClass(targetToggleClass);

	});



	// $("#modal-android-waitlist").modal("show");


















	




});
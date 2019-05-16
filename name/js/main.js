$(document).ready(function() {
	


	/*
		Toggle class of some element on click of other element
	*/
	$("[data-toggle-class]").click(function(event) {

		event.preventDefault();

		var targetIdOrClass = $(this).data("target");
		var target = $(targetIdOrClass);
		var targetToggleClass = $(this).data("toggle-class");

		target.toggleClass(targetToggleClass);

	});
	


	/*
		Background image. Find some image and insert it as background to some element
	*/
	$(".js-bg").each(function() {
		// get element
		var element = $(this);

		// get image
		var img = element.find(".js-bg-img");

		// get image source
		var src = img.attr("src");


		// insert background image
		element.css({
			"background-image": "url(" + src + ")"
		});

		// hide real image
		img.hide();

	});

	



	/*
		Slider
		https://github.com/OwlCarousel2/OwlCarousel2
	*/
	$('[data-slider]').each(function() {
		var sliderContainer = $(this);
		var slider = sliderContainer.find('.owl-carousel');

		// Fix wrong slide width in Windows 
		function owlWidth() {
			var width = sliderContainer.innerWidth();
			slider.outerWidth(width);
		}
		
		// re-calculate after init
		slider.on('initialized.owl.carousel', () => {
			owlWidth();
		});

		// re-calculate on resize
		$(window).resize(() => {
			owlWidth();
		});


		// init this slider
		slider.owlCarousel({
			items: 1,
			nav: true,
			navText: [
				'<i class="fa fa-chevron-left"></i>',
				'<i class="fa fa-chevron-right"></i>'
			],
			
			autoplay: true,
			autoplayTimeout: 5000,

			loop: true
		});

	});



	// Language Dropdown - Change text on Language Select
	$('[data-language-container]').each(function() {
		var container = $(this); // this element - language dropdown
		var current = container.find('[data-language-current]'); // element showing current language
		var link = container.find('[data-language-link]'); // language links
		
		// wheb select language from dropdown
		link.click(function() {
			var selected = $(this); // clicked link
			var newCurrentText = selected.text(); // get name of current language

			link.removeClass('active'); // remove active class from all
			selected.addClass('active'); // add active class to selected

			current.text(newCurrentText); // set new text
		});

	});















});


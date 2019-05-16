$(document).ready(function() {


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


	// toggle class on click
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

	// toggle class on click in this element (self)
	$("[data-toggle-class-this]").click(function(event) {

		event.preventDefault();

		var target = $(this);
		var targetToggleClass = $(this).data("toggle-class-this");

		console.log(targetToggleClass)

		target.toggleClass(targetToggleClass);

	});


	

	/*
		Card hover
	*/
	(function() {

		// on image hover or click add active
		$(".js-card-img").on("mouseover", function() {
			$(this).closest(".js-card").addClass("active");

		});

		// on image mouseleave remove active
		$(".js-card-img").on("mouseleave", function() {
			$(this).closest(".js-card").removeClass("active");

		});

		// on click of overlay remove active
		$(".js-card-overlay").click(function() {
			$(this).closest(".js-card").removeClass("active");
		});

	})();

	/*
		Range date picker
		http://www.daterangepicker.com/
	*/
	$(".js-date-picker").each(function() {
		
		$(this).dateRangePicker({
			
			// options
			
			alwaysOpen: true,
			showTopbar: false,
			hoveringTooltip: false,
			container: ".js-date-picker-container",

			customOpenAnimation: function(cb) {
				$(this).fadeIn(0, cb);
			},

			customCloseAnimation: function(cb) {
				$(this).fadeOut(0, cb);
			},

			time: {
				enabled: false
			},

			singleMonth: false,

			// monthSelect: true,
			// yearSelect: true


		})

		// get data from here
		.bind('datepicker-change',function(event,obj) {
			
			/* This event will be triggered when second date is selected */
			console.log(obj);

			// obj will be something like this:
			// {
			// 		date1: (Date object of the earlier date),
			// 		date2: (Date object of the later date),
			//	 	value: "2013-06-05 to 2013-06-07"
			// }
		});

	});


	// date picker in filters
	$(".js-date-picker-2").each(function() {
		
		$(this).dateRangePicker({
			
			// // options
			
			// alwaysOpen: true,
			showTopbar: false,
			hoveringTooltip: false,
			// container: ".js-date-picker-container",

			customOpenAnimation: function(cb) {
				$(this).fadeIn(0, cb);
			},

			customCloseAnimation: function(cb) {
				$(this).fadeOut(0, cb);
			},

			separator: " - ",

			// format settings here:
			// http://momentjs.com/docs/#/displaying/format/
			format: 'DD MMM YYYY',

			// time: {
			// 	enabled: false
			// },

			singleMonth: false,

			// // monthSelect: true,
			// // yearSelect: true


		})

		// get data from here
		.bind('datepicker-change',function(event,obj) {
			
			/* This event will be triggered when second date is selected */
			console.log(obj);

			// obj will be something like this:
			// {
			// 		date1: (Date object of the earlier date),
			// 		date2: (Date object of the later date),
			//	 	value: "2013-06-05 to 2013-06-07"
			// }
		});

	});



	/*
		Range slider 
		http://ionden.com/a/plugins/ion.rangeSlider/en.html
	*/
	$(".js-price-range").each(function() {

		$(this).ionRangeSlider({
			hide_min_max: true,
			min: 0,
			max: 1000,

			type: 'double',
			step: 10,

			prefix: "£"

		});


	});

	$(".js-time-range").each(function() {

		$(this).ionRangeSlider({
			hide_min_max: true,
			min: 0,
			max: 24,

			type: 'double',
			step: 1,


			values: [
				"0am",
				"1am",
				"2am",
				"3am",
				"4am",
				"5am",
				"6am",
				"7am",
				"8am",
				"9am",
				"10am",
				"11am",
				"12am",

				"1pm",
				"2pm",
				"3pm",
				"4pm",
				"5pm",
				"6pm",
				"7pm",
				"8pm",
				"9pm",
				"10pm",
				"11pm",
				"12pm"
			]
			
		});


	});




	// on off switch - checkbox slider
	$(".js-switch").each(function() {

		$(this).click(function() {
			$(this).toggleClass("on");
		})

	});




	// sticky on window scroll
	$('[data-sticky]').each(function() {

		var sticky = $(this);

		// element top offset
		var elementOffset = sticky.offset().top;

		$(window).scroll(function(){
			// current scroll
			var scroll = $(window).scrollTop();

			if (scroll > elementOffset) {
				sticky.addClass('fixed');

			} else {
				sticky.removeClass('fixed');
			};

		});

	});





























});
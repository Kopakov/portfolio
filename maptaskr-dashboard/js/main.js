$(document).ready(function() {

	// CUSTOM SCRIPTS GOES HERE

	// toggle class of some element on click of other element
	$("[data-toggle-class]").click(function() {
		var targetIdOrClass = $(this).data("target");
		var target = $(targetIdOrClass);
		var targetToggleClass = $(this).data("toggle-class");

		target.toggleClass(targetToggleClass);
	});

	// toggle class second. if we need second action to the same trigger
	$("[data-toggle-class-2]").click(function() {
		var targetId = $(this).data("target-2");
		var target = $(targetId);
		var targetToggleClass = $(this).data("toggle-class-2");

		target.toggleClass(targetToggleClass);
	});


	// collapse all elements by class
	$("[data-toggle='collapse-all']").click(function() {
		var targetClass = $(this).data("target");
		var target = $(targetClass);

		target.collapse("hide");
	});






	// Detect touch device or not
	if(("ontouchstart" in document.documentElement)) {
		// touch

	} else {
		// NOT touch
		
		// tooltip, disabled on touch devices
		$('[data-toggle="tooltip"]').tooltip({
			// delay for show/hide in miliseconds
			delay: {
				"show": 0,
				"hide": 0
			},
			animation: false,
			trigger: "hover"

		});
		
	};

	// bottom tabs - sattelite/data view
	$(".map__view-toggle").click(function() {

		// add active class to link
		$(this).toggleClass("active")
			// remove active class from other tabs
			.siblings().removeClass("active");

		// define collapse element
		var targetId = $(this).data("target");
		var target = $(targetId);

		// hide all
		target.siblings().removeClass("show");

		// show target
		target.toggleClass("show");

	});

	// ADD class .dashboard-container--left-nav-opened to .dashboard-container when click on side menu link
	$(".js-toggle-class__left-nav-opened").click(function() {
		$(".dashboard-container").addClass("dashboard-container--left-nav-opened");
	});





	// get device width and run functions depending on it
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

	if (width <= 767) {
		// small

	} else {
		// large

		// REMOVE class .dashboard-container--left-nav-opened to .dashboard-container when click on side menu right top arrow
		$(".js-nav-tab-pane-hide").click(function() {
			$(".dashboard-container").removeClass("dashboard-container--left-nav-opened");
		});

	};













});
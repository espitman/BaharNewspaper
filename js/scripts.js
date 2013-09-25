$(document).on('pageinit', function() {
	
	Cufon.replace('.cYekan', {
		onBeforeReplace : Bifon.convert
	});

	/*
	$('.pages').cycle({
		fx : 'carousel',
		sync : true,
		pause : true,
		slideResize : false,
		timeout : 0,
		slides : 'li',
		swipe : true,
		loader : "wait",
		easing : "easeInQuart",
		carouselVisible : 1,
	});
	*/
}); 
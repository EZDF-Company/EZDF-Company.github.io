/* -----------------------------------------------------------------------------

"eris - is a Premium HTML Responsive Templeate by HTMLmate Team. You can use this for anykind of Bussiness issue"

File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         Suelo

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var eris = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.menuBar();
				this.searchBar();
				this.bannerParalax();
				this.typeStyle();
				this.testimonialSlide();
				this.partnerSlide();
				this.scrollTop();
				this.videoPopup();
				this.bannerSlide();
			},
/* Start Of Preloader
================================================*/
preloader: function (){

	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
},
/* Start Of Preloader
================================================*/




/* - Start of menu bar
================================================*/
menuBar: function (){
	var mainHeader = $('.cd-auto-hide-header'),
	secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();

	//set scrolling variables
	var scrolling = false,
	previousTop = 0,
	currentTop = 0,
	scrollDelta = 10,
	scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
			? setTimeout(autoHideHeader, 250)
			: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

			previousTop = currentTop;
			scrolling = false;
		}

		function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
		if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
		
		if (previousTop >= currentTop ) {
	    	//if scrolling up... 
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}
	    	
	    } else {
	    	//if scrolling down...	
	    	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	 	  		mainHeader.addClass('is-hidden');
	 	  		secondaryNavigation.addClass('fixed slide-up');
	 	  		belowNavHeroContent.addClass('secondary-nav-fixed');
	 	  	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}

},
/* - End of menu bar
================================================*/






/* Start Of Search bar
================================================*/
searchBar: function() {
	var $searchBar = $('#search-bar');

	$('[data-toggle="search-bar"]').on('click', function() {
		$('body').toggleClass('search-bar-open');
		return false;
	});
}, 

/* End Of Search bar
================================================*/





/* Start of paralax
================================================*/

bannerParalax: function (){
	$('.jarallax').jarallax({
		speed: 0.5,
		imgWidth: 1366,
		imgHeight: 885
	});
},

/* End of paralax
================================================*/




/* - start of typer
================================================*/
typeStyle: function() {
	var win = $(window),
	foo = $('#typer');
	foo.typer(['Quality Products','Customer Satisfaction']);           
	win.resize(function(){
		var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
		foo.css({
			fontSize: fontSize * 0.12 + 'px'
		});
	}).resize();
},
/* - End of typer
================================================*/




/* - Start of testimonialSlide
================================================*/
testimonialSlide: function (){
	$('.testimonial-slide').owlCarousel({
		margin:80,
		responsiveClass:true,
		pagination: true,
		autoplay: false,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
				pagination: true,
			},
			400:{
				items:1,
				pagination: true,
			},
			600:{
				items:1,
				pagination: true,
			},
			700:{
				items:2,
				pagination: true,
			},
			1000:{
				items:3,
				pagination: true,

			}
		},
	})
},
/* - End of testimonialSlide
================================================*/



/* - Start of partnerSlide
================================================*/
partnerSlide: function (){
	$('.partner-slide').owlCarousel({
		margin:10,
		responsiveClass:true,
		pagination: false,
		autoplay: true,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:1,
			},
			600:{
				items:2,
			},
			700:{
				items:3,
			},
			800:{
				items:4,
			},
			1000:{
				items:5,

			}
		},
	})
},
/* - End of partnerSlide
================================================*/





/* - Start of  scroll to top
================================================*/
scrollTop: function (){
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

},

/* - End of  scroll to top
================================================*/






/* - Start of popup
================================================*/
videoPopup: function (){
	$('.popup').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

},
/* - End of popup
================================================*/



/* - Banner slide
================================================*/
bannerSlide: function (){
	$('.banner-slide').owlCarousel({
		margin: 20,
		loop:true,
		responsiveClass:true,
		pagination: false,
		autoplay: true,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:1,
			},
			600:{
				items:1,
			},
			700:{
				items:1,
			},
			800:{
				items:1,
			},
			1000:{
				items:1,

			}
		},
	})
},

/* - Banner slide
================================================*/



}
}
$(document).ready(function (){
	eris.init();
});

})();
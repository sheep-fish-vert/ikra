function InitSlider(){
	$('.slider-conteiner').slick({
  infinite: true,
  slidesToShow: 3,
  swipeToSlide: true,
  dots: false,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        infinite: true,
	        dots: true
	      }
	    }
	 ]
	});
};

function InitSlider_1(){
 	$('.block-1-slider-wrapper').slick({
	   infinite: true,
	   slidesToShow: 4,
	   swipeToSlide: true,
	   dots: false,
	   arrows: true,
	   prevArrow: '<button type="button" class="slick-prev"></button>',
	   nextArrow: '<button type="button" class="slick-next"></button>',
	    responsive: [
	 	    {
	 	      breakpoint: 1130,
	 	      settings: {
	 	        slidesToShow: 3,
	 	        infinite: true,
	 	        dots: true
	 	      }
	 	    },
	 	    {
	 	      breakpoint: 768,
	 	      settings: {
	 	        slidesToShow: 1,
	 	        infinite: true,
	 	        dots: true
	 	      }
	 	    }
	 	]
  	});
  	$('.block-4-slider-wrapper').slick({
	   infinite: true,
	   slidesToShow: 2,
	   swipeToSlide: true,
	   dots: false,
	   arrows: true,
	   prevArrow: '<button type="button" class="slick-prev"><img src="images/competition4-slider-left-arrow.png"></button>',
	   nextArrow: '<button type="button" class="slick-next"><img src="images/competition4-slider-right-arrow.png"></button>',
	    responsive: [
	 	    {
	 	      breakpoint: 1130,
	 	      settings: {
	 	        slidesToShow: 1,
	 	        infinite: true,
	 	        dots: true
	 	      }
	 	    }
	 	]
  	});
};


$(document).ready(function(){
 	InitSlider();
 	InitSlider_1();
});

$(window).load(function(){

});

$(window).resize(function(){

});
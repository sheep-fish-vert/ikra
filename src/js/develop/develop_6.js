function InitSlider(){
	$('.slider-conteiner').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-arrow-prev.png"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/slider-arrow.png"></button>'
	});
};


$(document).ready(function(){
 	InitSlider()
});

$(window).load(function(){

});

$(window).resize(function(){

});
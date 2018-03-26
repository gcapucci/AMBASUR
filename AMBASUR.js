$('#hover-effect')
.mouseenter(function() {
	$( this ).addClass('animated').addClass('bounce')
})
.mouseleave(function() {
	$( this ).removeClass('animated').removeClass('bounce')
});



$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 2000 );
});

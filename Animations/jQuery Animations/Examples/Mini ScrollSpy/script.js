$(document).ready(function() {
	$('.listAnchor').on('click', function() {
		event.preventDefault();
		var targetElement = $(this).attr('href');
		$(this).parent().siblings().find('.listAnchor').removeClass('active');
		$(this).addClass('active');
		var position = 0;
		if($(window).width() < 767) {
			position = $(targetElement).offset().top - 78;
		} else {
			position = $(targetElement).offset().top;
		}

		$('html, body').animate({
			scrollTop: position
		}, 1000);
	});

	$(window).on('scroll', function() {
		var viewPortHeight = window.innerHeight;
		if ($(window).scrollTop() > viewPortHeight){
			$('.scrollTop').show();
		}	else {
			$('.scrollTop').hide();
		}
	});

	$('.scrollTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
	});

});

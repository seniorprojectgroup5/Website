window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		$('header .top-logo').fadeOut();
		$('header .triangle').slideUp();
		$('header .accent').slideUp();
		$('header .tagline').fadeOut();
		$('header').css('height', '80px');
		$('nav').css({'height': '50px', 'bottom': '15px', 'width': 'calc(100% - 350px)', 'left': '350px'});
		$('nav a').css({'height': '50px', 'line-height': '50px', 'font-size': '20px'});
		$('nav a span img').css({'height': '20px', 'width': '20px', 'margin': '0 5px -3px 0'});
		$('section.first').css('margin-top', '150px');
		$('header .scroll-logo').fadeIn();
	} else {
		$('header .top-logo').fadeIn();
		$('header .triangle').slideDown();
		$('header .accent').slideDown();
		$('header .tagline').fadeIn();
		$('header').css('height', '400px');
		$('nav').css({'height': '60px', 'bottom': '30px', 'width': 'calc(100% - 485px)', 'left': '455px'});
		$('nav a').css({'height': '60px', 'line-height': '60px', 'font-size': '30px'});
		$('nav a span img').css({'height': '30px', 'width': '30px', 'margin': '0 10px -5px 0'});
		$('section.first').css('margin-top', '400px');
		$('header .scroll-logo').fadeOut();
	}
} 
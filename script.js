$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
 
 
 $('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/1+'%)'
	});
 $('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/-1+'%)'
	});
 $('.jumbotron h5').css({
		'transform' : 'translate(0px, '+ wScroll/-1+'%)'
	});

});
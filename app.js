$(document).ready(function(){
	$('#content').load('glowna.html');
	
	$('#onas').click(function(){
		$('#content').load('onas.html');
	});
	$('#galeria').click(function(){
		$('#content').load('galeria.html');
	});
	$('#kontakt').click(function(){
		$('#content').load('kontakt.html');
	});
	$('#glowna').click(function(){
		$('#content').load('index.html');
	});
	
	$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

});

$(document).ready(function(){
	$('ul.nav a').on('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 2000);
		event.preventDefault();
	});});

$(function(){
	$(".hide").hide();

$("#pete").click(function(){
	$("#peted").show();
	$(".hide2").hide();
});

$("#phoeb").click(function(){
	$("#phoebd").show();
	$(".hide1").hide();
});
$("#us").click(function(){
	$("#usd").show();
	$(".hide").hide();

});


});

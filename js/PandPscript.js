	
$(document).ready(function(){
  var $sections = $('.section');
  $(window).scroll(function(){
    var currentScroll = $(this).scrollLeft();
    var $currentSection
    $sections.each(function(){      
      var divPosition = $(this).offset().left;
      if( divPosition - 1 < currentScroll ){
        $currentSection = $(this);
      }
      var id = $currentSection.attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
      
    })

  });
});

$(document).ready(function(){
	$('ul.nav a').on('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 2000);
		event.preventDefault();
	});});

	

		$(function(){
			$(".hide, .hide3").hide();

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

		$("#petec").click(function(){
			$("#petedc").show();
			$(".hide2").hide();
		});

		$("#phoebc").click(function(){
			$("#phoebdc").show();
			$(".hide1").hide();
		});
		$("#usc").click(function(){
			$("#usdc").show();
			$(".hide").hide();

		});

		$("#man").click(function(){
			$(".chinese, #usdc").show();
			$(".english").hide();
		});

		$("#eng").click(function(){
			$(".english, #usd").show();
			$(".chinese").hide();
		});

		});

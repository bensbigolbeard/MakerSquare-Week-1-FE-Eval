jQuery(document).ready(function($){	
	$(window).scroll( function(event){
    var top = $(this).scrollTop();
            
    $("#nav").toggleClass(" show", top > 000);
    $("#nav").toggleClass(" hide", top > 000);
    $("#nav").toggleClass(" hide", top > 800);

    $(".one").toggleClass(" fixed", top > 340);

    $(".two").toggleClass(" hide", top < 1200 || top > 1700);
  });
});

jQuery(document).ready(function($){	
	$(window).scroll(function(event){
	    var top = $(document).scrollTop();
	   
	    $("#nav").toggleClass(" hide", top < 440 || top > 800);

    	$("#body").toggleClass(" hide", top < 200 );

    	$("div.1").toggleClass(" hide", top < 1000 );
    	$("div.2").toggleClass(" hide", top < 1300 );
    	$("div.3").toggleClass(" hide", top < 1600 );
    	$("div.4").toggleClass(" hide", top < 2200 );
    	$("div.5").toggleClass(" hide", top < 2600 );
    	$("div.6").toggleClass(" hide", top < 3000 );

    	$('#backToTop').click(function(){
        	$("html, body").stop().animate({ scrollTop: 0 }, "slow");
        	//$("html, body").scrollTop(0); //For without animation 
        	return false;
    	});
  	});
});

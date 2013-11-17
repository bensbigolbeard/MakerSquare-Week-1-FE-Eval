jQuery(document).ready(function($){	
	$(window).scroll(function(event){
	    var top = $(document).scrollTop();
	   
	    $("#nav").toggleClass(" hide", top < 440);

    	$("#body").toggleClass(" hide", top < 200 );

    // $(".two").toggleClass(" hide", top < 1200 || top > 1700);
  });
});

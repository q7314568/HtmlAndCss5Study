
$(document).ready(function() {
  

/* -----------------------------------------------
                MOBILE NAVIGATION     
-------------------------------------------------- */

  $(".burger-icon").on("click", function() {
	  if($( ".main-nav" ).hasClass( "mobile-hide" )){
		    // $(".main-nav").removeClass("mobile-hide");
			// $(".main-nav").addClass("mobile-show");
			$( ".mobile-hide" ).toggle( "slow", function() {
				// Animation complete.
			  });
	  }else{
		    //   $(".main-nav").addClass("mobile-hide");
			//   $(".main-nav").removeClass("mobile-show");
			  $( ".mobile-hide" ).toggle( "slow", function() {
				// Animation complete.
			  });
	  }
  
  });



  //畫面size改變時供listener觸發的func
  function MobileSizeFunc(x) {
	if (x.matches) { // If media query matches
		$(".mobile-hide").hide();
	} else {
		$(".mobile-hide").show();
	}
  }
  
  var machCheck = window.matchMedia("(max-width:690px)")
  MobileSizeFunc(machCheck) // Call listener function at run time
  machCheck.addListener(MobileSizeFunc) // Attach listener function on state changes

});




$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
    //Team
    $('.owl-carousel-team').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
             items:4,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
    
    //Testmonial
     $('.owl-carousel-testimonial').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
             items:1,
            
        })
    
    
    
     /*Magnific Popup*/
    
    $('#youtube-video').magnificPopup({
        type:'iframe',
        iframe: {

  patterns: {
    youtube: {
      index: 'youtube.com/',
      id: 'v=',
      src: 'http://www.youtube.com/embed/%id%?autoplay=1'
    }

  },

  srcAction: 'iframe_src',
}
    });
    
  $(document).ready(function () {
  $('.skillbar').skillbar();
});
    /*Counter js*/
            $('.counter-number').each(function () {
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
    //Mixitup Active
    var mixer = mixitup('.portfolio-content');
    
    //Portfolio Popup 
    
    $('.image-link').magnificPopup({type:'image'});
    
}(jQuery));
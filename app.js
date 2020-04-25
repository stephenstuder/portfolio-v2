var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    effect: 'cube',
    direction: 'vertical',
    freeMode: true,
    slidesPerView: 'auto',
    autoResize: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    mousewheel: true,
    freeModeSticky: true,
  });

   // Generic Scroller
   $(document).ready(function(){
       $( "a.scrollLink" ).click(function( event ) {
        $(".hamburger").click();
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
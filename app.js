var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    effect: 'cube',
    direction: 'vertical',
    grabCursor: true,
    slideToClickedSlide: true,
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
  })
$('document').ready(function(){
    $('.offers__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.slick__arrow-left',
        nextArrow: '.slick__arrow-right',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
              }
            },]
    });
});
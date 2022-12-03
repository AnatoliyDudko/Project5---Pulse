$(document).ready(function(){
    $('.carousel__slider').slick({
        speed: 1200,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/Arrow_left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/Arrow_right.svg"></img></button>',
        adaptiveHeight: true,
        responsive: [
            {
                centerMode: true,
                breakpoint: 992,
                settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });
  });
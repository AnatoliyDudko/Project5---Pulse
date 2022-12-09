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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('ul.catalog__list').removeClass('catalog__list_active').eq($(this).index()).addClass('catalog__list_active');
    });

    function changeSides(Class) {
      $(Class).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog__front').eq(i).toggleClass('catalog__front_active');
          $('.catalog__back').eq(i).toggleClass('catalog__back_active');
        })
      })
    }

    changeSides('.catalog__link')
    changeSides('.catalog__link-back')
  });
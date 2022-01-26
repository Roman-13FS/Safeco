$(function () {
  $('.product__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.svg"></button>',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.why__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.svg"></button>',
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 666,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.our__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.svg"></button>',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 666,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
        }
        $img.replaceWith($svg);
      },
      'xml'
    );
  });

  $('.menu__button, .menu__list').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__button').toggleClass('menu__button--active');
    $('body').toggleClass('fixed-page');
  });
});

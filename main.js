
let first = ".header-nav__item.header-nav__item-1";
let second = ".header-nav__item.header-nav__item-2";
let four = ".header-nav__item.header-nav__item-4";
$(document).ready();
$(".header-nav__item.header-nav__item-1").click(function () {
  if ($(this).hasClass("active")) {

    $(this).removeClass("active");
    $(".header-nav-sublist-1").slideUp();
  }
  else {
    if ($(four).hasClass("active") || $(second).hasClass("active")) {
      $(four).removeClass("active");
      $(".header-nav-sublist-4").slideUp();
      $(second).removeClass("active");
      $(".header-nav-sublist-2").slideUp();
    }
    $(".header-nav-sublist-1").slideDown();
    $(this).addClass("active");
  }
});



$(".header-nav__item.header-nav__item-2").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".header-nav-sublist-2").slideUp();
  }
  else {
    if ($(four).hasClass("active") || $(first).hasClass("active")) {
      $(first).removeClass("active");
      $(".header-nav-sublist-1").slideUp();
      $(four).removeClass("active");
      $(".header-nav-sublist-4").slideUp();
    }
    $(".header-nav-sublist-2").slideDown();
    $(this).addClass("active");
  }
});


$(".header-nav__item.header-nav__item-4").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".header-nav-sublist-4").slideUp();
  }
  else {
    if ($(first).hasClass("active") || $(second).hasClass("active")) {
      $(first).removeClass("active");
      $(".header-nav-sublist-1").slideUp();
      $(second).removeClass("active");
      $(".header-nav-sublist-2").slideUp();
    }
    $(".header-nav-sublist-4").slideDown();
    $(this).addClass("active");
  }
});
if ($(window).width() < 600) {
  $(".header__logo").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header-nav").slideUp();
      if ($(first).hasClass("active") || $(second).hasClass("active") || $(four).hasClass("active")) {
        $(first).removeClass("active");
        $(".header-nav-sublist-1").slideUp();
        $(second).removeClass("active");
        $(".header-nav-sublist-2").slideUp();
        $(four).removeClass("active");
        $(".header-nav-sublist-2").slideUp();
      }
    }
    else {
      $(".header-nav").slideDown();
      $(this).addClass("active");
    }
  })
}


$(".carousel").slick({
  dots: true,
});


$(".games__slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '50px',
        centerMode: true
      }
    },
    {
      breakpoint: 805,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        centerMode: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '15px',
        centerMode: true
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '15px',
        centerMode: true
      }
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
        centerMode: true
      }
    },
  ]
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
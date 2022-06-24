$(document).ready(function () {
  $('[data-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-content]').hide().eq(index).fadeIn()
    }
    return false
  });

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 15,
    to: 500,
    postfix: ' мес',
  });

  $('.js-range-slider-second').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 100,
    to: 500,
    postfix: '%',
  });

  $('.project__nav-item--filter').click(function () {
    $(this).toggleClass('active')
    $('.filter').slideToggle()
  });

  $('.project__nav-item--like').click(function () {
    $(this).toggleClass('active')
  });

  $('.project__nav-item--search').click(function () {
    $(this).toggleClass('active');
    $(".project__search-input").toggleClass("active");
  });

  $(".verif__block-quest--item, .verif__input-quest--item, .profile__quest-item, .profile__balance-quest--item").hover(function(){
    $(this).next().toggleClass("active");
  });

  $('[data-verification-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-verification-content]').hide().eq(index).fadeIn()
    }
    return false
  });
})

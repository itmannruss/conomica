$(document).ready(function () {
  $('[data-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-content]').hide().eq(index).fadeIn()
    }
    return false
  })

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 15,
    to: 500,
    postfix: ' мес',
  })

  $('.js-range-slider-second').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 100,
    to: 500,
    postfix: '%',
  })

  $('.project__nav-item--filter').click(function () {
    $(this).toggleClass('active')
    $('.filter').slideToggle()
  })

  $('.project__nav-item--like').click(function () {
    $(this).toggleClass('active')
  })

  $('.project__nav-item--search').click(function () {
    $(this).toggleClass('active')
    $('.project__search-input').toggleClass('active')
  })

  $(
    '.verif__block-quest--item, .verif__input-quest--item, .profile__quest-item, .profile__balance-quest--item, .work__project-quest--item, .login__quest-item'
  ).hover(function () {
    $(this).next().toggleClass('active')
  })

  $('[data-verification-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-verification-content]').hide().eq(index).fadeIn()
    }
    return false
  });

  $(".work__end-header").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("active");
    $(this).next().next().toggleClass("active");
    if($(this).hasClass("active")){
      $(this).next().next().children().prev().html("Скрыть");
    } else{
      $(this).next().next().children().prev().html("Подробне");
    }
  });

  $(".work__end-bottom").click(function(){
    $(this).prev().slideToggle();
    $(this).toggleClass("active");
    $(this).prev().prev().toggleClass("active");
    if($(this).hasClass("active")){
      $(this).children().prev().html("Скрыть");
    }  else{
      $(this).children().prev().html("Подробне");
    }
  });

  $('[data-project-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-project-content]').hide().eq(index).fadeIn()
    }
    return false
  });

  $("#switch").click(function(){
    if($(this).is(":checked")){
      $(this).next().html("Включено");
      $(this).next().toggleClass("active");
    } else{
      $(this).next().html("Выключено");
      $(this).next().removeClass("active");
    }
  });

  $(".header__user").click(function(){
    $(this).toggleClass("active");
    $(".header__user-drop").slideToggle('fast');
  });

  $(".login__input-see--first").click(function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("active")){
      $('#login-pass').attr('type', 'text');
    } else {
      $('#login-pass').attr('type', 'password');
    }
  });

  $(".login__input-see--second").click(function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("active")){
      $('#login-pass-2').attr('type', 'text');
    } else {
      $('#login-pass-2').attr('type', 'password');
    }
  });

  $(".checkbox").click(function(){
    if($("#login-acept").is(':checked')){
      $(".login__btn-code").removeAttr("disabled");
    } else{
      $(".login__btn-code").attr("disabled", "");
    }
  })
})

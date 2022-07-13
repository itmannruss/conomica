$(document).ready(function () {
  $('.header__burger').click(function () {
    $(this).children().toggleClass('active')
    $('.header__item').toggleClass('active')
    return false
  })

  $('[data-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-content]').hide().eq(index).fadeIn()
    }
    return false
  })

  $('.project__nav-item--filter').click(function () {
    if ($(window).width() >= 767) {
      $(this).toggleClass('active')
      $('.filter').slideToggle()
    }
  })

  $('.project__nav-item--like').click(function () {
    $(this).toggleClass('active')
  })

  $('.project__nav-item--search').click(function () {
    $(this).toggleClass('active')
    $('.project__search-input').toggleClass('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.project__nav-item--search, .project__search-input').length) {
      $('.project__search-input').removeClass('active')
    }
    e.stopPropagation()
  })

  $(
    '.verif__block-quest--item, .verif__input-quest--item, .profile__quest-item, .profile__balance-quest--item, .work__project-quest--item, .login__quest-item, .add__warn-image'
  ).hover(function () {
    $(this).next().toggleClass('active')
  })

  $('[data-verification-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index2 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-verification-content]').hide().eq(index2).fadeIn()
    }
    return false
  })

  $('.work__end-header').click(function () {
    $(this).next().slideToggle()
    $(this).toggleClass('active')
    $(this).next().next().toggleClass('active')
    if ($(this).hasClass('active')) {
      $(this).next().next().children().prev().html('Скрыть')
    } else {
      $(this).next().next().children().prev().html('Подробне')
    }
  })

  $('.work__end-bottom').click(function () {
    $(this).prev().slideToggle()
    $(this).toggleClass('active')
    $(this).prev().prev().toggleClass('active')
    if ($(this).hasClass('active')) {
      $(this).children().prev().html('Скрыть')
    } else {
      $(this).children().prev().html('Подробне')
    }
  })

  $('[data-project-tabs]').on('click', function () {
    if ($(window).width() > 767) {
      if (!$(this).hasClass('active')) {
        var index3 = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $('[data-project-content]').hide().eq(index3).fadeIn()
      }
      return false
    }
  })

  $('#switch').click(function () {
    if ($(this).is(':checked')) {
      $('.auto-invest__on label').html('Включено')
      $('.auto-invest__on label').toggleClass('active')
    } else {
      $('.auto-invest__on label').html('Выключено')
      $('.auto-invest__on label').removeClass('active')
    }
  })

  $('.header__user').click(function () {
    $(this).toggleClass('active')
    $('.header__user-drop').slideToggle('fast')
  })

  $('.login__input-see--first').click(function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
      $('#login-pass').attr('type', 'text')
    } else {
      $('#login-pass').attr('type', 'password')
    }
  })

  $('.login__input-see--second').click(function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
      $('#login-pass-2').attr('type', 'text')
    } else {
      $('#login-pass-2').attr('type', 'password')
    }
  })

  $('.checkbox').click(function () {
    if ($('#login-acept').is(':checked')) {
      $('.login__btn-code').removeAttr('disabled')
    } else {
      $('.login__btn-code').attr('disabled', '')
    }
  })

  $('.settings__right-header').click(function () {
    $(this).next().slideToggle(300)
  })

  $('.invest__right-radio').click(function () {
    $('.invest__right-radio').removeClass('active')
    if ($('.invest__right-radio input').is(':checked')) {
      $(this).addClass('active')
    }
  })

  $('.t-dropdown-select').on('click', function () {
    $(this).toggleClass('active')
    $(this).next().slideToggle('fast')
    $(this).children().toggleClass('active')
  })

  $('.t-dropdown-input').width($('.t-dropdown-select').width() - $('.t-select-btn').width() - 13)

  $('.t-dropdown-list').width($('.t-dropdown-select').width())

  $('.t-dropdown-input').val('')

  $('li.t-dropdown-item').on('click', function () {
    var text = $(this).html()
    $(this).parent().parent().prev().find('.t-dropdown-input').val(text)
    $('.t-dropdown-list').slideUp('fast')
  })

  $(document).on('click', function (event) {
    if ($(event.target).closest('.t-dropdown-select, .t-select-btn, label').length) return
    $('.t-dropdown-list').slideUp('fast')
    $('.t-dropdown-select').removeClass('active')
    event.stopPropagation()
  })

  $('.t-dropdown-item').click(function () {
    $(this).parent().parent().prev().removeClass('active')
  })

  $('[data-profile-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index4 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-profile-content]').hide().eq(index4).fadeIn()
    }
    return false
  })

  $('.change__profile-input label').click(function () {
    $(this).prev().toggleClass('active')
  })

  $('.modal__radio-input').click(function () {
    $('.modal-avatar__item').removeClass('active')
    if ($(this).is(':checked')) {
      $(this).parent().addClass('active')
    }
  })

  $('.project__tab').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 20,
      },
      500
    )

    return false
  })

  $('.project-tab').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index5 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('.project__table').hide().eq(index5).fadeIn()
    }
    return false
  })

  $('.referal-tab').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index6 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('.referal__intro').hide().eq(index6).fadeIn()
    }
    return false
  })

  $('.referal-tab').on('click', function () {
    if ($(window).width() <= 767) {
      if ($('#referal-tab-first').is(":hidden")) {
        $('.referal__mobile-tabs .t-dropdown-block').addClass('long')
      } else {
        $('.referal__mobile-tabs .t-dropdown-block').removeClass('long')
      }
    }
  })

  $('.history__projects-header').click(function () {
    $(this).next().slideToggle('fast')
    $(this).toggleClass('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.history__projects-header, .history__projects-drop').length) {
      $('.history__projects-header').removeClass('active')
      $('.history__projects-drop').slideUp('fast')
    }
    e.stopPropagation()
  })

  $('.history__start-head').hover(function () {
    $('.history__start-drop').addClass('active')
  })

  $(document).on('mousemove', function (e) {
    if (!$(e.target).closest('.history__start-head, .history__start-drop').length) {
      $('.history__start-drop').removeClass('active')
    }
    e.stopPropagation()
  })

  $('.history__table-table tr').click(function () {
    if ($(window).width() <= 991) {
      $(this).addClass('active')
    }
  })

  $('.history__mobile-arrow').click(function () {
    if ($(window).width() <= 991) {
      setTimeout(() => {
        $(this).parent().removeClass('active')
      }, 10)
    }
  })

  $('.project__nav-item--calendar').click(function () {
    $(this).addClass('active')
    $(this).children().addClass('active')
    $('.calendar').addClass('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.project__nav-item--calendar, .calendar, .table-condensed').length) {
      $('.project__nav-item--calendar').removeClass('active')
      $('.calendar__icon').removeClass('active')
      $('.calendar').removeClass('active')
    }
    e.stopPropagation()
  })

  if ($(window).width() <= 767) {
    $('#work__tab-first').attr('href', '#work-first')
    $('#work__tab-second').attr('href', '#work-second')
    $('#work__tab-third').attr('href', '#work-third')
    $('#work__tab-foure').attr('href', '#work-foure')
    $('#work__tab-five').attr('href', '#work-five')
  }

  $('.work__tab').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top,
      },
      500
    )

    return false
  })

  $(window).resize(function () {
    if ($(window).width() <= 767) {
      $('#work__tab-first').attr('href', '#work-first')
      $('#work__tab-second').attr('href', '#work-second')
      $('#work__tab-third').attr('href', '#work-third')
      $('#work__tab-foure').attr('href', '#work-foure')
      $('#work__tab-five').attr('href', '#work-five')
    } else {
      $('#work__tab-first').removeAttr('href', '#work-first')
      $('#work__tab-second').removeAttr('href', '#work-second')
      $('#work__tab-third').removeAttr('href', '#work-third')
      $('#work__tab-foure').removeAttr('href', '#work-foure')
      $('#work__tab-five').removeAttr('href', '#work-five')
    }
  })

  $('.work-mobile').click(function () {
    $(this).next().slideToggle(400)
    $(this).toggleClass('active')
  })

  $('.profile__balance-header').click(function () {
    if ($(window).width() <= 991) {
      $(this).next().slideToggle(400)
      $(this).toggleClass('active')
      if ($(this).hasClass('active')) {
        $(this).next().next().children().prev().html('Скрыть')
        $(this).next().next().toggleClass('active')
      } else {
        $(this).next().next().children().prev().html('Подробнеe')
        $(this).next().next().toggleClass('active')
      }
    }
  })

  function InitIonRangeSlider(object, type, min, max, to, postfix, postfix_max) {
    object = $(object)
    let eventCalc = function (data) {
      let ionRangeSlider = object.data('ionRangeSlider')
      if (ionRangeSlider) {
        let setObject = ionRangeSlider.$cache.to
        if (ionRangeSlider.result.from_percent >= 100) {
          setObject = ionRangeSlider.$cache.from
        }
        if (ionRangeSlider.result.to_percent >= 100) {
          ionRangeSlider.labels.offsetMy = 15
        } else if (ionRangeSlider.result.to_percent < 100) {
          ionRangeSlider.labels.offsetMy = 0
        }

        ionRangeSlider.labels.p_to_left =
          ionRangeSlider.coords.p_to_fake + ionRangeSlider.coords.p_handle / 2 - ionRangeSlider.labels.p_to_fake / 2
        ionRangeSlider.labels.p_to_left = ionRangeSlider.toFixed(ionRangeSlider.labels.p_to_left)
        ionRangeSlider.labels.p_to_left = ionRangeSlider.checkEdges(
          ionRangeSlider.labels.p_to_left,
          ionRangeSlider.labels.p_to_fake
        )

        ionRangeSlider.labels.p_to_left -= ionRangeSlider.labels.offsetMy

        setObject[0].style.left = ionRangeSlider.labels.p_to_left + '%'
      }
    }

    let BuildPostfix = function (num) {
      let ionRangeSlider = object.data('ionRangeSlider')

      if (ionRangeSlider) {
        //console.log(ionRangeSlider.result);
        if (num <= max - 1) {
          return num + ' ' + postfix
        }
        if (ionRangeSlider.result.to_percent >= 100) {
          ionRangeSlider.labels.offsetMy = 15
          return postfix_max
        }
      }
      return num
    }

    object.ionRangeSlider({
      type: type,
      min: min,
      max: max,
      to: to,
      prettify_enabled: true,
      prettify: BuildPostfix,
      onStart: eventCalc,
      onChange: eventCalc,
      onFinish: eventCalc,
      onUpdate: eventCalc,
    })

    let tx = object.data('ionRangeSlider')

    tx.moveByKey(false)
    tx.moveByKey(false)
    tx.moveByKey(false)
    tx.moveByKey(false)
    tx.moveByKey(false)
  }

  InitIonRangeSlider('.js-range-slider', 'double', 0, 15, 500, ' мес', 'Без ограничений')
  InitIonRangeSlider('.js-range-slider-second', 'double', 0, 100, 500, '%', 'Без ограничений')
})

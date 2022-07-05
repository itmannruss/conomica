
function BuildArgs(min, max, postfix, postfix_max) {
	let args = {
    type: 'double',
    min: min,
    max: max,
    to: 500,
    postfix: '',
    values: []
  };
  for(let i = min; i <= max; ++i)
	  args.values.push(i + ' ' + postfix);
  if(postfix_max) {
	 ++args.max;
	 args.values.push(postfix_max);
  }
  return args;
}

var js_range_slider = BuildArgs(0, 15, 'мес', 'Без ограничений');
var js_range_slider_second = BuildArgs(0, 100, '%', 'Без ограничений');


$(document).ready(function () {
  $('[data-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-content]').hide().eq(index).fadeIn()
    }
    return false
  })

  $('.js-range-slider').ionRangeSlider(js_range_slider)

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
    '.verif__block-quest--item, .verif__input-quest--item, .profile__quest-item, .profile__balance-quest--item, .work__project-quest--item, .login__quest-item, .add__warn-image'
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
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-project-content]').hide().eq(index).fadeIn()
    }
    return false
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

  $('.t-dropdown-input').on('click', function () {
    $(this).parent().toggleClass('active')
    $(this).parent().next().slideToggle('fast')
    $(this).toggleClass('active')
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
    if ($(event.target).closest('.t-dropdown-input, .t-select-btn, label').length) return
    $('.t-dropdown-list').slideUp('fast')
    $('.t-dropdown-select').removeClass('active')
    event.stopPropagation()
  })


 $('[data-profile-tabs]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-profile-content]').hide().eq(index).fadeIn()
    }
    return false
  });

  $(".change__profile-input label").click(function(){
    $(this).prev().toggleClass("active");
  });

  $(".modal__radio-input").click(function(){
    $(".modal-avatar__item").removeClass("active");
    if ($(this).is(':checked')){
      $(this).parent().addClass("active");
    } 
  })

  $('.js-range-slider-second').ionRangeSlider(js_range_slider_second);

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

  const self = $('#datepicker')

  self.daterangepicker({
    applyButtonClasses: 'd-none',
    showDropdowns: false,
    opens: 'center',
    drops: 'down',
    autoApply: false,
    startDate: self.data('start'),
    endDate: self.data('end'),
    minDate: self.data('start'),
    locale: {
      format: 'DD-MMM',
      separator: ' - ',
      applyLabel: 'Готово',
      cancelLabel: 'Отменить',
      fromLabel: 'De',
      toLabel: 'Até',
      customRangeLabel: 'Custom',
      weekLabel: 'S',
      monthNames: [
        '<span>Январь</span>',
        '<span>Февраль</span>',
        '<span>Март</span>',
        '<span>Апрель</span>',
        '<span>Май</span>',
        '<span>Июнь</span>',
        '<span>Июль</span>',
        '<span>Август</span>',
        '<span>Сентябрь</span>',
        '<span>Октябрь</span>',
        '<span>Ноябрь</span>',
        '<span>Декабрь</span>',
      ],
      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
      dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
      firstDay: 1,
    },
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
})

$(function () {
  'use strict'

  //type js
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });

  //my portfolio
  var containerEl = document.querySelector('.port_content');

  var mixer = mixitup(containerEl);

  //my portfolio venobox
  $('.venobox').venobox({
    spinner: 'cube-grid',
    spinColor: '#e23e38'
  });

  // Counter Start
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  //manu fixed
  var map = $('.main_menu').offset().top;


  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > map) {
      $('.main_menu').addClass('menu_fix');
    } else {
      $('.main_menu').removeClass('menu_fix');
    }

  });

  //scroll button
  $('.scroll_button').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 2000);
  });

  $(window).scroll(function () {
    var buttonscroll = $(this).scrollTop();

    if (buttonscroll > 550) {
      $('.scroll_button').fadeIn();
    } else {
      $('.scroll_button').fadeOut();
    }
  });

});
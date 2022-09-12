"use strict";

$(function () {
  $('body').on('click', function () {
    $('.c-ufo').animate({
      'top': '-20%',
      'left': '100%'
    }, 2000, function () {
      $('.c-ufo').css({
        'top': '100%',
        'left': '-100%'
      });
    });
  });
});
$(function(){

  $(".home-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".home-page").offset().top
    }, 200);
    $('.sb').css('background-color', 'rgb(25,25,25)');
    $(".home-button").css('background-color', '#412F57');
  });

  $(".about-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".about-page").offset().top
    }, 200);
    $('.sb').css('background-color', 'rgb(25,25,25)');
    $(".about-button").css('background-color', '#412F57');
  });

  $(".portfolio-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".portfolio-page").offset().top
    }, 200);
    $('.sb').css('background-color', 'rgb(25,25,25)');
    $(".portfolio-button").css('background-color', '#412F57');
  });

  $(".contact-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".contact-page").offset().top
    }, 200);
    $('.sb').css('background-color', 'rgb(25,25,25)');
    $(".contact-button").css('background-color', '#412F57');
  });


});

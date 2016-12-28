$(function(){

  $(".home-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".home-page").offset().top
    }, 200);
    $('.active').removeClass('active');
    $(".home-button").addClass('active');
  });

  $(".about-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".about-page").offset().top
    }, 200);
    $('.active').removeClass('active');
    $(".about-button").addClass('active');
  });

  $(".portfolio-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".portfolio-page").offset().top
    }, 200);
    $('.active').removeClass('active');
    $(".portfolio-button").addClass('active');
  });

  $(".contact-button").on("click", function() {
    $('html, body').animate({
        scrollTop: $(".contact-page").offset().top
    }, 200);
    $('.active').removeClass('active');
    $(".contact-button").addClass('active');
  });

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
        pageOnePosition = $(".home-page").offset().top;
        pageTwoPosition = $(".about-page").offset().top;
        pageThreePosition = $(".portfolio-page").offset().top;
        pageFourPosition = $(".contact-page").offset().top;

      if (scrollDistance > 0 && scrollDistance > pageOnePosition) {
        $('.active').removeClass('active');
        $(".home-button").addClass('active');
      }

      if (scrollDistance >= pageOnePosition && scrollDistance > pageTwoPosition/1.5) {
        $('.active').removeClass('active');
        $(".about-button").addClass('active');
      }
      if (scrollDistance >= pageTwoPosition && scrollDistance > pageThreePosition/1.3) {
        $('.active').removeClass('active');
        $(".portfolio-button").addClass('active');
      }
      if (scrollDistance >= pageThreePosition && scrollDistance > pageFourPosition/1.3) {
        $('.active').removeClass('active');
        $(".contact-button").addClass('active');
      }
  });
});

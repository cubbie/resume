$(function() {

  $(".project").hover(function(){
      $(this).children('.project-picture').css("display", "none");
      $(this).children('.project-description').css("display", "flex");
    }, function(){
      $(this).children('.project-picture').css("display", "block");
      $(this).children('.project-description').css("display", "none");
  });


});

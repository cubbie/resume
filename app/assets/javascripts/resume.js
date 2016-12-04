$(function(){

  $('header').animate({ opacity: 1 }, 2500);


  $('.info-window').animate({ opacity: 1 }, 2500);


  $('.about').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/about',
      method: "GET",
      dataType: 'HTML',
    }).done(function(responseData) {
      console.log(responseData);
    });
  });


  $('.contact').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/contact',
      method: "GET",
      dataType: 'HTML',
    }).done(function(responseData) {
      console.log(responseData);
    });
  });

  $('.experience').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/experience',
      method: "GET",
      dataType: 'HTML',
    }).done(function(responseData) {
      console.log(responseData);
    });
  });

  $('.portfolio').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/portfolio',
      method: "GET",
      dataType: 'HTML',
    }).done(function(responseData) {
      console.log(responseData);
    });
  });
});

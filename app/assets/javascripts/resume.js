$(function(){

  $('header').animate({ opacity: 1 }, 2500);


  $('.modal-bodies').animate({ opacity: 1 }, 2500);

  $('.about').click(function(e) {
    e.preventDefault();
    var page = $('.modal-bodies .about');
    changepage(page);
  });

  $('.portfolio').click(function(e) {
    e.preventDefault();
    var page = $('.modal-bodies .portfolio');
    changepage(page);
  });

  $('.experience').click(function(e) {
    e.preventDefault();
    var page = $('.modal-bodies .experience');
    changepage(page);
  });

  $('.contact').click(function(e) {
    e.preventDefault();
    var page = $('.modal-bodies .contact');
    changepage(page);
  });

  function changepage(page) {
    var newpage = page
    currentpage = $('.is-showing')

    currentpage.addClass('animate-out');
    // animate the page in
    setTimeout(function(){
      currentpage.removeClass('animate-out is-showing').next();
      newpage.addClass('animate-in');
    }, 600);

    setTimeout(function(){
      newpage.removeClass('animate-in').addClass('is-showing')
    }, 1200)
  }
  //
  // function changepage(newpage, currentpage) {
  //   console.log('new page');
  //   // animate the page out
  //               .
  //
  // }

  // $('.about').on('click', function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     url: 'http://localhost:3000/about',
  //     method: "GET",
  //     dataType: 'HTML',
  //   }).done(function(responseData) {
  //     $('.info-window').html(responseData);
  //   });
  // });
  //
  // $('.contact').on('click', function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     url: 'http://localhost:3000/contact',
  //     method: "GET",
  //     dataType: 'HTML',
  //   }).done(function(responseData) {
  //     $('.info-window').html(responseData);
  //   });
  // });
  //
  // $('.experience').on('click', function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     url: 'http://localhost:3000/experience',
  //     method: "GET",
  //     dataType: 'HTML',
  //   }).done(function(responseData) {
  //     $('.info-window').html(responseData);
  //   });
  // });
  //
  // $('.portfolio').on('click', function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     url: 'http://localhost:3000/portfolio',
  //     method: "GET",
  //     dataType: 'HTML',
  //   }).done(function(responseData) {
  //     $('.info-window').html(responseData);
  //   });
  // });
});

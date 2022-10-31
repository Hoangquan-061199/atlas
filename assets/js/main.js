$(() => {
  $('.touch-menu').click(() => {
    $('header .menu').toggleClass('active');
    $('.touch-menu').toggleClass('active');
    $('.over').toggleClass('show');
  });

  $('.over').click(() => {
    $('header .menu').removeClass('active');
    $('.touch-menu').removeClass('active');
    $('.over').removeClass('show');
  });
});

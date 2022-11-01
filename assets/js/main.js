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

  $('.update-animals .slide-ani').owlCarousel({
    loop: !1,
    margin: 0,
    nav: !1,
    items: 1,
    dots: 1,
  });

  const resizeImage = (e, s) => {
    s = parseInt($(e).width()) * s;
    $(e).css({ height: s + 'px' });
  };

  resizeImage('.animals .body .ani-item .img', 226 / 420);
  resizeImage('.news .body .news-item .img', 160 / 307);
  resizeImage('.search .banner', 685 / 1366);
  resizeImage(
    '.content-about .search .banner, .content-contact .search .banner',
    436 / 1366
  );

  if ($(window).width() >= 768) {
    resizeImage('.slide-ani.owl-carousel .owl-item .img', 340 / 650);
  }

  if ($(window).width() < 768) {
    // resizeImage('section.map', 385 / 1366);
  }
});

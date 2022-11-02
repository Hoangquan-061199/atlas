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
    loop: 1,
    margin: 0,
    nav: !1,
    items: 1,
    dots: 1,
    autoplay: 1,
  });

  const resizeImage = (e, s) => {
    s = parseInt($(e).width()) * s;
    $(e).css({ height: s + 'px' });
  };

  resizeImage('.animals .body .ani-item .img', 226 / 420);
  resizeImage('.body .news-item .img', 160 / 307);
  resizeImage('.search .banner', 436 / 1366);
  resizeImage('.search.index .banner', 685 / 1366);
  resizeImage('.species-item .img', 237 / 418);
  resizeImage(
    '.content-news-details .container .right .lists-item .item .img',
    54 / 104
  );

  resizeImage(
    '.content-news-details .container .left .block .desc .img',
    534 / 929
  );

  // resizeImage('.content-search-details .animals-details .left .item', 84 / 120);
  if ($(window).width() >= 1200) {
    resizeImage(
      '.content-search-details .animals-details .right .img',
      329 / 575
    );
    // resizeImage(
    //   '.content-search-details .animals-details .left .item',
    //   98 / 173
    // );
  }
  if ($(window).width() >= 992 && $(window).width() < 1200) {
    resizeImage(
      '.content-search-details .animals-details .right .img',
      292 / 575
    );
  }

  if ($(window).width() >= 768 && $(window).width() < 992) {
    resizeImage(
      '.content-search-details .animals-details .right .img',
      332 / 575
    );
  }

  if ($(window).width() >= 768) {
    resizeImage('.slide-ani.owl-carousel .owl-item .img', 340 / 650);
  }

  if ($(window).width() < 768) {
    resizeImage(
      '.content-search-details .animals-details .right .img',
      332 / 575
    );

    let heightAniDetails = $(
      '.content-search-details .animals-details .right .item'
    ).height();

    $('.content-search-details .animals-details .left').css(
      'padding-top',
      heightAniDetails
    );
  }

  $('.animals-details .container .left .img').click(function () {
    let index = $(this).data('index');
    let item = $('.animals-details .container .right .item');
    item.each(function () {
      if (index === $(this).data('index')) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
});

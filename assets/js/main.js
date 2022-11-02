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
    '.content-search-details .animals-details .slide-ani ul li .block .img',
    324 / 575
  );

  resizeImage(
    '.content-news-details .container .left .block .desc .img',
    533 / 929
  );
  resizeImage('.lslide.active', 510 / 768);

  if ($(window).width() >= 768) {
    resizeImage('.slide-ani.owl-carousel .owl-item .img', 340 / 650);
  }

  if ($(window).width() < 768) {
    // resizeImage('section.map', 385 / 1366);
  }
});

if ($('.animals-details .slide-ani').length > 0) {
  $(document).ready(function () {
    if ($(window).width() >= 1200) {
      $('#lightSliderVertical').lightSlider({
        gallery: true,
        item: 1,
        verticalHeight: 326,
        vThumbWidth: 173,
        thumbItem: 3,
        thumbMargin: 18,
        enableDrag: false,
        slideMargin: 0,
        vertical: true,
      });
    }
    if ($(window).width() >= 992 && $(window).width() < 1200) {
      $('#lightSliderVertical').lightSlider({
        gallery: true,
        item: 1,
        verticalHeight: 314,
        vThumbWidth: 173,
        thumbItem: 3,
        thumbMargin: 15,
        enableDrag: false,
        slideMargin: 0,
        vertical: true,
      });
    }
    if ($(window).width() < 992) {
      $('#lightSliderVertical').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 3,
        slideMargin: 0,
        thumbMargin: 15,
        galleryMargin: 15,
        enableDrag: false,
        vertical: false,
      });
    }
  });
}

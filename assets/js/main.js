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
  resizeImage('.news .body .news-item .img', 160 / 307);
  resizeImage('.search .banner', 685 / 1366);
  resizeImage(
    '.content-rare-species .lists-species .species-item .img',
    237 / 418
  );
  resizeImage(
    '.content-about .search .banner, .content-contact .search .banner, .content-rare-species .search .banner, .content-search .search .banner, .content-search-details .search .banner',
    436 / 1366
  );

  if ($(window).width() >= 768) {
    resizeImage('.slide-ani.owl-carousel .owl-item .img', 340 / 650);
  }

  if ($(window).width() < 768) {
    // resizeImage('section.map', 385 / 1366);
  }
});
$ = jQuery;
$(document).ready(function () {
  $v_slider_options = {
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 3,
    galleryMargin: 18,
    thumbMargin: 18,
    vertical: true,
    verticalHeight: 326,
    vThumbWidth: 173,
    controls: false,
  };

  v_slider = $('#lightSliderVertical').lightSlider($v_slider_options);

  /* Fancybox & lightSlider Sync - Bug Fix */
  $selector = '#lightSliderVertical li:not(".clone") a';
  $().fancybox({
    selector: $selector,
    backFocus: false, //The most important options for sync bug fix
    buttons: [
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'thumbs',
      'download',
      'close',
    ],
  });

  $('.img-orther').fancybox({});
});

// #RESIZE BUG FIXING
// # if slider have height in % or vh,
// # on resize rebuild
$(window).resize(function () {
  slider.destroy();
  h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
});

$(function () {
  // カルーセル
  $(".carousel_items").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // フェードイン
  $(window).on("scroll", function () {
    $(".content").each(function () {
      let contentPos = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).height();
      if (contentPos < windowBottom - 100) {
        $(this).fadeTo(1000, 1);
      }
    });
  });

  // AOSの設定
  AOS.init({
    duration: 1000,
    offset: 100,
    once: true,
  });
});

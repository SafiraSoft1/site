let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      90: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 4,
      },
      1380: {
        slidesPerView: 5,
      },
    }
  });
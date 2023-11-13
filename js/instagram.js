window.addEventListener("load", function () {
  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    speed: 10000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    }, slidesPerView: 2.5,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1440: {
        slidesPerView: 2.5,
        spaceBetween: 10
      }
    }
  })
})
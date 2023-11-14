$(document).ready(function () {
    var swiper = new Swiper('#harim.swiper', {
        autoplay: true,
        loop: true,
        speed: 1000,

        pagination: {
            el: '#harim .swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#harim .swiper-button-next',
            prevEl: '#harim .swiper-button-prev',
        },

    });

    var toggle = true;

    $(".toggle").click(function () {
        $(this).toggleClass("on");
        if (toggle) {
            swiper.autoplay.stop();
            toggle = false;
        } else {

            swiper.autoplay.start();
            toggle = true;
        }
    })
})
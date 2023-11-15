$(document).ready(function () {
    var mainswiper = new Swiper('#slide-banner .swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 4000
        },

        pagination: {
            el: '#slide-banner .swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#slide-banner .swiper-button-next',
            prevEl: '#slide-banner .swiper-button-prev',
        },
        on: {
            init: function () {
                document.body.classList = "active0"
            },
            realIndexChange: function () {
                document.body.classList = "active" + this.realIndex;
                console.log(this)
            }
        }

    });

    var mainToggle = true;

    $(".toggle").click(function () {
        $(this).toggleClass("on");
        if (mainToggle) {
            swiper.autoplay.stop();
            toggle = false;
        } else {

            swiper.autoplay.start();
            mainToggle = true;
        }
    })
})
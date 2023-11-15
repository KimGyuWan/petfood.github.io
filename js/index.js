$(document).ready(function () {
    var mainswiper = new Swiper('#harim.swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 4000
        },

        pagination: {
            el: '#harim .swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#harim .swiper-button-next',
            prevEl: '#harim .swiper-button-prev',
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
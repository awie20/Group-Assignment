(function ($) {
    "use strict";

    
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    
    new WOW().init();


$('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });

    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    }).on('translated.owl.carousel', function (event) {
        $("video").each(function () {
            this.pause();
        });

        const currentItem = $(".owl-item.active").find("video")[0];
        if (currentItem) {
            console.log("Playing video on active slide.");
            currentItem.currentTime = 0;
            currentItem.play();
        } else {
            console.log("No video in active slide.");
        }
    });

    
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
	
	
	
	})(jQuery);

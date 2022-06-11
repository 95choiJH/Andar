$(function(){
    setInterval(function() {
        if ($('.ad-event .hide').hasClass('ad-title2')) {
            $('.ad-event a').removeClass('hide');
            $('.ad-title1').addClass('hide');
        } else {
            $('.ad-event a').removeClass('hide');
            $('.ad-title2').addClass('hide');
        }    
     }, 5000);
     $('.ic-menu').click(function(){
        $('body a').addClass('disable');
        $('.swiper-fade .swiper-slide-active').css('pointer-events', 'none');
        $(this).siblings('.menu-wrap2').find('a').removeClass('disable');
        if($(window).scrollTop() == 0) {
            $(this).siblings('.menu-wrap2').css('top', '-40px');
        } else {
            $(this).siblings('.menu-wrap2').css('top', '0');
        }
        $(this).siblings('.menu-wrap2').removeClass('dp-no')
        $('.shadow').removeClass('dp-no')
        $('body').addClass('not-scroll')
        setTimeout(function(){
            $('.menu-wrap2').addClass('active');
            $('.shadow').addClass('active');
        })
     })
     $('.sub-down').click(function(){
         $(this).toggleClass('sub-active');
         if ($(this).children('ul').css('display') == 'none') {
            $(this).children('ul').stop().slideDown();
         } else {
            $(this).children('ul').stop().slideUp();
         }
     });
     function menuClose() {
        $('.menu-wrap2').removeClass('active')
        $('.shadow').removeClass('active')
        $('body').removeClass('not-scroll')
        setTimeout(function(){
            $('.menu-wrap2').addClass('dp-no');
            $('.shadow').addClass('dp-no');
        },300)
        $('body a').removeClass('disable');
        $('.swiper-fade .swiper-slide-active').css('pointer-events', 'auto');
     }
     $('.menu-wrap2 .btn-close').click(function(){
        menuClose();
     })
     $('body').click(function(e){
         if (!$(e.target).hasClass('ic-menu')) {
            if (!$(e.target).parents().hasClass('menu-wrap2')) {
                menuClose();
            }
         }
         if($(e.target).parent().hasClass('search-form')) {
             $('label').addClass('dp-no');
         } else {
            $('label').removeClass('dp-no');
         }
    })
     $('.btn-total').click(function(){
         if ($(this).siblings('.totalmenu-list').hasClass('active')) {
            $(this).siblings('.totalmenu-list').removeClass('active').stop().slideUp();
            $(this).siblings('.top-menu').find('.menu-list').removeClass('dp-no')
            $(this).siblings('.top-menu').find('p').addClass('dp-no')
            $(this).css('transform', 'rotate(0)');
         } else {
            $(this).siblings('.totalmenu-list').addClass('active').stop().slideDown();
            $(this).siblings('.top-menu').find('.menu-list').addClass('dp-no')
            $(this).siblings('.top-menu').find('p').removeClass('dp-no');
            $(this).css('transform', 'rotate(180deg)');
         }
     })
     
     $('.ic-search').click(function(){
        $(this).siblings('.active-search').removeClass('dp-no');
    })
    $('.active-search .btn-close').click(function(){
        $(this).parent('.active-search').addClass('dp-no');
    })

    var mainSlide = new Swiper(".mainSlide", {
        effect: "fade",
        loop: "true",
        autoplay: {
            delay: 6000,
            speed: 500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
          },
    });
    var leggingsSlide = new Swiper(".itemSlide", {
        slidesPerView: 2.2,
        spaceBetween: 10,
    });

    var last_scroll = 0;
    $(window).scroll(function () {
        var curr_scroll = $(window).scrollTop();
        if (curr_scroll > last_scroll || $(window).scrollTop() == 0) {
            $('.quick').fadeOut(500);
        } else {
            $('.quick').fadeIn(500);
        }
        last_scroll = curr_scroll;
    })
    $(window).scroll(function () { 
        if ($(window).scrollTop() > 0) {
            $('.gnb-area').addClass('fixed');
            $('.menu-wrap').fadeIn(0);
        } else {
            $('.gnb-area').removeClass('fixed');
            $('.menu-wrap').fadeOut(200);
        }
    })
    $(window).trigger('scroll');
    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
})
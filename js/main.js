new Swiper('.promo__slider', {
    loop: true,
    speed: 700,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

new Swiper('.exclusive-slider', {
    slidesPerView: 3.7,
    slideToClickedSlide: true,
    autoHeight: true,
    speed: 800,
    navigation: {
        nextEl: '.exclusive-swiper-button-next',
        prevEl: '.exclusive-swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        481: {
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2.5
        },
        1100: {
            slidesPerView: 3.7
        }
    }
});

const burger = document.querySelector('.burger');
if (burger) {
    const menuBurger = document.querySelector('.burger-menu');
    burger.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBurger.classList.toggle('_active');
    });
}
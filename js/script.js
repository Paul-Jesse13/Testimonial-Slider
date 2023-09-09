var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide: "true",
    grabSlide: "true",
    fade: "true",
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
        0: {
            slidesPerView: 1,
        },
        659: {
            slidesPerView: 2,
        },
        980: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    }
});
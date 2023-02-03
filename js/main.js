
//var swiper = new Swiper(".bg-slider", {
    //loop: true,
    //autoplay: true,
    //autoplayTimeout: 3500,
    //autoplayHoverPause: true,
    //spaceBetween: 10,
    //slidesPerView: 4,
    //freeMode: true,
    //watchSlidesProgress: true,
//});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    //thumbs: {
        //swiper: swiper,
    //},
});


//nav bar effcet on scroll//
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// menu//
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const swiperCategories = new Swiper(".slider-wrapper-categories", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 3,
    },
  },
});

export const swiperExercises = new Swiper(".slider-wrapper-exercises", {
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    550: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    820: {
      slidesPerView: 3,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
  },
});

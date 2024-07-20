import { swiperCategories, swiperExercises } from "./swiperSlides.js";
import { showSearchedExercises } from "./operations.js";

const searchBtn = document.querySelector('#search')
const exploreBtn = document.querySelector('#explore-btn')

const exerciseCategory = document.querySelector('.exercise-category')

exploreBtn.addEventListener('click', () => {
  exerciseCategory.scrollIntoView({ behavior: 'smooth' })
})

searchBtn.addEventListener('click', async () => await showSearchedExercises())
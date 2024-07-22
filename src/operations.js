import {
  createExerciseCard,
  createViewExerciseCard,
} from "./exerciseCardComponent.js";
import { fetchData } from "./fetchData.js";
import { sanitize } from "./sanitize.js";
import { exercisesDb, translateInput } from "./inputsDb.js";
import { showErrorMessage } from "./alert.js";

const searchInput = document.querySelector("#search-exercise");

const searchResult = document.querySelector("#search-result");

const exerciseSection = document.querySelector(".exercises.swiper");
const exercisesCards = document.querySelector(".exercise-cards.swiper-wrapper");

const notFoundExerciseMessage = "Exercício não encontrado. Tente novamente!";
const emptyInputMessage = "Digite por algum exercício.";

const checkNonSearchedExerciseText = () => {
  if (exercisesCards.children.length === 0) {
    searchResult.style.display = "block";
  } else {
    searchResult.style.display = "none";
  }
};

const viewExerciseCard = (exercises) => {
  const currentExercisesCards = document.querySelectorAll(".exercise-card");
  currentExercisesCards.forEach((card, id) => {
    card.addEventListener("click", () => {
      createViewExerciseCard(exercises[id]);
    });
  });
};

export const showSearchedExercises = async () => {
  const exerciseLimit = process.env.EXERCISE_LIMIT;

  if (searchInput.value.length > 0) {
    console.log(searchInput.value)
    const lowerInput = sanitize(searchInput.value.toLowerCase());
    console.log(lowerInput)
    const checkInput = exercisesDb.includes(lowerInput);
    console.log(checkInput)

    if (checkInput) {
      const translatedInput = translateInput(lowerInput);
      console.log(translatedInput)
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises?limit=${exerciseLimit}&offset=0`,
        translatedInput
      );

      const filteredData = exercisesData.filter((exercise) => {
        return (
          exercise.bodyPart.toLowerCase().includes(translatedInput) ||
          exercise.target.toLowerCase().includes(translatedInput) ||
          exercise.equipment.toLowerCase().includes(translatedInput)
        );
      });

      createExerciseCard(filteredData);
      checkNonSearchedExerciseText()
      viewExerciseCard(filteredData);

      exerciseSection.scrollIntoView({ behavior: "smooth" });
    } else {
      showErrorMessage(notFoundExerciseMessage);
      return;
    }
  } else {
    showErrorMessage(emptyInputMessage);
    return;
  }
};

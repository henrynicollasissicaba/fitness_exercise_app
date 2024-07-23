import {
  createExerciseCard,
  createViewExerciseCard,
  showMoreExerciseInfo
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
      showMoreExerciseInfo(exercises[id])
    });
  });
};

export const showSearchedExercises = async () => {

  if (searchInput.value.length > 0) {
    const lowerInput = sanitize(searchInput.value.toLowerCase());
    const checkInput = exercisesDb.includes(lowerInput);

    if (checkInput) {
      const translatedInput = translateInput(lowerInput);
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1324&offset=0',
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

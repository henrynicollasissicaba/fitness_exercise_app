"use client";

import useExercises from "../hooks/useExercises";
import ExercisesWrapper from "./ExercisesWrapper";

const SearchedExercises = () => {
  const { exercises, resultsRef } = useExercises();

  return (
    <section
      id="results"
      className="w-full max-w-6xl mx-auto p-4 mt-6"
      ref={resultsRef}
    >
      {exercises.length > 0 && (
        <div>
          <h2 className="font-bold text-3xl text-center text-primary-700 mb-5">
            Resultado da busca:
          </h2>
          <ExercisesWrapper />
        </div>
      )}
    </section>
  );
};

export default SearchedExercises;

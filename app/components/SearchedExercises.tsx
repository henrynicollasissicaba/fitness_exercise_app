"use client";

import Image from "next/image";
import { useExercises } from "../hooks/useExercises";
import ExercisesWrapper from "./ExercisesWrapper";

const SearchedExercises = () => {
  const { exercises, resultsRef } = useExercises();
  const exercisesLength = exercises.length;

  return (
    <section
      id="results"
      className="w-full max-w-6xl mx-auto p-4 mt-6"
      ref={resultsRef}
    >
      {exercisesLength > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl text-center font-bold text-primary-700 mb-6">
            Resultado da busca:{" "}
            <span className="text-primary-950 block">
              {exercisesLength} exercícios
            </span>
          </h2>
          <ExercisesWrapper />
          <a className="fixed bottom-12 right-12" href="#results">
            <Image
              src="/assets/arrow-back.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </a>
        </div>
      )}
    </section>
  );
};

export default SearchedExercises;

"use client";

import useExercises from "../hooks/useExercises";
import Link from "next/link";

const ExercisesWrapper = () => {
  const { exercises } = useExercises();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[50rem] overflow-y-auto custom-scrollbar">
      {exercises.map((exercise) => (
        <div
          className="flex flex-col gap-5 p-2 capitalize mt-4 border-2 border-y-primary-700 rounded border-x-slate-200 
            relative shadow-lg w-[20rem] h-[28rem] mx-auto"
          key={exercise.id}
        >
          <img
            src={exercise.gifUrl}
            alt="GIF do exercício"
            className="h-[16rem] w-full border-2 rounded border-slate-200 block mx-auto"
            loading="lazy"
          />
          <div className="flex flex-col-reverse">
            <h3 className="font-bold text-lg text-black">{exercise.name}</h3>
            <div className="flex gap-2 items-center flex-wrap pb-2">
              <p className="py-1 px-4 rounded-3xl bg-primary-700 text-white text-sm">
                {exercise.bodyPart}
              </p>
              <p className="bg-primary-700 py-1 px-4 rounded-3xl text-white text-sm">
                {exercise.target}
              </p>
            </div>
          </div>
          <Link
            href={`/exercise/${exercise.id}`}
            className="mt-auto text-center bg-primary-700 py-2 text-white rounded hover:bg-primary-600
              transition-colors"
          >
            Mais informações
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExercisesWrapper;

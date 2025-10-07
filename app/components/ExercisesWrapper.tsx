"use client";

import Link from "next/link";
import { useExercises } from "../hooks/useExercises";
import Image from "next/image";
import ExerciseInformation from "./ExerciseInformation";

const ExercisesWrapper = () => {
  const { exercises } = useExercises();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exercises.map((exercise) => {
        const inforItems = [
          {
            imgUrl: "/assets/body.svg",
            label: "Músculo",
            children: exercise.bodyPart,
            classNameImage: "size-5",
          },
          {
            imgUrl: "/assets/muscle.svg",
            label: "Alvo",
            children: exercise.target,
            classNameImage: "size-4",
          },
          {
            imgUrl: "/assets/equipment.svg",
            label: "Equipamento",
            children: exercise.equipment,
            classNameImage: "size-4",
          },
        ];
        return (
          <div
            className="flex flex-col gap-5 p-2 capitalize mt-4 border-2 border-y-primary-700 rounded border-x-slate-200 
            relative shadow-lg mx-auto w-full bg-white overflow-hidden"
            key={exercise.id}
          >
            <Image
              src="/assets/body-muscle.svg"
              alt="body muscle img"
              width={10}
              height={10}
              className="absolute -top-6 -right-26 size-64 pointer-events-none opacity-5"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-center font-bold text-lg md:text-xl">
                {exercise.name}
              </h3>
              <div className="flex flex-col gap-2">
                {inforItems.map((item) => (
                  <ExerciseInformation
                    key={item.label}
                    imgUrl={item.imgUrl}
                    label={item.label}
                    classNameImage={item.classNameImage}
                  >
                    {item.children}
                  </ExerciseInformation>
                ))}
              </div>
            </div>
            <Link
              href={`/exercise/${exercise.id}`}
              className="mt-auto text-center bg-primary-700 py-2 text-white rounded hover:bg-primary-600
              transition-colors z-10"
            >
              Mais informações
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExercisesWrapper;

"use client";

import SecondaryMuscleInfo from "../../components/SecondaryMuscleInfo";
import InstructionsInfo from "../../components/InstructionsInfo";
import { useExercises } from "@/app/hooks/useExercises";
import { Suspense, use, useEffect, useState } from "react";
import ExerciseInformation from "@/app/components/ExerciseInformation";
import YoutubeVideos from "./_components/YoutubeVideos";
import LoadingSkeleton from "./_components/LoadingSkeleton";
import BorderedContainer from "@/app/components/BorderedContainer";
import ArrowBackBtn from "@/app/components/ArrowBackBtn";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { exercises } = useExercises();
  const [exercise, setExercise] = useState({
    id: 0,
    name: "",
    bodyPart: "",
    target: "",
    equipment: "",
    category: "",
    difficulty: "",
    description: "",
    secondaryMuscles: [],
    instructions: [],
  });

  useEffect(() => {
    if (exercises.length > 0) {
      const foundExercise = exercises.find(
        (exercise) => exercise.id === Number(slug)
      );

      if (foundExercise) {
        setExercise(foundExercise);
        return;
      }
    }

    async function fetchExerciseById() {
      const response = await fetch(`/api/exercises/${slug}`);
      const data = await response.json();

      setExercise(data);
    }

    fetchExerciseById();
  }, [exercises, slug]);

  const infoItems = [
    {
      imgUrl: "/assets/body.svg",
      label: "Músculo",
      children: exercise.bodyPart,
      classNameImage: "size-8",
    },
    {
      imgUrl: "/assets/muscle.svg",
      label: "Alvo",
      children: exercise.target,
      classNameImage: "size-6",
    },
    {
      imgUrl: "/assets/equipment.svg",
      label: "Equipamento",
      children: exercise.equipment,
      classNameImage: "size-6",
    },
    {
      imgUrl: "/assets/category.svg",
      label: "Categoria",
      children: exercise.category,
      classNameImage: "size-6",
    },
    {
      imgUrl: "/assets/difficulty.svg",
      label: "Dificuldade",
      children: exercise.difficulty,
      classNameImage: "size-6",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto p-4 overflow-hidden">
      <ArrowBackBtn href="/#results" />

      <h1 className="text-3xl md:text-4xl font-bold ">
        {">>"} {exercise.name}
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <BorderedContainer className="flex flex-col gap-2">
          {infoItems.map((item, index) => (
            <ExerciseInformation
              key={index}
              imgUrl={item.imgUrl}
              label={item.label}
              classNameImage={item.classNameImage}
              className="text-lg"
            >
              {item.children}
            </ExerciseInformation>
          ))}
        </BorderedContainer>
        <BorderedContainer>
          <h2 className="font-bold text-xl text-center">
            {">>"} Músculos Secundários
          </h2>
          <div className="flex gap-2 flex-wrap mt-4 items-center justify-center">
            {exercise.secondaryMuscles.map((muscle, index) => (
              <SecondaryMuscleInfo
                key={muscle}
                secondaryMuscle={muscle}
                index={index}
              />
            ))}
          </div>
        </BorderedContainer>
        <BorderedContainer className="md:col-span-2 lg:col-span-1">
          <p className="text-lg">
            <span className="font-bold">Descrição:</span> {exercise.description}
          </p>
        </BorderedContainer>
        <BorderedContainer className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="mb-6 text-2xl md:text-3xl font-bold">
            {">>"} Instruções:
          </h2>
          {exercise.instructions.map((instruction, index) => (
            <InstructionsInfo
              key={instruction}
              index={index + 1}
              instruction={instruction}
            />
          ))}
        </BorderedContainer>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          {">>"} Vídeos relacionados
        </h2>
        <Suspense fallback={<LoadingSkeleton />}>
          <YoutubeVideos exerciseName={exercise.name} />
        </Suspense>
      </div>
    </section>
  );
}

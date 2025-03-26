"use client";

import React, { createContext, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";

type Exercise = {
  id: string;
  name: string;
  gifUrl: string;
  equipment: string;
  bodyPart: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
};

type ExerciseContextProps = {
  exercises: Exercise[];
  fetchExercises: (exercise: string) => void;
  resultsRef: React.RefObject<HTMLDivElement | null>;
};

export const ExercisesContext = createContext<ExerciseContextProps>(
  {} as ExerciseContextProps
);

export const ExercisesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (exercises.length > 0 && !isLoading && resultsRef.current) {
      resultsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [exercises, isLoading]);
  
  const fetchExercises = async (exercise: string) => {
    setIsLoading(true)
    const translatedExercise = translateExercise(exercise);

    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1324&offset=0";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      const filteredExercises = data.filter((exercise: Exercise) => {
        return (
          exercise.bodyPart === translatedExercise ||
          exercise.equipment === translatedExercise ||
          exercise.target === translatedExercise
        );
      });

      setExercises(filteredExercises);

    } catch (error) {
      console.error(error);

    } finally {
      setIsLoading(false)
    }
  };

  const translateExercise = (exercise: string) => {
    switch (exercise) {
      case "Costas":
        return "back";
      case "Peito":
        return "chest";
      case "Cardio":
        return "cardio";
      case "Braços Superiores":
        return "upper arms";
      case "Antebraço":
        return "lower arms";
      case "Ombros":
        return "shoulders";
      case "Cintura":
        return "waist";
      case "Panturrilha":
        return "lower legs";
      case "Coxas":
        return "upper legs";
      case "Barra":
        return "barbell";
      case "Peso do Corpo":
        return "body weight";
      case "Bola Bosu":
        return "bosu ball";
      case "Cabo":
        return "cable";
      case "Halter":
        return "dumbbell";
      case "Máquina Elíptica":
        return "elliptical machine";
      case "Barra Ez":
        return "ez barbell";
      case "Kettlebell":
        return "kettlebell";
      case "Bola Medicinal":
        return "medicine ball";
      case "Barra Olímpica":
        return "olympic barbell";
      case "Corda":
        return "rope";
      case "Smith":
        return "smith machine";
      case "Bola de Estabilidade":
        return "stability ball";
      case "Bicicleta Ergométrica":
        return "stationary bike";
      case "Barra de Armadilha":
        return "trap bar";
      case "Rolo Abdominal":
        return "wheel roller";
      case "Abdutores":
        return "abductors";
      case "Adutores":
        return "adductors";
      case "Abdominais":
        return "abs";
      case "Tríceps":
        return "triceps";
      case "Bíceps":
        return "biceps";
      case "Deltóides":
        return "delts";
      case "Antebraço":
        return "forearms";
      case "Quadríceps":
        return "quads";
      case "Glúteos":
        return "glutes";
      case "Isquiotibiais":
        return "hamstrings";
      case "Panturrilha":
        return "calves";
      case "Peitoral":
        return "pectorals";
      case "Dorsais":
        return "lats";
      case "Superior das Costas":
        return "upper back";
      case "Trapézios":
        return "traps";
      case "Músculo Serrátil Anterior":
        return "serratus anterior";
      case "Sistema Cardiovascular":
        return "cardiovascular system";
    }
  };

  return (
    <ExercisesContext.Provider value={{ exercises, fetchExercises, resultsRef }}>
      {children}
      {isLoading && <Loading />}
    </ExercisesContext.Provider>
  );
};

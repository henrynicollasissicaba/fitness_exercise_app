"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { Exercise } from "../../lib/exercise";
import Loading from "../components/Loading";

type ExerciseContextProps = {
  exercises: Exercise[];
  fetchExercises: (muscle: string) => Promise<void>;
  resultsRef: React.RefObject<HTMLDivElement | null>;
};

export const ExerciseContext = createContext<ExerciseContextProps>(
  {} as ExerciseContextProps
);

export const ExerciseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (exercises.length > 0 && !isLoading && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [exercises, isLoading]);

  const fetchExercises = async (muscle: string) => {
    setIsLoading(true);
    const muscleName = muscle.toLowerCase();

    try {
      const response = await fetch(`/api/exercises?name=${muscleName}`);
      const data = await response.json();

      setExercises(data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ExerciseContext.Provider value={{ exercises, fetchExercises, resultsRef }}>
      {children}
      {isLoading && <Loading />}
    </ExerciseContext.Provider>
  );
};

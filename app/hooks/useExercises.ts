import { useContext } from "react";
import { ExerciseContext } from "../contexts/ExerciseContext";

export const useExercises = () => {
  return useContext(ExerciseContext);
};

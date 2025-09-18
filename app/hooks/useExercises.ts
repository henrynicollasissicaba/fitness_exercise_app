import { useContext } from "react";
import { ExercisesContext } from "../contexts/ExercisesContext";

export default function useExercises() {
  return useContext(ExercisesContext);
}

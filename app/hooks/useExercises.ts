import { useContext } from "react"
import { ExercisesContext } from "../contexts/ExercisesContext"

export const useExercises = () => {
    return useContext(ExercisesContext)
}
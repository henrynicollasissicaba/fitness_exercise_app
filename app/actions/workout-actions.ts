"use server"

import { createWorkout, WorkoutExercises } from "../models/Workout";

export const createWorkoutAction = async (name: string, exercises: WorkoutExercises[]) => {
    try {
        const workout = await createWorkout(name, exercises)
        console.log(workout)
        
    } catch (error) {
        console.log(error)
    }
}
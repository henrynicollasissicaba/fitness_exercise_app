"use server"

import { revalidatePath } from "next/cache";
import { assignWorkoutUser, createWorkout, deleteWorkout, getWorkouts, getWorkoutsExercises, WorkoutExercises } from "../models/Workout";

export const createWorkoutAction = async (name: string, exercises: WorkoutExercises[]) => {
    try {
        await createWorkout(name, exercises)
        
    } catch (error) {
        console.log(error)
    }
}

export const getWorkoutsExercisesAction = async () => {
    try {
        const workouts = await getWorkoutsExercises()
        return workouts

    } catch (error) {
        console.log(error)
    }
}

export const getWorkoutsAction = async () => {
    try {
        const workouts = await getWorkouts()
        return workouts

    } catch (error) {
        console.log(error)
    }
}

export const deleteWorkoutAction = async (workoutId: number) => {
    try {
        await deleteWorkout(workoutId)
        revalidatePath("/created-workouts")

    } catch (error) {
        console.log(error)
    }
}

export const assignWorkoutUserAction = async (workoutId: number, usersIds: string[]) => {
    try {
        await assignWorkoutUser(workoutId, usersIds)

    } catch (error) {
        console.log(error)
    }
}
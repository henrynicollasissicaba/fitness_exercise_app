"use server"

import { revalidatePath } from "next/cache";
import { assignWorkoutUser, createWorkout, deleteWorkout, getAllWorkoutsWithPupils, getPupilWorkouts, getWorkouts, getWorkoutsCount, getWorkoutsExercises, unassignWorkoutUser, WorkoutExercises } from "../models/Workout";

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
        revalidatePath("/associate-workout-user")

    } catch (error) {
        console.log(error)
    }
}

export const unassignWorkoutUserAction = async (workoutId: number, usersIds: string[]) => {
    try {
        await unassignWorkoutUser(workoutId, usersIds)
        revalidatePath("/associate-workout-user")

    } catch (error) {
        console.log(error)
    }
}

export const getWorkoutsCountAction = async () => {
    try {
        const count = await getWorkoutsCount()
        return count

    } catch (error) {
        console.log(error)
    }
}

export const getAllWorkoutsWithPupilsAction = async () => {
    try {
        const workouts = await getAllWorkoutsWithPupils()
        return workouts

    } catch (error) {
        console.log(error)
    }
}

export const getPupilWorkoutsAction = async (userId: string) => {
    const workouts = await getPupilWorkouts(userId)
    return workouts
}
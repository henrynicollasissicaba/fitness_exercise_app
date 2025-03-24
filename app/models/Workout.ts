import { prisma } from "../database/prisma-client"
import { Exercise } from "./Exercise"

export interface Workout {
    id: number
    name: string
    exercises: Exercise[]
}

export interface WorkoutExercises {
    exerciseName: string
    exerciseSetsXReps: string
    exerciseNotes?: string
}

export const createWorkout = async (name: string, exercises: WorkoutExercises[]) => {
    await prisma.workout.create({
        data: {
            name,
            exercises: {
                create: exercises.map((exercise) => ({
                    name: exercise.exerciseName,
                    sets_X_reps: exercise.exerciseSetsXReps,
                    notes: exercise.exerciseNotes
                }))
            }
        }
    })
}

export const getWorkoutsExercises = async () => {
    const workouts = await prisma.workout.findMany({
        include: {
            exercises: true
        }
    })
    return workouts
}

export const getWorkouts = async () => {
    const workouts = await prisma.workout.findMany()
    return workouts
}

export const deleteWorkout = async (workoutId: number) => {
    await prisma.workout.delete({
        where: {
            id: workoutId
        }
    })
}

export const assignWorkoutUser = async (workoutId: number, usersIds: string[]) => {
    await prisma.userWorkout.createMany({
        data: usersIds.map((userId) => ({
            userId,
            workoutId
        })),
        skipDuplicates: true
    })
}
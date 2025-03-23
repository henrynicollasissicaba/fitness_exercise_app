import { prisma } from "../database/prisma-client"

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
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
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return workouts
}

export const getWorkouts = async () => {
    const workouts = await prisma.workout.findMany({ orderBy: { createdAt: "desc" } })
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

export const unassignWorkoutUser = async (workoutId: number, usersIds: string[]) => {
    await prisma.userWorkout.deleteMany({
        where: {
            workoutId,
            userId: { in: usersIds }
        }
    })
}

export const getWorkoutsCount = async () => {
    const count = await prisma.workout.count()
    return count
}

export const getAllWorkoutsWithPupils = async () => {
    const workouts = await prisma.workout.findMany({
        include: {
            users: {
                include: {
                    user: {
                        select: {
                            id: true, fullName: true, username: true,
                        },
                    },
                },
                orderBy: {
                    user: {
                        fullName: "asc"
                    }
                }
            },
        },
        orderBy: {
            users: {
                _count: "desc"
            }
        }
    })

    return workouts.map((workout) => ({
        id: workout.id,
        name: workout.name,
        users: workout.users.map((user) => user.user)
    }))
}
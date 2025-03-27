import { auth } from "@clerk/nextjs/server"
import { prisma } from "../database/prisma-client"

export interface User {
    id: string
    fullName: string
    username: string
    role?: string | null
    createdAt?: Date
    updatedAt?: Date
}

export const createUser = async (userId: string, fullName: string, username: string, role: string) => {
    await prisma.user.create({
        data: {
            id: userId,
            fullName,
            username,
            role
        }
    })
}

export const deleteUser = async (userId: string) => {
    await prisma.user.delete({
        where: { id: userId }
    })
}

export const getUsers = async (role: string) => {
    const users = await prisma.user.findMany({
        where: { 
            role 
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return users
}

export const getPupilsCount = async () => {
    const count = await prisma.user.count({
        where: { role: "pupil" }
    })

    return count
}

export const getTeacher = async () => {
    const { userId } = await auth()
    if(!userId) return

    const teacher = await prisma.user.findUnique({
        where: { id: userId }
    })

    return teacher
}

export const getPupil = async () => {
    const { userId } = await auth()
    if(!userId) return

    const pupil = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            workouts: true
        }
    })
    return pupil
}
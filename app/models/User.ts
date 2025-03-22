import { prisma } from "../database/prisma-client"

export interface User {
    id: string
    fullName: string
    username: string
    role: string | null
    createdAt: Date
    updatedAt: Date
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
        where: { role }
    })

    return users
}
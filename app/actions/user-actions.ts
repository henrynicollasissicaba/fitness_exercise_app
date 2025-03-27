"use server"

import { clerkClient } from "@clerk/nextjs/server"
import { createUser, deleteUser, getPupil, getPupilsCount, getTeacher, getUsers } from "../models/User"
import { revalidatePath } from "next/cache"

export const createUserAction = async (fullName: string, username: string, password: string, role: string) => {
    const client = await clerkClient()

    try {
        // criate user in clerk
        const user = await client.users.createUser({
            username,
            password,
            publicMetadata: {
                role
            }
        })

        // getting user id after creation
        const userId = user.id

        // create user in database
        await createUser(userId, fullName, username, role)
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteUserAction = async (userId: string) => {
    const client = await clerkClient()

    // delete user in clerk
    await client.users.deleteUser(userId)

    // delete user in database
    await deleteUser(userId)

    revalidatePath("/admin")
}

export const getUsersAction = async (role: string) => {
    const users = await getUsers(role)
    return users
}

export const getTeacherAction = async () => {
    try {
        const teacher = await getTeacher()
        return teacher

    } catch (error) {
        console.log(error)
    }
}

export const getPupilAction = async () => {
    const pupil = await getPupil()
    return pupil
}

export const getPupilsCountAction = async () => {
    try {
        const count = await getPupilsCount()
        return count

    } catch (error) {
        console.log(error)
    }
}
"use server"

import { clerkClient } from "@clerk/nextjs/server"
import { createUser, deleteUser, getUsers } from "../models/User"
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
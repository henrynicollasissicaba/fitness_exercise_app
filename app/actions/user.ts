"use server"

import { auth, clerkClient } from "@clerk/nextjs/server"
import { prisma } from "../database/prisma-client"

export const createUser = async (fullName: string, username: string, password: string, role: string) => {
    const client = await clerkClient()

    try {
        await client.users.createUser({
            username,
            password,
            publicMetadata: {
                role
            }
        })

        const { userId } = await auth()
        if(!userId) return

        await prisma.user.create({
            data: {
                id: userId,
                fullName,
                username
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}
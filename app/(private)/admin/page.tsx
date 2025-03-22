import { checkRole } from "@/app/utils/roles"
import { SignOutButton } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function AdminPage(){
    const isAdmin = await checkRole('admin')
    if(!isAdmin){
        redirect("/login")
    }

    return(
        <section>
            <div>
                <h1>Admin page</h1>
                <SignOutButton>
                    sair
                </SignOutButton>
            </div>
        </section>
    )
}
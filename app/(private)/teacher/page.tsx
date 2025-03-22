import { checkRole } from "@/app/utils/roles";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function TeacherPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher){
        redirect("/login")
    }

    return(
        <div>
            <h1>teacher page.</h1>
            <SignOutButton>
                <button className="p-6 cursor-pointer">Sair</button>
            </SignOutButton>
        </div>
    )
}
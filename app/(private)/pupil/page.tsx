import { checkRole } from "@/app/utils/roles";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function PupilPage(){
    const isPupil = await checkRole('pupil')
    if(!isPupil){
        redirect("/login")
    }

    return(
        <div>
            <h1>pupil page.</h1>
            <SignOutButton>
                <button className="p-6 cursor-pointer">Sair</button>
            </SignOutButton>
        </div>
    )
}
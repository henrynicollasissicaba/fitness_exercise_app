import { getPupilsCountAction, getTeacherAction } from "@/app/actions/user-actions";
import { getWorkoutsCountAction } from "@/app/actions/workout-actions";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";
import { UserRoundCheck, ScrollText } from "lucide-react"
import Image from "next/image";

export default async function TeacherPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")

    const [currentTeacher, pupilsCount, workoutsCount] = await Promise.all([
        getTeacherAction(),
        getPupilsCountAction(),
        getWorkoutsCountAction()
    ])

    return(
        <Section>
            <Container>
                <Heading>Painel do professor</Heading>
                <div className="flex flex-col text-lg mt-5">
                    <p>Professor: </p>
                    <span className="font-bold">{currentTeacher?.fullName}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 mt-10">
                        <div className="relative p-8 border shadow-md w-full max-w-sm rounded-lg">
                            <UserRoundCheck size={50} />
                            <p className="text-lg mt-5">Alunos cadastrados</p>
                            <span 
                                className="absolute top-4 right-4 text-6xl font-bold opacity-60"
                            >
                                {pupilsCount}
                            </span>
                        </div>
                        <div className="relative p-8 border shadow-md w-full max-w-sm rounded-lg">
                            <ScrollText size={50} />
                            <p className="text-lg mt-5">Treinos cadastrados</p>
                            <span 
                                className="absolute top-4 right-4 text-6xl font-bold opacity-60"
                            >
                                {workoutsCount}
                            </span>
                        </div>
                    </div>
                    <Image 
                        src="/dashboard.svg"
                        alt="dashboard image"
                        width={600}
                        height={600}
                        className="md:-mt-20"
                    />
                </div>
            </Container>
        </Section>
    )
}
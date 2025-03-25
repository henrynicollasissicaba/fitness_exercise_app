import { getTeacherAction } from "@/app/actions/user-actions";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";

export default async function TeacherPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")

    const currentTeacher = await getTeacherAction()

    return(
        <Section>
            <Container>
                <Heading>Painel do professor</Heading>
                <div className="flex flex-col text-lg mt-5">
                    <p>Professor atual: </p>
                    <span className="font-bold">{currentTeacher?.fullName}</span>
                </div>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mt-10">
                    <div>quantidade alunos</div>
                    <div>quantidade treinos</div>
                </div>
            </Container>
        </Section>
    )
}
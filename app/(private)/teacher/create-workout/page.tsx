import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";

export default async function CreateWorkoutPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")

    return(
        <Section>
            <Container>
                <Heading>Criar treino</Heading>
            </Container>
        </Section>
    )
}
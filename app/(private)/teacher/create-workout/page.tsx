import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";
import CreateWorkoutForm from "../../_components/CreateWorkoutForm";

export default async function CreateWorkoutPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")

    return(
        <Section className="pb-10">
            <Container>
                <Heading>Criar treino</Heading>
                <CreateWorkoutForm />
            </Container>
        </Section>
    )
}
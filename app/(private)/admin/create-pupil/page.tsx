import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import CreatePupilForm from "../../_components/CreatePupilForm";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";

export default async function CreatePupilPage(){
    const isAdmin = await checkRole('admin')
    if(!isAdmin){
        redirect("/login")
    }

    return(
        <Section className="flex justify-center">
            <Container className="max-w-3xl w-full">
                <Heading className="mb-12">Cadastrar aluno</Heading>
                <CreatePupilForm />
            </Container>
        </Section>
    )
}
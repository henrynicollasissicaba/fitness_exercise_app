import Heading from "@/app/components/Heading";
import CreateTeacherForm from "../_components/CreateTeacherForm";
import Section from "@/app/components/tags/Section";
import Container from "@/app/components/tags/Container";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";

export default async function CreateTeacherPage(){
    const isAdmin = await checkRole('admin')
    if(!isAdmin){
        redirect("/login")
    }

    return(
        <Section className="flex justify-center">
            <Container className="max-w-3xl w-full">
                <Heading className="mb-12">Cadastrar professor</Heading>
                <CreateTeacherForm />
            </Container>
        </Section>
    )
}
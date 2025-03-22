import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import CreatePupilForm from "../_components/CreatePupilForm";

export default function CreatePupilPage(){
    return(
        <Section className="flex justify-center">
            <Container className="max-w-3xl w-full">
                <Heading className="mb-12">Cadastrar aluno</Heading>
                <CreatePupilForm />
            </Container>
        </Section>
    )
}
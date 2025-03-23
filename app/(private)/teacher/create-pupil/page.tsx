import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import CreatePupilForm from "../../_components/CreatePupilForm";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";

export default async function CreatePupilPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher){
        redirect("/login")
    }

    return(
        <Section className="flex justify-center flex-wrap gap-6">
            <Container className="max-w-3xl w-full">
                <div className="flex flex-col gap-4">
                    <Heading>Observações</Heading>
                    <p className="text-center text-lg">
                        Antes de cadastrar um aluno, leia essas essas instruções.
                    </p>
                    <div className="flex flex-col gap-2 mt-4">
                        <p>
                            Para cadastrar um aluno, você deve seguir o template abaixo para auxiliar no padrão de 
                            cadastro:
                        </p>
                        <ul className="ml-4 font-bold">
                            <li>- Nome completo;</li>
                            <li>- Nome de usuário;</li>
                            <li>- Senha.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <p>Template de <span className="font-bold">Nome completo</span>:</p>
                        <ul className="ml-4 flex flex-col gap-2">
                            <li>- Todo início de nome deve ser em <span className="font-bold">maiúsculo</span>.</li>
                            <li>- Exemplo: <span className="font-bold">Mariana Costa Ribeiro</span>.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <p>Template de <span className="font-bold">Nome de usuário</span>:</p>
                        <ul className="ml-4 flex flex-col gap-2">
                            <li>
                                - Formato:
                                <span className="ml-2 font-bold">
                                    (primeiro-nome)-(último-nome)-(iniciais-do-nome-completo)-(sequência-de-5-números)
                                </span>
                            </li>
                            <li>- Exemplo: <span className="font-bold">mariana-ribeiro-mcr-10836</span></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <p>Template de <span className="font-bold">Senha</span>:</p>
                        <ul className="ml-4 flex flex-col gap-2">
                            <li>
                                - Formato:
                                <span className="ml-2 font-bold">
                                    (sequência-de-5-números)-(primeiro-nome)-(iniciais-do-nome-completo)-(último-nome)-aluno
                                </span>
                            </li>
                            <li>- Exemplo: <span className="font-bold">18392-mariana-mcr-ribeiro-aluno</span></li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Container className="max-w-3xl w-full">
                <Heading className="mb-12">Cadastrar aluno</Heading>
                <CreatePupilForm />
            </Container>
        </Section>
    )
}
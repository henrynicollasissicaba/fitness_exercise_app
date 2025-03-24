import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";
import UsersList from "../../_components/UsersList";
import { getUsersAction } from "@/app/actions/user-actions";

export default async function AllPupilsPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")

    const pupils = await getUsersAction("pupil")

    return(
        <Section>
            <Container>
                <Heading className="mb-10">Alunos cadastrados</Heading>
                <UsersList 
                    users={pupils}
                    className="h-auto"
                />
            </Container>
        </Section>
    )
}
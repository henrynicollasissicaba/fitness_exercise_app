import { getUsersAction } from "@/app/actions/user-actions"
import Container from "@/app/components/tags/Container"
import Section from "@/app/components/tags/Section"
import { checkRole } from "@/app/utils/roles"
import { redirect } from "next/navigation"
import UsersList from "@/app/(private)/_components/UsersList"

export default async function AdminPage(){
    const isAdmin = await checkRole('admin')
    if(!isAdmin){
        redirect("/login")
    }

    const teachers = await getUsersAction("teacher")
    const pupils = await getUsersAction("pupil")

    return(
        <Section>
            <Container>
                <h1 className="mb-8 text-center font-bold text-3xl">Painel administrativo</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
                    <div className="card">
                        <h2 className="admin-heading">Professores</h2>
                        {teachers.length > 0 ? (
                            <div className="flex flex-col gap-4 border p-2 rounded-lg h-[23rem] overflow-y-auto">
                                <UsersList users={teachers} />
                            </div>
                        ) : (
                            <p className="not-found-text">Nenhum professor cadastrador</p>
                        )}
                    </div>
                    <div className="card">
                        <h2 className="admin-heading">Alunos</h2>
                        {pupils.length > 0 ? (
                            <div className="flex flex-col gap-4 border p-2 rounded-lg h-[23rem] overflow-y-auto">
                                <UsersList users={pupils} />
                            </div>
                        ) : (
                            <p className="not-found-text">Nenhum aluno cadastrador</p>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
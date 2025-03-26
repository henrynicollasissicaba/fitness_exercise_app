import { getAllWorkoutsWithPupilsAction } from "@/app/actions/workout-actions"
import Heading from "@/app/components/Heading"
import Container from "@/app/components/tags/Container"
import Section from "@/app/components/tags/Section"
import { checkRole } from "@/app/utils/roles"
import { redirect } from "next/navigation"
import PupilsList from "../../_components/PupilsList"
import { getUsersAction } from "@/app/actions/user-actions"

export default async function AssociateWorkoutUserPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")
    
    const workouts = await getAllWorkoutsWithPupilsAction()
    const pupils = await getUsersAction("pupil")

    return(
        <Section className="pb-10">
            <Container>
                <Heading>Vinculação Treino-Aluno</Heading>
                <div className="mt-10">
                    <div className="flex flex-col gap-6">
                        {pupils && pupils.length > 0 ? (
                            <PupilsList pupils={pupils} />
                        ) : (
                            <p className="not-found-text">Nenhum aluno foi encontrado</p>
                        )}
                        {workouts && workouts.length > 0 ? (
                            <div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[40rem] md:max-h-fit h-full overflow-y-auto
                                md:overflow-y-visible"
                            >
                                {workouts?.map((workout) => (
                                    <div key={workout.id} className="border p-4 rounded-md flex flex-col gap-4">
                                        <div className="flex flex-col md:flex-row md:gap-2">
                                            <span className="font-bold">Treino:</span>
                                            <p className="text-zinc-800">{workout.name}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold">ID do treino:</span>
                                            <p className="text-zinc-800">{workout.id}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold">Alunos vinculados:</p>
                                            {workout.users.length > 0 ? (
                                                <div className="flex flex-col gap-0.5">
                                                    {workout.users.map((pupil, index) => (
                                                        <p 
                                                            key={index}
                                                        >
                                                            <span className="font-bold">{index + 1}</span>. {pupil.fullName}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="not-found-text text-start">
                                                    Nenhum aluno está vinculado nesse treino.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="not-found-text">Nenhum treino foi encontrado</p>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
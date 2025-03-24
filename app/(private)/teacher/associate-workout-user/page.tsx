import { getWorkoutsAction } from "@/app/actions/workout-actions"
import Heading from "@/app/components/Heading"
import Container from "@/app/components/tags/Container"
import Section from "@/app/components/tags/Section"
import { getUsers } from "@/app/models/User"
import { checkRole } from "@/app/utils/roles"
import { redirect } from "next/navigation"
import PupilsList from "../../_components/PupilsList"

export default async function AssociateWorkoutUserPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")
    
    const workouts = await getWorkoutsAction()
    const pupils = await getUsers("pupil")

    return(
        <Section className="pb-10">
            <Container>
                <Heading>Associar treino a um aluno</Heading>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4 max-w-lg w-full h-[20rem] md:h-[30rem] overflow-y-auto">
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
                                </div>
                            ))}
                        </div>
                        <PupilsList pupils={pupils} />
                    </div>
                </div>
            </Container>
        </Section>
    )
}
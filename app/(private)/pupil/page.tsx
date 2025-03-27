import { getPupilWorkoutsAction } from "@/app/actions/workout-actions";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import { Accordion } from "@/app/components/ui/Accordion";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";
import ExercisesContentAccordion from "../_components/ExercisesContent";
import { auth } from "@clerk/nextjs/server";
import { getPupilAction } from "@/app/actions/user-actions";

export default async function PupilPage(){
    const { userId } = await auth()
    if(!userId) return

    const isPupil = await checkRole('pupil')
    if(!isPupil) redirect("/login")

    const currentPupil = await getPupilAction()
    const workouts = await getPupilWorkoutsAction(userId)

    return(
        <Section>
            <Container>
                <Heading>Meus treinos</Heading>

                <div className="flex flex-col gap-3.5 my-5">
                    <div>
                        <h2>Nome completo: </h2>
                        <span className="font-bold">{currentPupil?.fullName}</span>
                    </div>
                    <div>
                        <p>Nome de usuário: </p>
                        <span className="font-bold">{currentPupil?.username}</span>
                    </div>
                    <div>
                        <p>Número de treinos vinculados: </p>
                        <span className="font-bold">{currentPupil?.workouts.length}</span>
                    </div>
                </div>

                {workouts && workouts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {workouts.map((workout, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold">{workout.workout.name}</h2>
                                <Accordion type="single" collapsible>
                                    {workout.workout.exercises.map((exercise, index) => (
                                        <ExercisesContentAccordion 
                                            key={index}
                                            index={index}
                                            exercise={{
                                                exerciseName: exercise.name,
                                                exerciseSetsXReps: exercise.sets_X_reps,
                                                exerciseNotes: exercise.notes ?? ""
                                            }}
                                        />
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="not-found-text">Nenhum treino encontrado</p>
                )}
            </Container>
        </Section>
    )
}
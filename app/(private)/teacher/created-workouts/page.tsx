import { getWorkoutsAction } from "@/app/actions/workout-actions";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/tags/Container";
import Section from "@/app/components/tags/Section";
import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";
import WorkoutList from "../../_components/WorkoutList";
import Link from "next/link";
import { ExternalLink } from "lucide-react"

export default async function CreatedWorkoutsPage(){
    const isTeacher = await checkRole('teacher')
    if(!isTeacher) redirect("/login")
    
    const workouts = await getWorkoutsAction()
    
    return(
        <Section>
            <Container className="min-h-lvh mb-10">
                <Heading>Treinos criados</Heading>
                {workouts && workouts.length > 0 ? (
                    <WorkoutList workoutList={workouts} />
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <p className="mt-10 text-xl not-found-text">
                            Nenhum treino criado...
                        </p>
                        <Link 
                            href="/teacher/create-workout"
                            className="inline-flex gap-2 items-center border-b-2 border-black"
                        >
                            Criar treino
                            <ExternalLink className="size-4" />
                        </Link>
                    </div>
                )}
            </Container>
        </Section>
    )
}
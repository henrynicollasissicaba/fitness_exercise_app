import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/Accordion";
import { WorkoutExercises } from "@/app/models/Workout";
import { ReactNode } from "react";

interface ExercisesContentAccordion {
    index: number
    exercise: Partial<WorkoutExercises>
    children?: ReactNode
}

function ExercisesContentWrapper({ children }: { children: ReactNode }){
    return(
        <div className="flex flex-col gap-4">
            {children}
        </div>
    )
}

function ExercisesContent({ exerciseSetsXReps, exerciseNotes }: Partial<WorkoutExercises>){
    return(
        <>
            <div>
                <span className="font-bold text-zinc-900">Séries X Repetições:</span>
                <p className="text-zinc-700">{exerciseSetsXReps}</p>
            </div>
            <div>
                <span className="font-bold text-zinc-900">Obersevações:</span>
                {exerciseNotes ? (
                    <p className="text-zinc-800 whitespace-pre-wrap max-w-96">{exerciseNotes}</p>
                ) : (
                    <p className="text-red-600 italic">Nenhuma observação para este exercício.</p>
                )}
            </div>
        </>
    )
}

export default function ExercisesContentAccordion({ index, exercise, children }: ExercisesContentAccordion){
    return(
        <Accordion type="single" collapsible className="px-4">
            <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{exercise.exerciseName}</AccordionTrigger>
                <AccordionContent>
                    <ExercisesContentWrapper>
                        <ExercisesContent
                            exerciseSetsXReps={exercise.exerciseSetsXReps}
                            exerciseNotes={exercise.exerciseNotes}
                        />
                        {children}
                    </ExercisesContentWrapper>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
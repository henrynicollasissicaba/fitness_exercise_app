"use client"

import { Workout } from "@/app/models/Workout"
import ExercisesContentAccordion from "./ExercisesContent"
import DeleteButton from "./DeleteButton"
import { showCustomAlert } from "@/lib/sweetalert2"
import { toast } from "sonner"
import { deleteWorkoutAction } from "@/app/actions/workout-actions"

interface WorkoutListProps {
    workoutList: Workout[]
}

export default function WorkoutList({ workoutList }: WorkoutListProps){
    const handleDeleteWorkout = async (workoutId: number) => {
        const result = await showCustomAlert("Deseja excluir este treino?")

        if(result){
            toast.promise(deleteWorkoutAction(workoutId), {
                loading: "Excluindo treino...",
                success: "Treino excluído com sucesso!"
            })
        }
    }

    return(
        <div className="grid gird-cols-1 md:grid-cols-2 gap-5 mt-10">
            {workoutList.map((workout, index) => (
                <div
                    key={index}
                    className="border p-4 rounded-lg flex flex-col gap-2 shadow-md"
                >
                    <h2 className="font-bold text-center text-lg md:text-2xl mb-8">{workout.name}</h2>
                    {workout.exercises.map((exercise, index) => (
                        <ExercisesContentAccordion
                            key={index}
                            index={index}
                            exercise={
                                { 
                                    exerciseName: exercise.name,
                                    exerciseSetsXReps: exercise.sets_X_reps,
                                    exerciseNotes: exercise.notes ?? ""
                                }
                            }
                        />
                    ))}
                    <DeleteButton
                        className="w-fit ml-auto mt-auto"
                        onClick={() => handleDeleteWorkout(workout.id)}
                    >
                        Excluir treino
                    </DeleteButton>
                </div>
            ))}
        </div>
    )
}
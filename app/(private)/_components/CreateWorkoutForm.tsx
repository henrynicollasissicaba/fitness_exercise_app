"use client"

import FormGroup from "@/app/components/tags/FormGroup";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import { exerciseSchema } from "@/app/schemas/exercise";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Section from "@/app/components/tags/Section";
import { errorAlert } from "@/lib/sweetalert2";
import { toast } from "sonner";
import { createWorkoutAction } from "@/app/actions/workout-actions";
import { Trash } from "lucide-react";
import ExercisesContentAccordion from "./ExercisesContent";
import { Accordion } from "@/app/components/ui/Accordion";
  

type Exercise = z.infer<typeof exerciseSchema>

export default function CreateWorkoutForm(){
    const [workoutName, setWorkoutName] = useState("")
    const [exercises, setExercises] = useState<Exercise[]>([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Exercise>({ resolver: zodResolver(exerciseSchema) })

    const addExercise = (data: Exercise) => {
        const validatedData = exerciseSchema.parse({
            exerciseName: data.exerciseName,
            exerciseSetsXReps: data.exerciseSetsXReps,
            exerciseNotes: data.exerciseNotes
        })

        setExercises([...exercises, validatedData])
        reset()
    }

    const handleDelete = (index: number) => {
        const updatedExercises = exercises.filter((_, i) => i !== index)
        setExercises(updatedExercises)
    }

    const createWorkoutList = async () => {
        if(!workoutName.trim() || workoutName.trim().length > 75){
            await errorAlert("O nome do treino deve ter entre 1 e 75 caracteres.")
            return
        }

        toast.promise(createWorkoutAction(workoutName, exercises), {
            loading: "Criando treino...",
            success: "Treino criado com sucesso!"
        })

        setWorkoutName("")
        setExercises([])
    }

    return(
        <Section className="mt-10">
            <FormGroup>
                <label htmlFor="workout-name">Nome do treino</label>
                <Input
                    type="text"
                    id="workout-name"
                    name="workout-name"
                    placeholder="Ex.: Treino de peitoral"
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                />
            </FormGroup>

            <form onSubmit={handleSubmit(addExercise)} className="form-wrapper mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormGroup>
                        <label htmlFor="exerciseName">Nome do exercício</label>
                        <Input
                            type="text"
                            id="exerciseName"
                            placeholder="Ex.: Supino inclinado com halteres"
                            {...register("exerciseName")}
                        />
                        {errors.exerciseName && <p className="text-red-500">{errors.exerciseName.message}</p>}
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="exerciseSetsXReps">Séries X Repetições</label>
                        <Input
                            type="text"
                            placeholder="Ex.: 4x12 + 12"
                            id="exerciseSetsXReps"
                            {...register("exerciseSetsXReps")}
                        />
                        {errors.exerciseSetsXReps && <p className="text-red-500">{errors.exerciseSetsXReps.message}</p>}
                    </FormGroup>
                </div>
                <FormGroup>
                    <label htmlFor="notes">Observações do exercício (opcional)</label>
                    <Textarea 
                        id="notes" 
                        placeholder="Ex.: Realizar 12 repetições com carga elevada e mais 12 repetições com carga leve." 
                        className="whitespace-pre-wrap"
                        rows={4}
                        {...register("exerciseNotes")}
                    />
                </FormGroup>
                <Button className="ml-auto" type="submit">
                    Adicionar exercício
                </Button>
            </form>
            {exercises.length > 0 && (
                <div className="w-full border rounded-lg mt-10 flex flex-col">
                    <div className="mb-5">
                        <Accordion type="single" collapsible className="mx-4">
                            {exercises.map((exercise, index) => (
                                <ExercisesContentAccordion
                                    key={index}
                                    index={index}
                                    exercise={exercise}
                                >
                                    <button 
                                        onClick={() => handleDelete(index)}
                                        className="bg-red-200 text-red-600 px-4 md:px-6 py-2 w-fit rounded-lg
                                        border-red-600 border-2 hover:text-white hover:bg-red-600 transition-colors
                                        cursor-pointer mt-4 ml-auto inline-flex items-center gap-2"
                                    >
                                        <Trash className="size-4" />
                                        <span>Excluir</span>
                                    </button>
                                </ExercisesContentAccordion>
                            ))}
                        </Accordion>
                    </div>
                    <Button
                        className="mx-4 mb-4"
                        onClick={createWorkoutList}
                    >
                        Criar treino
                    </Button>
                </div>
            )}
        </Section>
    )
}
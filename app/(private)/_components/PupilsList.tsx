"use client"

import { Checkbox } from "@/app/components/ui/Checkbox"
import { Input } from "@/app/components/ui/Input"
import { User } from "@/app/models/User"
import { useState } from "react"
import { CheckboxContainer, CheckboxWrapper } from "./CheckboxComponents"
import { Button } from "@/app/components/ui/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { workoutUserSchema } from "@/app/schemas/workoutUserSchema"
import { errorAlert } from "@/lib/sweetalert2"
import { assignWorkoutUserAction, unassignWorkoutUserAction } from "@/app/actions/workout-actions"
import { toast } from "sonner"

interface PupilsListProps {
    pupils: User[]
}

type AssignWorkoutUser = z.infer<typeof workoutUserSchema>
type ActionType = "assign" | "unassign"

export default function PupilsList({ pupils }: PupilsListProps){
    const { register, reset, handleSubmit, formState: { errors } } = useForm<AssignWorkoutUser>({ resolver: zodResolver(workoutUserSchema)})
    const [selectedPupils, setSelectedPupils] = useState<User[]>([])
    const [search, setSearch] = useState("")
    const [actionType, setActionType] = useState<ActionType>("assign")

    const filteredPupils = search.length > 0 
        ? pupils.filter(pupil => pupil.fullName.toLocaleLowerCase().includes(search))
        : []

    const toggleUser = (pupilId: string) => {
        setSelectedPupils((prev) => 
            prev.some((pupil) => pupil.id === pupilId) // verifica se o usuário ja foi selecionado
                ? prev.filter((pupil) => pupil.id !== pupilId) // se sim, remove da lista
                : [...prev, pupils.find((pupil) => pupil.id === pupilId)!] // se não, adiciona
            )
    }

    const handleAssociateWorkoutUser = async (data: AssignWorkoutUser) => {
        if(selectedPupils.length === 0){
            await errorAlert("Selecione pelo menos um aluno para atribuir ao treino.")
            return
        }

        const workoutId = data.workoutId
        const usersIds = selectedPupils.map((pupil) => pupil.id)

        if(actionType === "assign"){
            toast.promise(assignWorkoutUserAction(workoutId, usersIds), {
                loading: "Vinculando treino ao(s) aluno(s)...",
                success: "Treino vinculado com sucesso!"
            })
        } else {
            toast.promise(unassignWorkoutUserAction(workoutId, usersIds), {
                loading: "Desvinculando treino do(s) aluno(s)...",
                success: "Treino desvinculado com sucesso!"
            })
        }

        reset()
        setSelectedPupils([])
        setSearch("")
    }

    return(
        <div className="max-h-[30rem] md:max-h-[40rem] h-fit overflow-y-auto border rounded-md">
            <div className="p-4">
                <Input
                    type="text"
                    id="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar aluno por nome"
                />
                <form 
                    onSubmit={handleSubmit(handleAssociateWorkoutUser)} 
                    className="flex flex-col md:flex-row gap-4 mt-2 mb-5"
                >
                    <div className="flex flex-col w-full">
                        <Input 
                            type="number"
                            id="workoutId"
                            placeholder="Insira o ID do treino"
                            {...register("workoutId")}
                            className="w-full"
                        />
                        {errors.workoutId && <p className="text-red-500">{errors.workoutId.message}</p>}
                    </div>
                    <div className="flex w-full md:w-fit md:flex-row justify-between md:justify-end gap-2">
                        <Button type="submit" onClick={() => setActionType("assign")}>
                            Vincular
                        </Button>
                        <Button type="submit" onClick={() => setActionType("unassign")}>
                            Desvincular
                        </Button>
                    </div>
                </form>
                {search.length > 0 ? (
                    <>
                        <p className="font-bold text-lg mt-10">Selecionar alunos:</p>
                        <CheckboxContainer>
                            {filteredPupils.map((pupil, index) => (
                                <CheckboxWrapper key={index}>
                                    <Checkbox
                                        id={`${pupil.id}`}
                                        checked={selectedPupils.some((selectedUser) => selectedUser.id === pupil.id)}
                                        onCheckedChange={() => toggleUser(pupil.id)}
                                    />
                                    <label htmlFor={`${pupil.id}`}>
                                        {pupil.fullName}
                                    </label>
                                </CheckboxWrapper>
                            ))}
                        </CheckboxContainer>
                    </>
                ) : (
                    <>
                        <p className="font-bold text-lg mt-10">Selecionar alunos:</p>
                        <CheckboxContainer>
                            {pupils.map((pupil, index) => (
                                <CheckboxWrapper key={index}>
                                    <Checkbox
                                        id={`${pupil.id}`}
                                        checked={selectedPupils.some((selectedUser) => selectedUser.id === pupil.id)}
                                        onCheckedChange={() => toggleUser(pupil.id)}
                                    />
                                    <label htmlFor={`${pupil.id}`}>
                                        {pupil.fullName}
                                    </label>
                                </CheckboxWrapper>
                            ))}
                        </CheckboxContainer>
                    </>
                )}
            </div>
        </div>
    )
}
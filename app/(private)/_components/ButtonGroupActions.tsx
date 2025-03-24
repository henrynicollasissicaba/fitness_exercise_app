"use client"

import { deleteWorkoutAction } from "@/app/actions/workout-actions";
import { Button } from "@/app/components/ui/Button";
import { User } from "@/app/models/User";
import { showCustomAlert } from "@/lib/sweetalert2";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/Popover"
import { Checkbox } from "@/app/components/ui/Checkbox"
import { useState } from "react";
import { Input } from "@/app/components/ui/Input";
  

interface ButtonGroupActionsProps {
    workoutId: number
    users: User[]
}

export default function ButtonGroupActions({ workoutId, users }: ButtonGroupActionsProps){
    const [selectedUsers, setSelectedUsers] = useState<User[]>([])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])
    const [search, setSearch] = useState("")

    const handleDelete = async (workoutId: number) => {
        const result = await showCustomAlert("Deseja excluir este treino?")

        if(result){
            toast.promise(deleteWorkoutAction(workoutId), {
                loading: "Excluindo treino...",
                success: "Treino excluído com sucesso!"
            })
        }
    }

    const toggleUser = (userId: string) => {
        setSelectedUsers((prev) => 
            prev.some((user) => user.id === userId) // verifica se o usuário ja foi selecionado
                ? prev.filter((user) => user.id !== userId) // se sim, remove da lista
                : [...prev, users.find((user) => user.id === userId)!] // se não, adiciona
            )
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)

        const filteredUser = users.filter((user) => user.fullName.toLowerCase().includes(value.toLowerCase()))
        setFilteredUsers(filteredUser)
    }

    return(
        <div className="flex flex-col w-full md:w-fit md:flex-row gap-2 ml-auto mt-auto pt-5">
            <Button
                onClick={() => handleDelete(workoutId)}
            >
                Excluir treino
            </Button>
            <Popover>
                <PopoverTrigger 
                    className="cursor-pointer border px-4 py-2 rounded-lg"
                >
                    Atribuir treino a um aluno
                </PopoverTrigger>
                <PopoverContent className="w-[22rem] h-[20rem] flex flex-col overflow-y-auto">
                    <Input
                        type="text"
                        id="search"
                        onChange={handleSearch}
                        placeholder="Buscar por nome completo"
                        className="mb-5"
                    />
                    <Button className="mb-5">Atribuir</Button>
                    {search.length > 0 ? (
                        <>
                            {filteredUsers.map((user, index) => (
                                <div 
                                    key={index}
                                    className="inline-flex items-center gap-4"
                                >
                                    <Checkbox
                                        id={`user-${user.username}`}
                                        checked={selectedUsers.some((selectedUser) => selectedUser.id === user.id)}
                                        onCheckedChange={() => toggleUser(user.id)}
                                    />
                                    <label htmlFor={`user-${user.username}`}>
                                        {user.fullName}
                                    </label>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {users.map((user, index) => (
                                <div 
                                    key={index}
                                    className="inline-flex items-center gap-4"
                                >
                                    <Checkbox
                                        id={`user-${user.username}`}
                                        checked={selectedUsers.some((selectedUser) => selectedUser.id === user.id)}
                                        onCheckedChange={() => toggleUser(user.id)}
                                    />
                                    <label htmlFor={`user-${user.username}`}>
                                        {user.fullName}
                                    </label>
                                </div>
                            ))}
                        </>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    )
}
"use client"

import { User } from "@/app/models/User"
import DeleteButton from "./DeleteButton"
import { deleteUserAction } from "../../actions/user-actions"
import { showCustomAlert } from "@/lib/sweetalert2"
import { toast } from "sonner"

interface UsersListProps {
    users: User[]
}

export default function UsersList({ users }: UsersListProps){
    const handleDeleteUser = async (userId: string) => {
        const titleMessage = "Deseja excluir este usuário?"
        const result = await showCustomAlert(titleMessage)

        if(result){
            try {
                toast.promise(deleteUserAction(userId), {
                    loading: "Excluindo usuário...",
                    success: "Usuário excluído com sucesso!"
                })

            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => (
                <div
                    key={index}
                    className="p-4 rounded-lg border shadow-md"
                >
                    <div className="flex flex-col gap-2">
                        <div>
                            <span className="font-bold">Nome completo:</span>
                            <p className="text-zinc-700">{user.fullName}</p>
                        </div>
                        <div>
                            <span className="font-bold">Nome de usuário:</span>
                            <p className="text-zinc-700">{user.username}</p>
                        </div>
                        <div>
                            <span className="font-bold">Aluno criado em:</span>
                            <p className="text-zinc-700">{user.createdAt?.toLocaleDateString("pt-BR")}</p>
                        </div>
                    </div>
                    <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                        Excluir
                    </DeleteButton>
                </div>
            ))}
        </div>
    )
}
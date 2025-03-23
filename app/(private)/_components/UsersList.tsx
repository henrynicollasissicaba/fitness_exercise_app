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
        <div className="flex flex-col gap-4 border p-2 rounded-lg h-[23rem] overflow-y-auto">
            {users.map((user, index) => (
                <div
                    key={index}
                    className="bg-zinc-100 p-2"
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
                    </div>
                    <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                        Excluir
                    </DeleteButton>
                </div>
            ))}
        </div>
    )
}
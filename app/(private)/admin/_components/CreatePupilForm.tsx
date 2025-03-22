"use client"

import { createUser } from "@/app/actions/user";
import FormGroup from "@/app/components/tags/FormGroup";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { useState } from "react";
import { toast } from "sonner";

export default function CreatePupilForm(){
    const [isLoading, setIsLoading] = useState(false)
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setIsLoading(true)

            toast.promise(createUser(fullName, username, password, "pupil"), {
                loading: "Cadastrando aluno...",
                success: "Aluno cadastrado com sucesso!"
            })

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
            setFullName("")
            setUsername("")
            setPassword("")
        }
    }

    return(
        <form onSubmit={handleSubmit} className="form-wrapper">
            <FormGroup className="flex flex-col gap-2">
                <label htmlFor="fullname">Nome completo</label>
                <Input 
                    type="text"
                    placeholder="Digite o nome completo"
                    autoComplete="off"
                    name="fullname"
                    id="fullname"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                />
            </FormGroup>
            <FormGroup className="flex flex-col gap-2">
                <label htmlFor="username">Nome de usuário</label>
                <Input 
                    type="text"
                    placeholder="Digite o nome de usuário"
                    autoComplete="off"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </FormGroup>
            <FormGroup className="flex flex-col gap-2">
                <label htmlFor="password">Senha</label>
                <Input 
                    type="password"
                    placeholder="Digite a senha"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </FormGroup>
            <Button
                type="submit"
                className="mt-5"
                disabled={isLoading}
            >
                Cadastrar aluno
            </Button>
        </form>
    )
}
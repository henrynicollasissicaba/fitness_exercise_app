"use client"

import { createUserAction } from "@/app/actions/user-actions";
import FormGroup from "@/app/components/tags/FormGroup";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { createUserSchema } from "@/app/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type CreateUser = z.infer<typeof createUserSchema>

export default function CreatePupilForm(){
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ 
        resolver: zodResolver(createUserSchema)
    })
    const [isLoading, setIsLoading] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)

    const createPupil = async (data: CreateUser) => {
        try {
            setIsLoading(true)

            const validatedData = createUserSchema.parse({
                fullName: data.fullName,
                username: data.username,
                password: data.password
            })

            const { fullName, username, password } = validatedData

            toast.promise(createUserAction(fullName, username, password, "pupil"), {
                loading: "Cadastrando aluno...",
                success: "Aluno cadastrado com sucesso!"
            })

        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false)
            reset()
        }
    }

    return(
        <form onSubmit={handleSubmit(createPupil)} className="form-wrapper">
            <FormGroup className="flex flex-col gap-2">
                <label htmlFor="fullname">Nome completo</label>
                <Input 
                    type="text"
                    placeholder="Digite o nome completo"
                    id="fullname"
                    {...register("fullName")}
                />
                {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
            </FormGroup>
            <FormGroup className="flex flex-col gap-2">
                <label htmlFor="username">Nome de usuário</label>
                <Input 
                    type="text"
                    placeholder="Digite o nome de usuário"
                    id="username"
                    {...register("username")}
                />
                {errors.username && <span className="text-red-500">{errors.username.message}</span>}
            </FormGroup>
            <FormGroup className="flex flex-col gap-2">
                <label htmlFor="password">Senha</label>
                <Input 
                    type={visiblePassword ? "text" : "password"}
                    placeholder="Digite a senha"
                    id="password"
                    {...register("password")}
                />
                <button
                    type="button"
                    className="text-sm cursor-pointer block ml-auto border-b-2 border-black"
                    onClick={() => setVisiblePassword(!visiblePassword)}
                >
                    {visiblePassword ? "Ocultar senha" : "Mostrar senha"}
                </button>
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
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
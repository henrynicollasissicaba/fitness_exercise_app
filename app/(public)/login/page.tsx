"use client"

import Loading from "@/app/components/Loading"
import { Button } from "@/app/components/ui/Button"
import { Input } from "@/app/components/ui/Input"
import { handleError } from "@/app/utils/errors"
import { useSignIn } from "@clerk/nextjs"
import React, { useState } from "react"
import { toast } from "sonner"

export default function LoginPage(){
    const { isLoaded, signIn, setActive } = useSignIn()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!isLoaded) return

        try {
            setIsLoading(true)

            const signInAttempt = await signIn.create({
                identifier: username, password
            })

            if(signInAttempt.status === "complete"){
                await setActive({
                    session: signInAttempt.createdSessionId
                })
                
            } else {
                toast.error("Credenciais inválidas")
            }

        } catch (err: any) {
            toast.error(handleError(err.errors[0].longMessage))
            // toast.error(err.errors[0].longMessage)

        } finally {
            setIsLoading(false)
        }
    }

    return(
        <section className="w-full min-h-screen flex items-center justify-center">
            <div className="max-w-lg w-full mx-4 border-2 rounded-md p-5 md:p-8">
                <h1 className="text-3xl font-bold text-center mb-10">Área Academia</h1>
                <form 
                    onSubmit={(e) => handleSubmit(e)} 
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username">Nome de usuário</label>
                        <Input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Nome de usuário"
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Senha</label>
                        <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Senha"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <Button 
                        className="mt-5"
                        type="submit"
                    >
                        Entrar
                    </Button>
                </form>
            </div>
            {isLoading && <Loading />}
        </section>
    )
}
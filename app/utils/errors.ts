export const handleError = (error: string) => {
    let message = ""

    switch(error){
        case "Identifier is invalid.":
            message = "Credenciais inválidas"
            break
        case "Enter password.":
            message = "Insira sua senha"
            break
        case "`identifier` is required when `strategy` is `password`.":
            message = "Insira seu nome de usuário"
            break
    }

    return message
}
import { z } from "zod";

export const createUserSchema = z.object({
    fullName: z.string()
        .min(1, "Este campo é obrigatório.")
        .max(100, "Este campo suporta, no máximo, 100 caracteres.")
        .trim(),
    
    username: z.string()
        .min(1, "Este campo é obrigatório.")
        .max(150, "Este campo suporta, no máximo, 150 caracteres.")
        .trim(),

    password: z.string()
        .min(8, "Senha de, no mínimo, 8 caracteres.")
        .max(100, "Este campo é obrigatório.")
        .trim()
})
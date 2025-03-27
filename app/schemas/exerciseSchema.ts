import { z } from "zod"

export const exerciseSchema = z.object({
    exerciseName: z.string()
                .min(1, "O nome do exercício precisa ter pelo menos 1 caractere.")
                .max(255, "O nome do exercício precisa ter menos de 255 caracteres.")
                .trim(),
    exerciseSetsXReps: z.string()
                .min(1, "Este campo deve ter pelo menos 1 caractere.")
                .max(255, "Este campo deve ter menos de 255 caracteres.")
                .trim(),
    exerciseNotes: z.string()
                .max(2000, "As observações não podem exceder 2000 caracteres.")
                .trim()
                .optional()
})
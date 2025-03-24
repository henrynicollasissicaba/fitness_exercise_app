import { z } from "zod";

export const workoutUserSchema = z.object({
    workoutId: z.coerce.number()
        .min(1, "ID do treino é obrigatório.")
})
import {z} from "zod";

export const reasonOfChangeSchema = z.object({
    reason: z.string().refine((reason) => {
        return [
            "remove-co-owner",
            "addCoowner",
            "death-certificate",
            "other-document",
            "vehicle-purchase",
            "vehicle-sell"
        ].includes(reason)
    }, {
        message: "Nieprawidłowy powód zmiany"
    })
})

export type ReasonOfChangeSchema = z.infer<typeof reasonOfChangeSchema>

export const defaultValues: Partial<ReasonOfChangeSchema> = {
    reason: ""
}
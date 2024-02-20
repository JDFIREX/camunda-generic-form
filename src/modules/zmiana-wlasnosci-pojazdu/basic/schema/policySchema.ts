import {z} from "zod";

export const PolicyObject = z.object({
    policy: z.string({
        invalid_type_error: "Niepoprawny typ",
        required_error: "Pole wymagane"
    }).regex(/^K\d{10}$/, "Niepoprawny format")
})

export type PolicySchema = z.infer<typeof PolicyObject>

export const PolicyFormDefaultValues: Partial<PolicySchema> = {
    policy: ""
}
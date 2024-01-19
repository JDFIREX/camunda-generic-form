import {z} from "zod";

export const OwnerPersonObject = z.object({
    name: z.string({
        required_error: "Imię jest wymagane",
        invalid_type_error: "Imię jest wymagane"
    }),
    surname: z.string({
        required_error: "Nazwisko jest wymagane",
        invalid_type_error: "Nazwisko jest wymagane"
    }),
    dateOfBirth: z.string({
        required_error: "Data urodzenia jest wymagana",
        invalid_type_error: "Data urodzenia jest wymagana"
    }),
    email: z.string({
        required_error: "Adres e-mail jest wymagany",
        invalid_type_error: "Adres e-mail jest wymagany"
    }).email(),
    phoneNumber: z.string({
        required_error: "Numer telefonu jest wymagany",
        invalid_type_error: "Numer telefonu jest wymagany"
    }),
    policyNumber: z.string({
        required_error: "Numer polisy jest wymagany",
        invalid_type_error: "Numer polisy jest wymagany"
    }),
})

export type OwnerPersonSchema = z.infer<typeof OwnerPersonObject>

export const defaultOwnerPersonFormValues: Partial<OwnerPersonSchema> = {
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    policyNumber: "",
}
import {z} from "zod";

export const CoownerPeselObject = z.object({
    name: z.string({
        required_error: "Imię jest wymagane",
        invalid_type_error: "Imię jest wymagane"
    }).min(1),
    surname: z.string({
        required_error: "Nazwisko jest wymagane",
        invalid_type_error: "Nazwisko jest wymagane"
    }).min(1),
    pesel: z.string({
        required_error: "PESEL jest wymagany",
        invalid_type_error: "PESEL jest wymagany"
    }).min(1),
    postalCode: z.string({
        required_error: "Kod pocztowy jest wymagany",
        invalid_type_error: "Kod pocztowy jest wymagany"
    }).regex(/^\d{2}-\d{3}$/, {
        message: "Nieprawidłowy format kodu pocztowego"
    }).min(1),
    city: z.string({
        required_error: "Miasto jest wymagane",
        invalid_type_error: "Miasto jest wymagane"
    }).min(1),
    street: z.string({
        required_error: "Ulica jest wymagana",
        invalid_type_error: "Ulica jest wymagana"
    }).min(1),
    houseNumber: z.string({
        required_error: "Numer domu jest wymagany",
        invalid_type_error: "Numer domu jest wymagany"
    }).min(1),
    localNumber: z.string().optional(),
    phoneNumber: z.string().optional(),
});

export type CoownerPeselObjectSchema = z.infer<typeof CoownerPeselObject>

export const defaultCoownerPeselFormValues: Partial<CoownerPeselObjectSchema> = {
    name: "",
    surname: "",
    pesel: "",
    postalCode: "",
    city: "",
    street: "",
    houseNumber: "",
    localNumber: "",
    phoneNumber: "",
}
import {z} from "zod";

export const CoownerRegonObject = z.object({
    companyName: z.string({
        required_error: "Nazwa firmy jest wymagana",
        invalid_type_error: "Nazwa firmy jest wymagana"
    }).min(1),
    regon: z.string({
        required_error: "REGON jest wymagany",
        invalid_type_error: "REGON jest wymagany"
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

export type CoownerRegonObjectSchema = z.infer<typeof CoownerRegonObject>

export const defaultCoownerRegonFormValues: Partial<CoownerRegonObjectSchema> = {
    companyName: "",
    regon: "",
    postalCode: "",
    city: "",
    street: "",
    houseNumber: "",
    localNumber: "",
    phoneNumber: "",
}
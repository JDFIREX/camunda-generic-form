import {z} from "zod";
import {CoownerPeselObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerPeselFormSchema";
import {CoownerRegonObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerRegonFormSchema";
import {CoownerPassportObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerPaszportFormSchema";

export const CoownerObject = z.object({
    type: z.string().refine((type) => {
            return [
                "pesel",
                "regon",
                "passport"
            ].includes(type)
        },
        {
            message: "Nieprawidłowy typ dokumentu"
        }),
    pesel: CoownerPeselObject.optional(),
    regon: CoownerRegonObject.optional(),
    passport: CoownerPassportObject.optional(),
})
export type CoownerSchema = z.infer<typeof CoownerObject>

export const defaultCoownerFormValues: Partial<CoownerSchema> = {
    type: "",
    pesel: undefined,
    regon: undefined,
    passport: undefined
}
import {z} from "zod";
import {CoownerPeselObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerPeselFormSchema";
import {CoownerRegonObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerRegonFormSchema";
import {CoownerPassportObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerPaszportFormSchema";
import {OwnerPersonObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerPersonFormSchema";
import {OwnerCompanyObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerCompanyFormSchema";

export const AddCoownerFormSchema = z.object({
    taskName: z.string(),
    stages: z.array(z.string()),
    stage:  z.string().refine((stage) => {
            return [
                "finish",
                "coowner",
                "owner"
            ].includes(stage)
        },
        {
            message: "Nieprawidłowy stage"
        }),
    pesel: CoownerPeselObject.optional(),
    regon: CoownerRegonObject.optional(),
    passport: CoownerPassportObject.optional(),
    ownerPerson: OwnerPersonObject.optional(),
    ownerCompany: OwnerCompanyObject.optional(),
})
export type AddCoownerSchema = z.infer<typeof AddCoownerFormSchema>

export const defaultAddCoownerFormValues: Partial<AddCoownerSchema> = {
    taskName: "addCoowner",
    stages: ["coowner", "owner", "finish"],
    stage: "coowner",
    pesel: undefined,
    regon: undefined,
    passport: undefined,
    ownerPerson: undefined,
    ownerCompany: undefined,
}
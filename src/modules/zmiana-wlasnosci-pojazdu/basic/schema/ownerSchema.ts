import {z} from "zod";
import {OwnerCompanyObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerCompanyFormSchema";
import {OwnerPersonObject} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerPersonFormSchema";

export const OwnerObject = z.object({
    type: z.string().refine((type) => {
            return [
                "person",
                "company"
            ].includes(type)
        },
        {
            message: "Nieprawidłowy typ dokumentu"
        }),
    person: OwnerPersonObject.optional(),
    company: OwnerCompanyObject.optional(),
})
export type OwnerSchema = z.infer<typeof OwnerObject>

export const defaultOwnerFormValues: Partial<OwnerSchema> = {
    type: "",
    person: undefined,
    company: undefined,
}
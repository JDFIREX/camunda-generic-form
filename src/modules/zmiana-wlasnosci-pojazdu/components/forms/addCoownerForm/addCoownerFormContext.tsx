"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    AddCoownerFormSchema,
    AddCoownerSchema,
    defaultAddCoownerFormValues
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/addCoownerFormSchema";
import CoownerForm from "./coownerForm";
import OwnerForm from "@/src/modules/zmiana-wlasnosci-pojazdu/components/forms/addCoownerForm/ownerForm";
import {CoownerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerSchema";
import {OwnerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerSchema";

const AddCoownerFormContext = () => {
    const form = useForm<AddCoownerSchema>({
        resolver: zodResolver(AddCoownerFormSchema),
        defaultValues: defaultAddCoownerFormValues,
    })

    const onCoownerSubmit = async (data: CoownerSchema) => {
        console.log("AddCoownerFormContext submit",
            form.formState.isValid,
            form.formState.errors,
            form.formState.isSubmitted,
        )
        form.setValue("stage", "owner")
        form.setValue("pesel", data.pesel)
        form.setValue("regon", data.regon)
        form.setValue("passport", data.passport)
        await form.trigger()
    }

    const onOwnerSubmit = async (data: OwnerSchema) => {
        console.log(data)
        form.setValue("ownerPerson", data.person)
        form.setValue("ownerCompany", data.company)
        const response = await fetch("http://localhost:3000/api/form/zmiana-wlasnosci-pojazdu", {
            method: "POST",
            body: JSON.stringify(form.getValues())
        })

        if(response.ok) {
            form.setValue("stage", "finish")
            await form.trigger()
        }
    }

    return (
        <div>
            {form.getValues("stage") === "coowner" && <CoownerForm handleSubmit={onCoownerSubmit} />}
            {form.getValues("stage") === "owner" && <OwnerForm handleSubmit={onOwnerSubmit} />}
            {form.getValues("stage") === "finish" && (
                <div>
                    Formularz został poprawnie wysłany
                </div>
            )}
        </div>
    )
}

export default AddCoownerFormContext
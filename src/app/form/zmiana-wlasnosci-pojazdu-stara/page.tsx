// TODO remove
"use client"

import {useForm} from "react-hook-form";
import {
    defaultValues,
    reasonOfChangeSchema,
    ReasonOfChangeSchema
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/reasonOfChangeSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import ReasonForm from "@/src/modules/zmiana-wlasnosci-pojazdu/components/reasonForm";
import {taskFormDictionary} from "@/src/modules/zmiana-wlasnosci-pojazdu/components/taskFormDictionary";

const Page = () => {
    const form = useForm<ReasonOfChangeSchema>({
        resolver: zodResolver(reasonOfChangeSchema),
        defaultValues,
    })

    const onSubmit = (data: ReasonOfChangeSchema) => {
        console.log(data)
    }

    return (
        <div className="flex flex-col items-center">

            <div>
                {/*// TODO add temat kontaktu - szczeegóły zgłoszenia - dane właściciela pojazdu*/}
            </div>

            <h1 className="mb-10">Zmiana własności</h1>

            {!form.formState.isSubmitted && (
                <ReasonForm form={form} onSubmit={onSubmit} />
            ) }

            {form.formState.isSubmitted && taskFormDictionary[form.getValues("reason")]}
        </div>
    )
}

export default Page
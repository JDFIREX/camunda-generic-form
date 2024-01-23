"use client";

import {
    CamundaFormBaseComponent,
    CamundaFormData,
} from "@/src/camunda/formTypes";
import {getCamundaFormFields} from "@/src/camunda/camundaFormFields";
import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {camundaFormSchema} from "@/src/camunda/schema";
import { Form } from "../components/ui/form";

interface Props {
    data: CamundaFormData
}

const CamundaForm: FC<Props> = (props) => {
    const {data} = props
    const {schema, defaultValues} = camundaFormSchema(data.components)
    const form = useForm<typeof schema>({
        resolver: zodResolver(schema),
        defaultValues
    })

    const onSubmit = (data: typeof schema) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {data.components.map((component: CamundaFormBaseComponent) => (
                    <React.Fragment key={component.id}>
                        {getCamundaFormFields(component.type, component, form)}
                    </React.Fragment>
                ))}
            </form>
        </Form>
    )

}

export default CamundaForm
import {CamundaFormBaseComponent, CamundaFormData,} from "@/src/camunda/camundaFormTypes";
import {getCamundaFormFields} from "@/src/camunda/camundaFormFields";
import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {camundaFormSchema} from "@/src/camunda/schema";
import {Form} from "../components/ui/form";
import {CardFooter} from "@/src/components/ui/card";
import {Button} from "../components/ui/button";
import {Keys} from "@/src/camunda/form";

interface Props {
    data: CamundaFormData
}

const CamundaForm: FC<Props> = (props) => {
    const {data} = props
    const {schema} = camundaFormSchema(data.components)
    const form = useForm()

    const onSubmit = (data: Record<string, unknown>) => {
        const keys: Keys = {}
        Object.keys(data).map((key) => {
            keys[key] = true
        })
        console.log(keys)
        const modifiedSchema = schema.pick(keys)
        console.log("Submit")
        console.log(data)
        const result = modifiedSchema.safeParse(data)
        console.log(result)

        if (!result.success) {
            console.log(result.error.issues)
            result.error.issues.forEach((error) => {
                form.setError(error.path[0] as string, {
                    type: "manual",
                    message: error.message
                })
            })
        } else {
            console.log("Success")
        }

        // TODO after submit map object to nestedObject by groups
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-16 gap-4">
                    {data.components.map((component: CamundaFormBaseComponent) => (
                        <React.Fragment key={component.id}>
                            {getCamundaFormFields(component.type, component)}
                        </React.Fragment>
                    ))}
                </div>
                <CardFooter>
                    <Button type="submit">
                        Submit
                    </Button>
                </CardFooter>
            </form>
        </Form>
    )

}

export default CamundaForm
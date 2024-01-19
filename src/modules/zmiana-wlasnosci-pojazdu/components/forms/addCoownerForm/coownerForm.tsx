"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/src/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {documentTypes} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/constants/forms";
import {useForm} from "react-hook-form";
import {
    CoownerObject,
    CoownerSchema,
    defaultCoownerFormValues
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    coownerFormDictionary
} from "@/src/modules/zmiana-wlasnosci-pojazdu/components/forms/addCoownerForm/coownerFormDictionary";
import {FC} from "react";

interface Props {
    handleSubmit: (data: CoownerSchema) => void
}

const CoownerForm: FC<Props> = (props) => {
    const { handleSubmit } = props

    const form = useForm<CoownerSchema>({
        resolver: zodResolver(CoownerObject),
        defaultValues: defaultCoownerFormValues,
    })

    console.log(form.getValues())

    const onSubmit = (data: CoownerSchema) => {
        console.log(
            "CoownerForm submit",
            form.formState.isValid,
            form.formState.errors,
            form.formState.isSubmitted,
        )
        if(form.formState.isValid) {
            handleSubmit(data)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Podaj Dane współwłaściciela</CardTitle>
            </CardHeader>
            <Form {...form}>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={(e) => {
                                                field.onChange(e)
                                                form.trigger("type")
                                            }}
                                            defaultValue={field.value}
                                            className="flex flex-row space-y-1"
                                        >
                                            {documentTypes.map((documentType) => (
                                                <FormItem key={documentType.id} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value={documentType.id} />
                                                    </FormControl>
                                                    <FormLabel>
                                                        {documentType.name}
                                                    </FormLabel>
                                                </FormItem >
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                    {form.getValues("type") && coownerFormDictionary[form.getValues("type")](form, onSubmit)}
                </CardContent>
            </Form>
        </Card>
    )
}

export default CoownerForm
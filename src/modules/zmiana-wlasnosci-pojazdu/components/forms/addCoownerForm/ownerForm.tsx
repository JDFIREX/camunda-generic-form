"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/src/components/ui/form";
import {RadioGroup, RadioGroupItem} from "@/src/components/ui/radio-group";
import {ownerDataTypes} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/constants/forms";
import {useForm} from "react-hook-form";
import {
    ownerFormDictionary
} from "@/src/modules/zmiana-wlasnosci-pojazdu/components/forms/addCoownerForm/ownerFormDictionary";
import {
    defaultOwnerFormValues,
    OwnerObject,
    OwnerSchema
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {FC} from "react";

interface Props {
    handleSubmit: (data: OwnerSchema) => void
}

const OwnerForm: FC<Props> = (props) => {
    const { handleSubmit } = props
    const ownerForm = useForm<OwnerSchema>({
        resolver: zodResolver(OwnerObject),
        defaultValues: defaultOwnerFormValues,
    })

    const onSubmit = (data: OwnerSchema) => {
        console.log(
            "OwnerForm submit",
            ownerForm.formState.isValid,
            ownerForm.formState.errors,
            ownerForm.formState.isSubmitted,
        )
        if(ownerForm.formState.isValid) {
            handleSubmit(data)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Twoje dane</CardTitle>
            </CardHeader>
            <Form {...ownerForm}>
                <CardContent>
                    <form onSubmit={ownerForm.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={ownerForm.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-row space-y-1"
                                        >
                                            {ownerDataTypes.map((ownerData) => (
                                                <FormItem key={ownerData.id} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value={ownerData.id} />
                                                    </FormControl>
                                                    <FormLabel>
                                                        {ownerData.name}
                                                    </FormLabel>
                                                </FormItem >
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                    {ownerForm.getValues("type") && ownerFormDictionary[ownerForm.getValues("type")](ownerForm, handleSubmit)}
                </CardContent>
            </Form>
        </Card>
    )
}

export default OwnerForm
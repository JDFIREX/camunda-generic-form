"use client"

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {useForm, UseFormReturn} from "react-hook-form";
import {CoownerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerSchema";
import {FC} from "react";
import {Button} from "@/src/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    CoownerRegonObject,
    CoownerRegonObjectSchema,
    defaultCoownerRegonFormValues
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerRegonFormSchema";

interface Props {
    form: UseFormReturn<CoownerSchema>
    handleSubmit: (data: CoownerSchema) => void
}

const CoownerRegonForm: FC<Props> = (props) => {
    const { form, handleSubmit } = props
    const regonForm = useForm<CoownerRegonObjectSchema>({
        resolver: zodResolver(CoownerRegonObject),
        defaultValues: defaultCoownerRegonFormValues,
    })

    const onSubmit = async (data: CoownerRegonObjectSchema) => {
        await regonForm.trigger();
        console.log("CoownerRegonForm submit",
            regonForm.formState.isValid,
            regonForm.formState.errors,
            regonForm.formState.isSubmitted,
        )
        if(!regonForm.formState.isValid) {
            return
        }

        form.setValue("regon", data)
        await form.trigger()
        handleSubmit(form.getValues())
    }

    return (
        <Form {...regonForm}>
            <form onSubmit={regonForm.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={regonForm.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nazwa firmy</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Nazwa firmy"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={regonForm.control}
                    name="regon"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Regon</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Regon"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={regonForm.control}
                    name="postalCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kod pocztowy</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Kod pocztowy"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={regonForm.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Miejscowość</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Miejscowość"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={regonForm.control}
                    name="street"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ulica</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Ulica"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={regonForm.control}
                    name="houseNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nr domu</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Nr domu"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={regonForm.control}
                    name="localNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nr lokalu</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Nr lokalu"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={regonForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Numer Telefonu</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Numer Telefonu"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Button variant="default" className="btn btn-primary">Przejdź dalej</Button>
                </div>
            </form>
        </Form>
    )
}

export default CoownerRegonForm
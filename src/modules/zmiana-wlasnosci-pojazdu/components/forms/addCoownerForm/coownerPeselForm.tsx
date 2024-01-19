"use client"

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {useForm, UseFormReturn} from "react-hook-form";
import {CoownerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerSchema";
import {FC} from "react";
import {Button} from "@/src/components/ui/button";
import {
    defaultCoownerPeselFormValues, CoownerPeselObject,
    CoownerPeselObjectSchema
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerPeselFormSchema";
import {zodResolver} from "@hookform/resolvers/zod";

interface Props {
    form: UseFormReturn<CoownerSchema>
    handleSubmit: (data: CoownerSchema) => void
}

const CoownerPeselForm: FC<Props> = (props) => {
    const { form, handleSubmit } = props
    const peselForm = useForm<CoownerPeselObjectSchema>({
        resolver: zodResolver(CoownerPeselObject),
        defaultValues: defaultCoownerPeselFormValues,
    })

    const onSubmit = async (data: CoownerPeselObjectSchema) => {
        await peselForm.trigger();
        console.log("CoownerPeselForm submit",
            peselForm.formState.isValid,
            peselForm.formState.errors,
            peselForm.formState.isSubmitted,
        )
        if(!peselForm.formState.isValid) {
            return
        }

        form.setValue("pesel", data)
        await form.trigger()
        handleSubmit(form.getValues())
    }

    return (
        <Form {...peselForm}>
            <form onSubmit={peselForm.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={peselForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Imię</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Imię"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={peselForm.control}
                    name="surname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nazwisko</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Nazwisko"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={peselForm.control}
                    name="pesel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pesel</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Pesel"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={peselForm.control}
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
                    control={peselForm.control}
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
                    control={peselForm.control}
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
                    control={peselForm.control}
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
                    control={peselForm.control}
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
                    control={peselForm.control}
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

export default CoownerPeselForm
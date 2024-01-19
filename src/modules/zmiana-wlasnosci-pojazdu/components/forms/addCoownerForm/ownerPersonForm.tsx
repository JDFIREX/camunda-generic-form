"use client"

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {useForm, UseFormReturn} from "react-hook-form";
import {FC} from "react";
import {Button} from "@/src/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    defaultOwnerPersonFormValues, OwnerPersonObject,
    OwnerPersonSchema
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerPersonFormSchema";
import {OwnerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerSchema";

interface Props {
    form: UseFormReturn<OwnerSchema>
    handleSubmit: (data: OwnerSchema) => void
}

const OwnerPersonForm: FC<Props> = (props) => {
    const { form, handleSubmit } = props
    const ownerPerson = useForm<OwnerPersonSchema>({
        resolver: zodResolver(OwnerPersonObject),
        defaultValues: defaultOwnerPersonFormValues
    })

    const onSubmit = async (data: OwnerPersonSchema) => {
        await ownerPerson.trigger();
        console.log("OwnerPersonForm submit",
            ownerPerson.formState.isValid,
            ownerPerson.formState.errors,
            ownerPerson.formState.isSubmitted,
        )

        if(!ownerPerson.formState.isValid) {
            return
        }

        form.setValue("person", data)
        await form.trigger()
        handleSubmit(form.getValues())
    }

    return (
        <Form {...ownerPerson}>
            <form onSubmit={ownerPerson.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={ownerPerson.control}
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
                    control={ownerPerson.control}
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
                    control={ownerPerson.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Data urodzenia</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Data urodzenia"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={ownerPerson.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Adres e-mail</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Adres e-mail"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={ownerPerson.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Numer telefonu</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Numer telefonu"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={ownerPerson.control}
                    name="policyNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Numer polisy/oferty</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Numer polisy/oferty"
                                    className="w-full"
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Button variant="default" className="btn btn-primary">Wyślij zgłoszenie</Button>
                </div>
            </form>
        </Form>
    )
}

export default OwnerPersonForm
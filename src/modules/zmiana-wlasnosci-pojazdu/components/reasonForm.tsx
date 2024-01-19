"use client"

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/src/components/ui/form";
import {RadioGroup, RadioGroupItem} from "@/src/components/ui/radio-group";
import {reasons} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/constants/forms";
import {Button} from "@/src/components/ui/button";
import {UseFormReturn} from "react-hook-form";
import {FC} from "react";
import {ReasonOfChangeSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/reasonOfChangeSchema";

interface Props {
    form: UseFormReturn<ReasonOfChangeSchema>
    onSubmit: (data: ReasonOfChangeSchema) => void
}

const ReasonForm: FC<Props> = (props) => {
    const { form, onSubmit } = props

    return (
        <Card>
            <CardHeader>
                <CardTitle>Wybierz powód zmiany własności</CardTitle>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="reason"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            {reasons.map((reason, index) => (
                                                <FormItem key={reason.id} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value={reason.id} />
                                                    </FormControl>
                                                    <FormLabel>
                                                        {reason.name}
                                                    </FormLabel>
                                                </FormItem >
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <div className="flex justify-end">
                            <Button type="submit" variant="default" className="btn btn-primary">Przejdź dalej</Button>
                        </div>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}

export default ReasonForm
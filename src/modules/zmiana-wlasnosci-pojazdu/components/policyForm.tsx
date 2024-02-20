import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import {Input} from "@/src/components/ui/input";
import {useForm} from "react-hook-form";
import {
    PolicyFormDefaultValues,
    PolicyObject,
    PolicySchema
} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/policySchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/src/components/ui/button";
import {submitPolicyForm} from "@/src/app/form/zmiana-wlasnosci-pojazdu/actions";

const PolicyForm = () => {
    const form = useForm<PolicySchema>({
        resolver: zodResolver(PolicyObject),
        defaultValues: PolicyFormDefaultValues
    })

    const handleSubmit = (data: PolicySchema) => {
        const formData = new FormData()
        formData.append('policy', data.policy)
        submitPolicyForm(formData)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="policy"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Imię</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Numer polisy link4"
                                    className="w-full"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    )
}

export default PolicyForm
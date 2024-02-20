import {useFormContext} from "react-hook-form";
import {CamundaFormRadioComponent} from "@/src/camunda/camundaFormTypes";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import {Input} from "@/src/components/ui/input";
import {isValidExpression} from "@/src/camunda/feelValidate";
import {FC, useEffect} from "react";
import {Key} from "@/src/camunda/form";

interface Props {
    data: CamundaFormRadioComponent
}

const CamundaTextfield: FC<Props> = (props: Props) => {
    const {data} = props
    const form = useFormContext();
    const isHiden = isValidExpression(form.getValues(), data.conditional?.hide, data.properties)

    useEffect(() => {
        if (isHiden) {
            form.unregister(data.key as Key)
        }
    }, [isHiden]);

    if (isHiden) {
        return null
    }

    return (
        <FormField
            control={form.control}
            name={data.key as Key}
            render={({field}) => (
                <FormItem className={data.layout?.columns ? `col-span-${data.layout?.columns}` : "col-span-16"}>
                    <FormLabel>{data.label}</FormLabel>
                    <FormControl>
                        <Input defaultValue={data.defaultValue || ""} {...field} />
                    </FormControl>
                    {data.description && (
                        <FormDescription>{data.description}</FormDescription>
                    )}
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default CamundaTextfield
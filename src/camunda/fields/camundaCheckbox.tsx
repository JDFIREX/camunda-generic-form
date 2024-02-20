import {useFormContext} from "react-hook-form";
import {CamundaFormCheckboxComponent} from "@/src/camunda/camundaFormTypes";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import {Checkbox} from "@/src/components/ui/checkbox";
import {isValidExpression} from "@/src/camunda/feelValidate";
import {FC, useEffect} from "react";
import {Key, KeyValue} from "@/src/camunda/form";


interface Props {
    data: CamundaFormCheckboxComponent
}

const CamundaCheckbox: FC<Props> = (props: Props) => {
    const {data} = props
    const form = useFormContext();
    const isHiden = isValidExpression(form.getValues(), data.conditional?.hide, data.properties)

    useEffect(() => {
        if (isHiden) {
            form.unregister(data.key as Key)
        }
    }, [form]);

    if (isHiden) {
        return null
    }

    return (
        <FormField
            control={form.control}
            defaultValue={data.defaultValue as KeyValue}
            name={data.key as Key}
            render={({field}) => (
                <FormItem key={data.id} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox
                            id={data.id}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <FormLabel>
                        {data.label}
                    </FormLabel>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}

export default CamundaCheckbox
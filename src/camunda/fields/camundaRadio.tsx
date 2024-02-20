"use client";

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import {CamundaFormRadioComponent} from "@/src/camunda/camundaFormTypes";
import {RadioGroup, RadioGroupItem} from "@/src/components/ui/radio-group";
import {useFormContext} from "react-hook-form";
import {isValidExpression} from "@/src/camunda/feelValidate";
import {FC, useEffect} from "react";
import {Key, KeyValue} from "@/src/camunda/form";

interface Props {
    data: CamundaFormRadioComponent
}

const CamundaRadio: FC<Props> = (props: Props) => {
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
            defaultValue={data.defaultValue as KeyValue}
            name={data.key as Key}
            render={({field}) => (
                <RadioGroup
                    onValueChange={async (value) => {
                        field.onChange(value)
                        await form.trigger(data.key as Key)
                    }}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                >
                    {data.values?.map((value, index) => (
                        <FormItem key={value.value} className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value={value.value}/>
                            </FormControl>
                            <FormLabel>
                                {value.label}
                            </FormLabel>
                            <FormMessage/>
                        </FormItem>
                    )) || null}
                </RadioGroup>
            )}
        />
    )
}

export default CamundaRadio
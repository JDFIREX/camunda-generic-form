"use client";

import {FormControl, FormField, FormItem, FormLabel} from "@/src/components/ui/form";
import {CamundaFormRadioComponent} from "@/src/camunda/formTypes";
import {RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {FieldValues, Path, UseFormReturn} from "react-hook-form";

interface Props<T extends FieldValues> {
    data: CamundaFormRadioComponent
    form: UseFormReturn<T>
}

const CamundaRadio = <T extends FieldValues = FieldValues>(props: Props<T>) => {
    const { data, form } = props

    return (
        <FormField
            control={form.control}
            name={data.key as Path<T>}
            render={({ field }) => (
                <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                >
                    {data.values?.map((value, index) => (
                        <FormItem key={value.value} className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value={value.value} />
                            </FormControl>
                            <FormLabel>
                                {value.label}
                            </FormLabel>
                        </FormItem >
                    )) || null }
                </RadioGroup>
            )}
        />
    )
}

export default CamundaRadio
import React, {FC, useEffect} from "react";
import {useFormContext} from "react-hook-form";
import {
    CamundaFormBaseComponent,
    CamundaFormComponent,
    CamundaFormGroupComponent
} from "@/src/camunda/camundaFormTypes";
import {getCamundaFormFields} from "@/src/camunda/camundaFormFields";
import {isValidExpression} from "@/src/camunda/feelValidate";
import {Key} from "@/src/camunda/form";

interface Props {
    data: CamundaFormGroupComponent
}

const CamundaGroup: FC<Props> = (props: Props) => {
    const {data} = props
    const form = useFormContext();
    const isHiden = isValidExpression(form.getValues(), data.conditional?.hide, data.properties)

    const unregisterField = (components: CamundaFormComponent[]) => {
        components.forEach((component: CamundaFormComponent) => {
            if (component.type === "group") {
                const groupComponent = component as unknown as CamundaFormGroupComponent
                unregisterField(groupComponent.components as CamundaFormComponent[])
            } else {
                if ("key" in component) {
                    form.unregister(component.key as Key)
                }
            }
        })
    }

    useEffect(() => {
        if (isHiden) {
            unregisterField(data.components as CamundaFormComponent[])
        }
    }, [isHiden]);

    if (isHiden) {
        return null
    }

    return (
        <div className="border-2">
            <div className="grid grid-cols-16 gap-4">
                {data.components.map((component: CamundaFormBaseComponent) => (
                    <React.Fragment key={component.id}>
                        {getCamundaFormFields(component.type, component)}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default CamundaGroup
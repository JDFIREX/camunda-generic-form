import React from "react";
import {
    CamundaFormBaseComponent,
    CamundaFormComponentsType,
    CamundaFormPresentationComponentsType,
    CamundaFormRadioComponent,
} from "@/src/camunda/formTypes";
import CamundaRadio from "@/src/camunda/fields/camundaRadio";
import {UseFormReturn, FieldValues} from "react-hook-form";

interface Dictionary<T extends FieldValues> {
    [key: string]: (data: CamundaFormBaseComponent, form: UseFormReturn<T>) => React.ReactNode;
}

export const getCamundaFormFields = <T extends FieldValues = FieldValues>(
    type: CamundaFormComponentsType | CamundaFormPresentationComponentsType,
    data: CamundaFormBaseComponent,
    form: UseFormReturn<T>
): React.ReactNode => {
    const fields: Dictionary<T> = {
        "radio": (data, form) => <CamundaRadio<T> data={data as CamundaFormRadioComponent} form={form} />,
        "text": (data) =>  <></>, //<CamundaText data={data as CamundaFormTextComponent} />,
        "select": (data) =>  <></>, //<CamundaSelect data={data as CamundaFormSelectComponent} />,
        "number": (data) => <></>, //<CamundaNumber data={data as CamundaFormNumberComponent} />,
        "textfield": (data) => <></>, //<CamundaTextfield data={data as CamundaFormTextFieldComponent} />,
        "checklist": (data) => <></>, //<CamundaChecklist data={data as CamundaFormChecklistComponent} />,
    }

    return fields[type](data,form) || null;
};
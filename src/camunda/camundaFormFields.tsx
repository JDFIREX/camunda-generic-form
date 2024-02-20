import React from "react";
import {
    CamundaFormBaseComponent,
    CamundaFormCheckboxComponent,
    CamundaFormComponentsType,
    CamundaFormGroupComponent,
    CamundaFormPresentationComponentsType,
    CamundaFormRadioComponent,
    CamundaFormTextComponent,
    CamundaFormTextFieldComponent,
} from "@/src/camunda/camundaFormTypes";
import CamundaRadio from "@/src/camunda/fields/camundaRadio";
import Markdown from "react-markdown";
import CamundaTextfield from "@/src/camunda/fields/camundaTextfield";
import CamundaGroup from "@/src/camunda/fields/camundaGroup";
import CamundaCheckbox from "@/src/camunda/fields/camundaCheckbox";

interface Dictionary {
    [key: string]: (data: CamundaFormBaseComponent) => React.ReactNode;
}

export const getCamundaFormFields = (
    type: CamundaFormComponentsType | CamundaFormPresentationComponentsType,
    data: CamundaFormBaseComponent
): React.ReactNode => {
    const fields: Dictionary = {
        "radio": (data) => <CamundaRadio data={data as CamundaFormRadioComponent}/>,
        "text": (data) => <Markdown>{(data as CamundaFormTextComponent).text}</Markdown>, //<CamundaText data={data as CamundaFormTextComponent} />,
        "select": (data) => <></>, //<CamundaSelect data={data as CamundaFormSelectComponent} />,
        "number": (data) => <></>, //<CamundaNumber data={data as CamundaFormNumberComponent} />,
        "textfield": (data) => <CamundaTextfield data={data as CamundaFormTextFieldComponent}/>,
        "checklist": (data) => <></>, //<CamundaChecklist data={data as CamundaFormChecklistComponent} />,
        "checkbox": (data) => <CamundaCheckbox data={data as CamundaFormCheckboxComponent}/>,
        "group": (data) => <CamundaGroup data={data as CamundaFormGroupComponent}/>,
    }

    return fields[type](data) || null;
};
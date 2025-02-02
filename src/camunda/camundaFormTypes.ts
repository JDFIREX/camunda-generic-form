export interface CamundaFormData {
    executionPlatform: string;
    executionPlatformVersion: string;
    exporter: {
        name: string;
        version: string;
    };
    schemaVersion: number;
    id: string;
    components: CamundaFormDataComponents;
    type: string;
}

export type CamundaFormDataComponents = Array<CamundaFormSingleComponentData>
    | Array<CamundaFormPresentationComponent>
    | Array<CamundaFormComponent>
    | Array<CamundaFormBaseComponent>;

export type CamundaFormSingleComponentData =
    | CamundaFormSelectComponent
    | CamundaFormNumberComponent
    | CamundaFormTextFieldComponent
    | CamundaFormChecklistComponent
    | CamundaFormRadioComponent
    | CamundaFormTextComponent
    | CamundaFormCheckboxComponent
    | CamundaFormGroupComponent;

export const ComponentsType = [
    "textfield",
    "number",
    "select",
    "checklist",
    "radio",
    "group",
    "checkbox",
]

export type CamundaFormComponentsType = (typeof ComponentsType)[number]

export const GROUP_COMPONENT_TYPE = "group"

export const PresentationComponentsType = [
    "text",
]

export type CamundaFormPresentationComponentsType = (typeof PresentationComponentsType)[number]

export type CamundaFormValidationType = "email" | "phone"

export type CamundaGroupVerticalAlignment = "start" | "center" | "end"

export interface CamundaFormValue {
    label: string;
    value: string;
}

export interface CamundaFromLayout {
    row: string;
    columns: number | null;
}

export interface CamundaFormConditional {
    hide: string;
}

export interface CamundaFormAppearance {
    prefixAdorner: string;
    suffixAdorner: string;
}

export interface CamundaFormValidation {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    validationType?: CamundaFormValidationType
}

export type CamundaFormProperties = Record<string, string>

export interface CamundaFormBaseComponent {
    id: string
    type: CamundaFormComponentsType | CamundaFormPresentationComponentsType
}

export interface CamundaFormPresentationComponent extends CamundaFormBaseComponent {}

export interface CamundaFormComponent extends CamundaFormBaseComponent {
    key: string
}

export interface CamundaFormSelectComponent extends CamundaFormComponent {
    values?: CamundaFormValue[];
    label?: string;
    layout?: CamundaFromLayout;
    readonly?: boolean;
    searchable?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    description?: string;
    conditional?: CamundaFormConditional;
    validate?: CamundaFormValidation
    properties?: CamundaFormProperties;
    valuesKey?: string,
    valuesExpression?: string,
}

export interface CamundaFormNumberComponent extends CamundaFormComponent {
    label?: string;
    layout?: CamundaFromLayout;
    description?: string;
    defaultValue?: string;
    decimalDigits?: number;
    increment?: string;
    disabled?: boolean;
    readonly?: boolean;
    conditional?: CamundaFormConditional;
    appearance?: CamundaFormAppearance
    validate?: CamundaFormValidation
    properties?: CamundaFormProperties;
    serializeToString?: boolean;
}

export interface CamundaFormTextFieldComponent extends CamundaFormComponent {
    label?: string;
    layout?: CamundaFromLayout;
    description?: string;
    defaultValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    conditional?: CamundaFormConditional;
    appearance?: CamundaFormAppearance
    validate?: CamundaFormValidation
    properties?: CamundaFormProperties;
}

export interface CamundaFormChecklistComponent extends CamundaFormComponent {
    values?: CamundaFormValue[];
    label?: string;
    layout?: CamundaFromLayout;
    validate?: CamundaFormValidation;
    disabled?: boolean;
    readonly?: boolean;
    description?: string;
    conditional?: CamundaFormConditional;
    properties?: CamundaFormProperties;
}

export interface CamundaFormRadioComponent extends CamundaFormComponent {
    values?: CamundaFormValue[];
    label?: string;
    layout?: CamundaFromLayout;
    disabled?: boolean;
    readonly?: boolean;
    conditional?: CamundaFormConditional;
    validate?: CamundaFormValidation;
    properties?: CamundaFormProperties;
    description?: string;
    defaultValue?: string;
    valuesKey?: string,
    valuesExpression?: string,
}

export interface CamundaFormTextComponent extends CamundaFormPresentationComponent {
    text: string;
    label?: string;
    layout?: CamundaFromLayout;
    conditional?: CamundaFormConditional;
    properties?: CamundaFormProperties;
}

export interface CamundaFormGroupComponent extends CamundaFormBaseComponent {
    components: CamundaFormDataComponents;
    label?: string;
    showOutline?: boolean;
    layout?: CamundaFromLayout;
    conditional?: CamundaFormConditional;
    properties?: CamundaFormProperties;
    verticalAlignment?: CamundaGroupVerticalAlignment;
    path?: string;
}

export interface CamundaFormCheckboxComponent extends CamundaFormComponent {
    label?: string;
    layout?: CamundaFromLayout;
    readonly?: boolean;
    defaultValue?: boolean;
    disabled?: boolean;
    description?: string;
    conditional?: CamundaFormConditional;
    validate?: CamundaFormValidation;
    properties?: CamundaFormProperties;
}
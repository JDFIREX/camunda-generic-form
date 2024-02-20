import {
    CamundaFormBaseComponent,
    CamundaFormCheckboxComponent,
    CamundaFormChecklistComponent,
    CamundaFormComponent,
    CamundaFormComponentsType,
    CamundaFormGroupComponent,
    CamundaFormNumberComponent,
    CamundaFormRadioComponent,
    CamundaFormSelectComponent,
    CamundaFormTextFieldComponent,
    ComponentsType,
    GROUP_COMPONENT_TYPE
} from "@/src/camunda/camundaFormTypes";
import {z, ZodBoolean, ZodRawShape, ZodString, ZodTypeAny} from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const baseZodParamters: Record<CamundaFormComponentsType, (data: CamundaFormComponent) => ZodTypeAny> = {
    "radio": (data: CamundaFormRadioComponent) => {
        let zod: ZodTypeAny = z.string()
        return zod
    },
    "textfield": (data: CamundaFormTextFieldComponent) => {
        let zod = z.string()

        if (data?.validate?.required) {
            zod = z.string({
                required_error: "This field is required"
            })
        }
        if (data?.validate?.validationType === "email") {
            zod = zod.email({
                message: "This field must be an email"
            })
        }
        if (data?.validate?.validationType === "phone") {
            zod = zod.regex(phoneRegex, {
                message: "This field must be a phone number"
            })
        }
        if (data?.validate?.minLength) {
            zod = zod.min(data.validate.minLength)
        }
        if (data?.validate?.maxLength) {
            zod = zod.max(data.validate.maxLength)
        }
        if (data?.validate?.pattern) {
            zod = zod.regex(new RegExp(data.validate.pattern))
        }

        if (!data?.validate?.required) {
            zod = zod.optional() as unknown as ZodString
        }

        return zod as ZodTypeAny
    },
    "number": (data: CamundaFormNumberComponent) => {
        let zod = z.number()

        if (data?.validate?.required) {
            zod = z.number({
                required_error: "This field is required"
            })
        }
        if (data?.validate?.min) {
            zod = zod.min(data.validate.min)
        }
        if (data?.validate?.max) {
            zod = zod.max(data.validate.max)
        }

        return zod
    },
    "select": (data: CamundaFormSelectComponent) => {
        let zod = z.string()

        if (data?.validate?.required) {
            zod = z.string({
                required_error: "This field is required"
            })
        }

        return zod
    },
    "checklist": (data: CamundaFormChecklistComponent) => {
        let zod = z.array(z.string())

        return zod
    },
    "checkbox": (data: CamundaFormCheckboxComponent) => {
        let zod = z.boolean()

        if (data?.validate?.required) {
            zod = z.boolean({
                required_error: "This field is required"
            })
        } else {
            zod = zod.optional() as unknown as ZodBoolean
        }

        return zod
    }
}

const initSchema = (formData: CamundaFormBaseComponent[], schemaObject: ZodRawShape) => {
    let newObject: ZodRawShape = {...schemaObject}

    for (let item of formData) {
        if (item.type === GROUP_COMPONENT_TYPE) {
            const groupItem = item as unknown as CamundaFormGroupComponent
            const groupComponents = groupItem.components
            const {object} = initSchema(groupComponents, newObject)
            newObject = object
            continue;
        }

        if (!("key" in item) || !item.key || !ComponentsType.includes(item.type)) continue;
        const component = item as CamundaFormComponent
        newObject[component.key] = baseZodParamters[item.type](component)
    }

    return {
        object: newObject
    }
}

export const camundaFormSchema = (data: CamundaFormBaseComponent[]) => {
    const {object} = initSchema(data, {})

    return {
        schema: z.object(object)
    }
}

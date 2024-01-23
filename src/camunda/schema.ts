import {
    CamundaFormBaseComponent,
    CamundaFormChecklistComponent, CamundaFormComponent,
    CamundaFormComponentsType,
    CamundaFormNumberComponent,
    CamundaFormRadioComponent,
    CamundaFormSelectComponent,
    CamundaFormSingleComponentData,
    CamundaFormTextFieldComponent,
    ComponentsType
} from "@/src/camunda/formTypes";
import {z, ZodTypeAny, ZodRawShape} from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const baseZodParamters: Record<CamundaFormComponentsType, (data: CamundaFormComponent) => ZodTypeAny> = {
    "radio": (data: CamundaFormRadioComponent) => {
        let zod = z.string()
        return zod
    },
    "textfield": (data: CamundaFormTextFieldComponent) => {
        let zod = z.string()

        if(data?.validate?.required) {
            zod = z.string({
                required_error: "This field is required"
            })
        }
        if(data?.validate?.validationType === "email") {
            zod = zod.email({
                message: "This field must be an email"
            })
        }
        if(data?.validate?.validationType === "phone") {
            zod = zod.regex(phoneRegex, {
                message: "This field must be a phone number"
            })
        }
        if(data?.validate?.minLength) {
            zod = zod.min(data.validate.minLength)
        }
        if(data?.validate?.maxLength) {
            zod = zod.max(data.validate.maxLength)
        }
        if(data?.validate?.pattern) {
            zod = zod.regex(new RegExp(data.validate.pattern))
        }

        return zod
    },
    "number": (data: CamundaFormNumberComponent) => {
        let zod = z.number()

        if(data?.validate?.required) {
            zod = z.number({
                required_error: "This field is required"
            })
        }
        if(data?.validate?.min) {
            zod = zod.min(data.validate.min)
        }
        if(data?.validate?.max) {
            zod = zod.max(data.validate.max)
        }

        return zod
    },
    "select": (data: CamundaFormSelectComponent) => {
        let zod = z.string()

        if(data?.validate?.required) {
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
}

export const camundaFormSchema = (data: CamundaFormBaseComponent[]) => {
    const object: ZodRawShape = {}
    const defaultValues: Record<string, any> = {}

    data.forEach((item) => {
        if(!("key" in item) || !item.key || !ComponentsType.includes(item.type)) return
        const component = item as CamundaFormComponent
        object[component.key] = baseZodParamters[item.type](component)
        defaultValues[component.key] = "defaultValue" in item ? item.defaultValue : undefined
    })

    return {
        schema: z.object(object),
        defaultValues
    }
}

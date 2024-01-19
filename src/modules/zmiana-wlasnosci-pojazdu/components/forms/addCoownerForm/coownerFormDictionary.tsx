import React from "react";
import CoownerPeselForm from "@/src/modules/zmiana-wlasnosci-pojazdu/components/forms/addCoownerForm/coownerPeselForm";
import {UseFormReturn} from "react-hook-form";
import {CoownerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/coownerSchema";
import CoownerRegonForm from "@/src/modules/zmiana-wlasnosci-pojazdu/components/forms/addCoownerForm/coownerRegonForm";

interface Dictionary {
    [key: string]: (form: UseFormReturn<CoownerSchema>, handleSubmit: (data:CoownerSchema) => void) => React.ReactNode;
}

export const coownerFormDictionary: Dictionary = {
    "pesel": (form, handleSubmit) => <CoownerPeselForm form={form} handleSubmit={handleSubmit}/>,
    "regon": (form, handleSubmit) => <CoownerRegonForm form={form} handleSubmit={handleSubmit}/>,
    "passport": (form) => null,
}
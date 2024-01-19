"use client"

import {UseFormReturn} from "react-hook-form";
import React from "react";
import OwnerPersonForm from "@/src/modules/zmiana-wlasnosci-pojazdu/components/forms/addCoownerForm/ownerPersonForm";
import {OwnerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerSchema";

interface Dictionary {
    [key: string]: (form: UseFormReturn<OwnerSchema>, handleSubmit: (data: OwnerSchema) => void) => React.ReactNode;
}

export const ownerFormDictionary: Dictionary = {
    "person": (form, handleSubmit) => <OwnerPersonForm form={form} handleSubmit={handleSubmit}/>,
    "company": (form) => null,
}